
import React from 'react';
import { Phone, CheckCircle, Clock, Sparkles } from 'lucide-react';

interface HeroProps {
  imageUrl: string;
  isLoading: boolean;
}

const Hero: React.FC<HeroProps> = ({ imageUrl, isLoading }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full text-amber-700 font-semibold text-sm">
              <Sparkles size={16} className="text-amber-500" />
              Serving Greater Orlando & Kissimmee
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-[900] text-gray-900 leading-[1.1] tracking-tight">
              A Cleaner Home, <span className="text-[#FFB800] block">Starts Today</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Fast, fresh, and affordable cleaning. We bring life back to your home with professional steam cleaning that dries fast.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a 
                href="tel:4077597208" 
                className="inline-flex items-center gap-3 bg-[#FFB800] hover:bg-[#e6a600] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-amber-100 transition-all hover:-translate-y-1 border-2 border-amber-600/20"
              >
                <Phone size={22} fill="currentColor" />
                Call Now
              </a>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-emerald-600 font-bold">
                  <CheckCircle size={20} />
                  No Hidden Fees
                </div>
                <div className="flex items-center gap-2 text-emerald-600 font-bold">
                  <Clock size={20} />
                  Same-Day Available
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-amber-100/30 rounded-[40px] blur-3xl group-hover:bg-amber-200/40 transition-colors"></div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[32px] shadow-2xl bg-gray-100 border-[6px] border-white">
              {isLoading ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFB800]"></div>
                </div>
              ) : (
                <>
                  <img 
                    src={imageUrl} 
                    alt="Clean Modern Living Room" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Minimalist, very small Carpet Special badge tag */}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1.5 rounded-lg shadow-xl border border-white/50 flex items-center gap-2.5 transition-all group-hover:scale-105 origin-bottom-right">
                    <div className="text-right flex flex-col justify-center">
                      <h3 className="font-[900] text-gray-900 text-[9px] uppercase tracking-tight leading-none">Carpet Special</h3>
                      <p className="text-[7px] text-gray-500 font-bold whitespace-nowrap mt-0.5">3 ROOMS</p>
                    </div>
                    <div className="bg-[#FFB800] text-white font-[900] text-[11px] px-1.5 py-1 rounded shadow-sm leading-none border border-amber-600/10">
                      $109
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
