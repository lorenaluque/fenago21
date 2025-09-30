const CTA = () => {
  return (
    <section className="relative bg-gradient-cta text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-32 relative z-10">
        <div className="text-center animate-fade-in-up">
          
          {/* Main Heading */}
          <h2 className="font-heading font-bold text-4xl lg:text-6xl mb-8 leading-tight">
            Ready to Optimize Your Morning?
          </h2>
          
          {/* Supporting Text */}
          <p className="text-xl lg:text-2xl mb-12 text-brand-light-grey max-w-3xl mx-auto leading-relaxed">
            Join thousands of high-performers who've transformed their daily routine 
            with clean, sustained energy and unwavering focus.
          </p>

          {/* CTA Button */}
          <a 
            href="#pricing"
            className="btn bg-brand-gold hover:bg-brand-bronze text-white btn-lg text-xl px-16 py-4 mb-16 hover:scale-105 transition-all duration-300 shadow-gold inline-flex items-center gap-3 group border-4 border-white"
          >
            <span className="font-heading font-bold">Start Your Transformation</span>
            <span className="group-hover:translate-x-1 transition-transform text-2xl">→</span>
          </a>

          {/* Trust Indicators Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-20">
            <div className="flex flex-col items-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📦</div>
              <p className="font-semibold text-lg mb-1">Free Shipping</p>
              <p className="text-sm text-brand-light-grey">On first order</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">✓</div>
              <p className="font-semibold text-lg mb-1">30-Day Guarantee</p>
              <p className="text-sm text-brand-light-grey">Money back</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🔄</div>
              <p className="font-semibold text-lg mb-1">Cancel Anytime</p>
              <p className="text-sm text-brand-light-grey">For subscriptions</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💬</div>
              <p className="font-semibold text-lg mb-1">24/7 Support</p>
              <p className="text-sm text-brand-light-grey">We're here to help</p>
            </div>
          </div>

          {/* Social Proof Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-20 pt-16 border-t border-white/20">
            <div className="text-center">
              <p className="text-5xl font-bold text-brand-gold mb-2">10,000+</p>
              <p className="text-brand-light-grey">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-brand-gold mb-2">4.8★</p>
              <p className="text-brand-light-grey">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-brand-gold mb-2">89%</p>
              <p className="text-brand-light-grey">See Results Week 1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-teal-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
    </section>
  );
};

export default CTA;