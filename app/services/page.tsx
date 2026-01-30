import { Button } from "../components/ui/Button";
import Link from "next/link";
import { Code, Smartphone, Brain, Globe, Database, Layers } from "lucide-react";

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

export default function Services() {
    return (
        <main className="min-h-screen pt-32 pb-20 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Our <span className="text-secondary">Services</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        We offer a comprehensive suite of software development services to bring your ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col items-start gap-4"
                        >
                            <div className="p-3 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                            <p className="text-white/60 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center p-12 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
                    <p className="text-white/80 mb-8 max-w-xl mx-auto">
                        Don't see exactly what you need? We specialize in solving unique technical challenges. Let's discuss your project.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" variant="primary">Get in Touch</Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
