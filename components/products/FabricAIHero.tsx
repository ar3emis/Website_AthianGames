"use client";

import { useEffect, useRef, useState } from "react";

export function FabricAIHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !isClient || typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Draw grid background
    const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
      ctx.strokeStyle = "rgba(139, 92, 246, 0.1)";
      ctx.lineWidth = 1;
      
      const gridSize = 50;
      const offsetX = (time * 0.5) % gridSize;
      const offsetY = (time * 0.5) % gridSize;
      
      for (let x = -offsetX; x < width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      for (let y = -offsetY; y < height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    // Particle system representing runtime asset generation
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      shape: "circle" | "square" | "triangle" | "hexagon";
      rotation: number;
      rotationSpeed: number;
      hue: number;
      trail: { x: number; y: number; alpha: number }[];

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 20 + 10;
        this.maxLife = Math.random() * 200 + 100;
        this.life = this.maxLife;
        this.shape = ["circle", "square", "triangle", "hexagon"][
          Math.floor(Math.random() * 4)
        ] as "circle" | "square" | "triangle" | "hexagon";
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05;
        this.trail = [];
        
        // Dynamic color generation (representing parameterized materials)
        this.hue = Math.random() * 360;
        this.color = `hsl(${this.hue}, 70%, 60%)`;
      }

      update() {
        // Add current position to trail
        this.trail.push({ x: this.x, y: this.y, alpha: 1 });
        if (this.trail.length > 10) {
          this.trail.shift();
        }
        
        // Update trail alpha
        this.trail.forEach((point, i) => {
          point.alpha = i / this.trail.length;
        });
        
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 1;
        this.rotation += this.rotationSpeed;
        
        // Gentle drift
        this.vx *= 0.99;
        this.vy *= 0.99;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = this.life / this.maxLife;
        
        // Draw trail
        ctx.save();
        this.trail.forEach((point, _i) => {
          ctx.globalAlpha = point.alpha * alpha * 0.3;
          ctx.fillStyle = this.color;
          const trailSize = this.size * (point.alpha * 0.5);
          ctx.beginPath();
          ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.restore();
        
        // Draw main particle
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = alpha * 0.7;

        // Draw shape based on type
        if (this.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
          ctx.lineWidth = 2;
          ctx.stroke();
        } else if (this.shape === "square") {
          ctx.fillStyle = this.color;
          ctx.fillRect(-this.size, -this.size, this.size * 2, this.size * 2);
          ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
          ctx.lineWidth = 2;
          ctx.strokeRect(-this.size, -this.size, this.size * 2, this.size * 2);
        } else if (this.shape === "triangle") {
          // Triangle
          ctx.beginPath();
          ctx.moveTo(0, -this.size);
          ctx.lineTo(this.size, this.size);
          ctx.lineTo(-this.size, this.size);
          ctx.closePath();
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
          ctx.lineWidth = 2;
          ctx.stroke();
        } else if (this.shape === "hexagon") {
          // Hexagon
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = this.size * Math.cos(angle);
            const y = this.size * Math.sin(angle);
            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.closePath();
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Add glow effect
        ctx.globalAlpha = alpha * 0.3;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        if (this.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      isDead() {
        return this.life <= 0;
      }
    }

    // Connection lines representing automation
    class Connection {
      p1: Particle;
      p2: Particle;
      strength: number;

      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
        this.strength = 1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const dx = this.p2.x - this.p1.x;
        const dy = this.p2.y - this.p1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const alpha = (1 - distance / 150) * 0.3;
          ctx.beginPath();
          ctx.moveTo(this.p1.x, this.p1.y);
          ctx.lineTo(this.p2.x, this.p2.y);
          ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    const particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let isMouseDown = false;

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      if (isMouseDown) {
        // Spawn particles on click and drag
        particles.push(new Particle(mouseX, mouseY));
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      particles.push(new Particle(mouseX, mouseY));
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);

    // Auto-spawn particles
    let spawnCounter = 0;
    const spawnInterval = 30;
    let time = 0;

    // Animation loop
    const animate = () => {
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      time += 0.5;

      // Clear with trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, width, height);
      
      // Draw animated grid
      drawGrid(ctx, width, height, time);

      // Auto spawn particles from corners (representing automated generation)
      spawnCounter++;
      if (spawnCounter >= spawnInterval && particles.length < 50) {
        const corners = [
          { x: width * 0.2, y: height * 0.2 },
          { x: width * 0.8, y: height * 0.2 },
          { x: width * 0.5, y: height * 0.5 },
          { x: width * 0.2, y: height * 0.8 },
          { x: width * 0.8, y: height * 0.8 },
        ];
        const corner = corners[Math.floor(Math.random() * corners.length)];
        particles.push(new Particle(corner.x, corner.y));
        spawnCounter = 0;
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.update();
        particle.draw(ctx);

        if (particle.isDead()) {
          particles.splice(i, 1);
        }
      }

      // Draw connections between nearby particles (automation network)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const connection = new Connection(particles[i], particles[j]);
          connection.draw(ctx);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    let animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isClient]);

  // Show loading state during SSR
  if (!isClient) {
    return (
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>
    );
  }

  return (
    <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 select-none">
      {/* WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full select-none"
        style={{ touchAction: "none" }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />


      {/* Decorative elements */}
      <div className="absolute top-8 right-8 pointer-events-none">
        <div className="w-32 h-32 rounded-full border-2 border-primary/30 animate-pulse" />
      </div>
      <div className="absolute bottom-8 left-8 pointer-events-none">
        <div className="w-24 h-24 rounded-full border-2 border-accent/30 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
    </div>
  );
}

