import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { SectionContainer } from '../components/SectionContainer';
import { currentlyLearning } from '../data/portfolioData';

export const LearningJourney = () => {
  return (
    <SectionContainer id="learning" title="DevOps & AWS Learning Journey" subtitle="Always Evolving">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-portfolioTextSecondary max-w-2xl mx-auto mb-12 text-sm sm:text-base leading-relaxed font-light">
          Beyond core application logic, I am actively expanding my capabilities into cloud hosting, continuous integration pipelines, and infrastructure management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentlyLearning.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-portfolioCard border border-white/5 hover:border-portfolioPrimary/20 hover:bg-portfolioCard/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h4 className="text-base font-bold font-outfit text-portfolioText">
                    {item.topic}
                  </h4>
                  <span className="text-[10px] font-bold tracking-wider text-portfolioPrimary bg-portfolioPrimary/10 border border-portfolioPrimary/20 px-2 py-0.5 rounded uppercase">
                    In Progress
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-portfolioTextSecondary leading-relaxed mb-6 font-light">
                  {item.details}
                </p>
              </div>

              {/* Progress Indicator */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-portfolioTextSecondary mb-2">
                  <span className="flex items-center gap-1">
                    <BookOpen size={12} className="text-portfolioSecondary" />
                    Resource Study
                  </span>
                  <span className="text-portfolioPrimary">{item.progress}%</span>
                </div>
                
                {/* Progress Track */}
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-portfolioPrimary to-portfolioSecondary rounded-full shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
