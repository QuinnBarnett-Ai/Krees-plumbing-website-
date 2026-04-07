import React from 'react';
import { motion } from 'motion/react';
import { Droplets, ShieldCheck, Clock, ArrowRight, Star } from 'lucide-react';
import { cn } from '../../lib/utils';

interface HomeProps {
  onNavigate: (screen: 'home' | 'booking' | 'services', transition?: 'none' | 'push' | 'slide_up') => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Bathroom" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary text-white rounded-full">
              Master Craftsman Standard
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Kree's Plumbing <br /> Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Precision engineering meets artisanal care. We provide high-end residential and commercial plumbing services that exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => onNavigate('booking', 'slide_up')}
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group"
              >
                Book Your Inspection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('services', 'push')}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-lg border border-white/30 transition-all duration-300"
              >
                Explore Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: Droplets, 
                title: "Precision Flow", 
                desc: "Advanced diagnostic tools to ensure perfect pressure and efficiency in every pipe." 
              },
              { 
                icon: ShieldCheck, 
                title: "Certified Quality", 
                desc: "Fully licensed master plumbers with over 20 years of high-end residential experience." 
              },
              { 
                icon: Clock, 
                title: "24/7 Response", 
                desc: "Elite emergency services for when perfection cannot wait until morning." 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-xl font-bold mb-4 text-on-surface">{feature.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-surface-container">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-tertiary text-tertiary" />)}
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-on-surface italic">
              "Kree's team transformed our estate's plumbing system. Their attention to detail is unparalleled in the industry. Truly a master craftsman standard."
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-on-secondary-fixed">
                JW
              </div>
              <div className="text-left">
                <p className="font-bold text-on-surface">Julian Wentworth</p>
                <p className="text-sm text-on-surface-variant">Estate Owner, Beverly Hills</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
