import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

      if (!response.ok) throw new Error('Failed to submit');

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
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
                Contato
              </span>
              <h2 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900 mb-8">
                Vamos construir o futuro juntos?
              </h2>
              <p className="text-xl text-gray-500 max-w-md font-medium">
                Se você é um operador buscando autonomia ou quer saber mais sobre nosso modelo de venture building, estamos prontos para ouvir você.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black transition-all">
                  <span className="material-icons-round">email</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Email</p>
                  <p className="text-lg font-black text-gray-900">contato@nidusventures.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black transition-all">
                  <span className="material-icons-round">public</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Social</p>
                  <p className="text-lg font-black text-gray-900">LinkedIn Nidus Ventures</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-100">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-900 mb-4">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="w-full bg-background-light border-transparent rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400 font-medium"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-900 mb-4">Email Corporativo</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full bg-background-light border-transparent rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400 font-medium"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-900 mb-4">Mensagem</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  className="w-full bg-background-light border-transparent rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400 font-medium resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-black text-white py-5 rounded-full font-bold hover:bg-gray-800 transition-all shadow-xl shadow-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-xl text-sm font-bold text-center">
                  Mensagem enviada com sucesso!
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-xl text-sm font-bold text-center">
                  Erro ao enviar mensagem. Tente novamente.
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
