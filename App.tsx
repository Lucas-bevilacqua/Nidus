
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Incubator from './components/Incubator';
import OperationModel from './components/OperationModel';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AISidebar from './components/AISidebar';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import ScrollToTop from './components/ScrollToTop'; // We need to create this

const Home: React.FC<{ onOpenAI: () => void }> = ({ onOpenAI }) => (
  <div className="min-h-screen bg-background-light text-gray-900 selection:bg-primary selection:text-black overflow-x-hidden">
    <Navbar onOpenAI={onOpenAI} />
    <main>
      <Hero />
      <About />
      <Incubator />
      <OperationModel />
      <Contact />
      <CTA />
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background-light">
        <Routes>
          <Route path="/" element={<Home onOpenAI={() => setIsAiOpen(true)} />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <AISidebar isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
      </div>
    </Router>
  );
};

export default App;
