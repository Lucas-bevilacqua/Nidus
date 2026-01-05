import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Dashboard: React.FC<{ onOpenAI: () => void }> = ({ onOpenAI }) => {
    // Mock data based on Blueprint 5.1
    const stats = {
        mrr: 12500,
        equity: 10,
        clients: 42,
        nextMilestone: 20000,
        setupRevenue: 8500,
        bounties: 4500
    };

    const progressToNextEquity = (stats.mrr / stats.nextMilestone) * 100;
    const isPróLaboreUnlocked = stats.mrr >= 15000;

    return (
        <div className="min-h-screen bg-background-light font-sans text-gray-900">
            <Navbar onOpenAI={onOpenAI} />

            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Área do Sócio</span>
                        <h1 className="text-4xl font-black text-gray-900">Nidus OS <span className="text-gray-400 text-2xl font-medium">/ Unidade Kopilot</span></h1>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
                            <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Status do Cliff</p>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                                <span className="text-sm font-bold">Em Validação (Dia 42/90)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-widest">Recorrência (MRR)</p>
                        <h3 className="text-4xl font-black text-gray-900">R$ {stats.mrr.toLocaleString('pt-BR')}</h3>
                        <p className="text-sm text-gray-500 mt-2 font-medium">Meta Pró-labore: R$ 15k</p>
                    </div>

                    <div className="bg-background-dark p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all"></div>
                        <p className="text-xs font-bold text-primary uppercase mb-4 tracking-widest relative z-10">Sua Participação</p>
                        <h3 className="text-5xl font-black text-white relative z-10">{stats.equity}%</h3>
                        <p className="text-sm text-gray-400 mt-2 font-medium relative z-10">Próximo Nível: 20% (R$ 20k MRR)</p>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <p className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-widest">Base de Clientes</p>
                        <h3 className="text-4xl font-black text-gray-900">{stats.clients}</h3>
                        <p className="text-sm text-green-500 mt-2 font-bold">+5 este mês</p>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <p className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-widest">Ganhos de Curto Prazo</p>
                        <h3 className="text-4xl font-black text-gray-900">R$ {(stats.setupRevenue + stats.bounties).toLocaleString('pt-BR')}</h3>
                        <p className="text-sm text-gray-500 mt-2 font-medium">Setup + 1ª Mensalidade</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Equity Progress */}
                    <div className="lg:col-span-2 bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-black mb-8">Evolução do Patrimônio</h2>
                        <div className="space-y-12">
                            <div>
                                <div className="flex justify-between mb-4 items-end">
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Rumo aos 20% de Equity</p>
                                        <p className="text-xs text-gray-400">Meta: R$ 20.000 MRR</p>
                                    </div>
                                    <span className="text-xl font-black text-primary">{Math.round(progressToNextEquity)}%</span>
                                </div>
                                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary rounded-full transition-all duration-1000"
                                        style={{ width: `${progressToNextEquity}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 border-t border-gray-50 pt-8">
                                <div className="text-center">
                                    <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${stats.mrr >= 20000 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">R$ 20k MRR</p>
                                    <p className="text-xs font-bold">+10% Equity</p>
                                </div>
                                <div className="text-center">
                                    <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${stats.mrr >= 50000 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">R$ 50k MRR</p>
                                    <p className="text-xs font-bold">+10% Equity</p>
                                </div>
                                <div className="text-center">
                                    <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${stats.mrr >= 100000 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">R$ 100k MRR</p>
                                    <p className="text-xs font-bold">+5% Equity</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pró-labore Tracker */}
                    <div className={`p-10 rounded-[2.5rem] flex flex-col justify-between ${isPróLaboreUnlocked ? 'bg-green-50 border border-green-100' : 'bg-blue-50 border border-blue-100'}`}>
                        <div>
                            <h2 className="text-2xl font-black mb-4">Gatilho de Recorrência</h2>
                            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                                Ao atingir **R$ 15.000 de MRR**, você desbloqueia o Pró-labore fixo de **R$ 3.000,00/mês**.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${isPróLaboreUnlocked ? 'bg-green-500 text-white' : 'bg-white text-blue-500'}`}>
                                <span className="material-icons-round text-4xl">{isPróLaboreUnlocked ? 'check_circle' : 'lock'}</span>
                            </div>
                            <p className="text-sm font-black uppercase tracking-widest text-gray-900">
                                {isPróLaboreUnlocked ? 'Pró-labore Ativado!' : 'R$ 2.500 restantes para o gatilho'}
                            </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-black/5">
                            <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Próxima Distribuição de Lucros</p>
                            <p className="text-sm font-bold">Março/2026</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Dashboard;
