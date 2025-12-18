
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Privacy: React.FC = () => {
    return (
        <div className="min-h-screen bg-background-light font-sans text-gray-900 selection:bg-primary selection:text-black">
            <Navbar onOpenAI={() => { }} />

            <main className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="mb-12 border-b border-gray-200 pb-8">
                        <span className="inline-block bg-[#333] text-primary text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest mb-4">
                            Legal
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-black mb-4">Política de Privacidade</h1>
                        <p className="text-gray-500 font-medium">Última atualização: Março de 2024</p>
                    </div>

                    <div className="prose prose-lg prose-gray max-w-none prose-headings:font-black prose-headings:text-black prose-p:text-gray-600 prose-p:font-medium prose-li:text-gray-600 prose-li:font-medium">
                        <p>
                            Na <strong>Nidus Ventures</strong>, a privacidade não é apenas uma obrigação legal, é um pilar de confiança.
                            Esta política descreve como tratamos os dados de candidatos a sócios ("Hunters") e visitantes.
                        </p>

                        <h3>1. Coleta de Dados</h3>
                        <p>Nós coletamos o mínimo necessário para iniciar uma conversa de negócios:</p>
                        <ul>
                            <li><strong>Dados de Identificação:</strong> Nome completo, e-mail corporativo, telefone e link do LinkedIn.</li>
                            <li><strong>Dados de Navegação:</strong> Cookies técnicos para garantir o funcionamento do site e analytics anonimizado para melhoria de UX.</li>
                        </ul>

                        <h3>2. Uso das Informações</h3>
                        <p>Seus dados têm um único propósito: <strong>Avaliação de Parceria (Venture Building)</strong>.</p>
                        <ul>
                            <li><strong>Triagem de Candidatos:</strong> Analisamos seu perfil profissional para verificar o fit com nossas teses de B2B SaaS.</li>
                            <li><strong>Comunicação:</strong> Entramos em contato para agendar entrevistas ou enviar feedbacks sobre sua aplicação.</li>
                            <li><strong>Melhoria Contínua:</strong> Utilizamos dados agregados para entender o perfil dos nossos visitantes.</li>
                        </ul>

                        <h3>3. Compartilhamento de Dados</h3>
                        <p>
                            <strong>Nós não vendemos seus dados.</strong> Jamais.
                            Seus dados podem ser compartilhados apenas com ferramentas internas de gestão (CRM, ATS) que seguem rigorosos padrões de segurança, ou se exigido por lei.
                        </p>

                        <h3>4. Segurança</h3>
                        <p>
                            Adotamos práticas de segurança alinhadas ao mercado para proteger suas informações contra acesso não autorizado, alteração ou destruição.
                            No entanto, nenhum sistema é 100% inviolável.
                        </p>

                        <h3>5. Seus Direitos (LGPD)</h3>
                        <p>
                            Você tem total controle sobre seus dados. A qualquer momento, você pode solicitar:
                        </p>
                        <ul>
                            <li>Confirmação da existência de tratamento.</li>
                            <li>Acesso aos dados.</li>
                            <li>Correção de dados incompletos ou desatualizados.</li>
                            <li>Exclusão de dados (respeitando prazos legais de armazenamento).</li>
                        </ul>

                        <div className="bg-background-dark p-8 rounded-2xl mt-12 text-center text-white">
                            <p className="font-bold">Para exercer seus direitos, contate nosso DPO:</p>
                            <a href="mailto:privacy@nidusventures.com" className="text-primary font-bold hover:underline">privacy@nidusventures.com</a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Privacy;
