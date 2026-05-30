import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';
import { SectionContainer } from '../components/SectionContainer';
import { experiences } from '../data/portfolioData';

export const Experience = () => {
  return (
    <SectionContainer id="experience" title="Work Experience" subtitle="My Professional Journey">
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline track line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolioPrimary via-portfolioSecondary to-transparent -translate-x-1/2 hidden sm:block" />

        {experiences.map((exp, idx) => (
          <div key={idx} className="relative mb-12">
            {/* Timeline dot */}
            <div className="absolute left-4 sm:left-1/2 top-6 w-5 h-5 rounded-full bg-portfolioBg border-4 border-portfolioPrimary -translate-x-1/2 z-10 shadow-[0_0_12px_#38BDF8] hidden sm:block animate-pulse" />

            {/* Content card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="ml-0 sm:ml-8 sm:w-[calc(100%-2rem)] bg-portfolioCard border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-portfolioPrimary/30 transition-all shadow-xl group"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-portfolioSecondary uppercase bg-portfolioSecondary/10 px-2.5 py-1 rounded-md border border-portfolioSecondary/20 inline-block mb-2">
                    {exp.type}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-outfit text-portfolioText group-hover:text-portfolioPrimary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="flex items-center gap-1.5 text-portfolioTextSecondary font-medium text-sm sm:text-base mt-1">
                    <Building size={16} className="text-portfolioPrimary" />
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end text-xs sm:text-sm text-portfolioTextSecondary gap-1.5">
                  <span className="flex items-center gap-1.5 font-medium bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <Calendar size={14} className="text-portfolioSecondary" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin size={14} className="text-portfolioPrimary" />
                    {exp.location}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
