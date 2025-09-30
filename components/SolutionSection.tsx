const benefits = [
    {
      emoji: "🔋",
      title: "Sustained Energy Release",
      description: "No crash, no jitters. Our blend provides 6-8 hours of clean energy through optimized caffeine from organic coffee beans paired with adaptogenic compounds."
    },
    {
      emoji: "🧠",
      title: "Cognitive Clarity",
      description: "25g of clean, bioavailable protein supports neurotransmitter production for enhanced focus and mental acuity during complex problem-solving."
    },
    {
      emoji: "✓",
      title: "Verified Purity",
      description: "Third-party tested for mycotoxins, heavy metals, and contaminants. Every batch, every time. Because you shouldn't have to wonder what you're consuming."
    },
    {
      emoji: "🌿",
      title: "Digestive Comfort",
      description: "Formulated with easily digestible plant-based proteins and natural enzymes. No bloating, no discomfort—just sustained fuel."
    },
    {
      emoji: "🔬",
      title: "Evidence-Based Formulation",
      description: "Developed with input from nutritional scientists and backed by research on cognitive performance and sustained energy metabolism."
    },
    {
      emoji: "🚫",
      title: "Zero Compromise Ingredients",
      description: "No artificial sweeteners, no synthetic fillers, no hidden sugars. Just organic coffee, clean protein, and performance-enhancing adaptogens."
    }
  ];
  
  const SolutionSection = () => {
    return (
      <section className="bg-white py-24 px-8" id="solution">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-brand-navy leading-tight">
              Intelligent Nutrition for Sustained Performance
            </h2>
            <p className="text-lg lg:text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
              We engineered VibeCoffee for professionals who refuse to compromise between 
              convenience and clean nutrition. Every ingredient is purposefully selected, 
              third-party tested, and transparently sourced.
            </p>
          </div>
  
          {/* Product Showcase */}
          <div className="flex justify-center mb-24">
            <div className="relative w-full max-w-md hover-lift">
              <div className="aspect-square bg-gradient-to-br from-brand-off-white via-gray-100 to-gray-200 rounded-3xl shadow-luxury-lg flex items-center justify-center overflow-hidden border-4 border-brand-gold/20">
                {/* Placeholder - Replace with actual product image */}
                <div className="text-center p-8">
                  <div className="text-8xl mb-6">☕</div>
                  <h3 className="font-heading font-bold text-3xl text-brand-navy mb-2">
                    VibeCoffee
                  </h3>
                  <p className="text-text-light text-lg">
                    Premium Protein Coffee
                  </p>
                  <div className="mt-6 flex gap-4 justify-center">
                    <div className="bg-brand-teal/10 px-4 py-2 rounded-full">
                      <p className="text-brand-teal font-semibold text-sm">25g Protein</p>
                    </div>
                    <div className="bg-brand-gold/10 px-4 py-2 rounded-full">
                      <p className="text-brand-gold font-semibold text-sm">150mg Caffeine</p>
                    </div>
                  </div>
                </div>
                
                {/* Uncomment when you have actual image */}
                {/* <Image
                  src="/images/product-main.jpg" 
                  alt="VibeCoffee Product"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                /> */}
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -bottom-6 -right-6 bg-brand-gold text-white px-8 py-4 rounded-2xl shadow-gold border-4 border-white">
                <p className="font-bold text-2xl">150mg</p>
                <p className="text-sm font-semibold">Clean Caffeine</p>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-brand-teal text-white px-6 py-3 rounded-xl shadow-luxury border-4 border-white">
                <p className="font-bold text-xl">Organic</p>
              </div>
            </div>
          </div>
  
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="luxury-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{benefit.emoji}</div>
                <h3 className="font-heading font-bold text-xl mb-3 text-brand-navy">
                  {benefit.title}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
  
          {/* CTA Section */}
          <div className="text-center">
            <a 
              href="#pricing"
              className="btn btn-primary btn-lg text-white hover:scale-105 transition-all duration-300 shadow-luxury inline-flex items-center gap-2 group"
            >
              <span>Experience the Difference</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <p className="text-sm text-text-light mt-6">
              <span className="font-semibold">Free shipping</span> on orders over $40 • 
              <span className="font-semibold"> 30-day guarantee</span>
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default SolutionSection;