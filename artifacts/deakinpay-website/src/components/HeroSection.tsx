import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #0A2240 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-semibold mb-6">
              <ShieldCheck size={16} className="text-secondary" />
              RBI Compliant DMT Platform
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary mb-6">
              Fast, Secure Money Transfers for <span className="text-secondary">Every Customer</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              DeakinPay helps retailers provide reliable domestic money transfer services directly from their outlets. Send money to bank accounts across India through secure NEFT and IMPS transfers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all hover:-translate-y-1 shadow-lg shadow-green-600/20">
                Become a Partner
                <ArrowRight size={18} />
              </a>
              <a href="#how-it-works" className="inline-flex justify-center items-center px-8 py-3.5 bg-white text-primary border-2 border-primary font-semibold rounded-xl hover:bg-slate-50 transition-all hover:-translate-y-1">
                How It Works
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-1.5">
                <Zap size={16} className="text-amber-500" /> Instant Setup
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-secondary" /> Bank-grade Security
              </div>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-square rounded-full bg-primary/5 flex items-center justify-center">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                {/* Background Blobs/Shapes */}
                <circle cx="200" cy="200" r="150" fill="#0A2240" fillOpacity="0.03" />
                <rect x="70" y="80" width="260" height="240" rx="20" fill="white" />
                
                {/* Desktop/Counter Top */}
                <path d="M50 280 H350 V310 C350 315.523 345.523 320 340 320 H60 C54.4772 320 50 315.523 50 310 V280 Z" fill="#F1F5F9" />
                <rect x="50" y="280" width="300" height="6" fill="#0A2240" />

                {/* Retailer Character */}
                <circle cx="140" cy="170" r="32" fill="#0A2240" />
                <path d="M100 280 C100 240 120 220 140 220 C160 220 180 240 180 280" fill="#0A2240" />
                
                {/* POS / Screen */}
                <rect x="185" y="210" width="60" height="70" rx="4" fill="#0A2240" />
                <rect x="190" y="215" width="50" height="40" rx="2" fill="#16A34A" />
                <rect x="210" y="260" width="10" height="20" fill="#CBD5E1" />
                <rect x="175" y="275" width="80" height="5" fill="#94A3B8" />

                {/* Customer Character */}
                <circle cx="270" cy="150" r="28" fill="#64748B" />
                <path d="M235 280 C235 245 255 220 270 220 C285 220 305 245 305 280" fill="#64748B" />

                {/* Floating Elements (Money Transfer) */}
                <g className="animate-bounce" style={{ animationDuration: '3s' }}>
                  <rect x="160" y="110" width="80" height="50" rx="8" fill="#16A34A" />
                  <path d="M190 135 H210 M200 125 V145" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="200" cy="135" r="15" stroke="white" strokeWidth="2" fill="none" />
                </g>

                {/* Phone in Customer Hand */}
                <rect x="240" y="180" width="20" height="35" rx="3" fill="#334155" />
                <rect x="242" y="182" width="16" height="31" rx="1" fill="#E2E8F0" />
              </svg>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-1/4 -right-4 md:-right-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <ShieldCheck className="text-secondary" size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Transfer Status</p>
                <p className="text-sm font-bold text-primary">Successful</p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
