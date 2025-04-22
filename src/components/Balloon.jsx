import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Balloon({ position, color }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.1;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Balloon;
