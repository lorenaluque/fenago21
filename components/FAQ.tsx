const faqList = [
  {
    question: "Will this cause digestive discomfort like other protein powders?",
    answer: "No. We use easily digestible, bioavailable protein sources and include natural digestive enzymes. Most users experience no bloating or discomfort. If you have specific sensitivities, our formula is soy-free, dairy-free, and gluten-free."
  },
  {
    question: "How much caffeine does this contain?",
    answer: "Each serving contains 150mg of clean caffeine from organic coffee beans—equivalent to a standard cup of coffee. Combined with L-theanine, you get sustained energy without jitters or crashes."
  },
  {
    question: "What does 'third-party tested' mean?",
    answer: "Every batch is independently tested by accredited laboratories for mycotoxins, heavy metals, and contaminants before it reaches you. We publish our test results and certifications on our website for complete transparency."
  },
  {
    question: "Can I use this if I'm following a specific diet (keto/paleo)?",
    answer: "Our formula is compatible with keto, paleo, and most dietary approaches. Note: Our protein source is grass-fed collagen (not vegan). We're developing a plant-based version—join our waitlist to be notified."
  },
  {
    question: "Will I be charged after my first order?",
    answer: "Only if you choose the 'Subscribe & Save' option. Otherwise, it's a one-time purchase with no automatic charges. Subscriptions can be canceled or modified anytime from your account with just one click."
  },
  {
    question: "How quickly will I notice results?",
    answer: "Most users report improved sustained energy within 2-3 days of consistent use. Enhanced mental clarity and reduced afternoon brain fog typically become noticeable within the first week."
  },
  {
    question: "What if I don't like it?",
    answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, contact us for a full refund. We'll even cover return shipping. No questions asked, no hassle."
  },
  {
    question: "Where is this made?",
    answer: "Formulated in the USA in a GMP-certified facility with globally sourced, premium ingredients. All ingredients are traceable and transparently listed on our packaging and website."
  }
];

const FAQ = () => {
  return (
    <section className="bg-brand-off-white py-24" id="faq">
      <div className="max-w-4xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-brand-navy leading-tight">
            Questions? We Have Answers.
          </h2>
          <p className="text-lg lg:text-xl text-text-light">
            Everything you need to know about VibeCoffee
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <div 
              key={index}
              className="collapse collapse-plus bg-white shadow-md rounded-xl border-2 border-transparent hover:border-brand-teal transition-all duration-300"
            >
              <input 
                type="radio" 
                name="faq-accordion" 
                id={`faq-${index}`}
              />
              <div className="collapse-title text-lg font-heading font-semibold text-brand-navy pr-12">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-text-body leading-relaxed pt-4 text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="text-center mt-16 p-10 bg-gradient-to-br from-brand-navy to-brand-teal rounded-2xl shadow-luxury">
          <h3 className="font-heading font-bold text-2xl text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-brand-light-grey mb-6 text-lg">
            Our team is here to help you make the right choice for your health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-white text-brand-navy hover:bg-brand-off-white btn-lg font-heading font-semibold">
              📧 Email Support
            </button>
            <button className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-brand-navy btn-lg font-heading font-semibold">
              💬 Live Chat
            </button>
          </div>
          <p className="text-sm text-brand-teal-light mt-6">
            Average response time: Under 2 hours
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl mb-3">✓</div>
            <p className="font-semibold text-brand-navy text-sm">Third-Party Tested</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl mb-3">🌿</div>
            <p className="font-semibold text-brand-navy text-sm">USDA Organic</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl mb-3">🔬</div>
            <p className="font-semibold text-brand-navy text-sm">Evidence-Based</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl mb-3">🇺🇸</div>
            <p className="font-semibold text-brand-navy text-sm">Made in USA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;