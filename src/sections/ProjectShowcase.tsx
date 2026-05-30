import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, CreditCard, LayoutGrid, MonitorCheck, ServerCrash } from 'lucide-react';
import { Github } from '../components/BrandIcons';
import { SectionContainer } from '../components/SectionContainer';
import { projects } from '../data/portfolioData';

export const ProjectShowcase = () => {
  // Use first project (CineSphere) as featured
  const project = projects[0];

  // Helper icons for core features
  const getFeatureIcon = (feature: string) => {
    const text = feature.toLowerCase();
    if (text.includes('auth') || text.includes('jwt')) {
      return <ShieldCheck className="text-green-400 flex-shrink-0" size={18} />;
    }
    if (text.includes('payment') || text.includes('razorpay')) {
      return <CreditCard className="text-portfolioPrimary flex-shrink-0" size={18} />;
    }
    if (text.includes('dashboard') || text.includes('admin')) {
      return <LayoutGrid className="text-portfolioSecondary flex-shrink-0" size={18} />;
    }
    return <MonitorCheck className="text-portfolioPrimary flex-shrink-0" size={18} />;
  };

  return (
    <SectionContainer id="projects" title="Featured Projects" subtitle="What I've Built">
      <div className="relative max-w-5xl mx-auto">
        
        {/* Project Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-portfolioCard border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-portfolioPrimary/20 transition-all duration-300"
        >
          {/* Top-Right Decorative Accent */}
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-portfolioSecondary/10 blur-[50px] rounded-full pointer-events-none -z-10 group-hover:bg-portfolioSecondary/20 transition-all duration-500" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Title, Intro, Tech, CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold tracking-widest text-portfolioPrimary uppercase bg-portfolioPrimary/10 px-3 py-1 rounded-full border border-portfolioPrimary/20 inline-block mb-4">
                  Full-Stack MERN Project
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold font-outfit text-portfolioText mb-4 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-portfolioTextSecondary leading-relaxed mb-6 font-light">
                  {project.overview}
                </p>

                {/* Tech Badges */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold tracking-wider text-portfolioText uppercase mb-3">
                    Tech Stack & Integration
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-portfolioTextSecondary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-portfolioPrimary/30 hover:bg-portfolioPrimary/5 text-portfolioText text-sm font-semibold transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Github size={16} />
                  Source Code
                </a>
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-portfolioPrimary to-portfolioSecondary text-portfolioBg text-sm font-semibold shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Preview
                  </a>
                ) : (
                  <button
                    onClick={() => alert("Live booking demo is currently hosted in testing. Contact to request access!")}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-portfolioPrimary to-portfolioSecondary text-portfolioBg text-sm font-semibold shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ExternalLink size={16} />
                    Live Preview
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Features, Architecture Flow & Key Learnings */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Architecture/Deployment Stack Badge */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="text-xs font-semibold tracking-wider text-portfolioText uppercase mb-4 flex items-center gap-2">
                  <ServerCrash size={14} className="text-portfolioPrimary" />
                  Deployment Stack
                </h4>
                <div className="space-y-2.5 text-xs text-portfolioTextSecondary">
                  <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span>Frontend Client</span>
                    <span className="font-bold text-portfolioText">{project.deployment.frontend}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span>API Server</span>
                    <span className="font-bold text-portfolioText">{project.deployment.backend}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span>Database Engine</span>
                    <span className="font-bold text-portfolioText">{project.deployment.database}</span>
                  </div>
                </div>
              </div>

              {/* Feature Points Grid */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="text-xs font-semibold tracking-wider text-portfolioText uppercase mb-3">
                  Core Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                  {project.features.slice(0, 5).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-portfolioTextSecondary">
                      {getFeatureIcon(feat)}
                      <span>{feat}</span>
                    </div>
                  ))}
                  {project.features.length > 5 && (
                    <span className="text-[10px] text-portfolioPrimary font-medium italic mt-1 pl-7">
                      + {project.features.length - 5} more interactive modules
                    </span>
                  )}
                </div>
              </div>

              {/* Key Learnings */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="text-xs font-semibold tracking-wider text-portfolioText uppercase mb-3">
                  Engineering Learnings
                </h4>
                <ul className="grid grid-cols-2 gap-2 text-xs text-portfolioTextSecondary">
                  {project.learnings.map((learn, lIdx) => (
                    <li key={lIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-portfolioSecondary" />
                      <span>{learn}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};
