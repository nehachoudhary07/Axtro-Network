import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface NetworkGlobeProps {
  className?: string;
}

interface NetworkNode {
  lat: number;
  lng: number;
  ux: number;
  uy: number;
  uz: number;
}

interface PrecomputedDot {
  ux: number;
  uy: number;
  uz: number;
}

// Key network nodes positioned across the globe (Global Enterprise & Backbone Hubs)
const RAW_NODES = [
  { lat: 40.71, lng: -74.00 },   // 0: New York (US East)
  { lat: 37.77, lng: -122.41 },  // 1: San Francisco (US West)
  { lat: 51.50, lng: -0.12 },    // 2: London (UK)
  { lat: 50.11, lng: 8.68 },     // 3: Frankfurt (Europe Hub)
  { lat: 59.32, lng: 18.06 },    // 4: Stockholm (Nordics)
  { lat: -23.55, lng: -46.63 },  // 5: São Paulo (South America)
  { lat: 6.52, lng: 3.37 },      // 6: Lagos (West Africa)
  { lat: 25.20, lng: 55.27 },    // 7: Dubai (Middle East Hub)
  { lat: 19.07, lng: 72.87 },    // 8: Mumbai (India Core Hub)
  { lat: 28.61, lng: 77.20 },    // 9: New Delhi (India North)
  { lat: 1.35, lng: 103.82 },    // 10: Singapore (APAC Hub)
  { lat: 22.31, lng: 114.17 },   // 11: Hong Kong
  { lat: 35.67, lng: 139.65 },   // 12: Tokyo (East Asia)
  { lat: -33.86, lng: 151.20 },  // 13: Sydney (Australia)
];

const NETWORK_NODES: NetworkNode[] = RAW_NODES.map((n) => {
  const phi = (n.lat * Math.PI) / 180;
  const theta = (n.lng * Math.PI) / 180;
  return {
    ...n,
    ux: Math.cos(phi) * Math.sin(theta),
    uy: -Math.sin(phi),
    uz: Math.cos(phi) * Math.cos(theta),
  };
});

// High-capacity global network routes interconnecting all continental centers
const NETWORK_ROUTES = [
  { from: 1, to: 0 },   // San Francisco <-> New York
  { from: 0, to: 2 },   // New York <-> London (Transatlantic)
  { from: 2, to: 3 },   // London <-> Frankfurt
  { from: 3, to: 4 },   // Frankfurt <-> Stockholm
  { from: 0, to: 5 },   // New York <-> São Paulo
  { from: 2, to: 6 },   // London <-> West Africa
  { from: 3, to: 7 },   // Frankfurt <-> Dubai
  { from: 7, to: 8 },   // Dubai <-> Mumbai
  { from: 8, to: 9 },   // Mumbai <-> New Delhi
  { from: 8, to: 10 },  // Mumbai <-> Singapore
  { from: 10, to: 11 }, // Singapore <-> Hong Kong
  { from: 11, to: 12 }, // Hong Kong <-> Tokyo
  { from: 12, to: 1 },  // Tokyo <-> San Francisco (Transpacific)
  { from: 10, to: 13 }, // Singapore <-> Sydney
  { from: 6, to: 8 },   // West Africa <-> India
  { from: 5, to: 6 },   // South America <-> West Africa
];

// High-resolution 720x360 offscreen rasterizer for authentic world geography
let cachedLandDots: PrecomputedDot[] | null = null;

function getPrecomputedLandDots(): PrecomputedDot[] {
  if (cachedLandDots) return cachedLandDots;

  if (typeof document === 'undefined') return [];

  const canvas = document.createElement('canvas');
  canvas.width = 720;
  canvas.height = 360;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return [];

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, 720, 360);

  ctx.fillStyle = '#FFFFFF';
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 2.5;

  const drawPoly = (coords: [number, number][]) => {
    ctx.beginPath();
    coords.forEach(([lng, lat], i) => {
      const x = ((lng + 180) / 360) * 720;
      const y = ((90 - lat) / 180) * 360;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  };

  // 1. NORTH AMERICA
  drawPoly([
    [-168, 66], [-160, 56], [-148, 60], [-138, 58], [-128, 52], [-124, 48],
    [-124, 38], [-118, 33], [-112, 28], [-106, 22], [-98, 20], [-94, 16],
    [-84, 10], [-78, 8], [-80, 9], [-85, 16], [-90, 21], [-97, 26],
    [-97, 30], [-88, 30], [-82, 25], [-80, 25], [-81, 31], [-76, 35],
    [-71, 41], [-66, 44], [-60, 46], [-64, 50], [-55, 50], [-60, 58],
    [-65, 60], [-80, 62], [-90, 68], [-115, 70], [-140, 70], [-168, 66]
  ]);
  drawPoly([[-84, 30], [-80, 25], [-80, 29], [-82, 31], [-84, 30]]);
  // Greenland
  drawPoly([[-52, 60], [-42, 60], [-24, 72], [-18, 80], [-42, 83], [-58, 76], [-52, 60]]);

  // 2. SOUTH AMERICA
  drawPoly([
    [-77, 8], [-73, 11], [-62, 10], [-50, 2], [-35, -5], [-35, -9],
    [-38, -14], [-40, -22], [-46, -24], [-50, -30], [-55, -34], [-62, -40],
    [-66, -48], [-68, -54], [-74, -52], [-74, -42], [-71, -32], [-76, -18],
    [-81, -5], [-78, 0], [-77, 8]
  ]);

  // 3. EUROPE & SCANDINAVIA
  drawPoly([
    [-9, 36], [-9, 43], [-1, 43], [-4, 48], [1, 51], [8, 54], [8, 57],
    [12, 57], [10, 54], [14, 54], [19, 54], [24, 59], [30, 60], [30, 70],
    [22, 71], [15, 68], [5, 62], [5, 58], [1, 51], [-4, 48], [-1, 44],
    [-9, 36], [0, 38], [15, 40], [18, 40], [16, 38], [23, 38], [28, 41],
    [32, 45], [36, 45], [36, 42], [28, 41], [22, 38], [15, 38], [12, 44],
    [4, 43], [3, 42], [-9, 36]
  ]);
  drawPoly([[-5, 50], [1, 51], [0, 53], [-1, 56], [-3, 58], [-6, 58], [-4, 55], [-5, 50]]);
  drawPoly([[-10, 52], [-6, 52], [-6, 55], [-10, 54], [-10, 52]]);
  drawPoly([[5, 58], [10, 60], [18, 60], [28, 65], [30, 71], [20, 71], [12, 65], [5, 62], [5, 58]]);

  // 4. AFRICA & MADAGASCAR
  drawPoly([
    [-5, 36], [10, 37], [25, 32], [32, 31], [34, 27], [43, 12], [51, 12],
    [45, 0], [40, -10], [35, -24], [28, -33], [18, -34], [15, -23], [12, -10],
    [8, 4], [3, 6], [-5, 5], [-12, 5], [-17, 15], [-16, 21], [-13, 28], [-5, 36]
  ]);
  drawPoly([[44, -12], [50, -14], [48, -25], [43, -25], [44, -12]]);

  // 5. ASIA & EURASIA
  drawPoly([
    [36, 45], [40, 42], [50, 40], [53, 37], [60, 25], [68, 23],
    [73, 20], [77, 8], [80, 8], [80, 13], [85, 20], [88, 22], [92, 21],
    [98, 15], [100, 8], [104, 1], [104, 10], [108, 14], [108, 21], [118, 24],
    [121, 31], [122, 37], [128, 38], [130, 42], [140, 48], [143, 53],
    [155, 58], [162, 57], [170, 60], [180, 65], [170, 70], [140, 73],
    [110, 76], [80, 73], [60, 68], [50, 66], [40, 65], [30, 60], [36, 45]
  ]);
  drawPoly([[35, 30], [43, 30], [55, 25], [60, 22], [55, 16], [45, 13], [43, 13], [35, 30]]);
  drawPoly([[68, 24], [73, 19], [77, 8], [80, 13], [85, 20], [88, 24], [80, 28], [72, 28], [68, 24]]);
  drawPoly([[80, 6], [82, 6], [82, 9], [80, 9], [80, 6]]);
  drawPoly([[130, 31], [135, 34], [140, 36], [141, 42], [145, 44], [142, 45], [138, 38], [132, 33], [130, 31]]);
  drawPoly([[98, 5], [104, -5], [106, -7], [114, -8], [115, -3], [108, 2], [98, 5]]);
  drawPoly([[108, -1], [118, -4], [118, 4], [110, 7], [108, -1]]);
  drawPoly([[120, 10], [126, 8], [125, 18], [120, 18], [120, 10]]);

  // 6. AUSTRALIA & NEW ZEALAND
  drawPoly([
    [114, -22], [115, -34], [122, -34], [130, -32], [138, -35], [148, -38],
    [153, -28], [150, -20], [142, -11], [136, -12], [130, -12], [124, -16],
    [114, -22]
  ]);
  drawPoly([[168, -45], [174, -42], [178, -37], [172, -35], [168, -45]]);

  const imgData = ctx.getImageData(0, 0, 720, 360);
  const maskData = imgData.data;
  const dots: PrecomputedDot[] = [];

  // Step of 1.1° provides crisp continental contours with optimal rendering performance
  for (let lat = -70; lat <= 78; lat += 1.1) {
    const cosLat = Math.cos((lat * Math.PI) / 180);
    const lngStep = Math.max(0.9, 1.1 / Math.max(0.18, cosLat));

    for (let lng = -180; lng < 180; lng += lngStep) {
      const x = Math.floor((((lng + 180) % 360) / 360) * 720);
      const y = Math.floor(Math.min(359, Math.max(0, ((90 - lat) / 180) * 360)));
      const idx = (y * 720 + x) * 4;

      if (maskData[idx] > 128) {
        const phi = (lat * Math.PI) / 180;
        const theta = (lng * Math.PI) / 180;
        dots.push({
          ux: Math.cos(phi) * Math.sin(theta),
          uy: -Math.sin(phi),
          uz: Math.cos(phi) * Math.cos(theta),
        });
      }
    }
  }

  cachedLandDots = dots;
  return dots;
}

export function NetworkGlobe({ className = '' }: NetworkGlobeProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isVisibleRef = useRef<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let rotationRad = (16 * Math.PI) / 180;
    const tiltLat = -22;
    const tiltRad = (tiltLat * Math.PI) / 180;
    const cosTilt = Math.cos(tiltRad);
    const sinTilt = Math.sin(tiltRad);
    let pulseProgress = 0;

    const landDots = getPrecomputedLandDots();
    const dotsCount = landDots.length;

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // IntersectionObserver to pause rendering when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const render = () => {
      if (!isVisibleRef.current) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      rotationRad = (rotationRad + 0.00035) % (Math.PI * 2);
      pulseProgress = (pulseProgress + 0.0035) % 1;

      const cosRot = Math.cos(rotationRad);
      const sinRot = Math.sin(rotationRad);

      const isMobile = (width / dpr) < 640;
      const minDim = Math.min(width, height);
      const sphereRadius = minDim * 0.36;
      const centerX = width * 0.50;
      const centerY = height * 0.50;

      // 1. Atmospheric Rim Glow
      const horizonGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        sphereRadius * 0.94,
        centerX,
        centerY,
        sphereRadius * 1.22
      );

      if (isDark) {
        horizonGlow.addColorStop(0, 'rgba(219, 39, 119, 0.28)');
        horizonGlow.addColorStop(0.35, 'rgba(219, 39, 119, 0.12)');
        horizonGlow.addColorStop(0.70, 'rgba(219, 39, 119, 0.03)');
        horizonGlow.addColorStop(1, 'rgba(14, 11, 26, 0)');
      } else {
        horizonGlow.addColorStop(0, 'rgba(219, 39, 119, 0.24)');
        horizonGlow.addColorStop(0.35, 'rgba(219, 39, 119, 0.10)');
        horizonGlow.addColorStop(0.70, 'rgba(219, 39, 119, 0.02)');
        horizonGlow.addColorStop(1, 'rgba(246, 247, 249, 0)');
      }

      ctx.beginPath();
      ctx.arc(centerX, centerY, sphereRadius * 1.22, 0, Math.PI * 2);
      ctx.fillStyle = horizonGlow;
      ctx.fill();

      // 2. Spherical Body Depth Gradient (Solid sphere body all the way to outer perimeter)
      const sphereVolume = ctx.createRadialGradient(
        centerX - sphereRadius * 0.22,
        centerY - sphereRadius * 0.22,
        sphereRadius * 0.05,
        centerX,
        centerY,
        sphereRadius
      );

      if (isDark) {
        sphereVolume.addColorStop(0, '#1F1938');
        sphereVolume.addColorStop(0.48, '#17132A');
        sphereVolume.addColorStop(0.85, '#120E22');
        sphereVolume.addColorStop(1, '#0E0B1A');
      } else {
        sphereVolume.addColorStop(0, '#FFFFFF');
        sphereVolume.addColorStop(0.50, '#F8FAFC');
        sphereVolume.addColorStop(0.85, '#EEF2F6');
        sphereVolume.addColorStop(1, '#E2E8F0');
      }

      ctx.beginPath();
      ctx.arc(centerX, centerY, sphereRadius, 0, Math.PI * 2);
      ctx.fillStyle = sphereVolume;
      ctx.fill();

      // Subtle sphere edge rim border
      ctx.strokeStyle = isDark ? 'rgba(219, 39, 119, 0.28)' : 'rgba(219, 39, 119, 0.22)';
      ctx.lineWidth = 1.0 * dpr;
      ctx.stroke();

      // 3. Batched High-Performance Continental Dots (Strictly masked inside sphere perimeter)
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, sphereRadius - 0.5 * dpr, 0, Math.PI * 2);
      ctx.clip();

      ctx.fillStyle = isDark ? 'rgba(245, 243, 250, 0.80)' : 'rgba(51, 65, 85, 0.82)';
      ctx.beginPath();
      const baseDotRadius = (isMobile ? 0.80 : 0.90) * dpr;

      for (let i = 0; i < dotsCount; i++) {
        const dot = landDots[i];
        // Rotate around Y axis
        const x3d = sphereRadius * (dot.ux * cosRot + dot.uz * sinRot);
        const y3d = sphereRadius * dot.uy;
        const z3d = sphereRadius * (-dot.ux * sinRot + dot.uz * cosRot);

        // Tilt around X axis
        const zTilted = y3d * sinTilt + z3d * cosTilt;

        // Render front-facing dots, cutting off horizon grazing points
        if (zTilted > sphereRadius * 0.04) {
          const yTilted = y3d * cosTilt - z3d * sinTilt;
          const px = centerX + x3d;
          const py = centerY + yTilted;

          ctx.moveTo(px + baseDotRadius, py);
          ctx.arc(px, py, baseDotRadius, 0, Math.PI * 2);
        }
      }
      ctx.fill();
      ctx.restore();

      // 4. Projected Network Nodes
      const projectedNodes = NETWORK_NODES.map((node) => {
        const x3d = sphereRadius * (node.ux * cosRot + node.uz * sinRot);
        const y3d = sphereRadius * node.uy;
        const z3d = sphereRadius * (-node.ux * sinRot + node.uz * cosRot);

        const yTilted = y3d * cosTilt - z3d * sinTilt;
        const zTilted = y3d * sinTilt + z3d * cosTilt;

        return {
          ...node,
          x: centerX + x3d,
          y: centerY + yTilted,
          z: zTilted,
          visible: zTilted > sphereRadius * 0.04,
        };
      });

      // 5. Glowing Network Route Arcs & Travelling Packets
      NETWORK_ROUTES.forEach((route, i) => {
        const p1 = projectedNodes[route.from];
        const p2 = projectedNodes[route.to];

        if (p1 && p2 && (p1.visible || p2.visible)) {
          const midUx = (p1.ux + p2.ux) * 0.5;
          const midUy = (p1.uy + p2.uy) * 0.5;
          const midUz = (p1.uz + p2.uz) * 0.5;
          const len = Math.hypot(midUx, midUy, midUz) || 1;

          const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
          const altitude = Math.min(0.20, 0.04 + (dist / sphereRadius) * 0.12);
          const rElevated = sphereRadius * (1 / len + altitude);

          const midX3d = rElevated * (midUx * cosRot + midUz * sinRot);
          const midY3d = rElevated * midUy;
          const midZ3d = rElevated * (-midUx * sinRot + midUz * cosRot);

          const midYTilted = midY3d * cosTilt - midZ3d * sinTilt;
          const midZTilted = midY3d * sinTilt + midZ3d * cosTilt;

          const midX = centerX + midX3d;
          const midY = centerY + midYTilted;

          if (midZTilted > -sphereRadius * 0.05) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.quadraticCurveTo(midX, midY, p2.x, p2.y);

            // Core magenta line
            ctx.strokeStyle = 'rgba(219, 39, 119, 0.85)';
            ctx.lineWidth = 1.2 * dpr;
            ctx.stroke();

            // Soft outer halo
            ctx.strokeStyle = 'rgba(219, 39, 119, 0.20)';
            ctx.lineWidth = 3.0 * dpr;
            ctx.stroke();

            // Traveling photon light packet
            const t = (pulseProgress + i * 0.13) % 1;
            const px = (1 - t) * (1 - t) * p1.x + 2 * (1 - t) * t * midX + t * t * p2.x;
            const py = (1 - t) * (1 - t) * p1.y + 2 * (1 - t) * t * midY + t * t * p2.y;

            ctx.fillStyle = isDark ? '#FFFFFF' : '#DB2777';
            ctx.shadowColor = '#DB2777';
            ctx.shadowBlur = 6 * dpr;
            ctx.beginPath();
            ctx.arc(px, py, 2.2 * dpr, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
          }
        }
      });

      // 6. Radiant Connection Nodes
      projectedNodes.forEach((node) => {
        if (!node.visible || node.z <= sphereRadius * 0.05) return;

        ctx.save();
        ctx.fillStyle = 'rgba(219, 39, 119, 0.35)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 6.5 * dpr, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowColor = isDark ? '#FFFFFF' : '#DB2777';
        ctx.shadowBlur = 4 * dpr;
        ctx.fillStyle = isDark ? '#FFFFFF' : '#DB2777';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.2 * dpr, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      observer.disconnect();
    };
  }, [isDark]);

  return (
    <div className={`w-full h-full relative select-none pointer-events-none flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-contain"
      />
    </div>
  );
}

export default NetworkGlobe;
