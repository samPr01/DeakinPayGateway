import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export function Logo({ className = '', light = false }: LogoProps) {
  const textColor = light ? 'text-white' : 'text-primary';
  const shieldColor = light ? '#FFFFFF' : '#0A2240';
  
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path d="M16 2L3 8.5V15C3 21.5 8 27.5 16 30C24 27.5 29 21.5 29 15V8.5L16 2Z" fill={shieldColor} />
        <path d="M11 16L14.5 19.5L21 13" stroke="#16A34A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className={`font-bold text-2xl tracking-tight leading-none ${textColor}`}>
        DeakinPay
      </span>
    </div>
  );
}
