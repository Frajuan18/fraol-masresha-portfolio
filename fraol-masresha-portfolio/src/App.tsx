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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-canvas font-sans text-ink">
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
        </>
      )}
    </div>
  );
}

export default App;
