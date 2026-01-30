"use client";

import { motion } from "motion/react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
    {
        icon: <Search className="w-6 h-6" />,
        title: "Discovery",
        desc: "We dive deep into your business goals and technical challenges.",
    },
    {
        icon: <PenTool className="w-6 h-6" />,
        title: "Design",
        desc: "Crafting intuitive interfaces and robust architectural plans.",
    },
    {
        icon: <Code2 className="w-6 h-6" />,
        title: "Development",
        desc: "Agile engineering with top-tier technologies and best practices.",
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: "Deployment",
        desc: "Seamless launch and ongoing optimization for growth.",
    },
];

export function ProcessSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col items-start"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 text-white">
                            {step.icon}
                        </div>
                        <span className="text-4xl font-bold text-white/10 font-display">0{i + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>

                    {i !== steps.length - 1 && (
                        <div className="hidden lg:block absolute top-6 -right-4 w-8 h-[1px] bg-white/10" />
                    )}
                </motion.div>
            ))}
        </div>
    );
}
