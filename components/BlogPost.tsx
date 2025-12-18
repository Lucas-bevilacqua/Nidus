
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { blogPosts } from '../data/blog-data';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';

const BlogPost: React.FC<{ onOpenAI: () => void }> = ({ onOpenAI }) => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background-light font-sans">
                <h1 className="text-4xl font-black mb-4">Artigo não encontrado</h1>
                <Link to="/blog" className="text-primary font-bold hover:underline">
                    Voltar para o Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary selection:text-black">
            <Navbar onOpenAI={onOpenAI} />

            <article className="pt-32 pb-20">
                {/* Header */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-black transition-colors mb-8">
                        <ArrowLeft size={16} /> Voltar para o Blog
                    </Link>

                    <div className="flex flex-wrap gap-4 items-center mb-8">
                        <span className="bg-primary/10 text-primary-dark font-black px-4 py-1.5 rounded-full uppercase text-xs tracking-widest">
                            {post.category}
                        </span>
                        <span className="text-gray-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                            <Clock size={14} /> {post.readingTime}
                        </span>
                        <span className="text-gray-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                            <Calendar size={14} /> {new Date(post.date).toLocaleDateString('pt-BR')}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 text-black">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-between border-y border-gray-100 py-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                                <User size={24} className="text-gray-500" />
                            </div>
                            <div>
                                <p className="font-bold text-sm text-black">{post.author}</p>
                                <p className="text-xs text-gray-500 font-medium">Author</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 text-gray-500 font-bold text-sm hover:text-black transition-colors">
                            <Share2 size={18} /> Compartilhar
                        </button>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <div
                        className="prose prose-lg prose-gray prose-headings:font-black prose-headings:text-black prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-img:rounded-3xl"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags */}
                    <div className="mt-20 pt-10 border-t border-gray-100">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span key={tag} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-200 transition-colors">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
};

export default BlogPost;
