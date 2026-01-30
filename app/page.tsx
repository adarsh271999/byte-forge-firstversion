import { Button } from "./components/ui/Button";
import { HeroScene } from "./components/3d/HeroScene";
import { ForgeScene } from "./components/3d/ForgeScene";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pt-24 pb-8">

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] flex flex-col items-center justify-center overflow-hidden">
        <HeroScene />

        <div className="z-10 container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/50 mb-8 max-w-5xl leading-[0.9]">
            Forge The <br /> <span className="text-secondary opacity-90">Future</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
            We build software that defines the next generation. From AI solutions to immersive web experiences, we engineer excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="min-w-[160px]">
                Start Project
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="min-w-[160px]">
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

      {/* Manifesto / About Teaser */}
      <section className="py-24 md:py-32 container mx-auto px-4 relative">
        <div className="absolute -left-40 top-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              We Don't Just Write Code. <br />
              <span className="text-white/50">We Engineer Solutions.</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              ByteForge is more than a software agency. We are your technical partners, problem solvers, and architects of the digital realm. Whether it's complex AI integration or a high-performance mobile app, we bring precision and creativity to every line of code.
            </p>
            <Link href="/about">
              <Button variant="secondary">About Us</Button>
            </Link>
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm p-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50" />
            <ForgeScene />
          </div>
        </div>
      </section>
    </main>
  );
}
