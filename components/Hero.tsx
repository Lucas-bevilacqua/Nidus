
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block bg-white border border-gray-200 text-gray-500 text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest mb-6">
              • Parceria para novos negócios
            </span>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] text-gray-900 mb-8">
              Nós construímos a Tecnologia.<br />
              <span className="text-primary-gradient">Você constrói o Negócio.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mb-10 leading-relaxed font-medium">
              Transforme seu talento em vendas em participação real no negócio. Não somos uma agência de serviços. Somos criadores de empresas. A Nidus entrega o software pronto e os custos de tecnologia são por nossa conta. Você entra com as vendas para virar sócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="bg-primary text-black px-8 py-4 rounded-full font-bold hover:bg-primary-hover transition-all transform hover:-translate-y-1 shadow-xl shadow-yellow-400/20 text-center"
              >
                Sou bom de vendas e quero ser sócio
              </a>
              <a
                href="#modelo"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all text-center"
              >
                Veja como funciona
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition-colors"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-black shadow-2xl">
              <img
                src="/assets/hero-visual.png"
                alt="Living Business Visualization"
                className="w-full h-full object-cover opacity-80 mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-primary"></div>
                  <span className="text-white text-xs font-bold uppercase tracking-widest">Nidus Ecosystem</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
