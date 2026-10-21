(function (global) {
'use strict';
/* Tension: the pieces that make surfaces hold on to each other.
   Dependency-free, lifted from the SIX OS prototype. A plain script (works from file://):
     <script src="tension.js"></script>  →  const { tether, budNeck, typeOut } = window.Tension;
   With a bundler: require('./tension.js') returns the same object.

   Rules it follows (see SKILL.md): a neck only joins things that belong together; it thins with
   distance and snaps at the snap distance (the commit); content never stretches; a release settles
   with one recoil under 4 %; under Reduce motion necks are not drawn and snaps are instant. */

const TENSION = { snap: 150, snapSm: 100, neckMax: 0.7, neckMin: 8, falloff: 0.8 };

// Reduce motion (the OS setting, or data-motion="reduced" on <html>; data-motion="full" overrides)
const rm = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
const calm = () => document.documentElement.dataset.motion === 'reduced' || (rm.matches && document.documentElement.dataset.motion !== 'full');

/* ── Springs ──────────────────────────────────────────────────────────── */
// A CSS linear() easing for a spring with damping ratio z: 0.86 precise, 0.72 recoil, 0.68 detent,
// 0.64 membrane. Falls back to a cubic-bezier where linear() isn't supported.
function springEase(z = 0.72, n = 44) {
  if (typeof CSS === 'undefined' || !CSS.supports('transition-timing-function', 'linear(0, 1)')) return 'cubic-bezier(0.34, 1.2, 0.64, 1)';
  const w = 2 * Math.PI, wd = w * Math.sqrt(1 - z * z), pts = [];
  for (let i = 0; i <= n; i++) { const t = i / n * 1.7; pts.push((1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + z * w / wd * Math.sin(wd * t))).toFixed(3)); }
  pts[n] = '1'; return `linear(${pts.join(', ')})`;
}
const EASE = { precise: springEase(0.86), recoil: springEase(0.72), detent: springEase(0.68), membrane: springEase(0.64), out: 'cubic-bezier(0.16, 1, 0.3, 1)', in: 'cubic-bezier(0.55, 0, 0.75, 0.2)' };

// Animate one number on the recoil spring (one overshoot under 4 %). onStep(value) each frame.
function springTo(from, to, ms, onStep, onDone, z = 0.72) {
  const w = 2 * Math.PI * 1.7 / (ms / 1000), wd = w * Math.sqrt(1 - z * z), t0 = performance.now();
  const step = now => {
    const t = (now - t0) / 1000, e = Math.exp(-z * w * t) * (Math.cos(wd * t) + z * w / wd * Math.sin(wd * t));
    if (t * 1000 >= ms || calm()) { onStep(to); onDone && onDone(); return; }
    onStep(to + (from - to) * e); requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ── Geometry ─────────────────────────────────────────────────────────── */
// A tube along a polyline with a half-width per point and round ends, as one closed SVG path.
function tubeD(pts, hw) {
  const n = pts.length, L = [], R = [];
  for (let i = 0; i < n; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(n - 1, i + 1)];
    let tx = b[0] - a[0], ty = b[1] - a[1]; const l = Math.hypot(tx, ty) || 1; tx /= l; ty /= l;
    const h = Math.max(0, hw[i]);
    L.push([pts[i][0] - ty * h, pts[i][1] + tx * h]); R.push([pts[i][0] + ty * h, pts[i][1] - tx * h]);
  }
  const f = v => v.toFixed(1), h0 = Math.max(0.01, hw[0]), h1 = Math.max(0.01, hw[n - 1]);
  let d = `M${f(L[0][0])},${f(L[0][1])}`;
  for (let i = 1; i < n; i++) d += `L${f(L[i][0])},${f(L[i][1])}`;
  d += `A${f(h1)},${f(h1)} 0 0 0 ${f(R[n - 1][0])},${f(R[n - 1][1])}`;
  for (let i = n - 2; i >= 0; i--) d += `L${f(R[i][0])},${f(R[i][1])}`;
  return d + `A${f(h0)},${f(h0)} 0 0 0 ${f(L[0][0])},${f(L[0][1])}Z`;
}
// A neck between two round ends (radii ra, rb), pinched in the middle to `waist` (0 = broken).
function neckD(ax, ay, ra, bx, by, rb, waist, n = 18) {
  const pts = [], hw = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, e = ra + (rb - ra) * t, k = Math.sin(Math.PI * t) ** 0.7;
    pts.push([ax + (bx - ax) * t, ay + (by - ay) * t]); hw.push(e - (e - waist) * k);
  }
  return tubeD(pts, hw);
}
// How thick a neck is at distance d with snap distance `snap` (0 at and past the snap).
const neckWidth = (max, d, snap) => max * Math.max(0, 1 - d / snap) ** TENSION.falloff;

/* ── The overlay ──────────────────────────────────────────────────────── */
// One SVG above everything, so a neck can cross from a menu bar to any window. Style its paths
// with CSS: necks are made of what they join (fill: var(--c-surface), var(--c-accent), #0b0b0d…).
const SVGNS = 'http://www.w3.org/2000/svg';
let svg = null;
function layer() {
  if (svg && svg.isConnected) return svg;
  svg = document.createElementNS(SVGNS, 'svg');
  svg.setAttribute('aria-hidden', 'true');
  Object.assign(svg.style, { position: 'fixed', inset: '0', width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible', zIndex: '2050' });
  document.body.append(svg);
  return svg;
}
function path(cls = 'neck') { const p = document.createElementNS(SVGNS, 'path'); p.setAttribute('class', cls); layer().append(p); return p; }

/* ── Budding ──────────────────────────────────────────────────────────── */
// A neck that buds from point A (radius ra) to a moving B (getB() → [x, y], radius rb) and thins
// to nothing over `ms`. back = true draws B back into A (something returning where it came from).
// Use it when a menu opens from the pointer, a panel drips from an icon, a file buds out of a bin.
function budNeck(A, ra, getB, rb, ms = 420, { back = false, cls = 'neck' } = {}) {
  if (calm()) return;
  const p = path(cls), t0 = performance.now();
  const step = now => {
    const k = Math.min(1, (now - t0) / ms), B = getB();
    if (!B) { p.remove(); return; }
    const waist = Math.min(ra, rb) * 0.9 * (1 - k) ** 1.3;
    p.setAttribute('d', neckD(A[0], A[1], ra * (back ? 1 - k * 0.3 : 1 - k * 0.7), B[0], B[1], rb * (back ? 1 - k : 1 - k * 0.4), waist));
    p.style.opacity = String(1 - k ** 3);
    if (k < 1) requestAnimationFrame(step); else p.remove();
  };
  requestAnimationFrame(step);
}

/* ── Tethered drag ────────────────────────────────────────────────────── */
// Make `el` hold on to where it sits. Dragging it, it follows reluctantly (about 0.8 × the pointer,
// less the further it goes) while a neck joins it to its slot, thinning as they part. Past `snap`
// px the neck breaks (the commit): onSnap() fires and the element follows the pointer freely until
// released (onDrop(x, y)). Let go before the snap and it springs back with nothing changed.
// A click (under 4 px of travel) is never a pull.
function tether(el, { snap = TENSION.snap, cls = 'neck', onSnap, onDrop, onCancel } = {}) {
  el.style.touchAction = 'none';
  el.addEventListener('pointerdown', e => {
    if (e.button !== 0) return;
    const r = el.getBoundingClientRect(), x0 = e.clientX, y0 = e.clientY, short = Math.min(r.width, r.height);
    const A = [r.left + r.width / 2, r.top + r.height / 2], ra = short * 0.35;
    let neck = null, free = false, moved = false, dx = 0, dy = 0;
    el.setPointerCapture(e.pointerId);
    // the neck is drawn under the thing being pulled, never over its content
    const z0 = el.style.zIndex, pos0 = el.style.position;
    if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
    el.style.zIndex = '2060';
    const restore = () => { el.style.zIndex = z0; el.style.position = pos0; };
    const move = ev => {
      const px = ev.clientX - x0, py = ev.clientY - y0, d = Math.hypot(px, py);
      if (!moved && d < 4) return;
      moved = true;
      if (!free) {
        // resistance: it gives less the further you pull
        const give = 0.8 * (1 - 0.35 * Math.min(1, d / snap));
        dx = px * give; dy = py * give;
        if (d >= snap) {
          free = true; neck && neck.remove(); neck = null;
          el.style.transition = `translate 260ms ${EASE.recoil}`;   // the release: one small recoil
          setTimeout(() => { el.style.transition = ''; }, 260);
          onSnap && onSnap();
        } else if (!calm()) {
          neck = neck || path(cls);
          const w = neckWidth(short * TENSION.neckMax / 2, d, snap);
          neck.setAttribute('d', neckD(A[0], A[1], ra * (1 - 0.6 * d / snap), A[0] + dx, A[1] + dy, short * 0.32, Math.max(w, 1)));
        }
      } else { dx = px; dy = py; }
      el.style.translate = `${dx}px ${dy}px`;
    };
    const up = ev => {
      el.removeEventListener('pointermove', move); el.removeEventListener('pointerup', up); el.removeEventListener('pointercancel', up);
      if (!moved) { restore(); return; }
      if (free) { restore(); onDrop ? onDrop(ev.clientX, ev.clientY, el) : (el.style.translate = ''); return; }
      // let go before the snap: spring back, the neck pulling it home
      const fx = dx, fy = dy;
      springTo(1, 0, 620, k => {
        el.style.translate = `${fx * k}px ${fy * k}px`;
        if (neck) { if (k < 0.02) { neck.remove(); neck = null; } else neck.setAttribute('d', neckD(A[0], A[1], ra, A[0] + fx * k, A[1] + fy * k, short * 0.32, Math.max(1, short * 0.3 * (1 - k)))); }
      }, () => { el.style.translate = ''; neck && neck.remove(); neck = null; restore(); onCancel && onCancel(); });
    };
    el.addEventListener('pointermove', move); el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
  });
}

/* ── Terminal typing ──────────────────────────────────────────────────── */
// Text arrives a few characters at a time behind a block cursor (add the .typing class styles from
// satin.css). Paced by the clock, not ticks, so a busy moment never slows it; long text speeds up
// so nothing takes more than ~2.4 s. A streamed text that grows keeps typing toward the longer
// text instead of starting over. Reduce motion puts it all down at once.
function typeOut(el, text, { cps = 55, cursor = true, onDone } = {}) {
  if (el._typeT && text.startsWith(el._target || '')) { el._target = text; return; }
  clearInterval(el._typeT); el._typeT = null; el._target = text;
  if (calm() || !text) { el.textContent = text; el.classList.remove('typing'); onDone && onDone(); return; }
  const t0 = performance.now(); el.textContent = ''; el.classList.toggle('typing', cursor);
  el._typeT = setInterval(() => {
    const t = el._target, n = t.length, rate = Math.max(cps, n / 2.4);
    const k = Math.min(n, Math.floor((performance.now() - t0) / 1000 * rate)); el.textContent = t.slice(0, k);
    if (k >= n) { clearInterval(el._typeT); el._typeT = null; setTimeout(() => { if (!el._typeT) el.classList.remove('typing'); }, 1600); onDone && onDone(); }
  }, 30);
}

const Tension = { TENSION, calm, springEase, EASE, springTo, tubeD, neckD, neckWidth, layer, path, budNeck, tether, typeOut };
global.Tension = Tension;
if (typeof module !== 'undefined' && module.exports) module.exports = Tension;
})(typeof window !== 'undefined' ? window : globalThis);
