
import React, { useState } from 'react';
import { validateStartupIdea, ValidationResult } from '../services/gemini';

interface AISidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const AISidebar: React.FC<AISidebarProps> = ({ isOpen, onClose }) => {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ValidationResult | null>(null);

  const handleValidate = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    try {
      const data = await validateStartupIdea(idea);
      setResult(data);
    } catch (err) {
      console.error(err);
      // alert("Error validating idea. Please check your API key."); -- Replaced with UI error
      setResult({
        score: 0,
        fase1: "Erro na validação.",
        fase2: "Verifique sua API Key.",
        fase3: "Tente novamente mais tarde.",
        feedback: "Ocorreu um erro ao conectar com a IA. Por favor, verifique se a chave de API está configurada corretamente no arquivo .env."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <div className={`fixed top-0 right-0 w-full md:w-[500px] h-full bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out p-8 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-2">
            <span className="material-icons-round text-primary bg-black p-1.5 rounded-lg">auto_awesome</span>
            <h2 className="text-2xl font-black">Teste sua ideia de Startup</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-black">
            <span className="material-icons-round text-3xl">close</span>
          </button>
        </div>

        {!result ? (
          <div className="space-y-8">
            <p className="text-gray-500 font-medium">
              Valide sua ideia B2B SaaS com nossa IA usando a metodologia Nidus Ventures. Descubra se você tem um negócio ou apenas um código.
            </p>
            <textarea
              className="w-full bg-background-light border-transparent rounded-2xl p-6 h-40 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Descreva sua ideia de B2B SaaS em detalhes. Qual o problema? Quem é o cliente? Como você vai vender?"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
            />
            <button
              onClick={handleValidate}
              disabled={loading}
              className={`w-full bg-black text-white py-5 rounded-full font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Validando...
                </>
              ) : (
                <>
                  <span className="material-icons-round">bolt</span>
                  Validar Ideia Agora
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-500">
            <div className="bg-background-light p-8 rounded-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Potencial de Validação</p>
              <h3 className="text-6xl font-black text-gray-900">{result.score}%</h3>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-sm font-black uppercase text-gray-900 mb-2">Fase 1: A Concepção</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{result.fase1}</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-sm font-black uppercase text-gray-900 mb-2">Fase 2: A Incubação</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{result.fase2}</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-sm font-black uppercase text-gray-900 mb-2">Fase 3: O Voo</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{result.fase3}</p>
              </div>
            </div>

            <div className="bg-black text-white p-6 rounded-2xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Feedback do Especialista</h4>
              <p className="text-sm leading-relaxed text-gray-300">{result.feedback}</p>
            </div>

            <button
              onClick={() => setResult(null)}
              className="w-full border-2 border-gray-900 text-gray-900 py-4 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all"
            >
              Validar outra ideia
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AISidebar;
