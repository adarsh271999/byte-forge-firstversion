"use client";

import { motion } from "motion/react";

const clients = [
    "TechFlow",
    "NeuroNet",
    "DataCore",
    "Vertex",
    "CloudScale",
    "Omega Systems",
    "BlueShift",
    "Quantum Logic",
];

export function ClientLogos() {
    return (
        <section className="w-full py-12 border-b border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-medium text-white/40 uppercase tracking-widest">Trusted by industry leaders</p>
            </div>

            <div className="relative w-full overflow-hidden mask-gradient">
                {/* Gradient Masks for smooth fade in/out */}
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-black via-black/80 to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-black via-black/80 to-transparent" />

                <div className="flex">
                    <motion.div
                        className="flex gap-16 md:gap-24 whitespace-nowrap items-center"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40,
                        }}
                    >
                        {/* Duplicate the array 4 times to ensure smooth infinite scroll on wide screens */}
                        {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
                            <span
                                key={i}
                                className="text-xl md:text-2xl font-bold text-white/30 hover:text-white/60 transition-colors duration-300 font-display cursor-default"
                            >
                                {client}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
