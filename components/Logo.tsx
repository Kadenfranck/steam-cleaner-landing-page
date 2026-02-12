
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Worker Silhouette Icon */}
      <svg 
        viewBox="0 0 100 80" 
        className="w-20 h-16 mb-[-4px]" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#FFB800">
          {/* Head & Hat */}
          <circle cx="50" cy="15" r="5" />
          <path d="M50 10 L56 10 L56 12 L50 12 Z" /> 
          
          {/* Body Leaning Forward */}
          <path d="M50 21 C45 21, 40 25, 40 35 L45 48 L48 48 L45 35 C45 30, 48 26, 52 26 L55 26 L50 21 Z" />
          
          {/* Arms holding the wand */}
          <path d="M52 26 L65 40 L60 42 L48 28 Z" />
          
          {/* Legs */}
          <path d="M40 35 L38 52 L43 52 L45 40 Z" />
          <path d="M48 28 L51 52 L56 52 L55 40 Z" />
          
          {/* Feet */}
          <path d="M38 52 L35 55 L43 55 L43 52 Z" />
          <path d="M51 52 L51 55 L59 55 L56 52 Z" />

          {/* Steam Wand */}
          <rect x="63" y="40" width="2" height="35" transform="rotate(-40 63 40)" />
          
          {/* Wand Head (Trapezoid) */}
          <path d="M82 62 L95 62 L98 68 L79 68 Z" />

          {/* Hose curving behind */}
          <path 
            d="M40 30 Q30 25, 25 35 Q20 45, 35 55 Q45 60, 15 65" 
            fill="none" 
            stroke="#FFB800" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
        </g>
      </svg>

      {/* Typography */}
      <div className="flex flex-col items-center leading-[0.85]">
        <span 
          className="font-[900] text-[42px] tracking-[-0.04em]" 
          style={{ 
            color: '#FFB800', 
            fontFamily: "'Inter', sans-serif"
          }}
        >
          STEAM
        </span>
        <span 
          className="text-[14px] font-[800] tracking-[0.05em] text-[#555555] whitespace-nowrap" 
          style={{ 
            fontFamily: "'Inter', sans-serif" 
          }}
        >
          CLEANER SERVICE
        </span>
      </div>
    </div>
  );
};

export default Logo;
