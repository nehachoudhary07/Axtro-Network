import React, { useEffect, useRef } from 'react';
import { useMotionContext } from '../motion/MotionProvider';
import { useTheme } from '../../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  color: string;
}

export function HeroNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isTouch, isReducedMotion } = useMotionContext();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    if (isReducedMotion || typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    // Mouse coordinates for subtle spring parallax
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handlePointerMove = (e: PointerEvent | MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('pointermove', handlePointerMove as any, { passive: true });

    // Set canvas dimensions
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.parentElement?.clientWidth ? canvas.parentElement.clientWidth * dpr : window.innerWidth * dpr;
      canvas.height = canvas.parentElement?.clientHeight ? canvas.parentElement.clientHeight * dpr : window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // IntersectionObserver to pause rendering when scrolled out of viewport (Motion Budget rule)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Initialize particles according to device tier
    const particleCount = isTouch ? 25 : 60;
    const particles: Particle[] = [];
    const colors = isDark
      ? ['#DB2777', '#9C94B8', '#7E22CE', '#F5F3FA']
      : ['#DB2777', '#6B7280', '#9333EA', '#0F1115'];

    const getWidth = () => (canvas.parentElement?.clientWidth || window.innerWidth);
    const getHeight = () => (canvas.parentElement?.clientHeight || window.innerHeight);

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.5 + 0.15;
      particles.push({
        x: Math.random() * getWidth(),
        y: Math.random() * getHeight(),
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        alpha: baseAlpha,
        baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Render loop
    let pulseAngle = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const width = getWidth();
      const height = getHeight();

      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      const mouseOffsetX = (mouseX / width - 0.5) * 30;
      const mouseOffsetY = (mouseY / height - 0.5) * 30;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle ambient glow around center/cursor
      pulseAngle += 0.015;
      const pulseScale = Math.sin(pulseAngle) * 0.15 + 1;
      
      const gradient = ctx.createRadialGradient(
        width / 2 + mouseOffsetX * 0.5,
        height * 0.45 + mouseOffsetY * 0.5,
        10,
        width / 2 + mouseOffsetX * 0.5,
        height * 0.45 + mouseOffsetY * 0.5,
        Math.min(width, height) * 0.55 * pulseScale
      );
      gradient.addColorStop(0, isDark ? 'rgba(219, 39, 119, 0.12)' : 'rgba(219, 39, 119, 0.06)');
      gradient.addColorStop(0.5, isDark ? 'rgba(31, 25, 56, 0.08)' : 'rgba(226, 229, 234, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw connection lines between nearby particles
      const maxDistance = isTouch ? 90 : 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x + mouseOffsetX, particles[i].y + mouseOffsetY);
            ctx.lineTo(particles[j].x + mouseOffsetX, particles[j].y + mouseOffsetY);
            ctx.strokeStyle = isDark
              ? `rgba(219, 39, 119, ${lineAlpha})`
              : `rgba(219, 39, 119, ${lineAlpha * 0.7})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particles
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const posX = p.x + mouseOffsetX;
        const posY = p.y + mouseOffsetY;

        ctx.beginPath();
        ctx.arc(posX, posY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', handlePointerMove as any);
      observer.disconnect();
    };
  }, [isDark, isTouch, isReducedMotion]);

  if (isReducedMotion) {
    return (
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 50% 40%, rgba(219,39,119,0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle at 50% 40%, rgba(219,39,119,0.06) 0%, transparent 70%)',
        }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
