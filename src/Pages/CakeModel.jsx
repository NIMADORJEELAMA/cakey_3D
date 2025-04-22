import React from "react";
import FlickeringFlame from "../components/FlickeringFlame";
import Balloon from "../components/Balloon";
import { Text } from "@react-three/drei";
import CurvedText from "../components/CurvedText";
// import BillboardText from "../components/BillBoard";
import CakeSlicer from "../components/CakeSlicer";

export function CakeModel() {
  return (
    <group>
      {/* Bottom Layer */}

      {/* Bottom Layer */}
      {/* <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[2.5, 2.5, 1, 32]} />
        <meshStandardMaterial color="#d291bc" />
      </mesh> */}
      <CakeSlicer />

      {/* Text on Bottom Layer */}
      <Text
        position={[0, 2, 2]}
        fontSize={0.4}
        color="white"
        outlineWidth={0.02}
        outlineColor="#E83F25"
        anchorX="center"
        anchorY="middle"
      >
        April_21
      </Text>
      <CurvedText text="April 21" radius={2.6} y={1.6} />

      {/* Middle Layer */}
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[2, 2, 1, 32]} />
        <meshStandardMaterial color="white" />
        <Text
          position={[0, 6, 0]}
          fontSize={0.5}
          color="gold"
          anchorX="center"
          anchorY="middle"
        >
          Happy Birthday!
        </Text>
      </mesh>
      {/* <Balloon position={[-2, 6, 0]} color="red" /> */}
      {/* Top Layer */}
      <mesh position={[0, 3, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 1, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* <Balloon position={[-2, 6, 0]} color="red" /> */}
      {/* Candle */}
      <mesh position={[0, 4, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
      {/* Flame */}
      <mesh position={[0, 4.6, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          emissive="orange"
          color="orange"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}
