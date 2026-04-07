import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Droplets, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: 'home' | 'booking' | 'services';
  onNavigate: (screen: 'home' | 'booking' | 'services', transition?: 'none' | 'push' | 'slide_up') => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentScreen, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTransition = (to: 'home' | 'booking' | 'services') => {
    if (to === 'home') return 'none';
    if (currentScreen === 'booking' && to === 'services') return 'none';
    if (currentScreen === 'home' && to === 'services') return 'push';
    if (to === 'booking') return 'push';
    return 'none';
  };

  const navLinks = [
    { name: 'Home', id: 'home' as const },
    { name: 'Services', id: 'services' as const },
    { name: 'Booking', id: 'booking' as const },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
          isScrolled ? "glass-header shadow-lg py-3" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => onNavigate('home', 'none')}
            className={cn(
              "text-2xl font-headline font-bold flex items-center gap-2 cursor-pointer transition-colors",
              isScrolled ? "text-primary" : "text-white"
            )}
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Droplets className="w-6 h-6" />
            </div>
            <span className={cn(
              "hidden sm:inline-block",
              isScrolled ? "text-on-surface" : "text-white"
            )}>Kree's Plumbing</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.id, getTransition(link.id));
                }}
                className={cn(
                  "text-sm font-bold tracking-widest uppercase transition-all hover:text-primary relative group",
                  currentScreen === link.id 
                    ? "text-primary" 
                    : (isScrolled ? "text-on-surface-variant" : "text-white/80")
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full",
                  currentScreen === link.id && "w-full"
                )} />
              </a>
            ))}
            <button 
              onClick={() => onNavigate('booking', 'slide_up')}
              className={cn(
                "px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2",
                isScrolled 
                  ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20" 
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/30 backdrop-blur-md"
              )}
            >
              <Phone className="w-4 h-4" />
              Emergency Call
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-xl transition-colors",
              isScrolled ? "text-on-surface hover:bg-surface-container" : "text-white hover:bg-white/10"
            )}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.id, getTransition(link.id));
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "text-3xl font-headline font-bold text-on-surface",
                    currentScreen === link.id && "text-primary"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  onNavigate('booking', 'slide_up');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-5 bg-primary text-white font-bold rounded-2xl text-xl shadow-xl shadow-primary/20"
              >
                Book Inspection
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest py-16 border-t border-outline-variant/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-headline font-bold flex items-center gap-2 text-on-surface mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                  <Droplets className="w-6 h-6" />
                </div>
                Kree's Plumbing
              </div>
              <p className="text-on-surface-variant max-w-md leading-relaxed">
                Setting the master craftsman standard in luxury plumbing solutions. From high-end residential estates to complex commercial developments, we deliver perfection in every pipe.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); onNavigate(link.id, getTransition(link.id)); }}
                      className="text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-sm">Contact</h4>
              <ul className="space-y-4 text-on-surface-variant">
                <li>+1 (555) 012-3456</li>
                <li>concierge@kreesplumbing.com</li>
                <li>Beverly Hills, CA 90210</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant">
            <p>© 2026 Kree's Plumbing Solutions. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
