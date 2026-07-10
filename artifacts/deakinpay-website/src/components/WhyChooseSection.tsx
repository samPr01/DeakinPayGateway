import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, Headphones, Activity, FileText } from 'lucide-react';

const benefits = [
  {
    icon: <CheckCircle2 size={24} />,
    title: "Simple Onboarding",
    description: "Get started quickly with a streamlined registration process and zero complicated paperwork."
  },
  {
    icon: <Clock size={24} />,
    title: "Fast & Reliable",
    description: "Experience high success rates with our robust API infrastructure designed for scale."
  },
  {
    icon: <FileText size={24} />,
    title: "Secure & Compliant",
    description: "Fully compliant with RBI guidelines, ensuring 100% security for all funds transferred."
  },
  {
    icon: <Headphones size={24} />,
    title: "Dedicated Support",
    description: "Access our dedicated merchant support team whenever you need assistance."
  },
  {
    icon: <Activity size={24} />,
    title: "Easy Tracking",
    description: "Monitor transactions, commissions, and reports in real-time through our intuitive dashboard."
  }
];

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-6"
          >
            Why Choose <span className="text-secondary">DeakinPay</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl"
          >
            We provide everything a retailer needs to start a profitable money transfer business with zero hassle.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all ${index === 3 || index === 4 ? 'lg:col-span-1.5' : ''}`}
            >
              <div className="w-12 h-12 rounded-full bg-green-50 text-secondary flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
