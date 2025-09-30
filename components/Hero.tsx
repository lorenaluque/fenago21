import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight">
          Transform Your Business Vision Into Reality
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          The only business planning system that turns scattered ideas into 
          market-ready execution through proven, modular frameworks. Join 10,000+ 
          entrepreneurs who've transformed their vision into profitable businesses 
          with enterprise-grade planning that actually works.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#pricing"
            className="btn btn-primary btn-wide"
          >
            Start Your Transformation
          </a>
          <a
            href="#demo"
            className="btn btn-outline btn-wide"
          >
            Watch Demo
          </a>
        </div>
        <div className="text-sm opacity-60 mt-2">
          ✅ Trusted by 10,000+ entrepreneurs • 30-day money-back guarantee
        </div>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
          alt="VIBE Business Planning System Dashboard"
          className="w-full rounded-lg shadow-2xl"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
