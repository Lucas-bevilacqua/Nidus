import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    linkedIn: '',
    experience: '',
    role: '',
    interest: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errorMsg = 'Failed to submit';
        try {
          const errorData = await response.json();
          console.error('Submission failed (JSON):', errorData);
          errorMsg = errorData.details || errorData.error || errorMsg;
        } catch (e) {
          const textError = await response.text();
          console.error('Submission failed (Text):', textError);
          errorMsg = `Server Error: ${response.status}`;
        }
        throw new Error(errorMsg);
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '', linkedIn: '', experience: '', role: '', interest: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="py-24 lg:py-40 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-10">
            <div>
              <span className="inline-block bg-white border border-gray-200 text-gray-500 text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest mb-6">
                Fazer Parte
              </span>
              <h2 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900 mb-8">
                Torne-se um Sócio-Operador
              </h2>
              <p className="text-xl text-gray-500 max-w-md font-medium">
                Buscamos os melhores Hunters do mercado. Preencha o questionário de screening e nossa equipe avaliará seu perfil para uma das nossas startups.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black transition-all">
                  <span className="material-icons-round">assignment_ind</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Processo</p>
                  <p className="text-lg font-black text-gray-900">Screening & Validação</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black transition-all">
                  <span className="material-icons-round">groups</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Equity</p>
                  <p className="text-lg font-black text-gray-900">Sociedade Real por Performance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-900 mb-3">Nome</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nome completo"
                    className="w-full bg-background-light border-transparent rounded-2xl py-3 px-6 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400 font-medium"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-900 mb-3">LinkedIn</label>
                  <input
                    type="url"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleChange}
                    placeholder="linkedin.com/in/perfil"
                    className="w-full bg-background-light border-transparent rounded-2xl py-3 px-6 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-900 mb-3">Email Corporativo</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full bg-background-light border-transparent rounded-2xl py-3 px-6 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400 font-medium"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-900 mb-3">Tempo de Experiência</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full bg-background-light border-transparent rounded-2xl py-3 px-6 focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-medium text-gray-600 appearance-none"
                  >
                    <option value="">Selecione...</option>
                    <option value="1-3">1-3 anos</option>
                    <option value="3-5">3-5 anos</option>
                    <option value="5-10">5-10 anos</option>
                    <option value="10+">10+ anos</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-900 mb-3">Especialidade</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-background-light border-transparent rounded-2xl py-3 px-6 focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-medium text-gray-600 appearance-none"
                  >
                    <option value="">Selecione...</option>
                    <option value="vendas">Vendas / Hunter</option>
                    <option value="tech">Tecnologia / Produto</option>
                    <option value="ops">Operações / Gestão</option>
                    <option value="mkt">Marketing Digital</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-900 mb-3">Cargo Atual</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Ex: Head of Sales, Senior Account Executive"
                  className="w-full bg-background-light border-transparent rounded-2xl py-3 px-6 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400 font-medium"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-900 mb-3">Mensagem Adicional</label>
                <textarea
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos brevemente sobre sua motivação..."
                  className="w-full bg-background-light border-transparent rounded-2xl py-3 px-6 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400 font-medium resize-none text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-gray-800 transition-all shadow-xl shadow-gray-200 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-xs"
              >
                {status === 'loading' ? 'Processando...' : 'Enviar Questionário'}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-xl text-sm font-bold text-center">
                  Questionário enviado! Entraremos em contato em breve.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-xl text-sm font-bold text-center">
                  Erro ao enviar. Verifique o console ou tente novamente.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
