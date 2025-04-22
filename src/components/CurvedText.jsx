import { Text } from "@react-three/drei";

function CurvedText({ radius = 2.6, text = "Choo", y = 1.6 }) {
  const letters = text.split("");
  const angleStep = (Math.PI * 2) / letters.length;

  return (
    <>
      {letters.map((letter, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <Text
            key={i}
            position={[x, y, z]}
            rotation={[0, 0, 0]} // rotate toward center
            fontSize={0.3}
            color="white"
          >
            {letter}
          </Text>
        );
      })}
    </>
  );
}

export default CurvedText;
