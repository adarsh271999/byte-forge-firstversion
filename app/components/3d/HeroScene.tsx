"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points, Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function NeuralNetwork() {
    const pointsRef = useRef<THREE.Points>(null);

    // Generate random points
    const count = 200;
    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;     // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
        }
        return positions;
    }, []);

    // Animation for rotation
    useFrame((state, delta) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.x -= delta / 15;
            pointsRef.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group>
            {/* Nodes */}
            <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#FF4500" // Fire Orange
                    size={0.15}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>

            {/* Connections - purely visual approximation using Lines would be expensive to calc per frame in JS, 
                so we use a static set of lines or a second point cloud for density */}
            <Points positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#F97316" // Secondary Orange
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.4}
                />
            </Points>
        </group>
    );
}

function Connections() {
    const count = 40; // Fewer lines for performance
    const lines = useMemo(() => {
        const points = [];
        for (let i = 0; i < count; i++) {
            const start = new THREE.Vector3((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 5);
            const end = new THREE.Vector3((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 5);
            points.push(start);
            points.push(end);
        }
        return new THREE.BufferGeometry().setFromPoints(points);
    }, []);

    const ref = useRef<THREE.LineSegments>(null);
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta / 25;
        }
    })

    return (
        <lineSegments geometry={lines} ref={ref}>
            <lineBasicMaterial color="#FF4500" transparent opacity={0.15} />
        </lineSegments>
    )
}

export function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full pointer-events-none bg-black">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                gl={{ alpha: false, antialias: true }}
                dpr={[1, 2]} // Optimization
            >
                <color attach="background" args={["#000000"]} />
                <ambientLight intensity={0.5} />
                <NeuralNetwork />
                <Connections />
                <fog attach="fog" args={['#000000', 5, 20]} />
            </Canvas>
        </div>
    );
}
