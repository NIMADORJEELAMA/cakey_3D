// import { Billboard } from "@react-three/drei";
// import { useFrame, useThree } from "@react-three/fiber";
// import { useRef } from "react";

// function BillboardText({ children, position, ...props }) {
//   const textRef = useRef();
//   const { camera } = useThree();

//   useFrame(() => {
//     textRef.current.lookAt(camera.position);
//   });

//   return (
//     <>
//       <Text ref={textRef} position={position} {...props}>
//         {children}
//       </Text>
//     </>
//   );
// }

// export default BillboardText;

import React from "react";

const BillboardText = () => {
  return <div>BillboardText</div>;
};

export default BillboardText;
