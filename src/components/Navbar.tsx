import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Github, Linkedin, Leetcode } from "./BrandIcons";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { personalInfo } from "../data/portfolioData";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    const wasOpen = isOpen;
    setIsOpen(false);

    const scrollToSection = () => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    if (wasOpen) {
      // Small delay on mobile to allow the drawer closure animation to proceed/finish
      // and prevent scroll interruption
      setTimeout(scrollToSection, 200);
    } else {
      scrollToSection();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-[#0F172A]/80 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <motion.button
            onClick={() => handleLinkClick("hero")}
            className="flex items-center gap-2 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-portfolioPrimary to-portfolioSecondary flex items-center justify-center text-portfolioBg font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              M
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-portfolioText via-portfolioText to-portfolioPrimary font-outfit">
              Manush<span className="text-portfolioPrimary">.</span>
            </span>
          </motion.button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-portfolioPrimary rounded-md ${
                      activeSection === link.id
                        ? "text-portfolioPrimary"
                        : "text-portfolioTextSecondary"
                    }`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-portfolioPrimary to-portfolioSecondary"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Socials / External links in Header */}
            <div className="flex items-center gap-3 pl-3 border-l border-white/10">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-portfolioTextSecondary hover:text-portfolioPrimary hover:bg-white/5 rounded-full transition-all"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-portfolioTextSecondary hover:text-portfolioPrimary hover:bg-white/5 rounded-full transition-all"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-portfolioTextSecondary hover:text-portfolioPrimary hover:bg-white/5 rounded-full transition-all"
                title="LeetCode"
              >
                <Leetcode size={18} />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-portfolioText hover:text-portfolioPrimary rounded-lg hover:bg-white/5 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-[#0F172A]/95 border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    activeSection === link.id
                      ? "bg-portfolioPrimary/10 text-portfolioPrimary border-l-4 border-portfolioPrimary"
                      : "text-portfolioTextSecondary hover:bg-white/5 hover:text-portfolioText"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="flex items-center gap-4 pt-4 px-4 border-t border-white/5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-portfolioTextSecondary hover:text-portfolioPrimary text-sm font-medium"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-portfolioTextSecondary hover:text-portfolioPrimary text-sm font-medium"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-portfolioTextSecondary hover:text-portfolioPrimary text-sm font-medium"
                >
                  <Leetcode size={18} /> LeetCode
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
