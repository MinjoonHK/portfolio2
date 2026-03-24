import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Preload, useGLTF } from "@react-three/drei";

/** GLTF가 올 때까지 보이는 정적 실루엣 — 스피너/퍼센트 없이 레이아웃만 유지 */
const EarthPlaceholder = () => (
  <Html center>
    <div
      className="pointer-events-none select-none rounded-full shrink-0"
      style={{
        width: "min(42vw, 320px)",
        height: "min(42vw, 320px)",
        maxWidth: "100%",
        background:
          "radial-gradient(circle at 32% 28%, rgba(130,170,255,0.45), rgba(40,80,180,0.35) 42%, rgba(12,28,72,0.55) 70%, rgba(6,14,40,0.75) 100%)",
        boxShadow:
          "inset -12px -18px 36px rgba(0,0,0,0.45), 0 0 60px rgba(40,100,200,0.15)",
      }}
      aria-hidden
    />
  </Html>
);

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={4.2}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      className="w-full h-full"
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-6, 4, 10],
      }}
    >
      <Suspense fallback={<EarthPlaceholder />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
