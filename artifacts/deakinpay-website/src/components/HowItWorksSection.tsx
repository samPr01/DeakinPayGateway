import React from 'react';
import { motion } from 'framer-motion';
import { Target, Search, Briefcase, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: <Target size={28} strokeWidth={1.5} />,
    title: "Strategic Planning",
    description: "Plan your retail growth by mapping which DekainPay services — DMT, AEPS, BBPS — best fit your customer base and maximise your outlet's earning potential."
  },
  {
    icon: <Search size={28} strokeWidth={1.5} />,
    title: "Market Research",
    description: "Identify underserved customers in your locality who rely on domestic money transfers and digital bill payments, and position your outlet as their go-to financial hub."
  },
  {
    icon: <Briefcase size={28} strokeWidth={1.5} />,
    title: "Financial Advisory",
    description: "Leverage DekainPay's transparent commission structure to advise customers on the fastest and most cost-effective way to send money to any bank account across India."
  },
  {
    icon: <RefreshCw size={28} strokeWidth={1.5} />,
    title: "Change Management",
    description: "Seamlessly transition your retail outlet into a full-service digital payment point with DekainPay's guided onboarding, training, and round-the-clock partner support."
  }
];

// Dashed arrow SVG between steps
function DashedArrow() {
  return (
    <div className="flex items-center justify-center w-16 shrink-0 mt-10">
      <svg width="56" height="14" viewBox="0 0 56 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="7" x2="42" y2="7" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M40 3L50 7L40 11" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold tracking-[0.25em] uppercase text-secondary mb-4"
          >
            Work Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-primary leading-snug"
          >
            Where your financial dreams<br className="hidden sm:block" /> become reality
          </motion.h2>
        </div>

        {/* Desktop — horizontal stepper with dashed arrows */}
        <div className="hidden lg:flex items-start justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center flex-1"
              >
                {/* Icon box with numbered badge */}
                <div className="relative mb-6">
                  <span className="absolute -top-2.5 -left-2.5 z-10 w-7 h-7 rounded bg-primary text-white text-xs font-bold flex items-center justify-center shadow">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-20 h-20 rounded-xl bg-slate-100 flex items-center justify-center text-primary shadow-sm">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-[15px] font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed px-2">{step.description}</p>
              </motion.div>

              {/* Dashed arrow connector */}
              {index < steps.length - 1 && <DashedArrow />}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile — vertical stepper */}
        <div className="lg:hidden flex flex-col gap-8 max-w-md mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-5 items-start"
            >
              {/* Icon + vertical connector */}
              <div className="flex flex-col items-center shrink-0">
                <div className="relative">
                  <span className="absolute -top-2 -left-2 z-10 w-6 h-6 rounded bg-primary text-white text-xs font-bold flex items-center justify-center">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center text-primary">
                    {step.icon}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="mt-2 flex flex-col gap-1">
                    {[0,1,2].map(i => (
                      <div key={i} className="w-px h-2 bg-slate-300 mx-auto" />
                    ))}
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="pt-2">
                <h3 className="text-base font-bold text-primary mb-1">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
