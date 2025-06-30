import { Planet } from "@/app/planets/[slug]/page";
import { useGLTF } from "@react-three/drei";

type Props = {
  planet: Planet;
};

// GLB
export default function PlanetModal({ planet }: Props) {
  const gltf = useGLTF(`/planet_models/${planet.slug}.glb`);
  return <primitive object={gltf.scene} scale={planet.three_config?.scale} />;
}
