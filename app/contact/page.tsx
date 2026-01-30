"use client";

import { Button } from "../components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        // Simulate form submission
        setTimeout(() => {
            setFormStatus("success");
        }, 1500);
    };

    return (
        <main className="min-h-screen pt-32 pb-20 container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Contact Info */}
                <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
                        Let's <span className="text-accent">Talk</span>
                    </h1>
                    <p className="text-xl text-white/70 mb-12 leading-relaxed">
                        Ready to start your next project? We're here to help. Reach out to us for enquiries, consulting, or just to say hello.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-white/5">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                                <p className="text-white/60">hello@byteforge.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-white/5">
                                <Phone className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                                <p className="text-white/60">+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-white/5">
                                <MapPin className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">Visit Us</h3>
                                <p className="text-white/60">
                                    123 Tech Avenue, Silicon Valley<br />
                                    California, USA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl">
                    {formStatus === "success" ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-20">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                <span className="text-green-400 text-3xl">✓</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-white/60">We'll get back to you within 24 hours.</p>
                            <Button
                                variant="outline"
                                className="mt-8"
                                onClick={() => setFormStatus("idle")}
                            >
                                Send Another
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full mt-2"
                                disabled={formStatus === "submitting"}
                            >
                                {formStatus === "submitting" ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    )}
                </div>

            </div>
        </main>
    );
}
