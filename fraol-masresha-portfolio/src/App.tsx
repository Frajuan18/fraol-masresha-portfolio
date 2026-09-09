import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import MouseEffects from './components/MouseEffects';
import { useTheme } from './hooks/useTheme';

function App() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-canvas font-mono text-ink">
      <Loader show={loading} />
      {!loading && (
        <>
          <Navbar />
          <main className="w-full space-y-16 pb-16 sm:space-y-20 lg:space-y-24">
            <Hero />
            <About />
            <Timeline />
            <Skills />
            <Services />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
          {/* Click Effects overlay — fixed to the viewport, never intercepts clicks */}
          <div className="pointer-events-none fixed inset-0 z-[60]">
            <MouseEffects color={theme === 'dark' ? '#ffffff' : '#030712'} showLabel={false} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
