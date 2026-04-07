import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Phone, User, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

interface BookServiceProps {
  onNavigate: (screen: 'home' | 'booking' | 'services', transition?: 'none' | 'push' | 'slide_up') => void;
}

export const BookService: React.FC<BookServiceProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-container-lowest p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-3xl shadow-2xl text-center border border-outline-variant/10"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4 tracking-tight">Booking Received</h2>
          <p className="text-on-surface-variant mb-10 leading-relaxed">
            A Master Craftsman will review your request and contact you within 2 hours to confirm your inspection time.
          </p>
          <button 
            onClick={() => onNavigate('home', 'none')}
            className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
          >
            Return Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-container-lowest pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-on-surface mb-8 tracking-tight">Book Your <br /> Inspection</h1>
            <p className="text-on-surface-variant text-lg mb-12 leading-relaxed max-w-md">
              Schedule a comprehensive system evaluation with a master plumber. We provide detailed reports and transparent pricing.
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, title: "Direct Line", detail: "+1 (555) 012-3456" },
                { icon: Mail, title: "Email", detail: "concierge@kreesplumbing.com" },
                { icon: MapPin, title: "Service Area", detail: "Greater Los Angeles & Orange County" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-outline-variant/20 flex items-center justify-center text-primary shadow-sm group-hover:shadow-md transition-all">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">{item.title}</p>
                    <p className="text-lg font-bold text-on-surface">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-outline-variant/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant flex items-center gap-2">
                    <User className="w-4 h-4" /> Full Name
                  </label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Wentworth"
                    className="w-full ghost-input py-3"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Phone Number
                  </label>
                  <input 
                    required
                    type="tel" 
                    placeholder="(555) 000-0000"
                    className="w-full ghost-input py-3"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email Address
                </label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full ghost-input py-3"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Service Address
                </label>
                <input 
                  required
                  type="text" 
                  placeholder="123 Estate Drive, Beverly Hills"
                  className="w-full ghost-input py-3"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Preferred Date
                  </label>
                  <input 
                    required
                    type="date" 
                    className="w-full ghost-input py-3"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Preferred Time
                  </label>
                  <select className="w-full ghost-input py-3 bg-transparent">
                    <option>Morning (8am - 12pm)</option>
                    <option>Afternoon (12pm - 4pm)</option>
                    <option>Evening (4pm - 8pm)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Project Details
                </label>
                <textarea 
                  placeholder="Tell us about your plumbing needs..."
                  rows={4}
                  className="w-full ghost-input py-3 resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 text-lg"
              >
                Confirm Inspection Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
