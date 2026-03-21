import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * 전체 페이지에 고정되는 우주 배경 (그라데이션 + 회전하는 별)
 */
const StarsBackground = () => {
  const gradientRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<HTMLCanvasElement>(null);

  // 2D 그라데이션 캔버스
  useEffect(() => {
    const canvas = gradientRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;

      const grad = ctx.createRadialGradient(
        W * 0.4,
        H * 0.35,
        0,
        W * 0.5,
        H * 0.5,
        W * 0.9
      );
      grad.addColorStop(0, "#0d0b2b");
      grad.addColorStop(0.4, "#080618");
      grad.addColorStop(0.7, "#04030f");
      grad.addColorStop(1, "#000000");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      const blobs: [number, number, number, string][] = [
        [W * 0.2, H * 0.3, W * 0.35, "rgba(80,40,160,0.18)"],
        [W * 0.75, H * 0.65, W * 0.3, "rgba(20,80,160,0.15)"],
        [W * 0.55, H * 0.2, W * 0.2, "rgba(160,30,100,0.1)"],
      ];
      blobs.forEach(([cx, cy, r, col]) => {
        const nb = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        nb.addColorStop(0, col);
        nb.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = nb;
        ctx.fillRect(0, 0, W, H);
      });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // 3D 별 캔버스
  useEffect(() => {
    const canvas = starsRef.current;
    if (!canvas) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0, 13);

    // 별점 원형 텍스처
    const starPointCanvas = document.createElement("canvas");
    starPointCanvas.width = 64;
    starPointCanvas.height = 64;
    const spCtx = starPointCanvas.getContext("2d")!;
    const grad = spCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.5, "rgba(255,255,255,0.9)");
    grad.addColorStop(0.85, "rgba(255,255,255,0.15)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    spCtx.fillStyle = grad;
    spCtx.fillRect(0, 0, 64, 64);
    const starPointTexture = new THREE.CanvasTexture(starPointCanvas);
    starPointTexture.needsUpdate = true;

    const starCount = 12000;
    const starRadius = 25;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = starRadius * Math.cbrt(Math.random());
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = Math.random() * Math.PI * 2;
      starPositions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      starPositions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      starPositions[i * 3 + 2] = r * Math.cos(theta);
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.028,
      map: starPointTexture,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const bigStarCount = 180;
    const bigStarPositions = new Float32Array(bigStarCount * 3);
    for (let i = 0; i < bigStarCount; i++) {
      const r = starRadius * Math.cbrt(Math.random());
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = Math.random() * Math.PI * 2;
      bigStarPositions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      bigStarPositions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      bigStarPositions[i * 3 + 2] = r * Math.cos(theta);
    }
    const bigStarGeometry = new THREE.BufferGeometry();
    bigStarGeometry.setAttribute("position", new THREE.BufferAttribute(bigStarPositions, 3));
    const bigStarMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      map: starPointTexture,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const bigStars = new THREE.Points(bigStarGeometry, bigStarMaterial);
    scene.add(bigStars);

    let frameId: number;
    let lastTime = 0;
    const animate = (time: number) => {
      frameId = requestAnimationFrame(animate);
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      stars.rotation.x -= dt / 35;
      stars.rotation.y -= dt / 45;
      bigStars.rotation.x -= dt / 35;
      bigStars.rotation.y -= dt / 45;

      renderer.render(scene, camera);
    };
    animate(0);

    const handleResize = () => {
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden
    >
      <canvas
        ref={gradientRef}
        className="absolute inset-0 w-full h-full"
      />
      <canvas
        ref={starsRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default StarsBackground;
