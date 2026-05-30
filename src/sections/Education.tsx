import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { SectionContainer } from '../components/SectionContainer';
import { education } from '../data/portfolioData';

export const Education = () => {
  const btech = education[0];
  const schools = education.slice(1);

  return (
    <SectionContainer id="education" title="Education" subtitle="Academic Milestones">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        
        {/* Featured Education Card: B.Tech */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-portfolioCard border border-white/5 rounded-3xl p-6 sm:p-8 hover:border-portfolioPrimary/20 transition-all duration-300 shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-4 mb-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-portfolioPrimary/10 border border-portfolioPrimary/20 flex items-center justify-center text-portfolioPrimary flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-outfit text-portfolioText leading-tight">
                    {btech.degree}
                  </h3>
                  <p className="text-portfolioTextSecondary text-sm sm:text-base font-semibold mt-1">
                    {btech.institution}
                  </p>
                </div>
              </div>
            </div>

            {/* Timelines and grades */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-portfolioTextSecondary mb-6">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 font-medium">
                <Calendar size={14} className="text-portfolioPrimary" />
                {btech.duration}
              </span>
              <span className="flex items-center gap-1.5 bg-portfolioPrimary/10 text-portfolioPrimary px-3 py-1.5 rounded-lg border border-portfolioPrimary/20 font-bold">
                <Award size={14} />
                {btech.grade}
              </span>
            </div>

            {/* Coursework Tags */}
            {btech.coursework && (
              <div>
                <h4 className="text-xs font-semibold tracking-wider text-portfolioText uppercase mb-3 flex items-center gap-2">
                  <BookOpen size={14} className="text-portfolioSecondary" />
                  Key Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {btech.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-portfolioTextSecondary hover:text-portfolioText hover:bg-portfolioPrimary/5 hover:border-portfolioPrimary/20 text-xs font-semibold transition-colors cursor-default"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Secondary Education Grid: HSC & SSC */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          {schools.map((school, sIdx) => (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: sIdx * 0.15 }}
              className="p-6 rounded-2xl bg-portfolioCard border border-white/5 hover:border-portfolioSecondary/20 transition-all duration-300 shadow-md flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-1.5 h-6 rounded-full bg-portfolioSecondary" />
                  <h4 className="text-base font-bold font-outfit text-portfolioText">
                    {school.degree}
                  </h4>
                </div>
                <p className="text-xs text-portfolioTextSecondary font-medium leading-relaxed">
                  {school.institution}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-white/5 text-xs text-portfolioTextSecondary font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-portfolioSecondary" />
                  {school.duration}
                </span>
                <span className="bg-portfolioSecondary/10 text-portfolioSecondary border border-portfolioSecondary/20 px-2 py-0.5 rounded font-bold">
                  {school.grade} Grade
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionContainer>
  );
};
