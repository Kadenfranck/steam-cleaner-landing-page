
import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard: React.FC<{ 
  name: string; 
  type: string; 
  text: string; 
  initial: string; 
  bgColor: string 
}> = ({ name, type, text, initial, bgColor }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={18} fill="#FBBF24" className="text-amber-400" />
      ))}
    </div>
    <p className="text-gray-700 italic text-lg leading-relaxed mb-6 flex-grow">
      "{text}"
    </p>
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center font-bold text-amber-900`}>
        {initial}
      </div>
      <div>
        <h4 className="font-bold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{type}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Jason",
      type: "Carpet Customer",
      initial: "J",
      bgColor: "bg-amber-100",
      text: "I'm extremely happy with the carpet cleaning job they did in my home. The carpets look noticeably cleaner, brighter, and refreshed throughout the entire house!"
    },
    {
      name: "Martin",
      type: "Carpet Customer",
      initial: "M",
      bgColor: "bg-orange-100",
      text: "They were professional, on time, and really took their time making sure every spot on my carpet was cleaned. The carpet looks and smells brand new."
    },
    {
      name: "Victor",
      type: "Tile Customer",
      initial: "V",
      bgColor: "bg-yellow-100",
      text: "They did a wonderful job came here on time as soon as I called right away outstanding customer service and very professional. I will definitely use them again!"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">Trusted by Neighbors</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
