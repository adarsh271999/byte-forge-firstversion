"use client";

import { motion } from "motion/react";

export function ForgeScene() {
    return (
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-black/40">
            {/* Background enhancement */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

            {/* Central Core Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">

                {/* 1. Orbiting Outer Rings */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={`ring-${i}`}
                        className="absolute inset-0 border border-white/10 rounded-full"
                        style={{ scale: 1 + i * 0.2 }}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20 + i * 5,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: i % 2 === 0 ? "reverse" : "loop",
                        }}
                    >
                        {/* Decorative Node on Ring */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    </motion.div>
                ))}

                {/* 2. Geometric Core (The "Solutions" metaphor) */}
                <motion.div
                    className="relative w-32 h-32"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {/* Square rotated 45deg */}
                    <motion.div
                        className="absolute inset-0 border-2 border-primary/30 rotate-45"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* Square rotated 0deg */}
                    <div className="absolute inset-0 border-2 border-secondary/30" />

                    {/* Inner glowing core */}
                    <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 blur-md rounded-full animate-pulse" />
                </motion.div>

                {/* 3. Floating Data Particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-white/40 rounded-full"
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        animate={{
                            x: Math.cos(i * (Math.PI / 4)) * 120, // Move outward in circle
                            y: Math.sin(i * (Math.PI / 4)) * 120,
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
