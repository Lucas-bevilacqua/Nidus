import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Incubator from './components/Incubator';
import OperationModel from './components/OperationModel';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AISidebar from './components/AISidebar';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import ScrollToTop from './components/ScrollToTop';
import Manifesto from './components/Manifesto';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

const Home: React.FC<{ onOpenAI: () => void }> = ({ onOpenAI }) => (
  <div className="min-h-screen bg-background-light text-gray-900 selection:bg-primary selection:text-black overflow-x-hidden">
    <Navbar onOpenAI={onOpenAI} />
    <main>
      <Hero />
      <About />
      <Incubator />
      <OperationModel />
      <Contact />
      <CTA />
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-background-light">
          <Routes>
            <Route path="/" element={<Home onOpenAI={() => setIsAiOpen(true)} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog" element={<BlogList onOpenAI={() => setIsAiOpen(true)} />} />
            <Route path="/blog/:slug" element={<BlogPost onOpenAI={() => setIsAiOpen(true)} />} />
            <Route path="/manifesto" element={<Manifesto onOpenAI={() => setIsAiOpen(true)} />} />
            <Route path="/termos" element={<Terms onOpenAI={() => setIsAiOpen(true)} />} />
            <Route path="/privacidade" element={<Privacy onOpenAI={() => setIsAiOpen(true)} />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard onOpenAI={() => setIsAiOpen(true)} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute role="ADMIN">
                  <AdminDashboard onOpenAI={() => setIsAiOpen(true)} />
                </ProtectedRoute>
              }
            />
          </Routes>
          <AISidebar isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
