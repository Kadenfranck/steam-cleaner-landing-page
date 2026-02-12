
import React from 'react';
import { Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex flex-col leading-none">
              <span className="font-[900] text-3xl tracking-tighter text-[#FFB800]">
                STEAM
              </span>
              <span className="text-[10px] font-black tracking-[0.3em] text-gray-500 mt-1 uppercase">
                Cleaner Service
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            <a 
              href="tel:4077597208" 
              className="bg-[#FFB800] hover:bg-[#e6a600] transition-all hover:scale-105 text-white px-6 py-3 rounded-2xl flex items-center gap-2 font-extrabold text-lg shadow-xl shadow-amber-100 border-2 border-amber-600/20"
            >
              <Phone size={20} fill="currentColor" />
              (407) 759-7208
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
