import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileText, MapPin } from 'lucide-react';
import { Github, Linkedin, Leetcode } from '../components/BrandIcons';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.png';

const roles = [
  "Software Engineer Trainee",
  "Full-Stack Developer",
  "MERN Stack Specialist",
  "Cloud & DevOps Enthusiast"
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Abstract Glowing Accent Gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-portfolioPrimary/10 blur-[80px] md:blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-portfolioSecondary/10 blur-[80px] md:blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '10s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Profile Image with morphing blob cutout style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.2 }}
          className="mb-8 relative group"
        >
          {/* Animated Blob Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-portfolioPrimary via-portfolioSecondary to-portfolioPrimary bg-200% animate-gradient opacity-50 blur-lg rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] group-hover:opacity-85 transition-all duration-500" />
          
          <motion.div
            animate={{
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 60% 70% 40% / 50% 60% 30% 60%",
                "50% 40% 85% 15% / 60% 30% 70% 40%",
                "60% 40% 30% 70% / 60% 30% 70% 40%"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-40 h-40 md:w-48 md:h-48 overflow-hidden border-2 border-white/10 group-hover:border-portfolioPrimary/30 transition-colors shadow-2xl relative bg-portfolioBg"
          >
            <img
              src={profileImg}
              alt={personalInfo.name}
              className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 scale-[1.02] group-hover:scale-105 transition-all duration-500"
            />
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-8xl font-bold font-outfit tracking-tight text-portfolioText leading-[1.1] md:leading-[1.1]"
        >
          Hi, I am <br className="sm:hidden" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolioPrimary via-portfolioSecondary to-portfolioPrimary bg-300% animate-gradient">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Roles typing showcase */}
        <div className="h-10 md:h-14 mt-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="text-xl md:text-3xl font-medium font-outfit text-portfolioPrimary tracking-wide text-glow-primary"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Location Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-1.5 text-portfolioTextSecondary text-sm md:text-base mt-2"
        >
          <MapPin size={16} className="text-portfolioPrimary" />
          {personalInfo.location}
        </motion.p>

        {/* Short Summary Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-portfolioTextSecondary text-base md:text-xl mt-6 leading-relaxed font-light"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
        >
          <button
            onClick={() => handleScrollTo('projects')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-portfolioPrimary to-portfolioSecondary text-portfolioBg font-semibold shadow-[0_4px_20px_rgba(56,189,248,0.25)] hover:shadow-[0_4px_30px_rgba(168,85,247,0.35)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleScrollTo('contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-portfolioPrimary/30 hover:bg-portfolioPrimary/5 text-portfolioText font-semibold transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
          >
            Contact Me
          </button>

          <button
            onClick={() => alert("Resume will be uploaded shortly! Feel free to contact me directly.")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-portfolioSecondary/30 hover:bg-portfolioSecondary/5 text-portfolioText font-semibold transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText size={18} className="text-portfolioSecondary" />
            Resume
          </button>
        </motion.div>

        {/* Social Icons Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-6 mt-12"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolioTextSecondary hover:text-portfolioPrimary transition-colors flex items-center gap-1.5 text-sm font-medium"
          >
            <Github size={20} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolioTextSecondary hover:text-portfolioPrimary transition-colors flex items-center gap-1.5 text-sm font-medium"
          >
            <Linkedin size={20} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolioTextSecondary hover:text-portfolioPrimary transition-colors flex items-center gap-1.5 text-sm font-medium"
          >
            <Leetcode size={20} />
            <span className="hidden sm:inline">LeetCode</span>
          </a>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-portfolioTextSecondary/60">
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-3 bg-portfolioTextSecondary/60 rounded-full"
        />
      </div>
    </section>
  );
};
