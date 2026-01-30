import { Button } from "./components/ui/Button";
import { HeroScene } from "./components/3d/HeroScene";
import { ForgeScene } from "./components/3d/ForgeScene";
import { Marquee } from "./components/ui/Marquee";
import { ServiceCard } from "./components/ui/ServiceCard";
import { ProcessSection } from "./components/ui/ProcessSection";
import Image from "next/image";
import Link from "next/link";
import { Globe, Smartphone, Brain, Layers } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pt-24 pb-8 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        <HeroScene />

        <div className="z-10 container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/50 mb-8 max-w-5xl leading-[0.9]">
            Forge The <br /> <span className="text-secondary opacity-90">Future</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed font-light">
            We build software that defines the next generation. From AI solutions to immersive web experiences, we engineer excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="min-w-[180px] text-lg">
                Start Project
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="min-w-[180px] text-lg">
                Our Services
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll" />
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-10 border-y border-white/5 bg-black/50 backdrop-blur-sm">
        <Marquee />
      </section>

      {/* Manifesto / About Teaser */}
      <section className="py-24 md:py-32 container mx-auto px-4 relative">
        <div className="absolute -left-40 top-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[1px] bg-primary"></div>
              <span className="text-primary text-sm font-bold uppercase tracking-widest">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight font-display">
              We Don't Just Write Code. <br />
              <span className="text-white/30">We Engineer Solutions.</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              ByteForge is more than a software agency. We are your technical partners, problem solvers, and architects of the digital realm. Whether it's complex AI integration or a high-performance mobile app, we bring precision and creativity to every line of code.
            </p>
            <div className="flex gap-8 border-l-2 border-white/10 pl-6 my-8">
              <div>
                <span className="block text-3xl font-bold text-white mb-1">98%</span>
                <span className="text-sm text-white/50 uppercase tracking-wider">Success Rate</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white mb-1">50+</span>
                <span className="text-sm text-white/50 uppercase tracking-wider">Projects Shipped</span>
              </div>
            </div>
            <Link href="/about">
              <Button variant="secondary" className="mt-4">Read Our Story</Button>
            </Link>
          </div>
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm p-1 shadow-2xl shadow-primary/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50" />
            <ForgeScene />
          </div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">What We Do Best</h2>
            <p className="text-xl text-white/60">Comprehensive digital solutions tailored for ambitious brands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Web Apps"
              description="Scalable, high-performance web applications built with Next.js."
              icon={<Globe />}
              href="/services"
              index={0}
            />
            <ServiceCard
              title="Mobile"
              description="Native-feel iOS and Android applications using React Native."
              icon={<Smartphone />}
              href="/services"
              index={1}
            />
            <ServiceCard
              title="AI Solutions"
              description="Custom LLM integration and intelligent automation systems."
              icon={<Brain />}
              href="/services"
              index={2}
            />
            <ServiceCard
              title="Product Design"
              description="UI/UX design that converts users into loyal advocates."
              icon={<Layers />}
              href="/services"
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 container mx-auto px-4">
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-[1px] bg-secondary"></div>
            <span className="text-secondary text-sm font-bold uppercase tracking-widest">The Forge Method</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display max-w-4xl">
            From Concept to <span className="text-white/30">Reality</span>
          </h2>
        </div>
        <ProcessSection />
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 font-display tracking-tight">
            Ready to <span className="text-primary">Forge</span> Your Vision?
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12">
            Let's discuss how we can bring your ideas to life with cutting-edge technology and design.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="h-16 px-10 text-xl shadow-2xl shadow-primary/20">
                Schedule a Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
