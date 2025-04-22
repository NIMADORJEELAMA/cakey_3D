// import { useState } from "react";

// const SLICE_COUNT = 8;

// function CakeSlicer() {
//   const [cutSlices, setCutSlices] = useState(Array(SLICE_COUNT).fill(false));

//   const handleSliceClick = (index) => {
//     setCutSlices((prev) => {
//       const updated = [...prev];
//       updated[index] = true; // Hide this slice
//       return updated;
//     });
//   };

//   return (
//     <group position={[0, 1, 0]}>
//       {[...Array(SLICE_COUNT)].map((_, i) => {
//         if (cutSlices[i]) return null;

//         const angle = (i / SLICE_COUNT) * Math.PI * 2;
//         const rotation = angle + Math.PI / SLICE_COUNT;

//         return (
//           <mesh
//             key={i}
//             rotation={[0, angle, 0]}
//             position={[0, 0, 0]}
//             onClick={() => handleSliceClick(i)}
//           >
//             <cylinderGeometry
//               args={[2.5, 2.5, 1, 32, 1, false, 0, (2 * Math.PI) / SLICE_COUNT]}
//             />
//             <meshStandardMaterial color="#d291bc" />
//           </mesh>
//         );
//       })}
//     </group>
//   );
// }

// export default CakeSlicer;

import { useState } from "react";
import { useSprings, a } from "@react-spring/three";
import { Html } from "@react-three/drei";

const SLICE_COUNT = 8;

function CakeSlicer() {
  const [cutSlices, setCutSlices] = useState(Array(SLICE_COUNT).fill(false));

  // Compute target positions based on cut state
  const springs = useSprings(
    SLICE_COUNT,
    [...Array(SLICE_COUNT)].map((_, i) => {
      const angle = (i / SLICE_COUNT) * Math.PI * 2;
      const isCut = cutSlices[i];
      const target = isCut
        ? [Math.sin(angle) * 4, 3, Math.cos(angle) * 4]
        : [0, 0, 0];

      return {
        position: target,
        config: { mass: 1, tension: 180, friction: 12 },
      };
    })
  );

  const handleClick = (index) => {
    if (!cutSlices[index]) {
      setCutSlices((prev) => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
      });
    }
  };

  const resetSlices = () => {
    setCutSlices(Array(SLICE_COUNT).fill(false));
  };

  return (
    <>
      {/* Reset Button */}
      <Html position={[0, 15, 0]}>
        <button
          onClick={resetSlices}
          style={{
            padding: "8px 12px",
            fontSize: "14px",
            background: "#ff7f7f",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </Html>

      {/* Animated Slices */}
      <group position={[0, 1, 0]}>
        {springs.map((spring, i) => {
          const angle = (i / SLICE_COUNT) * Math.PI * 2;

          return (
            <a.mesh
              key={i}
              rotation={[0, angle, 0]}
              position={spring.position}
              onClick={() => handleClick(i)}
            >
              <cylinderGeometry
                args={[
                  2.5,
                  2.5,
                  1,
                  64,
                  1,
                  false,
                  0,
                  (2 * Math.PI) / SLICE_COUNT,
                ]}
              />
              <meshStandardMaterial color="red" />
            </a.mesh>
          );
        })}
      </group>
    </>
  );
}

export default CakeSlicer;
