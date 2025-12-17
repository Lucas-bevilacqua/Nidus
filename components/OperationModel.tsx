
import React from 'react';

const stages = [
  {
    fase: '01',
    icon: 'lightbulb',
    title: 'A Concepção',
    desc: 'Onde a tese nasce e é posta à prova. Foco total em validação.',
    resp: 'Nidus Ventures (Core Team)',
    actions: 'Discovery, Prototipação, Validação de Problema',
    goal: 'Product-Market Fit'
  },
  {
    fase: '02',
    icon: 'construction',
    title: 'A Incubação',
    desc: 'Transformando validação em um negócio real com tração.',
    resp: 'Nidus + Sócios Operadores',
    actions: 'Construção do time, Vendas Outbound, Processos',
    goal: 'Máquina de Vendas'
  },
  {
    fase: '03',
    icon: 'flight_takeoff',
    title: 'O Voo',
    desc: 'A empresa ganha vida própria e domina seu segmento.',
    resp: 'Sócios Operadores (Liderança)',
    actions: 'Escala, Otimização Financeira, Expansão',
    goal: 'Exit ou Consolidação'
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
            O Nidus Way
          </span>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            Modelo de Operação: <span className="text-primary">3 Estágios de Vida</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Do zero ao exit, nosso processo é desenhado para mitigar riscos e maximizar o potencial de escala em cada fase da jornada.
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
