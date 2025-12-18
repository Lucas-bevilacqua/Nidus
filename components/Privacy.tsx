
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Privacy: React.FC = () => {
    return (
        <div className="min-h-screen bg-background-light font-sans text-gray-900">
            <Navbar onOpenAI={() => { }} />

            <main className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
                    <h1 className="text-4xl font-black mb-12">Política de Privacidade</h1>

                    <div className="prose prose-gray max-w-none">
                        <p>Última atualização: 2024</p>
                        <p>A Nidus Ventures respeita sua privacidade. Esta política descreve como coletamos e usamos seus dados.</p>

                        <h3>1. Coleta de Dados</h3>
                        <p>Coletamos informações que você nos fornece voluntariamente ao preencher nosso formulário de contato ou candidatura (Nome, Email, LinkedIn).</p>

                        <h3>2. Uso dos Dados</h3>
                        <p>Utilizamos seus dados exclusivamente para:</p>
                        <ul>
                            <li>Analisar sua candidatura para se tornar um sócio operador.</li>
                            <li>Entrar em contato para agendar entrevistas ou reuniões.</li>
                            <li>Enviar comunicações institucionais relevantes.</li>
                        </ul>

                        <h3>3. Compartilhamento</h3>
                        <p>Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing.</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Privacy;
