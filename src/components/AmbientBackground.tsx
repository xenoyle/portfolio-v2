"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

interface AmbientBackgroundProps {
  blobCount?: number;
  includeGrid?: boolean;
  className?: string;
}

interface BlobPos {
  top: number;
  left: number;
}

const AmbientBackground: React.FC<AmbientBackgroundProps> = ({
  blobCount = document.body.scrollHeight / 20,
  includeGrid = false,
  className = "",
}) => {
  const [dims, setDims] = useState({ width: 0, height: 0 });
  const [blobPositions, setBlobPositions] = useState<BlobPos[]>([]);

  useEffect(() => {
    const generate = () => {
      const width = window.innerWidth;
      const height =
        document.body.scrollHeight || document.documentElement.scrollHeight;

      setDims({ width, height });

      const N = blobCount;
      const cellsPerSide = Math.ceil(Math.sqrt(N));
      const cellW = width / cellsPerSide;
      const cellH = height / cellsPerSide;

      const positions: BlobPos[] = [];
      for (let i = 0; i < N; i++) {
        const row = Math.floor(i / cellsPerSide);
        const col = i % cellsPerSide;
        // random point within this cell
        const left = col * cellW + Math.random() * cellW;
        const top = row * cellH + Math.random() * cellH;
        positions.push({ top, left });
      }
      setBlobPositions(positions);
    };

    // regen on load & resize
    window.addEventListener("load", generate);
    window.addEventListener("resize", generate);
    generate();

    return () => {
      window.removeEventListener("load", generate);
      window.removeEventListener("resize", generate);
    };
  }, [blobCount]);

  return (
    <div
      className={`absolute top-0 left-0 z-0 overflow-hidden pointer-events-none ${className}`}
      style={{ width: dims.width, height: dims.height }}
    >
      {includeGrid && (
        <motion.div
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"
          style={{ backgroundSize: "contain" }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 60, repeat: Infinity }}
        />
      )}

      {blobPositions.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute w-[300px] h-[300px] bg-green-500/10 rounded-full blur-3xl"
          style={{ top: blob.top, left: blob.left }}
          animate={{
            y: [0, 20, 0],
            x: [0, -10 + Math.random() * 20, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
};

export default AmbientBackground;
