import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import pageLeft from "../assets/page-left.jpg"; // Replace with your image path
import pageRight from "../assets/page-right.png"; // Replace with your image path

const Page = ({ position, rotation, texture }) => {
  const pageTexture = useTexture(texture);
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[2, 3, 32, 32]} />
      <meshStandardMaterial map={pageTexture} />
    </mesh>
  );
};

const Book = () => {
  return (
    <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />

      {/* Left Page */}
      <Page
        position={[-1.05, 0, 0]}
        rotation={[0, Math.PI * 0.08, 0]}
        texture={pageLeft}// <-- put Arabic calligraphy image here
      />

      {/* Right Page */}
      <Page
        position={[1.05, 0, 0]}
        rotation={[0, -Math.PI * 0.08, 0]}
        texture={pageRight} // <-- put translation or design here
      />

      {/* Spine */}
      <mesh position={[0, 0, -0.1]}>
        <boxGeometry args={[0.3, 3, 0.6]} />
        <meshStandardMaterial color="#1c3d2f" />
      </mesh>

      {/* Controls */}
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.2} />
    </Canvas>
  );
};

export default Book;
