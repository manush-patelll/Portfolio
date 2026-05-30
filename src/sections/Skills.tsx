import { motion } from 'framer-motion';
import { Layout, Server, Database, Cloud, Code, BookOpen, Wrench } from 'lucide-react';
import { SectionContainer } from '../components/SectionContainer';
import { skills } from '../data/portfolioData';

// Map categories to specific icons
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Frontend Development":
      return <Layout className="text-portfolioPrimary" size={20} />;
    case "Backend Development":
      return <Server className="text-portfolioSecondary" size={20} />;
    case "Databases":
      return <Database className="text-portfolioPrimary" size={20} />;
    case "Cloud & DevOps":
      return <Cloud className="text-portfolioSecondary" size={20} />;
    case "Programming Languages":
      return <Code className="text-portfolioPrimary" size={20} />;
    case "Computer Science Fundamentals":
      return <BookOpen className="text-portfolioSecondary" size={20} />;
    default:
      return <Wrench className="text-portfolioPrimary" size={20} />;
  }
};

export const Skills = () => {
  return (
    <SectionContainer id="skills" title="Technical Skills" subtitle="My Expertise">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillCat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="p-6 rounded-2xl bg-portfolioCard border border-white/5 hover:border-portfolioPrimary/20 hover:shadow-[0_10px_30px_-10px_rgba(56,189,248,0.15)] transition-all duration-300 flex flex-col h-full group"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                {getCategoryIcon(skillCat.category)}
              </div>
              <h3 className="text-base font-bold font-outfit text-portfolioText">
                {skillCat.category}
              </h3>
            </div>

            {/* Badges Container */}
            <div className="flex flex-wrap gap-2.5 mt-2">
              {skillCat.skills.map((skill, sIdx) => (
                <motion.span
                  key={sIdx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-portfolioPrimary/10 border border-white/10 hover:border-portfolioPrimary/30 text-portfolioTextSecondary hover:text-portfolioText text-xs font-semibold tracking-wide transition-all select-none cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};
