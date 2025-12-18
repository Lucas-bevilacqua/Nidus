
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-background-dark p-12 lg:p-24 rounded-[3rem] text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:bg-primary/20 transition-all"></div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
              Cansado de bater meta para ganhar só comissão?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-medium">
              Estamos buscando Hunters (Caçadores) que queiram evoluir para Founders (Donos).
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 text-left">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">O Produto</p>
                <p className="text-white font-black text-lg">Pronto</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">O Mercado</p>
                <p className="text-white font-black text-lg">B2B</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">O Risco</p>
                <p className="text-white font-black text-lg">Dividido</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">O Retorno</p>
                <p className="text-white font-black text-lg">Sociedade Real</p>
              </div>
            </div>
            <a
              href="#contato"
              className="inline-block bg-primary text-black px-12 py-5 rounded-full font-black text-xl hover:bg-primary-hover transition-all transform hover:scale-105 shadow-2xl shadow-primary/20"
            >
              Quero aplicar para Sócio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
