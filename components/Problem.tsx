const painPoints = [
  {
    emoji: "⚡",
    title: "Energy Inconsistency",
    description: "Mid-afternoon slumps that derail your productivity and focus"
  },
  {
    emoji: "🔍",
    title: "Ingredient Uncertainty",
    description: "The exhausting research required to verify what's actually in your morning routine"
  },
  {
    emoji: "📊",
    title: "Performance Gap",
    description: "The frustration of knowing your mind and body could do more with the right fuel"
  },
  {
    emoji: "⏱️",
    title: "Time Drain",
    description: "Minutes spent every morning mixing, measuring, and hoping today's blend won't cause digestive issues"
  }
];

const Problem = () => {
  return (
    <section className="bg-brand-off-white text-brand-charcoal">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col text-center w-full mb-20 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl tracking-tight mb-8 text-brand-navy leading-tight">
            You're Not Imagining It: The Hidden Cost of Your High-Performance Lifestyle
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg lg:text-xl text-text-light leading-relaxed">
              Sarah knows the pattern all too well. The 2 PM brain fog that turns elegant 
              code into a struggle. The energy crash that hits right before the critical 
              afternoon meeting. The constant vigilance required to avoid hidden toxins in 
              convenient nutrition.
            </p>
            
            <p className="text-lg lg:text-xl text-text-light leading-relaxed">
              You've tried everything: premium coffee beans, various protein powders, 
              nootropic supplements. Each promises optimization but delivers compromise—artificial 
              ingredients, digestive discomfort, or that familiar jittery crash.
            </p>
          </div>
        </div>

        {/* Pain Points Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="luxury-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{point.emoji}</div>
              <h3 className="font-heading font-bold text-2xl mb-3 text-brand-navy">
                {point.title}
              </h3>
              <p className="text-text-light text-lg leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Callout */}
        <div className="flex justify-center">
          <div className="stat-card max-w-3xl w-full text-center">
            <div className="mb-6">
              <p className="text-7xl lg:text-8xl font-bold text-brand-gold mb-2">
                74% 
              </p>
              <div className="h-1 w-32 bg-brand-gold mx-auto mb-6 rounded-full"></div>
            </div>
            
            <p className="text-xl lg:text-2xl mb-4 leading-relaxed font-medium">
              of high-performing professionals report daily energy fluctuations that 
              impact cognitive performance
            </p>
            
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mt-4">
              <p className="text-lg text-brand-teal-light font-semibold">
                Yet only <span className="text-brand-gold font-bold">8%</span> trust their current nutritional solutions are truly clean
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;