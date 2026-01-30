"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    href: string;
    index: number;
}

export function ServiceCard({ title, description, icon, href, index }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
        >
            <div className="absolute top-8 right-8 text-white/20 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300">
                <ArrowUpRight size={24} />
            </div>

            <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit text-primary group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>

            <h3 className="text-2xl font-bold mb-3 text-white font-display">{title}</h3>
            <p className="text-white/60 mb-6 leading-relaxed">{description}</p>

            <Link href={href} className="inline-flex items-center text-sm font-medium text-white/50 hover:text-white transition-colors">
                Learn more <span className="ml-1">→</span>
            </Link>
        </motion.div>
    );
}
