import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC<{ onOpenAI: () => void }> = ({ onOpenAI }) => {
    const { token, logout } = useAuth();
    const [activeTab, setActiveTab] = useState<'overview' | 'partners' | 'units'>('overview');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    // States for data
    const [stats, setStats] = useState({ totalMrr: 0, activePartners: 0, totalUnits: 0 });
    const [partners, setPartners] = useState<any[]>([]);
    const [units, setUnits] = useState<any[]>([]);

    // Form states
    const [newPartner, setNewPartner] = useState({ name: '', email: '', password: '' });
    const [newUnit, setNewUnit] = useState({ name: '', description: '', ticketValue: 197 });

    const fetchData = async () => {
        if (!token) return;
        setLoading(true);
        try {
            const res = await fetch('/api/admin/data', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                setStats(data.stats);
                setPartners(data.partners);
                setUnits(data.units);
            }
        } catch (err) {
            console.error('Error fetching admin data:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [token]);

    const handleCreatePartner = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/admin/create-partner', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(newPartner)
            });
            if (res.ok) {
                alert('Sócio cadastrado com sucesso!');
                setNewPartner({ name: '', email: '', password: '' });
                fetchData();
            } else {
                const d = await res.json();
                alert(d.error || 'Erro ao cadastrar');
            }
        } catch (err) {
            alert('Erro de conexão');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background-light font-sans text-gray-900">
            <Navbar onOpenAI={onOpenAI} />

            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Painel do Administrador</span>
                        <h1 className="text-4xl font-black text-gray-900">Nidus Command Center</h1>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="bg-red-50 text-red-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-red-100 transition-all border border-red-100"
                    >
                        Sair
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 border-b border-gray-100 pb-4 overflow-x-auto">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap ${activeTab === 'overview' ? 'bg-black text-white' : 'text-gray-400 hover:text-gray-900'}`}
                    >
                        Visão Geral
                    </button>
                    <button
                        onClick={() => setActiveTab('partners')}
                        className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap ${activeTab === 'partners' ? 'bg-black text-white' : 'text-gray-400 hover:text-gray-900'}`}
                    >
                        Sócios (Hunters)
                    </button>
                    <button
                        onClick={() => setActiveTab('units')}
                        className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap ${activeTab === 'units' ? 'bg-black text-white' : 'text-gray-400 hover:text-gray-900'}`}
                    >
                        Unidades (SaaS)
                    </button>
                </div>

                {activeTab === 'overview' && (
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                                <p className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-widest">MRR Global</p>
                                <h3 className="text-4xl font-black text-gray-900">R$ 48.250</h3>
                                <p className="text-sm text-green-500 mt-2 font-bold">+12% vs mês anterior</p>
                            </div>
                            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                                <p className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-widest">Sócios Ativos</p>
                                <h3 className="text-4xl font-black text-gray-900">12</h3>
                                <p className="text-sm text-gray-500 mt-2 font-medium">4 em fase de Cliff</p>
                            </div>
                            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                                <p className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-widest">Unidades SaaS</p>
                                <h3 className="text-4xl font-black text-gray-900">08</h3>
                                <p className="text-sm text-gray-500 mt-2 font-medium">6 com sócios alocados</p>
                            </div>
                        </div>

                        <div className="bg-background-dark p-10 rounded-[2.5rem] text-white overflow-hidden relative group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-primary/20 transition-all"></div>
                            <h2 className="text-2xl font-black mb-6 relative z-10">Blueprint Health</h2>
                            <div className="grid md:grid-cols-4 gap-8 relative z-10">
                                <div>
                                    <p className="text-xs text-primary font-bold uppercase mb-1">Qualidade do MRR</p>
                                    <p className="text-xl font-bold">Saudável</p>
                                </div>
                                <div>
                                    <p className="text-xs text-primary font-bold uppercase mb-1">Taxa de Churn</p>
                                    <p className="text-xl font-bold">1.2%</p>
                                </div>
                                <div>
                                    <p className="text-xs text-primary font-bold uppercase mb-1">Setup Acumulado</p>
                                    <p className="text-xl font-bold">R$ 145.000</p>
                                </div>
                                <div>
                                    <p className="text-xs text-primary font-bold uppercase mb-1">Equity Alocado</p>
                                    <p className="text-xl font-bold">185% total</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'partners' && (
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 border-b border-gray-100">
                                        <tr>
                                            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Nome</th>
                                            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Startup</th>
                                            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">MRR</th>
                                            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Equity</th>
                                            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {partners.length === 0 ? (
                                            <tr>
                                                <td colSpan={5} className="px-6 py-8 text-center text-gray-400 italic">Nenhum sócio cadastrado</td>
                                            </tr>
                                        ) : (
                                            partners.map((partner) => {
                                                const partnership = partner.partnerships?.[0];
                                                return (
                                                    <tr key={partner.id} className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-bold text-sm">{partner.name}</td>
                                                        <td className="px-6 py-4 text-sm">{partnership?.project?.name || '-'}</td>
                                                        <td className="px-6 py-4 text-sm font-bold">R$ {(partnership?.currentMRR || 0).toLocaleString('pt-BR')}</td>
                                                        <td className="px-6 py-4">
                                                            <span className="bg-primary/20 text-black px-2 py-1 rounded-md text-xs font-bold">{partnership?.currentEquity || 10}%</span>
                                                        </td>
                                                        <td className="px-6 py-4 text-xs font-bold text-yellow-600">
                                                            {partnership?.cliffApproved ? 'SÓCIO' : 'CLIFF'}
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm h-fit">
                            <h2 className="text-xl font-black mb-6">Novo Sócio Hunter</h2>
                            <form onSubmit={handleCreatePartner} className="space-y-4">
                                <div>
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Nome Completo</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary"
                                        placeholder="Ex: Pedro Alvares"
                                        value={newPartner.name}
                                        onChange={(e) => setNewPartner({ ...newPartner, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary"
                                        placeholder="pedro@nidus.ventures"
                                        value={newPartner.email}
                                        onChange={(e) => setNewPartner({ ...newPartner, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Senha Provisória</label>
                                    <input
                                        type="password"
                                        className="w-full bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary"
                                        placeholder="••••••••"
                                        value={newPartner.password}
                                        onChange={(e) => setNewPartner({ ...newPartner, password: e.target.value })}
                                    />
                                </div>
                                <button type="submit" className="w-full bg-black text-white py-3 rounded-full font-bold hover:bg-gray-800 transition-all mt-4">
                                    Cadastrar Sócio
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {activeTab === 'units' && (
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {units.length === 0 ? (
                                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm border-dashed flex items-center justify-center min-h-[200px] col-span-2">
                                    <p className="text-sm font-bold text-gray-400 italic">Nenhuma unidade cadastrada</p>
                                </div>
                            ) : (
                                units.map((unit) => (
                                    <div key={unit.id} className="bg-white p-8 rounded-[2rem] border-2 border-primary shadow-sm relative">
                                        <div className="absolute top-4 right-4 bg-primary text-black text-[10px] font-bold px-2 py-1 rounded-full">ATIVO</div>
                                        <h3 className="text-2xl font-black mb-2">{unit.name}</h3>
                                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">{unit.description}</p>
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Valor do Ticket</p>
                                                <p className="text-sm font-bold">R$ {unit.ticketValue ? unit.ticketValue.toLocaleString('pt-BR') : '197,00'}</p>
                                            </div>
                                            <button className="text-gray-900 font-bold text-xs hover:underline">Configurar</button>
                                        </div>
                                    </div>
                                ))
                            )}

                            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm border-dashed flex items-center justify-center min-h-[200px]">
                                <div className="text-center">
                                    <span className="material-icons-round text-3xl text-gray-300 mb-2">add_circle_outline</span>
                                    <p className="text-sm font-bold text-gray-400 italic">Unidade vaga disponível</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm h-fit">
                            <h2 className="text-xl font-black mb-6">Nova Unidade SaaS</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Nome do Produto</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary"
                                        placeholder="Ex: BotPress B2B"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Ticket Médio (MRR)</label>
                                    <input
                                        type="number"
                                        className="w-full bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary"
                                        placeholder="197"
                                    />
                                </div>
                                <button type="submit" className="w-full bg-black text-white py-3 rounded-full font-bold hover:bg-gray-800 transition-all mt-4">
                                    Criar Unidade
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default AdminDashboard;
