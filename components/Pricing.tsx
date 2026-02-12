
import React from 'react';
import { Phone } from 'lucide-react';

const PricingCard: React.FC<{ 
  title: string; 
  icon: string; 
  items: { label: string; price: string }[] 
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
          <span className="text-gray-600 font-bold text-left leading-tight pr-4">
            {item.label}
          </span>
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
        { label: "One Room", price: "$89" },
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
