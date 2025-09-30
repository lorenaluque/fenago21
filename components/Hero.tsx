import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-gradient-hero flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-20 lg:py-32">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start animate-fade-in-up">
        
        {/* Main Headline */}
        <h1 className="font-heading font-extrabold text-4xl lg:text-6xl tracking-tight text-brand-white leading-tight">
          Sustained Energy Without the Compromise
        </h1>
        
        {/* Subheadline */}
        <div className="text-lg lg:text-xl leading-relaxed max-w-xl">
          <p className="text-brand-light-grey mb-3">
            Evidence-based protein coffee engineered for the analytical mind.
          </p>
          <p className="font-semibold text-brand-teal-light text-xl">
            No jitters. No crash. No hidden toxins.
          </p>
          <p className="text-brand-light-grey mt-3">
            Just sustained clarity for your most demanding days.
          </p>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col gap-6 w-full lg:w-auto">
          <a 
            className="btn btn-primary btn-lg text-white hover:scale-105 transition-all duration-300 shadow-luxury group"
            href="#pricing"
          >
            <span>Start Your Morning Right</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          
          <p className="text-sm text-brand-light-grey text-center lg:text-left max-w-md">
            <span className="font-semibold">Free shipping</span> on first order • 
            <span className="font-semibold"> 30-day money-back guarantee</span> • 
            No subscription required
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
          <div className="luxury-badge">
            <span>✓</span>
            <span>USDA Organic</span>
          </div>
          <div className="luxury-badge">
            <span>✓</span>
            <span>Non-GMO</span>
          </div>
          <div className="luxury-badge">
            <span>✓</span>
            <span>Third-Party Tested</span>
          </div>
        </div>

        {/* Social Proof */}
        <TestimonialsAvatars priority={true} />
      </div>

      {/* Hero Image */}
      <div className="lg:w-full relative animate-slide-in-right">
        <div className="relative w-full max-w-lg mx-auto">
          {/* Product Image Container */}
          <div className="relative aspect-square bg-gradient-to-br from-brand-off-white via-gray-100 to-gray-200 rounded-3xl shadow-luxury-lg overflow-hidden border-4 border-brand-gold/30 hover-lift">
            {/* Placeholder - Replace with actual product image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-9xl mb-4">☕</div>
                <p className="font-heading font-bold text-3xl text-brand-navy mb-2">
                  VibeCoffee
                </p>
                <p className="text-text-light text-lg">
                  Premium Protein Coffee
                </p>
              </div>
            </div>
            
            {/* Uncomment when you have the actual image */}
            {/* <Image
              src="/images/hero-product.jpg"
              alt="VibeCoffee Premium Protein Coffee"
              className="w-full h-full object-cover"
              priority={true}
              width={500}
              height={500}
            /> */}
          </div>
          
          {/* Floating Badge - Protein Amount */}
          <div className="absolute -bottom-6 -right-6 bg-brand-gold text-white px-8 py-4 rounded-2xl shadow-gold border-4 border-white pulse-glow">
            <p className="font-bold text-3xl">25g</p>
            <p className="text-sm font-semibold">Clean Protein</p>
          </div>

          {/* Floating Badge - Caffeine Amount */}
          <div className="absolute -top-6 -left-6 bg-brand-teal text-white px-6 py-3 rounded-xl shadow-luxury border-4 border-white">
            <p className="font-bold text-xl">150mg</p>
            <p className="text-xs font-semibold">Caffeine</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;