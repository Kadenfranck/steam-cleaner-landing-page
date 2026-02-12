
import React from 'react';
import { Phone, FileText, Sparkles } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Phone size={32} className="text-amber-500" />,
      title: "1. Call or Text",
      description: "Reach out to us at (407) 759-7208. We'll answer your questions instantly.",
      highlight: "(407) 759-7208"
    },
    {
      icon: <FileText size={32} className="text-amber-500" />,
      title: "2. Get a Quote",
      description: "Tell us what you need cleaned. We'll give you a transparent price estimate right over the phone.",
      highlight: ""
    },
    {
      icon: <Sparkles size={32} className="text-amber-500" />,
      title: "3. We Clean",
      description: "Our pros arrive on time, clean your space, and leave it looking and smelling fresh.",
      highlight: ""
    }
  ];

  return (
    <section className="py-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">How It Works</h2>
        <p className="text-lg text-gray-600 mb-12">No complicated forms. Just give us a call.</p>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-amber-100 flex items-center justify-center mb-6 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">
                {step.highlight ? (
                  <>
                    Reach out to us at <span className="text-amber-500 font-bold">{step.highlight}</span>. {step.description.split(step.highlight)[1]}
                  </>
                ) : (
                  step.description
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
