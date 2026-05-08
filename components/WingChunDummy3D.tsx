"use client";

import { useRef, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, Sparkles, OrbitControls, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function LogoDisc() {
  const texture = useLoader(THREE.TextureLoader, "/images/logo.png");
  return (
    <mesh position={[0, 0.98, 0.098]}>
      <circleGeometry args={[0.13, 48]} />
      <meshBasicMaterial map={texture} transparent alphaTest={0.05} depthWrite={false} />
    </mesh>
  );
}

function WoodenDummy({ activeArm }: { activeArm: number | null }) {
  const woodMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#7a3010",
    metalness: 0.15,
    roughness: 0.72,
    emissive: "#3a1408",
    emissiveIntensity: 0.35,
  }), []);

  const goldMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#C9A84C",
    metalness: 0.9,
    roughness: 0.12,
    emissive: "#7a4f00",
    emissiveIntensity: 0.55,
  }), []);

  const darkMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#4a1a08",
    metalness: 0.3,
    roughness: 0.8,
    emissive: "#3a1408",
    emissiveIntensity: 0.2,
  }), []);

  const group    = useRef<THREE.Group>(null);
  const leftRef  = useRef<THREE.Group>(null);
  const rightRef = useRef<THREE.Group>(null);
  const midRef   = useRef<THREE.Group>(null);
  const legRef   = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.35) * 0.4;

    const armRefs = [leftRef, rightRef, midRef, legRef];
    armRefs.forEach((ref, i) => {
      if (!ref.current) return;
      const isActive = activeArm === i;
      const pulse = isActive ? 0.8 + Math.sin(t * 3.5) * 0.4 : 0.35;
      ref.current.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.isMesh && (mesh.material as THREE.MeshStandardMaterial).emissive) {
          (mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse;
        }
      });
    });
  });

  // Strut angle: from mount center (0, -1.32, 0) to beam end (0, -1.58, ±0.58)
  // direction = (0, -0.26, 0.58), length ≈ 0.636
  // rotation.x for front = acos(-0.26/0.636) ≈ 1.985 rad
  const strutAngle = 1.985;
  const strutLen   = 0.64;

  return (
    <group ref={group}>
      {/* ── MAIN TRUNK ─────────────────────────────────── */}
      <mesh material={woodMat} castShadow>
        <cylinderGeometry args={[0.092, 0.108, 2.55, 28]} />
      </mesh>

      {/* School logo on upper trunk face */}
      <Suspense fallback={null}>
        <LogoDisc />
      </Suspense>

      {/* Decorative ring connectors at arm insertion points */}
      {[0.68, 0.05, -0.95].map((y, i) => (
        <mesh key={i} material={goldMat} position={[0, y, 0]}>
          <torusGeometry args={[0.118, 0.022, 12, 36]} />
        </mesh>
      ))}

      {/* ── UPPER LEFT ARM ─────────────────────────────── */}
      {/* Horizontal, extends left, slight downward angle */}
      <group ref={leftRef} position={[-0.11, 0.66, 0]} rotation={[0.12, 0, Math.PI / 2.05]}>
        <mesh material={woodMat} castShadow>
          <cylinderGeometry args={[0.036, 0.040, 0.72, 16]} />
        </mesh>
        <mesh material={darkMat} position={[0, 0.37, 0]}>
          <sphereGeometry args={[0.054, 12, 12]} />
        </mesh>
      </group>

      {/* ── UPPER RIGHT ARM ────────────────────────────── */}
      {/* Mirror of left arm */}
      <group ref={rightRef} position={[0.11, 0.66, 0]} rotation={[0.12, 0, -Math.PI / 2.05]}>
        <mesh material={woodMat} castShadow>
          <cylinderGeometry args={[0.036, 0.040, 0.72, 16]} />
        </mesh>
        <mesh material={darkMat} position={[0, 0.37, 0]}>
          <sphereGeometry args={[0.054, 12, 12]} />
        </mesh>
      </group>

      {/* ── MIDDLE ARM ─────────────────────────────────── */}
      {/* Single arm, lower, slightly offset right, angled forward */}
      <group ref={midRef} position={[0.06, 0.04, 0.1]} rotation={[Math.PI / 2.2, 0, -0.12]}>
        <mesh material={woodMat} castShadow>
          <cylinderGeometry args={[0.036, 0.040, 0.62, 16]} />
        </mesh>
        <mesh material={darkMat} position={[0, 0.33, 0]}>
          <sphereGeometry args={[0.054, 12, 12]} />
        </mesh>
      </group>

      {/* ── LEG ────────────────────────────────────────── */}
      {/* Lower trunk, angled forward and down */}
      <group ref={legRef} position={[0, -0.92, 0.14]} rotation={[0.52, 0, 0]}>
        <mesh material={woodMat} castShadow>
          <cylinderGeometry args={[0.046, 0.034, 0.58, 16]} />
        </mesh>
        <mesh material={darkMat} position={[0, -0.31, 0]}>
          <sphereGeometry args={[0.058, 12, 12]} />
        </mesh>
      </group>

      {/* ── FREE-STANDING BASE ─────────────────────────── */}

      {/* Floor cross beams — side-to-side and front-to-back */}
      <mesh material={darkMat} position={[0, -1.62, 0]}>
        <boxGeometry args={[1.28, 0.072, 0.095]} />
      </mesh>
      <mesh material={darkMat} position={[0, -1.62, 0]}>
        <boxGeometry args={[0.095, 0.072, 1.28]} />
      </mesh>

      {/* Central vertical mounting socket */}
      <mesh material={darkMat} position={[0, -1.46, 0]}>
        <boxGeometry args={[0.175, 0.32, 0.175]} />
      </mesh>

      {/* Diagonal support struts — front, back, left, right */}
      {/* Front strut */}
      <group position={[0, -1.45, 0.29]} rotation={[strutAngle, 0, 0]}>
        <mesh material={darkMat}>
          <boxGeometry args={[0.062, strutLen, 0.062]} />
        </mesh>
      </group>
      {/* Back strut */}
      <group position={[0, -1.45, -0.29]} rotation={[-strutAngle, 0, 0]}>
        <mesh material={darkMat}>
          <boxGeometry args={[0.062, strutLen, 0.062]} />
        </mesh>
      </group>
      {/* Left strut */}
      <group position={[-0.29, -1.45, 0]} rotation={[0, 0, strutAngle]}>
        <mesh material={darkMat}>
          <boxGeometry args={[0.062, strutLen, 0.062]} />
        </mesh>
      </group>
      {/* Right strut */}
      <group position={[0.29, -1.45, 0]} rotation={[0, 0, -strutAngle]}>
        <mesh material={darkMat}>
          <boxGeometry args={[0.062, strutLen, 0.062]} />
        </mesh>
      </group>

      {/* Gold bolt accents at beam ends */}
      {([[0, -1.6, 0.6], [0, -1.6, -0.6], [-0.6, -1.6, 0], [0.6, -1.6, 0]] as [number, number, number][]).map((pos, i) => (
        <mesh key={i} material={goldMat} position={pos}>
          <cylinderGeometry args={[0.026, 0.026, 0.075, 10]} />
        </mesh>
      ))}
      {/* Gold accent strip on mounting socket */}
      <mesh material={goldMat} position={[0, -1.3, 0]}>
        <torusGeometry args={[0.118, 0.016, 10, 32]} />
      </mesh>
    </group>
  );
}

function CanvasContents({ activeArm, isMobile }: { activeArm: number | null; isMobile: boolean }) {
  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[4, 6, 4]}  intensity={4.5} color="#d4a847" castShadow />
      <pointLight position={[-4, 2, 3]} intensity={1.8} color="#c8a030" />
      <pointLight position={[0, -3, 2]} intensity={0.9} color="#ff8800" />

      <Environment preset="warehouse" />

      <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.22}>
        <WoodenDummy activeArm={activeArm} />
      </Float>

      <Sparkles count={isMobile ? 30 : 60} scale={5.5} size={1.4} speed={0.3} color="#c8a030" opacity={0.35} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
        autoRotate
        autoRotateSpeed={0.35}
      />

      {!isMobile && (
        <EffectComposer>
          <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} intensity={1.4} mipmapBlur />
        </EffectComposer>
      )}
    </>
  );
}

export default function WingChunDummy3D({ activeArm = null }: { activeArm?: number | null }) {
  const [crashed, setCrashed] = useState(false);
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

  if (crashed) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3">
        <div className="w-16 h-px bg-gold/30" />
        <p className="font-cinzel text-[10px] tracking-widest text-white/40 uppercase">
          木人樁 · Muk Yan Jong
        </p>
        <div className="w-16 h-px bg-gold/30" />
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0.1, 4.8], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "default" }}
      style={{ background: "transparent" }}
      aria-label="Interactive 3D Wing Chun wooden dummy — drag to rotate"
      onCreated={() => { /* canvas ready */ }}
    >
      <ErrorBoundary fallback={null} onError={() => setCrashed(true)}>
        <CanvasContents activeArm={activeArm} isMobile={isMobile} />
      </ErrorBoundary>
    </Canvas>
  );
}

function ErrorBoundary({ children, fallback, onError }: {
  children: React.ReactNode;
  fallback: React.ReactNode;
  onError?: () => void;
}) {
  return <>{children}</>;
}

