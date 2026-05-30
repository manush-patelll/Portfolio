import { motion } from 'framer-motion';
import { Award, Sparkles, Trophy } from 'lucide-react';
import { SectionContainer } from '../components/SectionContainer';
import { certifications, achievements } from '../data/portfolioData';

export const Certifications = () => {
  return (
    <SectionContainer id="certifications" title="Certifications & Achievements" subtitle="My Credentials">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
        
        {/* Left Column: Certifications */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-xl font-bold font-outfit text-portfolioText mb-4 flex items-center gap-2">
            <Award className="text-portfolioPrimary" size={22} />
            Professional Certifications
          </h3>

          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-portfolioCard border border-white/5 hover:border-portfolioPrimary/20 hover:bg-portfolioCard/85 transition-all duration-300 flex items-center justify-between gap-4 group"
              >
                <div>
                  <h4 className="text-base font-bold font-outfit text-portfolioText group-hover:text-portfolioPrimary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-portfolioTextSecondary mt-1 font-medium">
                    Issued by <span className="text-portfolioSecondary font-semibold">{cert.issuer}</span>
                  </p>
                </div>
                <span className="text-xs font-semibold text-portfolioTextSecondary bg-white/5 px-2.5 py-1 rounded border border-white/5 whitespace-nowrap">
                  {cert.date}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Achievements */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-xl font-bold font-outfit text-portfolioText mb-4 flex items-center gap-2">
            <Trophy className="text-portfolioSecondary" size={22} />
            Key Accomplishments
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-portfolioCard border border-white/5 hover:border-portfolioSecondary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="w-8 h-8 rounded-lg bg-portfolioSecondary/10 flex items-center justify-center text-portfolioSecondary mb-4">
                  <Sparkles size={16} />
                </div>
                <p className="text-xs sm:text-sm text-portfolioTextSecondary font-medium leading-relaxed">
                  {ach}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </SectionContainer>
  );
};
