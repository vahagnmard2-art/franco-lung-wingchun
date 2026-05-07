"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, OrbitControls, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const goldMat = new THREE.MeshStandardMaterial({
  color: "#C9A84C",
  metalness: 0.9,
  roughness: 0.12,
  emissive: "#7a4f00",
  emissiveIntensity: 0.55,
});

const darkMat = new THREE.MeshStandardMaterial({
  color: "#1a1000",
  metalness: 0.6,
  roughness: 0.5,
});

const boardMat = new THREE.MeshStandardMaterial({
  color: "#2a1a00",
  metalness: 0.3,
  roughness: 0.7,
});

// Arms: which arm index is "active" comes from parent via prop
function WoodenDummy({ activeArm }: { activeArm: number | null }) {
  const group = useRef<THREE.Group>(null);
  const leftArmRef  = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const midArmRef   = useRef<THREE.Group>(null);
  const legRef      = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;

    // Gentle idle sway
    group.current.rotation.y = Math.sin(t * 0.35) * 0.4;

    // Arm pulse: cycle gold emissive on the active arm
    const armRefs = [leftArmRef, rightArmRef, midArmRef, legRef];
    armRefs.forEach((ref, i) => {
      if (!ref.current) return;
      const isActive = activeArm === i;
      const pulse = isActive ? 0.8 + Math.sin(t * 3.5) * 0.4 : 0;
      ref.current.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mat = (obj as THREE.Mesh).material as THREE.MeshStandardMaterial;
          if (mat.color.getHex() === goldMat.color.getHex() || mat.emissive) {
            mat.emissiveIntensity = isActive ? pulse : 0.55;
          }
        }
      });
    });
  });

  return (
    <group ref={group}>
      {/* ── Wall mounting board ── */}
      <mesh material={boardMat} position={[0, 1.55, -0.18]}>
        <boxGeometry args={[1.1, 0.18, 0.12]} />
      </mesh>
      {/* Gold accent strips on board */}
      <mesh material={goldMat} position={[0, 1.62, -0.12]}>
        <boxGeometry args={[1.0, 0.025, 0.015]} />
      </mesh>
      <mesh material={goldMat} position={[0, 1.48, -0.12]}>
        <boxGeometry args={[1.0, 0.025, 0.015]} />
      </mesh>
      {/* Two mounting bolts */}
      {[-0.38, 0.38].map((x, i) => (
        <mesh key={i} material={goldMat} position={[x, 1.55, -0.12]}>
          <cylinderGeometry args={[0.025, 0.025, 0.04, 10]} />
        </mesh>
      ))}

      {/* ── Main post ── */}
      <mesh material={goldMat} castShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[0.09, 0.11, 2.6, 24]} />
      </mesh>

      {/* Ring connectors */}
      {[0.75, 0.1, -0.85].map((y, i) => (
        <mesh key={i} material={darkMat} position={[0, y, 0]}>
          <torusGeometry args={[0.12, 0.028, 14, 36]} />
        </mesh>
      ))}

      {/* ── Upper left arm ── */}
      <group ref={leftArmRef} position={[-0.44, 0.65, 0]} rotation={[0, 0, Math.PI / 2.1]}>
        <mesh material={goldMat}>
          <cylinderGeometry args={[0.038, 0.038, 0.74, 16]} />
        </mesh>
        <mesh material={darkMat} position={[0, 0.39, 0]}>
          <sphereGeometry args={[0.058, 14, 14]} />
        </mesh>
      </group>

      {/* ── Upper right arm ── */}
      <group ref={rightArmRef} position={[0.44, 0.65, 0]} rotation={[0, 0, -Math.PI / 2.1]}>
        <mesh material={goldMat}>
          <cylinderGeometry args={[0.038, 0.038, 0.74, 16]} />
        </mesh>
        <mesh material={darkMat} position={[0, 0.39, 0]}>
          <sphereGeometry args={[0.058, 14, 14]} />
        </mesh>
      </group>

      {/* ── Middle (forward) arm ── */}
      <group ref={midArmRef} position={[0, 0.08, 0.18]} rotation={[Math.PI / 2.4, 0, 0]}>
        <mesh material={goldMat}>
          <cylinderGeometry args={[0.038, 0.038, 0.65, 16]} />
        </mesh>
        <mesh material={darkMat} position={[0, 0.35, 0]}>
          <sphereGeometry args={[0.058, 14, 14]} />
        </mesh>
      </group>

      {/* ── Leg ── */}
      <group ref={legRef} position={[0, -1.08, 0.2]} rotation={[0.55, 0, 0]}>
        <mesh material={goldMat}>
          <cylinderGeometry args={[0.048, 0.034, 0.56, 16]} />
        </mesh>
        <mesh material={darkMat} position={[0, -0.31, 0]}>
          <sphereGeometry args={[0.062, 14, 14]} />
        </mesh>
      </group>

      {/* ── Base platform ── */}
      <mesh material={darkMat} position={[0, -1.44, 0]}>
        <cylinderGeometry args={[0.46, 0.52, 0.12, 28]} />
      </mesh>
      <mesh material={goldMat} position={[0, -1.38, 0]}>
        <torusGeometry args={[0.48, 0.018, 10, 36]} />
      </mesh>
      <mesh material={goldMat} position={[0, -1.49, 0]}>
        <torusGeometry args={[0.48, 0.008, 8, 36]} />
      </mesh>
    </group>
  );
}

export default function WingChunDummy3D({ activeArm = null }: { activeArm?: number | null }) {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 4.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[4, 6, 4]}  intensity={4}   color="#d4a847" castShadow />
      <pointLight position={[-4, 2, 3]} intensity={1.5} color="#c8a030" />
      <pointLight position={[0, -3, 2]} intensity={0.8} color="#ff8800" />

      <Environment preset="warehouse" />

      <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.22}>
        <WoodenDummy activeArm={activeArm} />
      </Float>

      <Sparkles
        count={70}
        scale={5.5}
        size={1.5}
        speed={0.3}
        color="#c8a030"
        opacity={0.4}
      />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
        autoRotate
        autoRotateSpeed={0.35}
      />

      {/* Bloom — makes gold emissive material actually glow */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.3}
          luminanceSmoothing={0.9}
          intensity={1.4}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
