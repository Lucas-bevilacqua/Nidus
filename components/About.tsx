
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
              Software sem venda é código morto.
            </h2>
          </div>

          <div className="space-y-10 text-gray-400">
            <p className="text-xl leading-relaxed">
              Na Nidus, acreditamos que o maior valor de uma empresa não é o software, é a <span className="text-white font-bold border-b-2 border-primary pb-1">máquina de vendas</span>. A tecnologia é a base, mas o sucesso vem de quem sabe vender.
            </p>
            <p className="text-lg leading-relaxed">
              Por isso, simplificamos o caminho: nós resolvemos toda a parte técnica (criamos o sistema e pagamos os servidores) para que você foque 100% no que importa: <strong className="text-white">trazer clientes e crescer o faturamento</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Buscamos pessoas com vontade de crescer. Se você cansou de vender apenas para os outros, seu lugar é aqui. Unimos a tecnologia ao seu talento comercial para criar grandes negócios.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div>
                <h3 className="text-3xl font-black text-white mb-2">Criação</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Desenvolvimento</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-2">Crescimento</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Escala</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-2">Futuro</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Objetivo final</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
