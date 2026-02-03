"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function ForgeScene() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-black/40">
            {/* 1. Engineering Grid Layer (Schematic Background) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" className="absolute inset-0">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" className="text-primary/30" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                {/* HUD Elements */}
                <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30" />
                <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30" />
                <div className="absolute top-1/2 left-4 w-1 h-12 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
                <div className="absolute top-1/2 right-4 w-1 h-12 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
            </div>

            {/* 2. Neural Data Streams */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`stream-${i}`}
                        className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary/80 to-transparent"
                        style={{
                            width: '30%',
                            left: `${10 + i * 15}%`,
                            top: `${20 + i * 12}%`,
                            opacity: 0.3
                        }}
                        animate={{
                            x: ['-100%', '100%'],
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.5
                        }}
                    />
                ))}
            </div>

            {/* 3. Central Tesseract / Hypercube Representation */}
            <div className="relative w-80 h-80 flex items-center justify-center scale-90 md:scale-100">
                {/* Outer Ring - Schematics */}
                <motion.div
                    className="absolute inset-0 border border-dashed border-white/10 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute -top-1 left-1/2 w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_#F97316]" />
                </motion.div>

                <motion.div
                    className="absolute inset-8 border border-white/5 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute bottom-10 right-0 w-1 h-1 bg-white/50 rounded-full" />
                </motion.div>

                {/* Rotating Geometries (Tesseract Feel) */}
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={`square-${i}`}
                        className="absolute border border-primary/40 box-border backdrop-blur-[1px]"
                        style={{
                            width: 180 - i * 50,
                            height: 180 - i * 50,
                            borderColor: i === 0 ? 'rgba(var(--primary), 0.3)' : 'rgba(var(--primary), 0.6)'
                        }}
                        animate={{
                            rotate: i % 2 === 0 ? 360 : -360,
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            rotate: { duration: 25 + i * 10, repeat: Infinity, ease: "linear" },
                            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i }
                        }}
                    >
                        {/* Corner accents for "Tech" feel */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
                    </motion.div>
                ))}

                {/* Central Core - The "Brain" */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <motion.div
                        className="absolute inset-0 bg-primary/20 blur-md rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="w-8 h-8 bg-primary/90 rounded-lg rotate-45" />
                </div>

                {/* Floating Technical Labels */}
                <motion.div
                    className="absolute -right-10 top-10 text-[10px] font-mono text-primary/80 tracking-widest bg-black/80 px-2 py-1 border-l-2 border-primary"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    AI::CORE_ACTIVE
                </motion.div>
                <div
                    className="absolute -left-16 bottom-20 text-[10px] font-mono text-white/40 tracking-widest"
                >
                    SYS_OPTIMIZED
                </div>
            </div>
        </div>
    );
}
