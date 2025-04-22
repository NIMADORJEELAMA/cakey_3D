import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function FlickeringFlame({ position }) {
  const flameRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    flameRef.current.scale.y = 1 + Math.sin(t * 20) * 0.1;
    flameRef.current.material.emissiveIntensity = 1.5 + Math.sin(t * 15) * 0.5;
  });

  return (
    <mesh ref={flameRef} position={position}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial
        color="orange"
        emissive="orange"
        emissiveIntensity={2}
      />
    </mesh>
  );
}

export default FlickeringFlame;
