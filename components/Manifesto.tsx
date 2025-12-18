
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Manifesto: React.FC = () => {
    return (
        <div className="min-h-screen bg-background-light font-sans text-gray-900 selection:bg-primary selection:text-black">
            <Navbar onOpenAI={() => { }} /> {/* Sidebar logic simplified for static pages */}

            <main className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
                    <span className="inline-block bg-[#333] text-primary text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest mb-8">
                        • O Manifesto
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-black mb-12">
                        Nós não somos para <span className="text-primary-gradient">todo mundo.</span>
                    </h1>

                    <div className="prose prose-lg prose-gray max-w-none">
                        <p className="text-2xl font-medium leading-relaxed mb-8">
                            O modelo tradicional de Venture Capital está quebrado para quem executa.
                            Fundadores técnicos constroem produtos incríveis que ninguém usa.
                            Vendedores talentosos enriquecem acionistas vendendo produtos ruins.
                        </p>

                        <h2 className="text-3xl font-black text-black mt-12 mb-6">A Era do Hunter Founder</h2>
                        <p>
                            Acreditamos que a próxima onda de unicórnios B2B não será construída por engenheiros no Vale do Silício,
                            mas por <strong>Hunters</strong>: operadores comerciais obcecados por resolver a dor do cliente.
                        </p>
                        <p>
                            O código é commodity. A infraestrutura é barata. O que é raro, caro e difícil é a capacidade de
                            abrir portas e fechar contratos.
                        </p>

                        <h2 className="text-3xl font-black text-black mt-12 mb-6">Nossa Promessa</h2>
                        <p>
                            Na Nidus Ventures, nós removemos a barreira técnica.
                            Nós construímos o software. Nós pagamos o servidor. Nós garantimos a escalabilidade.
                        </p>
                        <p>
                            Você não precisa aprender Python. Você precisa saber vender.
                            Se você tem a faca nos dentes, nós temos a tecnologia.
                        </p>

                        <div className="bg-background-dark p-8 rounded-3xl mt-12">
                            <p className="text-white text-xl font-bold italic text-center">
                                "Não buscamos funcionários. Buscamos sócios. Não queremos currículos. Queremos track record."
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Manifesto;
