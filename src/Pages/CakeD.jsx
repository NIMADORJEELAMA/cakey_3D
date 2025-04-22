import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { CakeModel } from "./CakeModel";
import { Sparkles } from "@react-three/drei";
function CakeD() {
  return (
    <div style={{ height: "100vh", background: "#000" }}>
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <Sparkles
          count={100}
          scale={[10, 10, 10]}
          speed={1}
          size={2}
          color="white"
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} />
        <Stars />
        <CakeModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default CakeD;
