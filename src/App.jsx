import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkingStrip from './components/WorkingStrip';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-gradient-to-b from-[#040d08] via-[#06170f] to-[#040d08] text-white min-h-screen font-sans antialiased selection:bg-emerald-500 selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <About />
          <WorkingStrip />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;