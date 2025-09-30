import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Single Bag",
    price: "$42",
    priceDetail: "20 servings",
    perServing: "$2.10 per serving",
    savings: null,
    features: [
      "Perfect for trying us out",
      "Free shipping",
      "30-day guarantee",
      "20 servings per bag",
      "Full ingredient transparency"
    ],
    cta: "Try Once",
    popular: false,
    gradient: "from-gray-50 to-white"
  },
  {
    name: "Subscribe & Save",
    price: "$36",
    priceDetail: "per bag",
    perServing: "$1.79 per serving",
    savings: "Save 15%",
    features: [
      "Best value for daily use",
      "Free shipping always",
      "Cancel anytime",
      "30-day guarantee",
      "Priority customer support",
      "Exclusive member perks"
    ],
    cta: "Subscribe & Save",
    popular: true,
    gradient: "from-brand-teal/5 to-brand-gold/5"
  },
  {
    name: "Bundle Pack",
    price: "$113",
    priceDetail: "3 bags",
    perServing: "$1.89 per serving",
    savings: "Save 10%",
    features: [
      "Stock up, save more",
      "Free priority shipping",
      "60-day guarantee",
      "60 servings total",
      "Never run out"
    ],
    cta: "Buy Bundle",
    popular: false,
    gradient: "from-gray-50 to-white"
  }
];

const Pricing = () => {
  return (
    <section className="bg-white py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-brand-navy leading-tight">
            Invest in Your Performance
          </h2>
          <p className="text-lg lg:text-xl text-text-light max-w-2xl mx-auto">
            Choose the plan that fits your lifestyle. All options include our 
            satisfaction guarantee and third-party tested purity.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 ${
                tier.popular 
                  ? 'bg-gradient-to-br from-brand-teal/10 to-brand-gold/10 border-4 border-brand-teal shadow-luxury-lg scale-105 z-10' 
                  : 'bg-brand-off-white border-2 border-gray-200 shadow-md'
              } transition-all duration-300 hover:shadow-luxury-lg hover:-translate-y-2`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-brand-gold to-brand-bronze text-white px-8 py-2 rounded-full text-sm font-bold shadow-gold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Pricing Header */}
              <div className="text-center mb-8 pt-4">
                <h3 className="font-heading font-bold text-2xl mb-4 text-brand-navy">
                  {tier.name}
                </h3>
                
                {tier.savings && (
                  <div className="inline-block bg-brand-teal/20 text-brand-teal px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    {tier.savings}
                  </div>
                )}
                
                <div className="mb-3">
                  <span className="text-5xl font-bold text-brand-navy">{tier.price}</span>
                </div>
                
                <p className="text-sm text-text-light mb-2">{tier.priceDetail}</p>
                <p className="text-lg font-semibold text-brand-gold">{tier.perServing}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span className="text-text-body">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                className={`w-full btn ${
                  tier.popular 
                    ? 'btn-primary text-white shadow-luxury' 
                    : 'btn-outline border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'
                } btn-lg hover:scale-105 transition-all duration-300 font-heading font-bold`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Money-Back Guarantee */}
        <div className="stat-card max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-6xl">✓</div>
            <h3 className="font-heading font-bold text-3xl">
              30-Day Money-Back Guarantee
            </h3>
          </div>
          
          <p className="text-brand-light-grey mb-4 text-lg leading-relaxed">
            If you don't experience sustained energy and improved clarity within 30 days, 
            we'll refund your purchase. No questions asked.
          </p>
          
          <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl mt-4">
            <p className="text-brand-teal-light font-semibold text-lg">
              Join <span className="text-brand-gold font-bold">10,000+</span> professionals who have optimized their morning routine
            </p>
            <p className="text-sm text-brand-light-grey mt-2">
              Cancel or modify your subscription anytime • No hidden fees
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🔒</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-brand-navy">Secure Checkout</p>
              <p className="text-sm text-text-light">256-bit SSL encryption</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">📦</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-brand-navy">Fast Shipping</p>
              <p className="text-sm text-text-light">Ships within 24 hours</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-brand-navy">24/7 Support</p>
              <p className="text-sm text-text-light">We're here to help</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;