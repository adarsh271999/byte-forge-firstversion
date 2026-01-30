"use client";

import { Button } from "../components/ui/Button";
import Link from "next/link";
import { Code, Smartphone, Brain, Globe, Database, Layers } from "lucide-react";
import { motion, Variants } from "motion/react";

const services = [
    {
        icon: <Globe className="w-8 h-8 text-primary" />,
        title: "Web Application Development",
        description: "Scalable, high-performance web apps built with Next.js and modern frameworks.",
    },
    {
        icon: <Smartphone className="w-8 h-8 text-secondary" />,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile experiences that users love.",
    },
    {
        icon: <Brain className="w-8 h-8 text-accent" />,
        title: "AI Integration & Solutions",
        description: "Leveraging LLMs and machine learning to build intelligent software.",
    },
    {
        icon: <Code className="w-8 h-8 text-blue-400" />,
        title: "Custom Software Development",
        description: "Bespoke software tailored to your specific business requirements.",
    },
    {
        icon: <Database className="w-8 h-8 text-green-400" />,
        title: "Backend & API Design",
        description: "Robust, secure, and scalable server-side architectures.",
    },
    {
        icon: <Layers className="w-8 h-8 text-orange-400" />,
        title: "UI/UX Design & Consulting",
        description: "Creating intuitive and beautiful user interfaces that drive engagement.",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export default function Services() {
    return (
        <main className="min-h-screen pt-32 pb-20 container mx-auto px-4 overflow-x-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-display">
                        Our <span className="text-secondary">Services</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                        We offer a comprehensive suite of software development services to bring your ideas to life.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.2 }
                            }}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-start gap-4 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                            <div className="p-3 rounded-2xl bg-white/5 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white font-display">{service.title}</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-24 text-center p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10 relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display relative z-10">Need a Custom Solution?</h2>
                    <p className="text-white/80 mb-8 max-w-xl mx-auto relative z-10">
                        Don't see exactly what you need? We specialize in solving unique technical challenges. Let's discuss your project.
                    </p>
                    <Link href="/contact" className="relative z-10">
                        <Button size="lg" variant="primary">Get in Touch</Button>
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
