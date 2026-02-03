"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ForgeScene() {
    const [sparkles, setSparkles] = useState<Array<{ left: string; top: string; duration: number; delay: number }>>([]);

    useEffect(() => {
        setSparkles(
            [...Array(5)].map(() => ({
                left: `${50 + (Math.random() - 0.5) * 30}%`,
                top: `${40 + (Math.random() - 0.5) * 30}%`,
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 2,
            }))
        );
    }, []);

    return (
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-black/40">
            {/* Background Enhancement - Reduced opacity slightly to blend better with the black image bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-40" />

            {/* Main Image Container with Float Animation */}
            <motion.div
                className="relative w-full h-full flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                {/* Glow behind the chip area - Masked slightly so it doesn't show edges */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-32 h-32 bg-primary/20 rounded-full blur-[60px] animate-pulse" />

                <div className="relative w-[90%] h-[90%] md:w-[100%] md:h-[100%]">
                    <Image
                        src="/robotic-hand-isolated.png"
                        alt="Robotic Hand holding AI Chip"
                        fill
                        className="object-contain mix-blend-screen md:mix-blend-normal" // mix-blend-screen helps on smaller screens to remove any black box edge, normal on large
                        priority
                    />
                </div>

                {/* Overlay Particle Effects for "Alive" feel */}

                <div className="absolute inset-0 pointer-events-none">
                    {sparkles.map((sparkle, i) => (
                        <motion.div
                            key={`sparkle-${i}`}
                            className="absolute w-1 h-1 bg-primary rounded-full shadow-[0_0_5px_rgba(249,115,22,0.8)]"
                            style={{
                                left: sparkle.left,
                                top: sparkle.top,
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                                y: -20
                            }}
                            transition={{
                                duration: sparkle.duration,
                                repeat: Infinity,
                                delay: sparkle.delay,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
