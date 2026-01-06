
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light pt-24 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-12">
            <img src="/assets/logo.png" alt="Nidus Ventures Logo" className="h-24 w-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
            <Link to="/manifesto" className="text-sm font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors">Manifesto</Link>
            <Link to="/termos" className="text-sm font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors">Termos de Uso</Link>
            <Link to="/privacidade" className="text-sm font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors">Privacidade</Link>
            <Link to="/blog" className="text-sm font-bold text-gray-500 hover:text-black uppercase tracking-widest transition-colors">Blog</Link>
          </div>

          <div className="w-full max-w-md mb-16">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 text-center mb-6">Fique por dentro</p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                const button = form.querySelector('button');
                if (button) button.disabled = true;

                try {
                  const res = await fetch('/api/newsletter', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                  });
                  if (res.ok) {
                    alert('Inscrição realizada com sucesso!');
                    form.reset();
                  } else {
                    const data = await res.json();
                    alert(data.error || 'Erro ao se inscrever.');
                  }
                } catch (err) {
                  alert('Erro de conexão. Tente novamente.');
                } finally {
                  if (button) button.disabled = false;
                }
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="seu@email.com"
                className="flex-1 bg-white border border-gray-200 rounded-full py-3 px-6 text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-medium"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition-all shadow-lg active:scale-95 disabled:opacity-50"
              >
                Assinar
              </button>
            </form>
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
