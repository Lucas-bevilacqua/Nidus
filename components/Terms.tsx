
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Terms: React.FC = () => {
    return (
        <div className="min-h-screen bg-background-light font-sans text-gray-900">
            <Navbar onOpenAI={() => { }} />

            <main className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
                    <h1 className="text-4xl font-black mb-12">Termos de Uso</h1>

                    <div className="prose prose-gray max-w-none">
                        <p>Última atualização: 2024</p>
                        <p>Bem-vindo à Nidus Ventures. Ao utilizar nosso site, você concorda com os seguintes termos:</p>

                        <h3>1. O Modelo de Negócio</h3>
                        <p>A Nidus Ventures atua como uma Venture Builder. Não somos uma agência de desenvolvimento de software sob demanda. Nosso foco é a criação de startups próprias em parceria com operadores comerciais selecionados.</p>

                        <h3>2. Propriedade Intelectual</h3>
                        <p>Todo o conteúdo, design, código e metodologia apresentados neste site são propriedade exclusiva da Nidus Ventures, exceto onde indicado o contrário.</p>

                        <h3>3. Seleção de Sócios</h3>
                        <p>A aplicação através do formulário de contato não garante seleção ou parceria. O processo de seleção de Hunters é rigoroso e baseado em critérios internos de fit cultural e track record comercial.</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Terms;
