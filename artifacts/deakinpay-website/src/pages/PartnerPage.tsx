import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Logo } from '../components/Logo';

const contactCards = [
  {
    icon: <MapPin size={24} />,
    title: 'Address',
    detail: '213, Diamond Trading Centre, New Palasia, Indore 452001 (MP) India'
  },
  {
    icon: <Mail size={24} />,
    title: 'Mail Us',
    detail: 'support@deakinpay.in'
  },
  {
    icon: <Phone size={24} />,
    title: 'Telephone',
    detail: '+91 74007 86767'
  }
];

export function PartnerPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar strip */}
      <header className="border-b border-slate-100 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <a href="/">
          <Logo />
        </a>
        <a href="/" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
          ← Back to home
        </a>
      </header>

      <main className="container mx-auto px-6 max-w-6xl py-16">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">

          {/* Left — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-primary mb-2">Get in touch</h1>
            <p className="text-slate-500 mb-10">We are here for you! How can we help? We are here for you!</p>

            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <svg className="text-secondary" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h2 className="text-2xl font-bold text-primary mb-2">Message Sent!</h2>
                <p className="text-slate-500 mb-6">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="text-secondary font-semibold hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Rahul"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Sharma"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="rahul@example.com"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 74007 86767"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your business and how you'd like to partner with DekainPay…"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-all hover:-translate-y-0.5 shadow-md shadow-green-600/20"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Right — contact info cards */}
          <div className="flex flex-col gap-5 lg:mt-20">
            {contactCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{card.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{card.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
