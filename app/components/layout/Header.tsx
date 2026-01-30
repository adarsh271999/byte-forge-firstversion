"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="w-full max-w-5xl bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/50"
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <span className="text-xl font-bold tracking-tight text-white">
                        Byte<span className="text-primary">Forge</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link href="/contact">
                        <Button variant="primary" size="sm">
                            Contact Us
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-50 text-white/80 hover:text-white"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 mt-4 mx-4 p-6 bg-[#0a0a0a] border border-white/10 rounded-3xl flex flex-col gap-6 md:hidden shadow-2xl"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <Button variant="primary" className="w-full">
                                Contact Us
                            </Button>
                        </Link>
                    </motion.div>
                )}
            </motion.nav>
        </header>
    );
}
