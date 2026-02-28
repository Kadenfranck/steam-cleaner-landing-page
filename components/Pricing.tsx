
import React from 'react';
import { Phone } from 'lucide-react';

const PricingCard: React.FC<{
  title: string;
  icon: string;
  items: { label: string; price: string; note?: string }[]
}> = ({ title, icon, items }) => (
  <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-2">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-2xl shadow-inner group-hover:bg-amber-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-gray-900 tracking-tight">{title}</h3>
    </div>
    <div className="space-y-0 flex-grow">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex justify-between items-start py-4 border-b border-gray-50 last:border-0"
        >
          <div className="flex flex-col gap-1 pr-4">
            <span className="text-gray-600 font-bold text-left leading-tight">
              {item.label}
            </span>
            {item.note && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2.5 py-0.5 w-fit tracking-wide">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {item.note}
              </span>
            )}
          </div>
          <span className="text-xl font-normal text-gray-900 whitespace-nowrap shrink-0">
            {item.price}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Pricing: React.FC = () => {
  const plans = [
    {
      title: "Carpet Cleaning",
      icon: "🏠",
      items: [
        { label: "One Room", price: "$89", note: "3-day advance reservation required" },
        { label: "3 Rooms", price: "$109" },
        { label: "4 Rooms", price: "$149" }
      ]
    },
    {
      title: "Upholstery",
      icon: "🛋️",
      items: [
        { label: "Couch", price: "$99+" },
        { label: "Two Piece Couch", price: "$129+" },
        { label: "Loveseat + Recliner", price: "$149+" }
      ]
    },
    {
      title: "Tile & Grout",
      icon: "✨",
      items: [
        { label: "Tile Cleaning (up to 150 sq ft)", price: "$99" },
        { label: "Tile Sealing", price: "$99+" },
        { label: "Bathroom Shower Tile & Grout", price: "$99" }
      ]
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 font-medium">
          Professional cleaning shouldn't be complicated. Here are our starting rates for our most popular services.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {plans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
        
        <a 
          href="tel:4077597208" 
          className="inline-flex items-center gap-3 bg-[#FFB800] hover:bg-[#e6a600] text-white px-12 py-5 rounded-3xl font-black text-xl shadow-2xl shadow-amber-100 transition-all hover:scale-105 border-2 border-amber-600/20"
        >
          <Phone size={22} fill="currentColor" />
          Call Now
        </a>
      </div>
    </section>
  );
};

export default Pricing;
