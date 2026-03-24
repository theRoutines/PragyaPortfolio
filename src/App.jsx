import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IntroScene from './components/IntroScene';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Education from './components/Education';
import ContactTerminal from './components/ContactTerminal';
// import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Refresh ScrollTrigger after any major layout changes or component mounts
    if (!showIntro) {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [showIntro]);

  if (showIntro) {
    return <IntroScene onComplete={() => setShowIntro(false)} />;
  }

  return (
    <main className="relative">
      {/* <Navbar /> */}
      
      <div id="home">
        <Hero />
      </div>
      
      <div id="skills">
        <Skills />
      </div>
      
      <div id="works">
        <Projects />
      </div>
      
      <div id="certifications">
        <Certifications />
      </div>
      
      <div id="achievements">
        <Achievements />
      </div>
      
      <div id="education">
        <Education />
      </div>
      
      <div id="contact">
        <ContactTerminal />
      </div>

      <footer className="bg-dark-teal py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-pale-oak text-3xl font-black tracking-tighter mb-2">ANIKET SHUKLA</h2>
            <p className="text-pale-oak/40 text-sm font-medium tracking-widest uppercase italic">
              Building the future, one pixel at a time.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-1 text-pale-oak/50 text-xs font-bold uppercase tracking-widest">
            <span>Designed & Built by Aniket</span>
            <span>Est. 2026 — Built with React & GSAP</span>
            <span className="text-pale-oak/20 mt-2">© All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
