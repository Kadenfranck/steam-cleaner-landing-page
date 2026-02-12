
import React from 'react';
import { Phone } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFFDF9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#333333] mb-4 tracking-tight">
          Ready for a cleaner home?
        </h2>
        <p className="text-xl text-gray-500 mb-10 font-medium">
          Serving the Greater Orlando / Kissimmee area
        </p>
        <a 
          href="tel:4077597208" 
          className="inline-flex items-center gap-3 bg-[#FFB800] hover:bg-[#e6a600] text-white px-12 py-6 rounded-full font-black text-2xl shadow-2xl shadow-amber-200 transition-all hover:scale-105 border-2 border-amber-600/20"
        >
          <Phone size={28} fill="currentColor" />
          Call Now
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
