import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout } from './components/Layout';
import { Home } from './components/screens/Home';
import { OurServices } from './components/screens/OurServices';
import { BookService } from './components/screens/BookService';

type Screen = 'home' | 'booking' | 'services';
type Transition = 'none' | 'push' | 'slide_up';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [transition, setTransition] = useState<Transition>('none');

  const handleNavigate = (screen: Screen, trans: Transition = 'none') => {
    setTransition(trans);
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const getVariants = (trans: Transition) => {
    switch (trans) {
      case 'push':
        return {
          initial: { x: '100%', opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: '-100%', opacity: 0 },
        };
      case 'slide_up':
        return {
          initial: { y: '100%', opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: '-100%', opacity: 0 },
        };
      case 'none':
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        };
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <OurServices onNavigate={handleNavigate} />;
      case 'booking':
        return <BookService onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentScreen={currentScreen} onNavigate={handleNavigate}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentScreen}
          variants={getVariants(transition)}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: transition === 'none' ? 0 : 0.4 
          }}
          className="w-full"
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
