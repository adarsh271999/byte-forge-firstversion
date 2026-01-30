"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Octahedron, Ring } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function CyberneticNexus() {
    const outerRef = useRef<THREE.Mesh>(null);
    const innerRef = useRef<THREE.Mesh>(null);
    const ringRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();

        if (outerRef.current) {
            // Slow, heavy rotation
            outerRef.current.rotation.x = time * 0.1;
            outerRef.current.rotation.y = time * 0.15;
        }

        if (innerRef.current) {
            // Faster, opposing rotation
            innerRef.current.rotation.x = -time * 0.2;
            innerRef.current.rotation.z = time * 0.1;

            // Pulse scale
            const scale = 1 + Math.sin(time * 3) * 0.1;
            innerRef.current.scale.set(scale, scale, scale);
        }

        if (ringRef.current) {
            ringRef.current.rotation.x = Math.PI / 2 + Math.sin(time * 0.5) * 0.2;
            ringRef.current.rotation.y = time * 0.2;
        }
    });

    return (
        <group scale={1.2}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>

                {/* 1. Outer Wireframe Shell - The "Hardware" */}
                <Icosahedron args={[2, 1]} ref={outerRef}>
                    <meshStandardMaterial
                        color="#FF4500" // Fire Orange
                        wireframe
                        transparent
                        opacity={0.3}
                        side={THREE.DoubleSide}
                        emissive="#FF4500"
                        emissiveIntensity={0.2}
                    />
                </Icosahedron>

                {/* 2. Inner Processing Core - The "AI" */}
                <Octahedron args={[1.2, 0]} ref={innerRef}>
                    <meshStandardMaterial
                        color="#F97316" // Secondary Orange
                        roughness={0.2}
                        metalness={0.8}
                        emissive="#FF4500"
                        emissiveIntensity={0.5}
                        wireframe={false} // Solid object ensures visibility
                    />
                </Octahedron>

                {/* 3. Orbiting Data Ring - The "Connectivity" */}
                <group ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
                    <Ring args={[2.5, 2.6, 64]} >
                        <meshBasicMaterial
                            color="#FFFFFF"
                            transparent
                            opacity={0.1}
                            side={THREE.DoubleSide}
                        />
                    </Ring>
                </group>

                {/* 4. Core Light Source */}
                <pointLight distance={5} intensity={5} color="#FF8C00" />
            </Float>
        </group>
    );
}

export function ForgeScene() {
    return (
        <div className="w-full h-full relative overflow-hidden bg-black/20">
            {/* Added a subtle background glow to separate scene from black void */}
            <div className="absolute inset-0 bg-radial-gradient from-primary/5 to-transparent pointer-events-none" />

            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#FFFFFF" />
                <pointLight position={[-10, -5, -10]} intensity={1} color="#FF4500" />

                <CyberneticNexus />
            </Canvas>
        </div>
    );
}
