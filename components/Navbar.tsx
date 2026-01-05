
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onOpenAI: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAI }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background-light/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center h-20">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="font-black text-2xl tracking-tighter">Nidus Ventures</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <Link to="/#sobre" className="hover:text-black transition-colors">Sobre</Link>
          <Link to="/#incubadora" className="hover:text-black transition-colors">Portfólio</Link>
          <Link to="/#contato" className="hover:text-black transition-colors">Contato</Link>
          <button
            onClick={onOpenAI}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <span className="material-icons-round text-lg">auto_awesome</span>
            Validar Ideia
          </button>
          <Link to="/dashboard" className="hover:text-black transition-colors">Portal do Sócio</Link>
          <Link
            to="/#contato"
            className="bg-primary text-black px-6 py-2.5 rounded-full hover:bg-primary-hover transition-colors shadow-sm"
          >
            Seja Sócio
          </Link>
        </div>

        <button className="md:hidden text-gray-900">
          <span className="material-icons-round text-3xl">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
