import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionContainerProps {
  id: string;
  className?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

export const SectionContainer = ({
  id,
  className = '',
  title,
  subtitle,
  children
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 relative scroll-mt-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-16 md:mb-20">
            {subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="text-xs md:text-sm font-semibold tracking-widest text-portfolioPrimary uppercase bg-portfolioPrimary/10 px-3 py-1 rounded-full border border-portfolioPrimary/20 inline-block mb-3"
              >
                {subtitle}
              </motion.span>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold font-outfit text-portfolioText mt-2"
              >
                {title}
              </motion.h2>
            )}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[3px] bg-gradient-to-r from-portfolioPrimary to-portfolioSecondary mx-auto mt-4 rounded-full shadow-[0_0_8px_#38BDF8]"
            />
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};
