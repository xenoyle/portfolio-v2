"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface Cube {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
}

const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = window.innerWidth;
    let H = document.body.scrollHeight || document.documentElement.scrollHeight;
    canvas.width = W;
    canvas.height = H;

    const handleResize = () => {
      W = window.innerWidth;
      H = document.body.scrollHeight || document.documentElement.scrollHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", handleResize);

    // helper to test overlap
    const isOverlap = (a: Cube, b: Cube) =>
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y;

    // generate cubes with no initial overlap
    const cubes: Cube[] = [];
    const count = 50; // fewer cubes on mobile
    const base = 40;
    for (let i = 0; i < count; i++) {
      const w = base * (1 + Math.random() * 2);
      const h = base * (1 + Math.random() * 2);
      const x = Math.random() * (W - w);
      const y = Math.random() * (H - h);
      const cube: Cube = {
        x, y,
        vx: (Math.random() * 2 - 1) * 1.5,
        vy: (Math.random() * 2 - 1) * 1.5,
        width: w,
        height: h,
      };
      // retry position until no overlap (max 100 attempts)
      let attempts = 0;
      while (cubes.some(other => isOverlap(cube, other)) && attempts++ < 100) {
        cube.x = Math.random() * (W - w);
        cube.y = Math.random() * (H - h);
      }
      cubes.push(cube);
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      // move & wall‐bounce
      for (const c of cubes) {
        c.x += c.vx;
        c.y += c.vy;
        if (c.x <= 0 || c.x + c.width >= W) c.vx *= -1;
        if (c.y <= 0 || c.y + c.height >= H) c.vy *= -1;
      }

      // cube‐cube collisions (swap velocities)
      for (let i = 0; i < cubes.length; i++) {
        for (let j = i + 1; j < cubes.length; j++) {
          const a = cubes[i], b = cubes[j];
          if (isOverlap(a, b)) {
            [a.vx, b.vx] = [b.vx, a.vx];
            [a.vy, b.vy] = [b.vy, a.vy];
          }
        }
      }

      // draw
      ctx.fillStyle = "rgba(34,197,94,0.05)";
      for (const c of cubes) {
        ctx.fillRect(c.x, c.y, c.width, c.height);
      }

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", handleResize);
  }, [pathname]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full pointer-events-none z-0"
    />
  );
};

export default AmbientBackground;