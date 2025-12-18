
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { blogPosts } from '../data/blog-data';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogList: React.FC = () => {
    return (
        <div className="min-h-screen bg-background-light text-gray-900 selection:bg-primary selection:text-black font-sans">
            <Navbar onOpenAI={() => { }} /> {/* OpenAI not needed on blog list for now */}

            <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-12 bg-background-dark text-white rounded-b-[3rem] mb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -mr-48 -mt-48 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block bg-white/10 text-primary text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest mb-6 border border-white/10">
                        • Nidus Blog
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-black mb-6">
                        Insights para <span className="text-primary">Hunters & Founders</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Conteúdo estratégico sobre vendas B2B, venture building e escala de SaaS. Sem enrolação.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-32">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.slug}`}
                            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 block"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/10">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={14} />
                                        {new Date(post.date).toLocaleDateString('pt-BR')}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock size={14} />
                                        {post.readingTime}
                                    </div>
                                </div>

                                <h2 className="text-2xl font-black mb-4 group-hover:text-primary-dark transition-colors line-clamp-2">
                                    {post.title}
                                </h2>

                                <p className="text-gray-500 mb-6 font-medium leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                            <User size={16} className="text-gray-500" />
                                        </div>
                                        <span className="text-sm font-bold text-gray-900">{post.author}</span>
                                    </div>
                                    <span className="text-primary font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Ler artigo <ArrowRight size={18} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogList;
