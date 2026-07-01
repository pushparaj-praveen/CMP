import React from "react";

interface AnnaUniversityLogoProps {
  className?: string;
  variant?: "crest" | "minimal" | "badge";
  size?: number;
  isDarkTheme?: boolean;
}

export const AnnaUniversityLogo: React.FC<AnnaUniversityLogoProps> = ({
  className = "",
  variant = "crest",
  size = 48,
  isDarkTheme = false,
}) => {
  if (variant === "badge") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="relative group transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-teal-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className="relative drop-shadow-md"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Gold Ring */}
            <circle cx="50" cy="50" r="46" fill="url(#bgGradient)" stroke="#D4AF37" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="42" stroke="#E6C655" strokeWidth="0.8" strokeDasharray="3 2" />

            {/* Gear teeth representing Technology */}
            <g fill="#D4AF37" opacity="0.85">
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x1 = 50 + 35 * Math.cos(angle);
                const y1 = 50 + 35 * Math.sin(angle);
                return (
                  <circle key={i} cx={x1} cy={y1} r="2.8" />
                );
              })}
            </g>

            {/* Inner Ring with Teal Fill */}
            <circle cx="50" cy="50" r="30" fill="url(#tealGradient)" stroke="#D4AF37" strokeWidth="1.5" />

            {/* Sun Rays representing Light of Knowledge */}
            <g stroke="#F2E6B1" strokeWidth="1.2" opacity="0.6">
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = ((i * 45 - 90) * Math.PI) / 180;
                const x1 = 50 + 10 * Math.cos(angle);
                const y1 = 50 + 10 * Math.sin(angle);
                const x2 = 50 + 26 * Math.cos(angle);
                const y2 = 50 + 26 * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
              })}
            </g>

            {/* Traditional Temple Gopuram / Academic Pillar in center */}
            <path
              d="M44 65 L46 45 L41 45 L41 40 L45 36 L43 32 L50 25 L57 32 L55 36 L59 40 L59 45 L54 45 L56 65 Z"
              fill="#FFFFFF"
              stroke="#0D5C53"
              strokeWidth="0.8"
              className="drop-shadow-sm"
            />
            {/* Gopuram details */}
            <line x1="45" y1="52" x2="55" y2="52" stroke="#0D5C53" strokeWidth="0.6" />
            <line x1="46" y1="58" x2="54" y2="58" stroke="#0D5C53" strokeWidth="0.6" />
            <circle cx="50" cy="30" r="1" fill="#D4AF37" />

            {/* Open Book representing Education */}
            <path
              d="M34 68 C40 68 46 66 50 64 C54 66 60 68 66 68 L68 56 C62 56 56 54 50 52 C44 54 38 56 32 56 Z"
              fill="#FFFFFF"
              stroke="#D4AF37"
              strokeWidth="1"
            />
            <path d="M50 52 L50 64" stroke="#D4AF37" strokeWidth="1" />

            {/* Star of Excellence */}
            <path
              d="M50 12 L52 16 L56 16 L53 19 L54 23 L50 21 L46 23 L47 19 L44 16 L48 16 Z"
              fill="#E6C655"
            />

            {/* Definitions */}
            <defs>
              <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0B2B28" />
                <stop offset="100%" stopColor="#051412" />
              </linearGradient>
              <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0E7467" />
                <stop offset="100%" stopColor="#064E44" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div>
          <span className={`block text-sm md:text-base font-serif font-extrabold tracking-tight leading-none ${
            isDarkTheme ? "text-white" : "text-slate-900"
          }`}>
            Anna University
          </span>
          <span className={`block text-[10px] font-mono font-bold uppercase tracking-widest mt-1 ${
            isDarkTheme ? "text-teal-300" : "text-teal-700"
          }`}>
            College Management Portal
          </span>
        </div>
      </div>
    );
  }

  // default variant: detailed "crest"
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`drop-shadow-lg ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Glow shadow backing */}
      <circle cx="50" cy="50" r="48" fill="#D4AF37" opacity="0.12" />

      {/* Main Outer Rim */}
      <circle cx="50" cy="50" r="45" fill="url(#crestBg)" stroke="#D4AF37" strokeWidth="3" />
      <circle cx="50" cy="50" r="41" stroke="#E6C655" strokeWidth="0.8" strokeDasharray="4 2" />

      {/* Gear teeth ring indicating Engineering and Technology */}
      <g fill="#D4AF37" opacity="0.95">
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 22.5 * Math.PI) / 180;
          const x = 50 + 36 * Math.cos(angle);
          const y = 50 + 36 * Math.sin(angle);
          return (
            <circle key={i} cx={x} cy={y} r="2.5" />
          );
        })}
      </g>

      {/* Inner Boundary Ring */}
      <circle cx="50" cy="50" r="30" fill="url(#crestTeal)" stroke="#D4AF37" strokeWidth="1.5" />

      {/* Radiant Sunburst rays */}
      <g stroke="#F0E0A6" strokeWidth="1.2" opacity="0.5">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = ((i * 30 - 90) * Math.PI) / 180;
          const x1 = 50 + 10 * Math.cos(angle);
          const y1 = 50 + 10 * Math.sin(angle);
          const x2 = 50 + 27 * Math.cos(angle);
          const y2 = 50 + 27 * Math.sin(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>

      {/* Traditional Tamil Temple tower (Gopuram) & Modern Pillars representing local roots and foundational stability */}
      <path
        d="M44 65 L46 44 L41 44 L41 39 L45 35 L43 31 L50 23 L57 31 L55 35 L59 39 L59 44 L54 44 L56 65 Z"
        fill="#FFFFFF"
        stroke="#064E44"
        strokeWidth="1"
      />
      
      {/* Architectural levels details */}
      <line x1="45" y1="50" x2="55" y2="50" stroke="#064E44" strokeWidth="0.8" />
      <line x1="46" y1="56" x2="54" y2="56" stroke="#064E44" strokeWidth="0.8" />
      <line x1="47.5" y1="41" x2="52.5" y2="41" stroke="#064E44" strokeWidth="0.8" />
      <circle cx="50" cy="27" r="1.2" fill="#D4AF37" />

      {/* Open Book of Knowledge */}
      <path
        d="M32 68 C38 68 44 66 50 64 C56 66 62 68 68 68 L70 55 C64 55 58 53 50 51 C42 53 36 55 30 55 Z"
        fill="#FFFFFF"
        stroke="#D4AF37"
        strokeWidth="1.2"
        className="drop-shadow-sm"
      />
      <path d="M50 51 L50 64" stroke="#D4AF37" strokeWidth="1.2" />

      {/* Gold laurels wreath surrounding the bottom */}
      <g stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" opacity="0.85">
        <path d="M15 50 C15 70 30 85 50 85 C70 85 85 70 85 50" fill="none" strokeWidth="1.5" />
      </g>

      {/* Stars on left & right sides of the rim */}
      <path d="M12 45 L13.5 48 L17 48 L14 50 L15.5 53.5 L12 51 L8.5 53.5 L10 50 L7 48 L10.5 48 Z" fill="#D4AF37" />
      <path d="M88 45 L89.5 48 L93 48 L90 50 L91.5 53.5 L88 51 L84.5 53.5 L86 50 L83 48 L86.5 48 Z" fill="#D4AF37" />

      {/* Stellar excellence crown at the apex */}
      <path
        d="M50 8 L53 13 L58 13 L54 16 L56 21 L50 18 L44 21 L46 16 L42 13 L47 13 Z"
        fill="#E6C655"
        className="animate-pulse"
      />

      <defs>
        <linearGradient id="crestBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B2B28" />
          <stop offset="50%" stopColor="#081F1D" />
          <stop offset="100%" stopColor="#030C0B" />
        </linearGradient>
        <linearGradient id="crestTeal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F766E" />
          <stop offset="50%" stopColor="#0D5C53" />
          <stop offset="100%" stopColor="#042F2A" />
        </linearGradient>
      </defs>
    </svg>
  );
};
