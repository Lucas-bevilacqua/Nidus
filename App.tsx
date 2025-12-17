
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Incubator from './components/Incubator';
import OperationModel from './components/OperationModel';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AISidebar from './components/AISidebar';

const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background-light text-gray-900 selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar onOpenAI={() => setIsAiOpen(true)} />
      
      <main>
        <Hero />
        <About />
        <Incubator />
        <OperationModel />
        <Contact />
        <CTA />
      </main>

      <Footer />
      
      <AISidebar isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
    </div>
  );
};

export default App;
