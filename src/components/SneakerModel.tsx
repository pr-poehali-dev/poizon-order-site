import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

const SneakerMesh: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={[0, -0.5, 0]} scale={1.5}>
        {/* Подошва кроссовка */}
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[2.5, 0.3, 4]} />
          <meshStandardMaterial color="#e8e8e8" />
        </mesh>
        
        {/* Основная часть кроссовка */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.2, 1.2, 3.5]} />
          <meshStandardMaterial color="#6366f1" />
        </mesh>
        
        {/* Носок кроссовка */}
        <mesh position={[0, 0.1, 1.5]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshStandardMaterial color="#5855eb" />
        </mesh>
        
        {/* Задняя часть */}
        <mesh position={[0, 0.2, -1.4]}>
          <boxGeometry args={[2, 1.4, 0.8]} />
          <meshStandardMaterial color="#4f46e5" />
        </mesh>
        
        {/* Язычок */}
        <mesh position={[0, 0.8, 0.5]}>
          <boxGeometry args={[1.5, 0.8, 0.2]} />
          <meshStandardMaterial color="#5855eb" />
        </mesh>
        
        {/* Логотип (галочка Nike) */}
        <mesh position={[0.8, 0.2, 0.8]} rotation={[0, 0, Math.PI / 6]}>
          <boxGeometry args={[0.6, 0.1, 0.05]} />
          <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.3} />
        </mesh>
        
        <mesh position={[0.5, 0.1, 0.8]} rotation={[0, 0, -Math.PI / 3]}>
          <boxGeometry args={[0.4, 0.1, 0.05]} />
          <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.3} />
        </mesh>
        
        {/* Шнурки */}
        {[...Array(5)].map((_, i) => (
          <group key={i}>
            <mesh position={[-0.4, 0.6 - i * 0.2, 0.5 + i * 0.2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.8]} />
              <meshStandardMaterial color="#2d2d2d" />
            </mesh>
            <mesh position={[0.4, 0.6 - i * 0.2, 0.5 + i * 0.2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.8]} />
              <meshStandardMaterial color="#2d2d2d" />
            </mesh>
          </group>
        ))}
        
        {/* Дырочки для шнурков */}
        {[...Array(5)].map((_, i) => (
          <group key={`holes-${i}`}>
            <mesh position={[-0.7, 0.6 - i * 0.2, 0.8 + i * 0.15]}>
              <cylinderGeometry args={[0.05, 0.05, 0.1]} />
              <meshStandardMaterial color="#2d2d2d" />
            </mesh>
            <mesh position={[0.7, 0.6 - i * 0.2, 0.8 + i * 0.15]}>
              <cylinderGeometry args={[0.05, 0.05, 0.1]} />
              <meshStandardMaterial color="#2d2d2d" />
            </mesh>
          </group>
        ))}
      </group>
    </Float>
  );
};

const SneakerModel: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [3, 2, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        <SneakerMesh />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};

export default SneakerModel;