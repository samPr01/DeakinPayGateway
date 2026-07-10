import React from 'react';
import logoImg from '@assets/exec-5db9c9d0-066c-4773-847a-d898dcf245bd_1783666683325.png';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export function Logo({ className = '', light = false }: LogoProps) {
  if (light) {
    // On dark backgrounds, wrap in a white rounded container so the logo is legible
    return (
      <div className={`inline-flex items-center ${className}`}>
        <div className="bg-white rounded-lg px-3 py-1.5">
          <img
            src={logoImg}
            alt="Dekain Pay"
            className="h-12 w-auto"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={logoImg}
        alt="Dekain Pay"
        className="h-20 w-auto"
      />
    </div>
  );
}
