
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light pt-24 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-12">
            <span className="font-black text-3xl tracking-tighter">N</span>
            <span className="font-bold text-2xl tracking-tight">Nidus Ventures</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
            <a href="#" className="text-sm font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors">Manifesto</a>
            <a href="#" className="text-sm font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors">Termos de Uso</a>
            <a href="#" className="text-sm font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors">Privacidade</a>
            <a href="#" className="text-sm font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors">Blog</a>
          </div>
          
          <div className="flex gap-8 mb-16">
            <a href="#" className="text-gray-400 hover:text-black transition-colors">
              <span className="material-icons-round text-2xl">work</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors">
              <span className="material-icons-round text-2xl">chat</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors">
              <span className="material-icons-round text-2xl">photo_camera</span>
            </a>
          </div>
          
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] text-center">
            © 2024 Nidus Ventures. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
