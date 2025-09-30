import Image from "next/image";

const testimonials = [
  {
    name: "Jennifer K.",
    role: "Lead Data Scientist",
    text: "I've tried every protein powder and coffee combo imaginable. This is the first that actually delivers sustained energy without the 3 PM crash. No bloating, no jitters—just clean focus when I need it most.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer"
  },
  {
    name: "Marcus T.",
    role: "Software Engineering Manager",
    text: "The transparency is what sold me. Third-party tested for contaminants? Actual ingredient sourcing details? Finally, a brand that respects my need to know exactly what I'm putting in my body.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
  },
  {
    name: "Priya S.",
    role: "Senior Product Manager",
    text: "I was skeptical about another 'protein coffee' product, but the evidence-based formulation convinced me to try it. Three months in, my morning routine is simplified, my energy is consistent, and I genuinely feel better. Worth every penny.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
  }
];

const Testimonials3 = () => {
  return (
    <section className="bg-brand-off-white py-24" id="testimonials">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-brand-navy leading-tight">
            Trusted by High-Performers Who Demand More
          </h2>
          
          {/* Rating Display */}
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-brand-gold text-3xl">★</span>
              ))}
            </div>
            <span className="text-2xl font-bold text-brand-navy">4.8</span>
            <span className="text-text-light text-lg">/5</span>
          </div>
          
          <p className="text-text-light text-lg">
            from <span className="font-semibold text-brand-navy">2,847</span> verified customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-brand-gold text-xl">★</span>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-text-body italic mb-8 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t-2 border-brand-off-white">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="rounded-full border-2 border-brand-teal"
                />
                <div>
                  <p className="font-heading font-semibold text-brand-navy text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-text-light">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Callout */}
        <div className="bg-gradient-to-r from-brand-teal/10 via-brand-teal/5 to-brand-teal/10 border-2 border-brand-teal rounded-2xl p-10 text-center shadow-lg">
          <p className="text-2xl lg:text-3xl font-bold text-brand-navy mb-3">
            89% report noticeable improvement in sustained energy within the first week
          </p>
          <p className="text-text-light text-lg">
            Based on customer survey of <span className="font-semibold text-brand-navy">500+</span> users
          </p>
        </div>

        {/* Social Proof Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md">
            <div className="text-3xl">✓</div>
            <div>
              <p className="font-semibold text-brand-navy">10,000+</p>
              <p className="text-sm text-text-light">Happy Customers</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md">
            <div className="text-3xl">🔬</div>
            <div>
              <p className="font-semibold text-brand-navy">100%</p>
              <p className="text-sm text-text-light">Third-Party Tested</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md">
            <div className="text-3xl">⭐</div>
            <div>
              <p className="font-semibold text-brand-navy">4.8/5</p>
              <p className="text-sm text-text-light">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials3;