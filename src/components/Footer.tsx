import { ArrowUp, Mail } from "lucide-react";
import { Github, Linkedin, Leetcode } from "./BrandIcons";
import { personalInfo } from "../data/portfolioData";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#0b0f19] py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand / Title */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold font-outfit bg-clip-text text-transparent bg-gradient-to-r from-portfolioText to-portfolioPrimary">
              Manush Patel
            </h3>
            <p className="text-sm text-portfolioTextSecondary mt-1">
              Software Engineer Trainee | Full-Stack Developer
            </p>
          </div>

          {/* Center: Social links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-portfolioTextSecondary hover:text-portfolioPrimary hover:border-portfolioPrimary hover:bg-portfolioPrimary/10 transition-all hover:-translate-y-1"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-portfolioTextSecondary hover:text-portfolioPrimary hover:border-portfolioPrimary hover:bg-portfolioPrimary/10 transition-all hover:-translate-y-1"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-portfolioTextSecondary hover:text-portfolioPrimary hover:border-portfolioPrimary hover:bg-portfolioPrimary/10 transition-all hover:-translate-y-1"
              title="LeetCode"
            >
              <Leetcode size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-portfolioTextSecondary hover:text-portfolioPrimary hover:border-portfolioPrimary hover:bg-portfolioPrimary/10 transition-all hover:-translate-y-1"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Right: Scroll to Top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-portfolioTextSecondary hover:text-portfolioPrimary transition-colors group"
            >
              Back to top
              <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-portfolioPrimary/15 group-hover:border-portfolioPrimary transition-all group-hover:-translate-y-1">
                <ArrowUp
                  size={14}
                  className="text-portfolioTextSecondary group-hover:text-portfolioPrimary"
                />
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-white/5 text-xs text-portfolioTextSecondary">
          <p>© {new Date().getFullYear()} Manush Patel. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with
            <span className="text-portfolioSecondary">❤</span>
            React, TypeScript, Vite & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
