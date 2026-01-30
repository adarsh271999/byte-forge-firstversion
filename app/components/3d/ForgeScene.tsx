"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points, Float } from "@react-three/drei";
import { useState, useRef } from "react";
import * as THREE from "three";

function Sparks(props: any) {
    const ref = useRef<THREE.Points>(null);
    const [sphere] = useState(() => {
        const coords = new Float32Array(500 * 3);
        for (let i = 0; i < 500; i++) {
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 1.5 * Math.cbrt(Math.random());

            coords[i * 3] = r * Math.sin(phi) * Math.cos(theta); // x
            coords[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); // y
            coords[i * 3 + 2] = r * Math.cos(phi); // z
        }
        return coords;
    });

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#3b82f6"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

function GlowingOrb() {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
            <mesh>
                <sphereGeometry args={[0.8, 32, 32]} />
                <meshStandardMaterial
                    color="#0a0a0a"
                    emissive="#3b82f6"
                    emissiveIntensity={0.5}
                    roughness={0.1}
                    metalness={0.8}
                    wireframe
                />
            </mesh>
        </Float>
    )
}


export function ForgeScene() {
    return (
        <div className="w-full h-full relative">
            <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#ec4899" />
                <Sparks />
                <GlowingOrb />
            </Canvas>
        </div>
    );
}
