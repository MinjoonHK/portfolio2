import { useEffect, useRef } from "react";
import * as THREE from "three";

const FloatingIcons = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
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
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.6;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0, 13);

    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const lights: [number, [number, number, number], number][] = [
      [0xc0e8ff, [5, 5, 5], 9],
      [0xe0c8ff, [-5, 3, 4], 8],
      [0xffffff, [0, -4, 6], 9],
      [0xc0ffee, [-4, -3, 3], 6],
      [0xffe8c0, [3, -4, 2], 6],
    ];
    lights.forEach(([col, pos, i]) => {
      const l = new THREE.PointLight(col as number, i, 30);
      l.position.set(...(pos as [number, number, number]));
      scene.add(l);
    });

    const solidGlassMat = (hex: number) =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(hex),
        emissive: new THREE.Color(hex).multiplyScalar(0.6),
        emissiveIntensity: 0.65,
        metalness: 0,
        roughness: 0.04,
        transmission: 0.1,
        thickness: 2,
        transparent: true,
        opacity: 0.98,
        reflectivity: 1.0,
        clearcoat: 1.0,
        clearcoatRoughness: 0.03,
        envMapIntensity: 4.0,
        ior: 1.6,
      });

    const makeReact = () => {
      const g = new THREE.Group();
      const mat = solidGlassMat(0x60d0ff);
      g.add(
        new THREE.Mesh(
          new THREE.SphereGeometry(0.22, 32, 32),
          new THREE.MeshPhysicalMaterial({
            color: 0x60d0ff,
            emissive: 0x40b8f0,
            emissiveIntensity: 1.0,
            metalness: 0,
            roughness: 0.06,
            clearcoat: 0.9,
          })
        )
      );
      for (let i = 0; i < 3; i++) {
        const pts: THREE.Vector3[] = [];
        for (let j = 0; j <= 80; j++) {
          const a = (j / 80) * Math.PI * 2;
          pts.push(new THREE.Vector3(Math.cos(a) * 0.75, Math.sin(a) * 0.75, 0));
        }
        const tube = new THREE.Mesh(
          new THREE.TubeGeometry(
            new THREE.CatmullRomCurve3(pts, true),
            80,
            0.07,
            10,
            true
          ),
          mat
        );
        // 원을 60° 간격으로 Y축 회전 → 서로 다른 평면에서 교차
        tube.rotation.y = (i * Math.PI) / 3;
        g.add(tube);
      }
      return g;
    };

    const makeBraces = () => {
      const g = new THREE.Group();
      const mat = solidGlassMat(0xcc99ff);
      const bracePath = (flip: boolean) => {
        const s = new THREE.Shape();
        const f = flip ? -1 : 1;
        s.moveTo(f * 0.28, 0.72);
        s.quadraticCurveTo(f * -0.1, 0.72, f * -0.1, 0.46);
        s.lineTo(f * -0.1, 0.2);
        s.quadraticCurveTo(f * -0.38, 0.08, f * -0.44, 0);
        s.quadraticCurveTo(f * -0.38, -0.08, f * -0.1, -0.2);
        s.lineTo(f * -0.1, -0.46);
        s.quadraticCurveTo(f * -0.1, -0.72, f * 0.28, -0.72);
        s.lineTo(f * 0.28, -0.58);
        s.quadraticCurveTo(f * 0.04, -0.58, f * 0.04, -0.46);
        s.lineTo(f * 0.04, -0.22);
        s.quadraticCurveTo(f * -0.2, -0.08, f * -0.28, 0);
        s.quadraticCurveTo(f * -0.2, 0.08, f * 0.04, 0.22);
        s.lineTo(f * 0.04, 0.46);
        s.quadraticCurveTo(f * 0.04, 0.58, f * 0.28, 0.58);
        s.closePath();
        return s;
      };
      const ext = {
        depth: 0.3,
        bevelEnabled: true,
        bevelSize: 0.05,
        bevelThickness: 0.05,
        bevelSegments: 8,
      };
      const lm = new THREE.Mesh(
        new THREE.ExtrudeGeometry(bracePath(false), ext),
        mat
      );
      lm.position.set(-0.68, 0, -0.15);
      const rm = new THREE.Mesh(
        new THREE.ExtrudeGeometry(bracePath(true), ext),
        mat
      );
      rm.position.set(0.68, 0, -0.15);
      g.add(lm, rm);
      return g;
    };

    const makeCylinder = () => {
      const g = new THREE.Group();
      const mat = solidGlassMat(0x55eebb);
      const rimMat = new THREE.MeshPhysicalMaterial({
        color: 0x55eebb,
        emissive: 0x33cc99,
        emissiveIntensity: 0.5,
        metalness: 0,
        roughness: 0.08,
        clearcoat: 0.9,
        transparent: true,
        opacity: 0.95,
      });
      for (let i = 0; i < 3; i++) {
        const y = (i - 1) * 0.52;
        const body = new THREE.Mesh(
          new THREE.CylinderGeometry(0.48, 0.48, 0.28, 48),
          mat
        );
        body.position.y = y;
        g.add(body);
        const td = new THREE.Mesh(
          new THREE.CylinderGeometry(0.48, 0.48, 0.04, 48),
          rimMat
        );
        td.position.y = y + 0.16;
        g.add(td);
        const bd = new THREE.Mesh(
          new THREE.CylinderGeometry(0.48, 0.48, 0.04, 48),
          rimMat
        );
        bd.position.y = y - 0.16;
        g.add(bd);
      }
      return g;
    };

    const makeHtmlTag = () => {
      const g = new THREE.Group();
      const mat = solidGlassMat(0xffcc44);
      const ext = {
        depth: 0.3,
        bevelEnabled: true,
        bevelSize: 0.055,
        bevelThickness: 0.055,
        bevelSegments: 8,
      };

      const chevronShape = (pointsLeft: boolean) => {
        const s = new THREE.Shape();
        const f = pointsLeft ? 1 : -1;
        s.moveTo(f * 0.44, 0.72);
        s.lineTo(f * -0.44, 0.0);
        s.lineTo(f * 0.44, -0.72);
        s.lineTo(f * 0.44, -0.56);
        s.lineTo(f * -0.18, 0.0);
        s.lineTo(f * 0.44, 0.56);
        s.closePath();
        return s;
      };

      const lMesh = new THREE.Mesh(
        new THREE.ExtrudeGeometry(chevronShape(true), ext),
        mat
      );
      lMesh.position.set(-0.85, 0, -0.15);

      const rMesh = new THREE.Mesh(
        new THREE.ExtrudeGeometry(chevronShape(false), ext),
        mat
      );
      rMesh.position.set(0.85, 0, -0.15);

      const sw = 0.11;
      const slashHalfH = 0.38;
      const slashShape = new THREE.Shape();
      slashShape.moveTo(-sw, -slashHalfH);
      slashShape.lineTo(sw, -slashHalfH);
      slashShape.lineTo(sw, slashHalfH);
      slashShape.lineTo(-sw, slashHalfH);
      slashShape.closePath();
      const slashMesh = new THREE.Mesh(
        new THREE.ExtrudeGeometry(slashShape, ext),
        mat
      );
      slashMesh.position.set(0, 0, -0.15);
      slashMesh.rotation.z = -Math.PI / 4;

      g.add(lMesh, slashMesh, rMesh);
      return g;
    };

    const makeCloud = () => {
      const g = new THREE.Group();
      const mat = solidGlassMat(0xffbbaa);
      const shape = new THREE.Shape();
      shape.absarc(-0.54, -0.18, 0.22, Math.PI, Math.PI * 1.5, false);
      shape.absarc(0.54, -0.18, 0.22, Math.PI * 1.5, 0, false);
      shape.absarc(0.54, 0.08, 0.26, 0, Math.PI, false);
      shape.absarc(0.18, 0.14, 0.12, 0, Math.PI, true);
      shape.absarc(0.06, 0.16, 0.46, 0, Math.PI, false);
      shape.absarc(-0.26, 0.1, 0.12, 0, Math.PI, true);
      shape.absarc(-0.5, 0.04, 0.28, 0, Math.PI, false);
      shape.closePath();
      const mesh = new THREE.Mesh(
        new THREE.ExtrudeGeometry(shape, {
          depth: 0.52,
          bevelEnabled: true,
          bevelSize: 0.09,
          bevelThickness: 0.09,
          bevelSegments: 12,
        }),
        mat
      );
      mesh.position.z = -0.26;
      g.add(mesh);
      return g;
    };

    const makeSpringBoot = () => {
      const g = new THREE.Group();

      // inner: 육각형 앞면이 카메라를 향하도록 (로컬 Y+ = 앞면)
      // 모든 요소를 Y축 기준으로 설계 후 X로 90° 회전
      const inner = new THREE.Group();
      inner.rotation.x = Math.PI / 2; // 로컬 Y → 월드 Z (카메라 방향)
      g.add(inner);

      // 육각형: Y축 방향 실린더, flat-top은 Y로 30° 회전
      const hexMat = solidGlassMat(0x6db33f);
      const hex = new THREE.Mesh(
        new THREE.CylinderGeometry(0.88, 0.88, 0.3, 6),
        hexMat
      );
      hex.rotation.y = Math.PI / 6;
      inner.add(hex);

      const iconMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        emissive: 0xaaffaa,
        emissiveIntensity: 0.7,
        roughness: 0.04,
        clearcoat: 1.0,
      });

      // 파워버튼 원호: 앞면(Y=0.17)의 XZ 평면에 그림
      // 위쪽(-Z 방향 = 월드 +Y = 위) gap
      const ringR = 0.4;
      const gapHalf = 0.46;
      const startA = Math.PI / 2 + gapHalf;
      const endA = Math.PI / 2 + Math.PI * 2 - gapHalf;
      const steps = 64;
      const ringPts: THREE.Vector3[] = [];
      for (let i = 0; i <= steps; i++) {
        const a = startA + (i / steps) * (endA - startA);
        ringPts.push(new THREE.Vector3(Math.cos(a) * ringR, 0.17, -Math.sin(a) * ringR));
      }
      inner.add(new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3(ringPts), steps, 0.062, 10, false),
        iconMat
      ));

      // 세로 선: -Z 방향이 위쪽
      const linePts = [
        new THREE.Vector3(0, 0.17, -0.18),
        new THREE.Vector3(0, 0.17, -0.54),
      ];
      inner.add(new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3(linePts), 4, 0.062, 10, false),
        iconMat
      ));

      return g;
    };

    const fov = (45 * Math.PI) / 180;
    const camZ = 13;
    let boundsY = Math.tan(fov / 2) * camZ;
    let boundsX = boundsY * (W / H);

    const zones = [
      { cx: 0, cy: 0.5, hw: 2.6, hh: 2.0 },
      { cx: 0, cy: -2.8, hw: 2.2, hh: 0.7 },
    ];

    const inAnyZone = (x: number, y: number) =>
      zones.some(
        (z) => Math.abs(x - z.cx) < z.hw && Math.abs(y - z.cy) < z.hh
      );

    const randomPosOutsideZones = () => {
      let x: number, y: number;
      do {
        x = (Math.random() * 2 - 1) * boundsX;
        y = (Math.random() * 2 - 1) * boundsY;
      } while (inAnyZone(x, y));
      return { x, y };
    };

    const iconDefs = [
      { build: makeReact },
      { build: makeBraces },
      { build: makeCylinder },
      { build: makeCloud },
      { build: makeHtmlTag },
      { build: makeSpringBoot },
    ];

    const groups: THREE.Group[] = [];
    iconDefs.forEach(({ build }) => {
      const g = build();
      const { x, y } = randomPosOutsideZones();
      g.position.set(x, y, 0);

      const angle = Math.random() * Math.PI * 2;
      const speed = 0.004 + Math.random() * 0.003;
      (g as THREE.Group & { userData: Record<string, number> }).userData = {
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        rx: 0.001 + Math.random() * 0.002,
        ry: 0.002 + Math.random() * 0.002,
        rz: 0.001 + Math.random() * 0.001,
        twinkleOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.8 + Math.random() * 1.2,
      };
      scene.add(g);
      groups.push(g);
    });

    const COLLISION_RADIUS = 1.6;

    let frameId: number;
    let lastTime = 0;
    const animate = (time: number) => {
      frameId = requestAnimationFrame(animate);
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      groups.forEach((g) => {
        const ud = (g as THREE.Group & { userData: Record<string, number> })
          .userData;
        g.rotation.x += ud.rx;
        g.rotation.y += ud.ry;
        g.rotation.z += ud.rz;

        // twinkling: emissiveIntensity 맥박
        ud.twinkleOffset += ud.twinkleSpeed * dt;
        const twinkle = 0.5 + 0.35 * Math.sin(ud.twinkleOffset);
        g.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mat = (child as THREE.Mesh).material as THREE.MeshPhysicalMaterial;
            if (mat.emissiveIntensity !== undefined) {
              mat.emissiveIntensity = twinkle;
            }
          }
        });

        g.position.x += ud.vx;
        g.position.y += ud.vy;

        if (g.position.x > boundsX) { g.position.x = boundsX; ud.vx *= -1; }
        if (g.position.x < -boundsX) { g.position.x = -boundsX; ud.vx *= -1; }
        if (g.position.y > boundsY) { g.position.y = boundsY; ud.vy *= -1; }
        if (g.position.y < -boundsY) { g.position.y = -boundsY; ud.vy *= -1; }

        const textZone = zones[0];
        if (
          Math.abs(g.position.x - textZone.cx) < textZone.hw &&
          Math.abs(g.position.y - textZone.cy) < textZone.hh
        ) {
          const toX =
            (g.position.x >= textZone.cx ? textZone.hw : -textZone.hw) -
            (g.position.x - textZone.cx);
          const toY =
            (g.position.y >= textZone.cy ? textZone.hh : -textZone.hh) -
            (g.position.y - textZone.cy);
          if (Math.abs(toX) < Math.abs(toY)) {
            g.position.x += toX * 0.15;
            ud.vx *= -1;
          } else {
            g.position.y += toY * 0.15;
            ud.vy *= -1;
          }
        }
      });

      for (let i = 0; i < groups.length; i++) {
        for (let j = i + 1; j < groups.length; j++) {
          const a = groups[i];
          const b = groups[j];
          const dx = b.position.x - a.position.x;
          const dy = b.position.y - a.position.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < COLLISION_RADIUS && dist > 0.001) {
            const overlap = (COLLISION_RADIUS - dist) / 2;
            const nx = dx / dist;
            const ny = dy / dist;

            a.position.x -= nx * overlap;
            a.position.y -= ny * overlap;
            b.position.x += nx * overlap;
            b.position.y += ny * overlap;

            const udA = (a as THREE.Group & { userData: Record<string, number> }).userData;
            const udB = (b as THREE.Group & { userData: Record<string, number> }).userData;
            const dvx = udA.vx - udB.vx;
            const dvy = udA.vy - udB.vy;
            const dot = dvx * nx + dvy * ny;

            if (dot > 0) {
              udA.vx -= dot * nx;
              udA.vy -= dot * ny;
              udB.vx += dot * nx;
              udB.vy += dot * ny;
            }
          }
        }
      }

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
      boundsY = Math.tan(fov / 2) * camZ;
      boundsX = boundsY * (nw / nh);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden
    />
  );
};

export default FloatingIcons;
