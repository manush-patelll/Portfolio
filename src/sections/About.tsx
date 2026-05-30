import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Cpu, Cloud } from 'lucide-react';
import { SectionContainer } from '../components/SectionContainer';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  const highlightCards = [
    {
      icon: <Briefcase className="text-portfolioPrimary" size={24} />,
      title: "Current Position",
      value: "Software Engineer Trainee",
      sub: "Aspire SoftServ"
    },
    {
      icon: <BookOpen className="text-portfolioSecondary" size={24} />,
      title: "Education",
      value: "B.Tech (Information Technology)",
      sub: "Ganpat University"
    },
    {
      icon: <Cpu className="text-portfolioPrimary" size={24} />,
      title: "Primary Tech Stack",
      value: "MERN Stack",
      sub: "MongoDB, Express, React, Node"
    },
    {
      icon: <Cloud className="text-portfolioSecondary" size={24} />,
      title: "Key Interests",
      value: "DevOps & Cloud Computing",
      sub: "AWS, Docker, CI/CD Pipelines"
    }
  ];

  return (
    <SectionContainer id="about" title="About Me" subtitle="Who I Am">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left biography */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-2xl font-bold font-outfit text-portfolioText">
            I build scalable, modern applications with a focus on code quality and performance.
          </h3>
          <p className="text-portfolioTextSecondary leading-relaxed text-base md:text-lg">
            {personalInfo.summary}
          </p>
          <p className="text-portfolioTextSecondary leading-relaxed text-base md:text-lg">
            {personalInfo.about}
          </p>
          <div className="p-4 bg-white/5 border border-white/5 rounded-xl flex items-start gap-4">
            <span className="text-2xl">💡</span>
            <div>
              <p className="font-semibold text-portfolioText">My Objective</p>
              <p className="text-sm text-portfolioTextSecondary mt-1">
                To design, develop, and deploy production-ready applications, bridging the gap between clean frontend interactions and robust cloud-native backends.
              </p>
            </div>
          </div>
        </div>

        {/* Right highlights grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlightCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-portfolioCard border border-white/5 hover:border-portfolioPrimary/20 hover:bg-portfolioCard/90 hover:-translate-y-1 transition-all duration-300 shadow-md group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {card.icon}
              </div>
              <h4 className="text-xs font-semibold tracking-wider text-portfolioTextSecondary uppercase">
                {card.title}
              </h4>
              <p className="text-base font-bold text-portfolioText mt-2 leading-tight">
                {card.value}
              </p>
              <p className="text-xs text-portfolioTextSecondary mt-1">
                {card.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
