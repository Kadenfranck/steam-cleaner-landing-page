
import React from 'react';
import { Leaf, Sparkles } from 'lucide-react';

const ValueAdd: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] p-8 lg:p-12 border border-gray-100 shadow-sm">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Added Value Included</h2>
            <p className="text-gray-600">We include these premium extras with every service at no additional cost.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-6 p-6 bg-emerald-50/30 rounded-3xl border border-emerald-50">
              <div className="bg-emerald-100 p-4 rounded-2xl shrink-0">
                <Leaf className="text-emerald-600 w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">Free Deodorizing</h4>
                <p className="text-gray-600">Leaves your home smelling fresh and clean, not chemically.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 bg-amber-50/30 rounded-3xl border border-amber-50">
              <div className="bg-amber-100 p-4 rounded-2xl shrink-0">
                <Sparkles className="text-amber-600 w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">Free Baseboard Cleaning</h4>
                <p className="text-gray-600">We detail the edges where dust collects for a complete clean.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueAdd;
