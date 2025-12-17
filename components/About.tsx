
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="bg-background-dark py-24 lg:py-40 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="inline-block bg-[#333] text-primary text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest mb-8">
              • Sobre Nós
            </span>
            <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-8">
              O Código Sozinho é Estático.<br />
              <span className="text-primary">O Negócio é Vivo.</span>
            </h2>
          </div>
          
          <div className="space-y-10 text-gray-400">
            <p className="text-xl leading-relaxed">
              Na Nidus Ventures, não acreditamos em software de prateleira. Acreditamos em <span className="text-white font-bold border-b-2 border-primary pb-1">ecossistemas vivos</span>. O código é apenas o esqueleto; a operação comercial é o músculo, e a liderança é a alma.
            </p>
            <p className="text-lg leading-relaxed">
              Nossa filosofia é construir <strong className="text-white">organismos vivos de recorrência</strong>. Negócios que não apenas funcionam, mas que evoluem, aprendem e dominam seus mercados. Transformamos a frieza dos dados no calor das vendas.
            </p>
            <p className="text-lg leading-relaxed">
              Buscamos operadores que entendam que uma startup não se faz apenas com features, mas com suor, estratégia e execução implacável. Somos o solo fértil onde o SaaS encontra o Business.
            </p>
            
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div>
                <h3 className="text-3xl font-black text-white mb-2">Build</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Construção</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-2">Scale</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Crescimento</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-2">Exit</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Objetivo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
