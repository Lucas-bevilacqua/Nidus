import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = (location.state as any)?.from?.pathname || '/dashboard';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok) {
                login(data.token, data.user);

                // Redirect based on role if no 'from' location
                if (!location.state) {
                    if (data.user.role === 'ADMIN') {
                        navigate('/admin', { replace: true });
                    } else {
                        navigate('/dashboard', { replace: true });
                    }
                } else {
                    navigate(from, { replace: true });
                }
            } else {
                setError(data.error || 'Erro ao entrar');
            }
        } catch (err) {
            setError('Erro de conexão com o servidor');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background-light flex items-center justify-center px-4">
            <div className="max-w-md w-full">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tighter">Nidus OS</h1>
                    <p className="text-gray-500 font-medium tracking-widest uppercase text-[10px]">Portal de Gestão de Unidades</p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-900 mb-3">Seu Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="seu@email.com"
                                className="w-full bg-background-light border-transparent rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary transition-all font-medium"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-900 mb-3">Sua Senha</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full bg-background-light border-transparent rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary transition-all font-medium"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-5 rounded-full font-black text-lg hover:bg-gray-800 transition-all shadow-xl shadow-gray-200 disabled:opacity-50"
                        >
                            {loading ? 'Entrando...' : 'Entrar no Portal'}
                        </button>
                    </form>
                </div>

                <p className="text-center mt-8 text-gray-400 text-sm font-medium">
                    Problemas com o acesso? <br />
                    <a href="mailto:suporte@nidus.ventures" className="text-gray-900 font-bold hover:underline">Fale com o Admin</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
