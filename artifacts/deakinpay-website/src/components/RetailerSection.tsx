import React from 'react';
import { motion } from 'framer-motion';
import { Users, IndianRupee, Building } from 'lucide-react';

const stats = [
  {
    icon: <Users size={32} className="text-secondary" />,
    value: "10,000+",
    label: "Retailer Partners"
  },
  {
    icon: <IndianRupee size={32} className="text-secondary" />,
    value: "₹500Cr+",
    label: "Transferred Monthly"
  },
  {
    icon: <Building size={32} className="text-secondary" />,
    value: "100%",
    label: "Major Banks Supported"
  }
];

export function RetailerSection() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Built for Retailers,<br />
              <span className="text-secondary">Trusted by Customers</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              DeakinPay empowers local retailers to offer essential financial services within their communities. Our easy-to-use platform helps people stay financially connected with their families, wherever they are.
            </p>
            <ul className="space-y-4">
              {['Easy API & Portal Integration', 'High Success Rate for Transactions', 'Instant Commission Settlements'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200 font-medium">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm sm:col-span-2 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-white/10 flex mb-6 flex-row justify-center items-center ml-[310px]">
                  {stat.icon}
                </div>
                <h4 className="text-4xl font-bold mb-2 text-center">{stat.value}</h4>
                <p className="text-slate-400 font-medium text-center">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
