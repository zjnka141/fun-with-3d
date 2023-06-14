import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Leva, useControls } from "leva";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";

function App() {
 
  return (
    <>
    <Canvas shadows camera={{ position: [0, 0, 6], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ambientLight intensity={1} />
      <group position-y={-1}>
      <Suspense fallback={null}>
        <Experience />
       </Suspense>
      </group>
    </Canvas>
    <Loader />

    <Leva />
    </>
  );
}

export default App;
