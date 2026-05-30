import { InteractiveBackground } from './components/InteractiveBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { ProjectShowcase } from './sections/ProjectShowcase';
import { Education } from './sections/Education';
import { Certifications } from './sections/Certifications';
import { LearningJourney } from './sections/LearningJourney';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen text-portfolioText bg-portfolioBg font-sans selection:bg-portfolioPrimary/30 overflow-hidden">
      {/* Dynamic Interactive Particle Grid Background */}
      <InteractiveBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <ProjectShowcase />
        <Education />
        <Certifications />
        <LearningJourney />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
