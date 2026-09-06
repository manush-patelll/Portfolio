import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Briefcase,
  Code2,
  ChevronRight,
  Sparkles,
  Zap,
  Shield,
  Globe,
  Database,
  MousePointerClick,
} from "lucide-react";
import { Github } from "../components/BrandIcons";
import { SectionContainer } from "../components/SectionContainer";
import { projects } from "../data/portfolioData";

// ─── colour accents per project index ────────────────────────────────────────
const PROJECT_ACCENTS = [
  {
    from: "from-sky-500",
    to: "to-indigo-500",
    glow: "rgba(99,102,241,0.28)",
    badge: "bg-sky-500/10 border-sky-500/30 text-sky-300",
    ring: "ring-sky-500/50",
    label: "Professional / Work",
  },
  {
    from: "from-violet-500",
    to: "to-fuchsia-500",
    glow: "rgba(168,85,247,0.28)",
    badge: "bg-violet-500/10 border-violet-500/30 text-violet-300",
    ring: "ring-violet-500/50",
    label: "Personal Project",
  },
  {
    from: "from-emerald-500",
    to: "to-teal-500",
    glow: "rgba(20,184,166,0.28)",
    badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
    ring: "ring-emerald-500/50",
    label: "Personal Project",
  },
  {
    from: "from-amber-500",
    to: "to-orange-500",
    glow: "rgba(245,158,11,0.28)",
    badge: "bg-amber-500/10 border-amber-500/30 text-amber-300",
    ring: "ring-amber-500/50",
    label: "Personal Project",
  },
] as const;

type Accent = (typeof PROJECT_ACCENTS)[number];

const FILTER_TABS = [
  { label: "All Projects", value: "all" },
  { label: "Professional", value: "professional" },
  { label: "Personal", value: "personal" },
] as const;
type FilterValue = "all" | "professional" | "personal";

// ─── highlight icon helper ────────────────────────────────────────────────────
const HighlightIcon = ({ text }: { text: string }) => {
  const t = text.toLowerCase();
  if (
    t.includes("jwt") ||
    t.includes("auth") ||
    t.includes("rbac") ||
    t.includes("oauth")
  )
    return <Shield size={13} className="flex-shrink-0 text-green-400" />;
  if (t.includes("real-time") || t.includes("socket") || t.includes("bullmq"))
    return <Zap size={13} className="flex-shrink-0 text-yellow-400" />;
  if (t.includes("ci/cd") || t.includes("docker") || t.includes("deploy"))
    return <Globe size={13} className="flex-shrink-0 text-blue-400" />;
  if (
    t.includes("database") ||
    t.includes("redis") ||
    t.includes("sql") ||
    t.includes("postgre")
  )
    return <Database size={13} className="flex-shrink-0 text-purple-400" />;
  return (
    <ChevronRight size={13} className="flex-shrink-0 text-portfolioPrimary" />
  );
};

// ─── FEATURED (expanded) card ─────────────────────────────────────────────────
const FeaturedCard = ({
  project,
  accent,
  projectIndex,
}: {
  project: (typeof projects)[0];
  accent: Accent;
  projectIndex: number;
}) => (
  <motion.div
    key={projectIndex}
    initial={{ opacity: 0, y: 28, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -16, scale: 0.98 }}
    transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
    className="relative rounded-3xl overflow-hidden border border-white/5 bg-portfolioCard shadow-2xl"
    style={{ boxShadow: `0 0 70px ${accent.glow}` }}
  >
    {/* gradient top strip */}
    <div
      className={`h-1 w-full bg-gradient-to-r ${accent.from} ${accent.to}`}
    />

    {/* background glow blob */}
    <div
      className="absolute top-0 right-0 w-[480px] h-[320px] rounded-full pointer-events-none opacity-25 blur-[80px]"
      style={{
        background: `radial-gradient(circle, ${accent.glow}, transparent 70%)`,
      }}
    />

    <div className="p-7 sm:p-10">
      {/* badges row */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span
          className={`flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${accent.badge}`}
        >
          {project.category === "professional" ? (
            <Briefcase size={11} />
          ) : (
            <Code2 size={11} />
          )}
          {accent.label}
        </span>
        <span className="text-xs text-portfolioTextSecondary border border-white/10 rounded-full px-3 py-1">
          {project.duration}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* LEFT */}
        <div className="lg:col-span-7 flex flex-col">
          <h3 className="text-3xl sm:text-4xl font-bold font-outfit text-portfolioText mb-4 leading-tight">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-portfolioTextSecondary leading-relaxed mb-6">
            {project.overview}
          </p>

          {/* highlights */}
          {project.highlights && (
            <ul className="space-y-3 mb-8">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-portfolioTextSecondary"
                >
                  <HighlightIcon text={h} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          {/* action buttons */}
          <div className="flex flex-wrap gap-3 mt-auto">
            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-portfolioPrimary/40 hover:bg-portfolioPrimary/5 text-portfolioText text-sm font-semibold transition-all hover:scale-[1.02] flex items-center gap-2"
              >
                <Github size={15} />
                Source Code
              </a>
            ) : (
              <span className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-portfolioTextSecondary text-sm font-semibold flex items-center gap-2 opacity-40 cursor-default">
                <Github size={15} />
                Private / Internal
              </span>
            )}
            {project.liveLink ? (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-2.5 rounded-xl bg-gradient-to-r ${accent.from} ${accent.to} text-white text-sm font-semibold shadow-lg hover:scale-[1.02] transition-all flex items-center gap-2`}
              >
                <ExternalLink size={15} />
                Live Preview
              </a>
            ) : (
              <span className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-portfolioTextSecondary text-sm font-semibold flex items-center gap-2 opacity-40 cursor-default">
                <ExternalLink size={15} />
                Private
              </span>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* tech stack */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="text-[10px] font-semibold tracking-widest text-portfolioText uppercase mb-3 flex items-center gap-2">
              <Code2 size={11} className="text-portfolioPrimary" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((t, i) => (
                <span
                  key={i}
                  className={`px-2.5 py-1 rounded-md border text-[11px] font-medium ${accent.badge}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* deployment */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="text-[10px] font-semibold tracking-widest text-portfolioText uppercase mb-3">
              Deployment
            </h4>
            <div className="space-y-2 text-xs text-portfolioTextSecondary">
              {(
                [
                  ["Frontend", project.deployment.frontend],
                  ["Backend", project.deployment.backend],
                  ["Database", project.deployment.database],
                ] as [string, string][]
              ).map(([label, val]) => (
                <div
                  key={label}
                  className="flex justify-between border-b border-white/5 pb-1.5 last:border-0 last:pb-0"
                >
                  <span>{label}</span>
                  <span className="font-semibold text-portfolioText">
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* learnings */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="text-[10px] font-semibold tracking-widest text-portfolioText uppercase mb-3">
              Key Learnings
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.learnings.map((l, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-portfolioTextSecondary text-[11px]"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// ─── MINI card (thumbnail row) ────────────────────────────────────────────────
const MiniCard = ({
  project,
  accent,
  isActive,
  onClick,
  index,
}: {
  project: (typeof projects)[0];
  accent: Accent;
  isActive: boolean;
  onClick: () => void;
  index: number;
}) => (
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    whileHover={{ y: -4, scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
    onClick={onClick}
    aria-label={`View ${project.title}`}
    className={`
      relative w-full text-left rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer group
      ${
        isActive
          ? `border-transparent ring-2 ${accent.ring} bg-portfolioCard shadow-xl`
          : "border-white/5 bg-portfolioCard/80 hover:border-white/15 hover:bg-portfolioCard"
      }
    `}
    style={isActive ? { boxShadow: `0 0 30px ${accent.glow}` } : undefined}
  >
    {/* colour top bar */}
    <div
      className={`h-0.5 w-full bg-gradient-to-r ${accent.from} ${accent.to} transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-40 group-hover:opacity-80"}`}
    />

    {/* "active" pulse dot */}
    {isActive && (
      <span className="absolute top-3 right-3 flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-gradient-to-r ${accent.from} ${accent.to}`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r ${accent.from} ${accent.to}`}
        />
      </span>
    )}

    <div className="p-4">
      <span className="text-[9px] font-bold tracking-widest uppercase text-portfolioTextSecondary">
        {project.duration}
      </span>
      <h4
        className={`text-sm font-bold font-outfit mt-1 leading-snug transition-colors ${isActive ? "text-white" : "text-portfolioText group-hover:text-white"}`}
      >
        {project.title.split("–")[0].trim()}
      </h4>
      <p className="text-[11px] text-portfolioTextSecondary mt-1 leading-relaxed line-clamp-2">
        {project.title.includes("–")
          ? project.title.split("–")[1].trim()
          : project.overview.slice(0, 55) + "…"}
      </p>

      {/* mini tech badges — first 3 */}
      <div className="flex flex-wrap gap-1 mt-3">
        {project.techStack.slice(0, 3).map((t, i) => (
          <span
            key={i}
            className={`px-1.5 py-0.5 rounded text-[9px] font-medium border ${accent.badge}`}
          >
            {t}
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="px-1.5 py-0.5 rounded text-[9px] border border-white/10 text-portfolioTextSecondary">
            +{project.techStack.length - 3}
          </span>
        )}
      </div>

      {/* click hint — only when not active */}
      {!isActive && (
        <div className="mt-3 flex items-center gap-1 text-[10px] text-portfolioTextSecondary/50 group-hover:text-portfolioPrimary transition-colors">
          <MousePointerClick size={10} />
          <span>Click to expand</span>
        </div>
      )}
      {isActive && (
        <div
          className={`mt-3 text-[10px] font-semibold bg-gradient-to-r ${accent.from} ${accent.to} bg-clip-text text-transparent`}
        >
          ● Currently viewing
        </div>
      )}
    </div>
  </motion.button>
);

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────
export const ProjectShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filter, setFilter] = useState<FilterValue>("all");
  const featuredRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  // Clamp activeIndex when filter changes
  const clampedActive = Math.min(activeIndex, filteredProjects.length - 1);
  const activeProject = filteredProjects[clampedActive] ?? filteredProjects[0];
  const activeAccent =
    PROJECT_ACCENTS[projects.indexOf(activeProject) % PROJECT_ACCENTS.length];

  const handleMiniClick = (projectInFiltered: (typeof projects)[0]) => {
    const globalIdx = projects.indexOf(projectInFiltered);
    setActiveIndex(filteredProjects.indexOf(projectInFiltered));
    // smooth scroll to featured card
    setTimeout(() => {
      featuredRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 60);
    void globalIdx; // suppress lint
  };

  return (
    <SectionContainer
      id="projects"
      title="Featured Projects"
      subtitle="What I've Built"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* ── Filter tabs ──────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-2 justify-center"
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setFilter(tab.value);
                setActiveIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                filter === tab.value
                  ? "bg-gradient-to-r from-portfolioPrimary to-portfolioSecondary text-portfolioBg border-transparent shadow-lg scale-105"
                  : "bg-white/5 border-white/10 text-portfolioTextSecondary hover:border-portfolioPrimary/30 hover:text-portfolioText"
              }`}
            >
              {tab.value === "all" && (
                <Sparkles size={11} className="inline mr-1.5 -mt-0.5" />
              )}
              {tab.value === "professional" && (
                <Briefcase size={11} className="inline mr-1.5 -mt-0.5" />
              )}
              {tab.value === "personal" && (
                <Code2 size={11} className="inline mr-1.5 -mt-0.5" />
              )}
              {tab.label}
            </button>
          ))}
        </motion.div>

        {filteredProjects.length === 0 ? (
          <p className="text-center text-portfolioTextSecondary text-sm py-16">
            No projects match this filter.
          </p>
        ) : (
          <>
            {/* ── Featured (expanded) card ────────────────────────────────── */}
            <div ref={featuredRef} className="scroll-mt-24">
              <AnimatePresence mode="wait">
                <FeaturedCard
                  key={`${activeProject.title}-${filter}`}
                  project={activeProject}
                  accent={activeAccent}
                  projectIndex={clampedActive}
                />
              </AnimatePresence>
            </div>

            {/* ── Mini thumbnail grid ─────────────────────────────────────── */}
            {filteredProjects.length > 1 && (
              <div>
                {/* hint label */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-center text-[11px] text-portfolioTextSecondary/50 mb-4 flex items-center justify-center gap-1.5"
                >
                  <MousePointerClick size={12} />
                  Click any card below to expand it
                </motion.p>

                <div
                  className={`grid gap-4 ${
                    filteredProjects.length === 2
                      ? "grid-cols-2"
                      : filteredProjects.length === 3
                        ? "grid-cols-2 sm:grid-cols-3"
                        : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                  }`}
                >
                  {filteredProjects.map((project, idx) => (
                    <MiniCard
                      key={project.title}
                      project={project}
                      accent={
                        PROJECT_ACCENTS[
                          projects.indexOf(project) % PROJECT_ACCENTS.length
                        ]
                      }
                      isActive={idx === clampedActive}
                      onClick={() => handleMiniClick(project)}
                      index={idx}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </SectionContainer>
  );
};
