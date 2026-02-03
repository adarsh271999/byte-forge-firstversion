"use client";

import { motion } from "motion/react";

const keywords = [
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Architecture",
    "Scalable Systems",
    "Next.js Development",
    "UX/UI Design",
    "Mobile Engineering",
    "Digital Transformation",
];

export function Marquee() {
    return (
        <div className="relative w-full overflow-hidden bg-black/50 border-y border-white/5 py-6">
            <div className="flex">
                <motion.div
                    className="flex gap-16 whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 50,
                    }}
                >
                    {[...keywords, ...keywords, ...keywords].map((word, i) => (
                        <span
                            key={i}
                            className="text-2xl md:text-3xl font-bold text-white/80 uppercase tracking-widest font-display"
                        >
                            {word}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
