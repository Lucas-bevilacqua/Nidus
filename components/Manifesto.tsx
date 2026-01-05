
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Manifesto: React.FC<{ onOpenAI: () => void }> = ({ onOpenAI }) => {
    return (
        <div className="min-h-screen bg-background-light font-sans text-gray-900 selection:bg-primary selection:text-black">
            <Navbar onOpenAI={onOpenAI} />

            <main className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block bg-[#333] text-primary text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest mb-6 border border-primary/20 shadow-[0_0_15px_rgba(255,255,0,0.3)]">
                            The Nidus Code
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900 mb-6">
                            Nós não somos para <span className="text-primary-gradient relative inline-block">
                                todo mundo.
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </span>
                        </h1>
                    </div>

                    <div className="prose prose-xl prose-gray max-w-none prose-p:font-medium prose-p:text-gray-600 prose-headings:font-black prose-headings:text-black">
                        <p className="text-2xl font-bold text-gray-900 leading-relaxed border-l-4 border-primary pl-6 py-2">
                            O modelo tradicional de investimento está quebrado para quem faz as coisas acontecerem.
                            Especialistas técnicos criam sistemas ótimos que ninguém usa.
                            Vendedores talentosos enriquecem os outros vendendo produtos ruins.
                        </p>

                        <h2 className="text-4xl mt-16 mb-8">A Era do Vendedor Dono</h2>
                        <p>
                            Acreditamos que as próximas empresas de sucesso não serão criadas por engenheiros trancados em escritórios,
                            mas por quem está na linha de frente: pessoas obcecadas por resolver o problema do cliente, que sabem fechar um bom negócio.
                        </p>
                        <p>
                            Criar tecnologia hoje é algo acessível. O que é raro e impossível de automatizar é a capacidade humana de
                            criar parcerias, abrir portas e fechar grandes contratos.
                        </p>

                        <h2 className="text-4xl mt-16 mb-8">Nossa Promessa Real</h2>
                        <p>
                            Na Nidus, nós removemos toda a barreira técnica da frente.
                            <br />
                            <span className="bg-primary/20 px-1">Nós criamos o sistema.</span>
                            <span className="bg-primary/20 px-1 ml-1">Nós pagamos o servidor.</span>
                            <span className="bg-primary/20 px-1 ml-1">Nós garantimos que tudo funcione.</span>
                        </p>
                        <p>
                            Você não precisa ser um programador. Você não precisa procurar um sócio técnico em eventos.
                            Você precisa saber vender.
                            Se você é bom nisso e tem resultados, nós temos a tecnologia de ponta.
                        </p>

                        <div className="bg-background-dark p-12 rounded-[2.5rem] mt-16 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-primary/20 transition-all"></div>
                            <div className="relative z-10">
                                <p className="text-white text-2xl lg:text-3xl font-black italic text-center leading-tight">
                                    "Não buscamos funcionários. Buscamos sócios. <br />
                                    Não queremos apenas currículos. Queremos resultados reais."
                                </p>
                                <div className="mt-8 flex justify-center">
                                    <a href="#contato" className="bg-primary text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-colors uppercase tracking-widest text-xs">
                                        Junte-se à Revolução
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Manifesto;
