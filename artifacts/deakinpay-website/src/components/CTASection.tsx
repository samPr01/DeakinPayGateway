import React from 'react';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background with slight gradient */}
      <div className="absolute inset-0 bg-primary"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary to-slate-800 opacity-90"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-secondary opacity-20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Start Offering Money Transfer Services Today
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
        >
          Join DeakinPay and give your customers a simple, secure way to transfer money across India. Grow your retail business.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="mailto:support@deakinpay.in"
            className="inline-block px-10 py-4 bg-secondary text-white text-lg font-bold rounded-xl hover:bg-green-500 transition-all hover:scale-105 shadow-xl shadow-green-600/30"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
