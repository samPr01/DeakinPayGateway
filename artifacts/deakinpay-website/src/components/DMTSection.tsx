import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, MapPin, Fingerprint, Home, Receipt } from 'lucide-react';

const features = [
  {
    icon: <Zap className="text-secondary" size={32} />,
    title: "Instant Transfers",
    description: "Execute real-time IMPS transfers that reflect in the beneficiary's account instantly, 24/7/365."
  },
  {
    icon: <ShieldCheck className="text-secondary" size={32} />,
    title: "Secure Transactions",
    description: "Bank-grade encryption and strict RBI compliance ensure every rupee is transferred securely."
  },
  {
    icon: <MapPin className="text-secondary" size={32} />,
    title: "Nationwide Coverage",
    description: "Transfer funds to any valid bank account across India with full NEFT and IMPS support."
  },
  {
    icon: <Fingerprint className="text-secondary" size={32} />,
    title: "AEPS",
    description: "Aadhaar Enabled Payment System lets customers withdraw cash, check balances, and transfer funds using just their Aadhaar number and fingerprint — no card or PIN needed."
  },
  {
    icon: <Home className="text-secondary" size={32} />,
    title: "Rent / Payment Vendor",
    description: "Enable customers to pay house rent and vendor dues directly from your retail outlet — fast, paperless, and fully trackable digital payments."
  },
  {
    icon: <Receipt className="text-secondary" size={32} />,
    title: "BBPS",
    description: "Bharat Bill Payment System support lets retailers collect utility bills, mobile recharges, insurance premiums, and more through a single, RBI-regulated platform."
  }
];

export function DMTSection() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-6"
          >
            Domestic Money Transfer <span className="text-secondary">Made Simple</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            With DekainPay, retailers can help customers transfer funds quickly and conveniently to bank accounts across India. Our platform is built for smooth, secure, and dependable NEFT and IMPS transactions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-50 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
