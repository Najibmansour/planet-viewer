"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useFBX, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Mesh, MeshStandardMaterial, TextureLoader } from "three";
import PlanetPage, { Planet } from "@/app/planets/[slug]/page";
import PlanetModal from "./planetModal";
import { string } from "three/tsl";

type Props = {
  planet: Planet;
};

export default function PlanetBackground({ planet }: Props) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ alpha: true }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[5, 5, 5]} />
      <PlanetModal planet={planet} />
      <Stars
        radius={100}
        depth={50}
        count={2000}
        factor={3}
        saturation={1}
        fade
        speed={1}
      />

      <OrbitControls enableZoom={true} autoRotateSpeed={0.5} />
    </Canvas>
  );
}
