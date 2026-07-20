import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark'; // 'light' is for light backgrounds (dark text), 'dark' is for dark backgrounds (white text)
  style?: React.CSSProperties;
}

export default function Logo({ variant = 'light', style }: LogoProps) {
  const isDarkBg = variant === 'dark';
  const textColorPrimary = isDarkBg ? '#ffffff' : '#111116';
  const textColorSecondary = '#22c55e'; // Logo green
  const textColorTertiary = isDarkBg ? '#cccccc' : '#777777';

  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px', 
        userSelect: 'none',
        ...style 
      }}
    >
      {/* High-Fidelity SVG Logo Mark */}
      <svg 
        width="44" 
        height="44" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Upper Orange-Yellow Circuit Arc with Plug Icon */}
        <path 
          d="M 24 35 A 34 34 0 0 1 74 25" 
          stroke="url(#orange-grad)" 
          strokeWidth="4" 
          strokeLinecap="round" 
          fill="none" 
        />
        {/* Orange plug lines / prongs */}
        <path d="M 72 20 L 78 12" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
        <path d="M 77 23 L 83 15" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
        {/* Plug body shape block */}
        <rect x="71" y="21" width="6" height="8" transform="rotate(-40 71 21)" fill="#f97316" rx="1" />

        {/* Lower Green Circuit Arc with Plug Icon */}
        <path 
          d="M 76 65 A 34 34 0 0 1 26 75" 
          stroke="#22c55e" 
          strokeWidth="4" 
          strokeLinecap="round" 
          fill="none" 
        />
        {/* Green plug lines / prongs */}
        <path d="M 28 80 L 22 88" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
        <path d="M 23 77 L 17 85" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
        {/* Plug body shape block */}
        <rect x="23" y="71" width="6" height="8" transform="rotate(140 23 71)" fill="#22c55e" rx="1" />

        {/* Outer Circular Glow Accent */}
        <circle cx="50" cy="50" r="42" stroke={isDarkBg ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)'} strokeWidth="1" />

        {/* Stylized 'N' in Center */}
        {/* Left curve (Pink arrow shape) */}
        <path 
          d="M 32 68 L 32 38 L 52 28" 
          stroke="#ec4899" 
          strokeWidth="9" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none" 
        />
        {/* Right curve (Cyan arrow shape) */}
        <path 
          d="M 68 32 L 68 62 L 48 72" 
          stroke="#00bfff" 
          strokeWidth="9" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none" 
        />

        {/* Gradients Definitions */}
        <defs>
          <linearGradient id="orange-grad" x1="24" y1="35" x2="74" y2="25" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
      </svg>

      {/* Brand Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
          <span 
            style={{ 
              fontSize: '22px', 
              fontWeight: 800, 
              color: textColorPrimary, 
              fontFamily: '"Rajdhani", "Inter", sans-serif',
              letterSpacing: '0.5px'
            }}
          >
            NI DRIP
          </span>
          <span 
            style={{ 
              fontSize: '18px', 
              fontWeight: 700, 
              color: textColorSecondary, 
              fontFamily: '"Rajdhani", "Inter", sans-serif',
              letterSpacing: '0.5px'
            }}
          >
            CENTRAL
          </span>
        </div>
        <span 
          style={{ 
            fontSize: '9px', 
            fontWeight: 600, 
            letterSpacing: '1.2px', 
            textTransform: 'uppercase', 
            color: textColorTertiary, 
            fontFamily: '"Inter", sans-serif',
            marginTop: '2px'
          }}
        >
          ELECTRONICS & APPLIANCES
        </span>
      </div>
    </div>
  );
}
