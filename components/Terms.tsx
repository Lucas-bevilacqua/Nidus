
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Terms: React.FC = () => {
    return (
        <div className="min-h-screen bg-background-light font-sans text-gray-900 selection:bg-primary selection:text-black">
            <Navbar onOpenAI={() => { }} />

            <main className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="mb-12 border-b border-gray-200 pb-8">
                        <span className="inline-block bg-[#333] text-primary text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest mb-4">
                            Legal
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-black mb-4">Termos de Uso</h1>
                        <p className="text-gray-500 font-medium">Última atualização: Março de 2024</p>
                    </div>

                    <div className="prose prose-lg prose-gray max-w-none prose-headings:font-black prose-headings:text-black prose-p:text-gray-600 prose-p:font-medium prose-li:text-gray-600 prose-li:font-medium">
                        <h3>1. Visão Geral</h3>
                        <p>
                            Estes Termos de Uso ("Termos") regem o acesso e uso dos serviços oferecidos pela <strong>Nidus Ventures</strong> ("Nidus", "nós", "nosso").
                            Ao acessar nosso site e aplicar para nosso programa de Venture Building, você concorda com estes termos na íntegra.
                        </p>

                        <h3>2. Natureza dos Serviços</h3>
                        <p>
                            A Nidus Ventures é uma <strong>Venture Builder B2B SaaS</strong>. Não atuamos como agência de desenvolvimento, consultoria de software ou fundo de investimento tradicional.
                            Nosso modelo baseia-se na co-criação de startups, onde a Nidus fornece tecnologia e infraestrutura, e o parceiro ("Hunter") fornece execução comercial.
                        </p>

                        <h3>3. Propriedade Intelectual</h3>
                        <p>
                            Todo o código, design, marcas, logotipos e metodologias (incluindo o "Nidus Way") apresentados neste site são de propriedade exclusiva da Nidus Ventures.
                            É proibida a reprodução, distribuição ou criação de obras derivadas sem nossa autorização expressa por escrito.
                        </p>
                        <ul>
                            <li>O software desenvolvido pela Nidus para as startups do portfólio permanece propriedade da Nidus ou da entidade legal constituída para a startup específica, conforme acordo de acionistas.</li>
                        </ul>

                        <h3>4. Processo de Seleção e Parceria</h3>
                        <p>
                            O envio de formulários de candidatura ou contato através deste site não constitui vínculo empregatício, societário ou de prestação de serviços.
                            A Nidus reserva-se o direito de selecionar parceiros a seu exclusivo critério, baseando-se em fit cultural, experiência comercial e tese de mercado.
                        </p>

                        <h3>5. Limitação de Responsabilidade</h3>
                        <p>
                            A Nidus Ventures não garante resultados financeiros específicos para as startups criadas. O sucesso de uma Venture depende dfe variáveis de mercado e da execução do Sócio Operador.
                            Todo empreendimento envolve risco, e ao aplicar, você reconhece estar ciente da natureza de risco do ecossistema de startups.
                        </p>

                        <h3>6. Alterações nos Termos</h3>
                        <p>
                            Podemos atualizar estes Termos periodicamente. Recomendamos revisar esta página regularmente. O uso continuado de nossos serviços após alterações constitui aceitação dos novos termos.
                        </p>

                        <div className="bg-background-dark p-8 rounded-2xl mt-12 text-center text-white">
                            <p className="font-bold">Dúvidas sobre nossos termos?</p>
                            <a href="mailto:legal@nidusventures.com" className="text-primary font-bold hover:underline">legal@nidusventures.com</a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Terms;
