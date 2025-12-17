
import React from 'react';

interface NavbarProps {
  onOpenAI: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAI }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background-light/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <span className="font-black text-2xl tracking-tighter">N</span>
          <span className="font-bold text-xl tracking-tight hidden sm:inline">Nidus Ventures</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <a href="#sobre" className="hover:text-black transition-colors">Sobre</a>
          <a href="#incubadora" className="hover:text-black transition-colors">Portfólio</a>
          <a href="#contato" className="hover:text-black transition-colors">Contato</a>
          <button 
            onClick={onOpenAI}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <span className="material-icons-round text-lg">auto_awesome</span>
            AI Validator
          </button>
          <a 
            href="#contato"
            className="bg-primary text-black px-6 py-2.5 rounded-full hover:bg-primary-hover transition-colors shadow-sm"
          >
            Seja Sócio
          </a>
        </div>
        
        <button className="md:hidden text-gray-900">
          <span className="material-icons-round text-3xl">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
