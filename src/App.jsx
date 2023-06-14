import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Leva, useControls } from "leva";

function App() {
 
  return (
    <>
    <Canvas shadows camera={{ position: [0, 0, 6], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ambientLight intensity={1} />
      <group position-y={-1}>
        <Experience />
      </group>
    </Canvas>
    <Leva />
    </>
  );
}

export default App;
