"use client";

import { Button } from "../components/ui/Button";
import Link from "next/link";
import { motion, Variants } from "motion/react";
import { GeometricScene } from "../components/3d/GeometricScene";
import { CheckCircle2, Zap, Shield, Users } from "lucide-react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

export default function About() {
    return (
        <main className="min-h-screen pt-24 pb-20 overflow-hidden">

            {/* Hero Section with 3D Background */}
            <section className="relative w-full h-[60vh] flex items-center justify-center">
                <GeometricScene />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight font-display"
                        >
                            Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Code</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed"
                        >
                            We are architects of the digital age, building the infrastructure for tomorrow's innovations.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Origin Story */}
            <section className="py-24 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 border-l-2 border-primary/30 pl-8 py-4 relative"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary animate-pulse" />
                        <h2 className="text-4xl font-bold mb-6 font-display">The Origin</h2>
                        <p className="text-lg text-white/70 leading-relaxed mb-6">
                            ByteForge began with a simple premise: software shouldn't just function; it should inspire. Founded by a group of senior engineers frustrated with "good enough" solutions, we set out to create an agency where engineering excellence and aesthetic mastery coexist.
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed">
                            Today, we are a global team of specialists—from AI researchers to UI artists—united by a single mission: to forge digital products that define their categories.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Our Code of Conduct</h2>
                        <p className="text-white/60">The principles that drive every line we write.</p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { icon: <CheckCircle2 className="text-primary" />, title: "Precision", desc: "We obsess over details. Every pixel, every interaction, and every database query is optimized." },
                            { icon: <Zap className="text-secondary" />, title: "Speed", desc: "Performance is a feature. We build systems that are lightning-fast and responsive." },
                            { icon: <Shield className="text-accent" />, title: "Integrity", desc: "Transparent communication and honest engineering. No hidden debt, no shortcuts." },
                            { icon: <Users className="text-blue-400" />, title: "Collaboration", desc: "We don't work for you; we work with you. Your vision becomes our blueprint." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-primary/20 hover:bg-white/5 transition-all duration-300"
                            >
                                <div className="mb-4 p-3 rounded-xl bg-white/5 w-fit">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-display">{item.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Vision / Future */}
            <section className="py-24 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Forging What's Next</h2>
                    <p className="text-xl text-white/70 mb-10 leading-relaxed font-light">
                        We believe the future belongs to those who build it. Whether you're a startup disrupting an industry or an enterprise reinventing itself, we have the tools and talent to make it happen.
                    </p>

                    <Link href="/contact">
                        <Button size="lg" variant="primary" className="shadow-2xl shadow-primary/20">
                            Start Your Journey
                        </Button>
                    </Link>
                </motion.div>
            </section>

        </main>
    );
}
