"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Geometries() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
            groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh position={[2, 0, 0]} scale={1.5}>
                    <icosahedronGeometry args={[1, 0]} />
                    <MeshDistortMaterial
                        color="#FF4500"
                        speed={2}
                        distort={0.4}
                        metalness={0.8}
                        roughness={0.2}
                        wireframe
                    />
                </mesh>
            </Float>

            <Float speed={1.5} rotationIntensity={1} floatIntensity={0.8}>
                <mesh position={[-2, 1, -1]} scale={1}>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                    <MeshDistortMaterial
                        color="#F97316"
                        speed={3}
                        distort={0.3}
                        metalness={0.8}
                        roughness={0.2}
                        wireframe
                    />
                </mesh>
            </Float>

            <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[0, -2, 1]} scale={0.8}>
                    <octahedronGeometry args={[1, 0]} />
                    <MeshDistortMaterial
                        color="#FF8C00"
                        speed={1}
                        distort={0.5}
                        metalness={0.8}
                        roughness={0.2}
                        wireframe
                    />
                </mesh>
            </Float>
        </group>
    );
}

export function GeometricScene() {
    return (
        <div className="w-full h-full absolute inset-0 -z-10">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Geometries />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
