import React from 'react';
import { motion } from 'motion/react';
import { Wrench, Bath, Flame, Waves, Construction, Search, ArrowRight } from 'lucide-react';

interface OurServicesProps {
  onNavigate: (screen: 'home' | 'booking' | 'services', transition?: 'none' | 'push' | 'slide_up') => void;
}

const services = [
  {
    icon: Bath,
    title: "Luxury Bathrooms",
    description: "Custom installation of high-end fixtures, steam showers, and smart bathroom technology.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: Flame,
    title: "Heating Systems",
    description: "Hydronic heating, radiant floor systems, and high-efficiency boiler installations.",
    image: "https://images.unsplash.com/photo-1585136609214-41717adacc8a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: Waves,
    title: "Water Filtration",
    description: "Whole-house reverse osmosis and UV purification systems for pristine water quality.",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: Construction,
    title: "New Construction",
    description: "Full-scale plumbing architecture for custom luxury homes and commercial developments.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: Search,
    title: "Leak Detection",
    description: "Non-invasive acoustic and thermal imaging to locate hidden issues without damage.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Preventative care programs designed to keep your systems running at peak performance.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop"
  }
];

export const OurServices: React.FC<OurServicesProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 bg-surface-container-low">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-on-surface mb-6">Our Expertise</h1>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
              We specialize in complex systems and high-end finishes, bringing a master's touch to every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 mb-6 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">{service.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button 
                    onClick={() => onNavigate('booking', 'slide_up')}
                    className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                  >
                    Book This Service
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">Ready for a Master Inspection?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg">
            Don't settle for standard. Experience the Kree difference today with a comprehensive system evaluation.
          </p>
          <button 
            onClick={() => onNavigate('booking', 'slide_up')}
            className="px-10 py-5 bg-white text-primary font-bold rounded-full hover:bg-white/90 transition-all shadow-2xl"
          >
            Book Your Inspection
          </button>
        </div>
      </section>
    </div>
  );
};
