
import React from 'react';

const features = [
  {
    icon: 'rocket_launch',
    title: 'Teste na Prática',
    desc: 'Testamos a ideia em tempo recorde. Validamos rápido para garantir que o produto seja exatamente o que o cliente precisa.'
  },
  {
    icon: 'bar_chart',
    title: 'Vender Muito',
    desc: 'Foco total em vendas e crescimento sustentável desde o primeiro dia. Transformamos interessados em faturamento mensal.'
  },
  {
    icon: 'cached',
    title: 'Negócio que Evolui',
    desc: 'Empresas que se adaptam e crescem naturalmente. A tecnologia é a base, mas a venda é o que dá vida ao negócio.'
  }
];

const Incubator: React.FC = () => {
  return (
    <section id="incubadora" className="py-24 lg:py-32 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">Onde criamos negócios</h2>
            <p className="text-xl text-gray-500 leading-relaxed font-medium">
              Não criamos apenas software. Criamos negócios lucrativos que crescem com estratégia e liderança forte.
            </p>
          </div>
          <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors whitespace-nowrap shadow-xl">
            Saiba como funciona
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-2xl hover:shadow-gray-200 transition-all group">
              <div className="w-14 h-14 bg-background-light rounded-full flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <span className="material-icons-round text-gray-800">{f.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Incubator;
