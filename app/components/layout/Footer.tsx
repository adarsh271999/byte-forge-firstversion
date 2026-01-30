"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black/20 backdrop-blur-md pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <img
                                src="/logo.png"
                                alt="ByteForge Logo"
                                className="h-10 w-auto object-contain bg-transparent"
                            />
                        </Link>
                        <p className="text-white/60 max-w-md leading-relaxed">
                            Crafting distinct digital experiences. We solve complex problems with
                            elegant software solutions, from web applications to AI systems.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-white/60 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-white/60 hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#" className="text-white/60 hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/60 hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} ByteForge. All rights reserved.
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        {/* Social icons could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
