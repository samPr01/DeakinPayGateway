import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, UserCheck, IndianRupee, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus size={24} />,
    title: "Register",
    description: "Sign up as a DeakinPay retailer with basic KYC details."
  },
  {
    icon: <UserCheck size={24} />,
    title: "Add Details",
    description: "Enter sender mobile number and beneficiary account details."
  },
  {
    icon: <IndianRupee size={24} />,
    title: "Enter Amount",
    description: "Input the amount to transfer and verify with the customer."
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Complete",
    description: "Execute secure NEFT/IMPS transfer instantly."
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-6"
          >
            How It <span className="text-secondary">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            A simple, intuitive four-step process to complete money transfers securely.
          </motion.p>
        </div>

        {/* Desktop Stepper */}
        <div className="hidden lg:block relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-10 left-[12%] right-[12%] h-1 bg-slate-200">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-secondary"
            />
          </div>

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center border-4 border-slate-50 mb-6 shadow-xl relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white font-bold flex items-center justify-center text-sm border-2 border-slate-50">
                    {index + 1}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 w-full h-full">
                  <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Stepper */}
        <div className="lg:hidden max-w-lg mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-6 mb-8 relative"
            >
              {/* Vertical Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-8 top-20 bottom-[-32px] w-0.5 bg-secondary/30"></div>
              )}
              
              <div className="shrink-0 relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-secondary text-white font-bold flex items-center justify-center text-xs">
                  {index + 1}
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex-1">
                <h3 className="text-lg font-bold text-primary mb-1">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
