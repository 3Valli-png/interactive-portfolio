// ============================================
// Interactive Microchip / PCB Background
// Realistic circuit traces, vias, pads, chips
// ============================================

(function() {
  const canvas = document.getElementById('circuitCanvas');
  if (!canvas) return;

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let width, height;
  let elements = { traces: [], vias: [], pads: [], chips: [] };
  let mouse = { x: -1000, y: -1000 };
  let pulses = [];

  // Colors
  const GREEN = { r: 0, g: 95, b: 2 };
  const GOLD = { r: 192, g: 184, b: 122 };
  const MOUSE_RADIUS = 220;

  // Seeded random for consistent layout per session
  let seed = Math.random() * 10000;
  function seededRandom() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    generate();
  }

  function proximity(x, y) {
    const dx = mouse.x - x;
    const dy = mouse.y - y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    return dist < MOUSE_RADIUS ? 1 - dist / MOUSE_RADIUS : 0;
  }

  function rgba(color, alpha) {
    return `rgba(${color.r},${color.g},${color.b},${alpha})`;
  }

  // ---- GENERATION ----

  function generate() {
    seed = 42;
    elements = { traces: [], vias: [], pads: [], chips: [] };

    const GRID = 40;
    const cols = Math.ceil(width / GRID);
    const rows = Math.ceil(height / GRID);

    // Place IC chips (rectangles with pin rows)
    const chipCount = Math.floor((width * height) / 200000);
    for (let i = 0; i < chipCount; i++) {
      const cw = (3 + Math.floor(seededRandom() * 4)) * GRID;
      const ch = (2 + Math.floor(seededRandom() * 3)) * GRID;
      const cx = Math.floor(seededRandom() * (cols - 6)) * GRID;
      const cy = Math.floor(seededRandom() * (rows - 5)) * GRID;

      elements.chips.push({ x: cx, y: cy, w: cw, h: ch });

      // Pins along top and bottom edges
      const pinCount = Math.floor(cw / GRID);
      for (let p = 1; p < pinCount; p++) {
        const px = cx + p * GRID;
        elements.pads.push({ x: px, y: cy, size: 3 });
        elements.pads.push({ x: px, y: cy + ch, size: 3 });

        // Trace going out from each pin
        if (seededRandom() > 0.3) {
          const traceLen = (2 + Math.floor(seededRandom() * 6)) * GRID;
          const goUp = seededRandom() > 0.5;
          const endY = goUp ? cy - traceLen : cy + ch + traceLen;
          const turnX = px + (seededRandom() > 0.5 ? 1 : -1) * (1 + Math.floor(seededRandom() * 3)) * GRID;

          elements.traces.push({
            segments: [
              { x: px, y: goUp ? cy : cy + ch },
              { x: px, y: goUp ? cy - GRID * 2 : cy + ch + GRID * 2 },
              { x: turnX, y: goUp ? cy - GRID * 2 : cy + ch + GRID * 2 },
              { x: turnX, y: endY }
            ]
          });

          // Via at the end of trace
          if (seededRandom() > 0.5) {
            elements.vias.push({ x: turnX, y: endY, r: 4 });
          }
        }
      }

      // Pins along left and right edges
      const sidePins = Math.floor(ch / GRID);
      for (let p = 1; p < sidePins; p++) {
        const py = cy + p * GRID;
        elements.pads.push({ x: cx, y: py, size: 3 });
        elements.pads.push({ x: cx + cw, y: py, size: 3 });
      }
    }

    // Horizontal bus traces (long parallel lines like data buses)
    const busCount = 2 + Math.floor(seededRandom() * 3);
    for (let b = 0; b < busCount; b++) {
      const by = (3 + Math.floor(seededRandom() * (rows - 6))) * GRID;
      const bx1 = Math.floor(seededRandom() * 5) * GRID;
      const bx2 = width - Math.floor(seededRandom() * 5) * GRID;
      const lineCount = 2 + Math.floor(seededRandom() * 3);

      for (let l = 0; l < lineCount; l++) {
        const ly = by + l * (GRID * 0.4);
        elements.traces.push({
          segments: [{ x: bx1, y: ly }, { x: bx2, y: ly }],
          isBus: true
        });
      }

      // Vias at intervals along bus
      for (let v = bx1; v < bx2; v += GRID * (4 + Math.floor(seededRandom() * 6))) {
        elements.vias.push({ x: v, y: by, r: 5 });
      }
    }

    // Scattered standalone traces with right-angle routing
    const traceCount = Math.floor((width * height) / 25000);
    for (let i = 0; i < traceCount; i++) {
      const sx = Math.floor(seededRandom() * cols) * GRID;
      const sy = Math.floor(seededRandom() * rows) * GRID;
      const segments = [{ x: sx, y: sy }];
      let cx = sx, cy = sy;

      const stepCount = 2 + Math.floor(seededRandom() * 4);
      for (let s = 0; s < stepCount; s++) {
        const horizontal = s % 2 === 0;
        const len = (1 + Math.floor(seededRandom() * 5)) * GRID * (seededRandom() > 0.5 ? 1 : -1);
        if (horizontal) {
          cx += len;
        } else {
          cy += len;
        }
        segments.push({ x: cx, y: cy });
      }

      elements.traces.push({ segments });

      // Via at start/end
      if (seededRandom() > 0.6) {
        elements.vias.push({ x: sx, y: sy, r: 3.5 });
      }
      if (seededRandom() > 0.6) {
        elements.vias.push({ x: cx, y: cy, r: 3.5 });
      }
    }

    // Extra scattered vias and pads
    const viaCount = Math.floor((width * height) / 40000);
    for (let i = 0; i < viaCount; i++) {
      elements.vias.push({
        x: Math.floor(seededRandom() * cols) * GRID,
        y: Math.floor(seededRandom() * rows) * GRID,
        r: 2 + seededRandom() * 3
      });
    }

    // SMD pads (small rectangles)
    const padCount = Math.floor((width * height) / 60000);
    for (let i = 0; i < padCount; i++) {
      elements.pads.push({
        x: Math.floor(seededRandom() * cols) * GRID,
        y: Math.floor(seededRandom() * rows) * GRID,
        size: 4 + seededRandom() * 3,
        isRect: true
      });
    }
  }

  // ---- DRAWING ----

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw traces
    for (const trace of elements.traces) {
      const segs = trace.segments;
      if (segs.length < 2) continue;

      // Calc proximity at midpoint of trace
      let mx = 0, my = 0;
      for (const s of segs) { mx += s.x; my += s.y; }
      mx /= segs.length; my /= segs.length;
      const prox = proximity(mx, my);

      const baseAlpha = trace.isBus ? 0.04 : 0.05;
      const alpha = baseAlpha + prox * 0.4;
      const color = prox > 0.4 ? GOLD : GREEN;
      const lw = trace.isBus ? 0.6 : 0.8;

      ctx.beginPath();
      ctx.strokeStyle = rgba(color, alpha);
      ctx.lineWidth = lw + prox * 1.2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.moveTo(segs[0].x, segs[0].y);
      for (let i = 1; i < segs.length; i++) {
        ctx.lineTo(segs[i].x, segs[i].y);
      }
      ctx.stroke();

      // Glow on hover
      if (prox > 0.2) {
        ctx.beginPath();
        ctx.strokeStyle = rgba(color, prox * 0.15);
        ctx.lineWidth = lw + prox * 4;
        ctx.moveTo(segs[0].x, segs[0].y);
        for (let i = 1; i < segs.length; i++) {
          ctx.lineTo(segs[i].x, segs[i].y);
        }
        ctx.stroke();
      }
    }

    // Draw IC chips
    for (const chip of elements.chips) {
      const cx = chip.x + chip.w / 2;
      const cy = chip.y + chip.h / 2;
      const prox = proximity(cx, cy);
      const alpha = 0.03 + prox * 0.15;
      const color = prox > 0.3 ? GOLD : GREEN;

      // Chip body
      ctx.beginPath();
      ctx.strokeStyle = rgba(color, alpha);
      ctx.lineWidth = 1 + prox * 0.5;
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(chip.x, chip.y, chip.w, chip.h);
      ctx.setLineDash([]);

      // Chip fill
      ctx.fillStyle = rgba(color, alpha * 0.15);
      ctx.fillRect(chip.x, chip.y, chip.w, chip.h);

      // IC marking (small notch)
      if (prox > 0.1) {
        ctx.beginPath();
        ctx.arc(chip.x + 12, chip.y + chip.h / 2, 4, 0, Math.PI * 2);
        ctx.fillStyle = rgba(color, prox * 0.3);
        ctx.fill();
      }
    }

    // Draw vias (annular rings)
    for (const via of elements.vias) {
      const prox = proximity(via.x, via.y);
      const alpha = 0.06 + prox * 0.5;
      const color = prox > 0.3 ? GOLD : GREEN;
      const r = via.r + prox * 2;

      // Outer ring
      ctx.beginPath();
      ctx.arc(via.x, via.y, r, 0, Math.PI * 2);
      ctx.strokeStyle = rgba(color, alpha);
      ctx.lineWidth = 1 + prox * 0.8;
      ctx.stroke();

      // Inner hole
      ctx.beginPath();
      ctx.arc(via.x, via.y, r * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = rgba(color, alpha * 0.8);
      ctx.fill();

      // Glow
      if (prox > 0.3) {
        const grad = ctx.createRadialGradient(via.x, via.y, 0, via.x, via.y, r * 3);
        grad.addColorStop(0, rgba(color, prox * 0.2));
        grad.addColorStop(1, rgba(color, 0));
        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(via.x, via.y, r * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Draw pads
    for (const pad of elements.pads) {
      const prox = proximity(pad.x, pad.y);
      const alpha = 0.05 + prox * 0.45;
      const color = prox > 0.3 ? GOLD : GREEN;
      const s = pad.size + prox * 2;

      if (pad.isRect) {
        // SMD rectangular pad
        ctx.fillStyle = rgba(color, alpha);
        ctx.fillRect(pad.x - s, pad.y - s * 0.5, s * 2, s);
      } else {
        // Round pad
        ctx.beginPath();
        ctx.arc(pad.x, pad.y, s, 0, Math.PI * 2);
        ctx.fillStyle = rgba(color, alpha);
        ctx.fill();
      }
    }

    // Draw signal pulses
    drawPulses();
  }

  // ---- SIGNAL PULSES ----
  // Animated dots that travel along traces near the mouse

  function spawnPulses() {
    if (pulses.length > 15) return;
    for (const trace of elements.traces) {
      if (trace.segments.length < 2) continue;
      const s0 = trace.segments[0];
      const prox = proximity(s0.x, s0.y);
      if (prox > 0.3 && Math.random() < 0.02) {
        pulses.push({
          trace: trace,
          progress: 0,
          speed: 0.8 + Math.random() * 1.5,
          color: Math.random() > 0.5 ? GOLD : GREEN
        });
      }
    }
  }

  function drawPulses() {
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.progress += p.speed;

      // Get total trace length and find position
      const segs = p.trace.segments;
      let totalLen = 0;
      const segLens = [];
      for (let j = 1; j < segs.length; j++) {
        const dx = segs[j].x - segs[j-1].x;
        const dy = segs[j].y - segs[j-1].y;
        const len = Math.sqrt(dx * dx + dy * dy);
        segLens.push(len);
        totalLen += len;
      }

      if (p.progress >= totalLen) {
        pulses.splice(i, 1);
        continue;
      }

      // Find position along trace
      let remaining = p.progress;
      let px = segs[0].x, py = segs[0].y;
      for (let j = 0; j < segLens.length; j++) {
        if (remaining <= segLens[j]) {
          const t = remaining / segLens[j];
          px = segs[j].x + (segs[j+1].x - segs[j].x) * t;
          py = segs[j].y + (segs[j+1].y - segs[j].y) * t;
          break;
        }
        remaining -= segLens[j];
      }

      // Draw pulse dot with glow
      const grad = ctx.createRadialGradient(px, py, 0, px, py, 8);
      grad.addColorStop(0, rgba(p.color, 0.7));
      grad.addColorStop(0.5, rgba(p.color, 0.2));
      grad.addColorStop(1, rgba(p.color, 0));
      ctx.beginPath();
      ctx.fillStyle = grad;
      ctx.arc(px, py, 8, 0, Math.PI * 2);
      ctx.fill();

      // Bright core
      ctx.beginPath();
      ctx.fillStyle = rgba(p.color, 0.9);
      ctx.arc(px, py, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // ---- ANIMATION LOOP ----

  function animate() {
    spawnPulses();
    draw();
    requestAnimationFrame(animate);
  }

  // ---- EVENTS ----

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  document.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      pulses = [];
    }, 250);
  });

  resize();
  animate();
})();
