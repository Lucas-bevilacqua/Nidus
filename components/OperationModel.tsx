
import React from 'react';

const stages = [
  {
    fase: '01',
    icon: 'lightbulb',
    title: 'Produto Pronto',
    desc: 'Nós entregamos a tecnologia completa e testada, com todos os custos de servidor pagos pela Nidus. Zero risco técnico para você.',
    resp: 'Tecnologia Nidus',
    actions: 'Software Pronto, Custos Pagos',
    goal: 'Sistema no Ar'
  },
  {
    fase: '02',
    icon: 'construction',
    title: 'Primeiras Vendas',
    desc: 'Hora de vender. Você assume a operação. 100% do valor da taxa de implantação é seu para investir no seu crescimento. O foco é conquistar mercado.',
    resp: 'Sócio de Vendas',
    actions: 'Prospecção e Primeiros Clientes',
    goal: 'Vendas Garantidas'
  },
  {
    fase: '03',
    icon: 'flight_takeoff',
    title: 'Lucro e Sociedade',
    desc: 'Crescimento Real. Ao atingir as metas combinadas, você consolida sua participação como sócio. Compartilhamos o lucro e o sucesso futuro.',
    resp: 'Sócios Unidos',
    actions: 'Crescimento e Liderança',
    goal: 'Sociedade e Lucro'
  }
];

const OperationModel: React.FC = () => {
  return (
    <section id="modelo" className="bg-background-dark py-24 lg:py-40 text-white relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[200px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block bg-[#333] text-primary text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest mb-6">
            O Estilo Nidus
          </span>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            Como crescemos juntos: <span className="text-primary">3 passos simples</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Do início ao sucesso, nosso processo é feito para reduzir riscos e aumentar suas chances de ganhar dinheiro e ter um negócio de valor.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stages.map((s, i) => (
            <div key={i} className="bg-surface-dark p-8 md:p-10 rounded-[2rem] border border-card-border hover:border-primary/50 transition-colors group">
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <span className="material-icons-round">{s.icon}</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">
                  Fase {s.fase}
                </span>
              </div>

              <h3 className="text-2xl font-black mb-4">{s.title}</h3>
              <p className="text-gray-400 mb-10 leading-relaxed font-medium pb-8 border-b border-white/5">
                {s.desc}
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Responsabilidade</p>
                  <p className="text-sm font-bold text-white">{s.resp}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Ações</p>
                  <p className="text-sm text-gray-400">{s.actions}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Objetivo</p>
                  <p className="text-sm font-black text-white">{s.goal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationModel;
