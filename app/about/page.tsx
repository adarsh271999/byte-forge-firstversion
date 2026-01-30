import { Button } from "../components/ui/Button";
import Link from "next/link";

export default function About() {
    return (
        <main className="min-h-screen pt-32 pb-20 container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                    About <span className="text-primary">ByteForge</span>
                </h1>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8">
                        We are a collective of engineers, designers, and dreamers dedicated to pushing the boundaries of what software can do.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                            <p className="text-white/60">
                                To provide end-to-end software solutions that not only solve problems but create new possibilities for our clients. We believe in code that is clean, performant, and scalable.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                            <p className="text-white/60">
                                To be the forge where the next generation of digital products is hammered into existence. We see a future where AI and human creativity merge seamlessly.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
                    <ul className="space-y-4 mb-12 text-white/70">
                        <li className="flex items-start gap-3">
                            <span className="text-secondary mt-1">✓</span>
                            <span>Expertise in modern tech stacks (Next.js, React, AI).</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-secondary mt-1">✓</span>
                            <span>Design-driven engineering. We care about how it looks and feels.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-secondary mt-1">✓</span>
                            <span>Full-cycle development: from idea to deployment and scaling.</span>
                        </li>
                    </ul>

                    <div className="flex justify-center mt-12">
                        <Link href="/contact">
                            <Button size="lg">Work With Us</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
