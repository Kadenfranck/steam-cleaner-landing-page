
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-10">
          <div className="space-y-6">
            <div className="flex justify-start">
              <div className="flex flex-col leading-none bg-white/5 p-4 rounded-xl">
                <span className="font-[900] text-4xl tracking-tighter text-[#FFB800]">
                  STEAM
                </span>
                <span className="text-[12px] font-black tracking-[0.4em] text-white mt-1 uppercase">
                  Cleaner Service
                </span>
              </div>
            </div>
            <p className="leading-relaxed max-w-xs text-gray-300">
              Professional carpet, couch, and tile cleaning services for Orlando and surrounding areas. High-end results with transparent pricing.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FFB800]"></div>
                <span className="text-white font-medium">(407) 759-7208</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#FFB800]"></div>
                Greater Orlando / Kissimmee
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Hours</h4>
            <p className="flex flex-col">
              <span className="text-white font-medium">Monday - Sunday</span>
              <span className="text-amber-400 font-bold">Open 24 Hours</span>
            </p>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-800 text-sm space-y-2">
          <p className="text-gray-500">*Pricing listed is "starting at" pricing. Final price depends on size, condition, and specific requirements.</p>
          <p className="text-gray-600">© {new Date().getFullYear()} STEAM CLEANER SERVICE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
