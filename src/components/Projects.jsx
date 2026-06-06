import { motion } from "framer-motion"
import { ExternalLink, Layers } from "lucide-react"
import { useSanityData } from "../hooks/useSanityData"
import { projectsQuery } from "../lib/queries"
import { fallbackProjects } from "../data/fallback"
import GlassCard from "./ui/GlassCard"
import SectionTitle from "./ui/SectionTitle"
import TechBadge from "./ui/TechBadge"
import SkeletonCard from "./ui/SkeletonCard"

const GitHubMark = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.66-.31-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.05.14 3.01.4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
  </svg>
)

const Projects = () => {
  const { data, loading, error } = useSanityData(projectsQuery)

  const cmsProjects = Array.isArray(data) ? data : []
  const usingFallback = !loading && Boolean(error)
  const projects = !loading && cmsProjects.length > 0 ? cmsProjects : usingFallback ? fallbackProjects : cmsProjects

  return (
    <section id="Projects" className="section-panel py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionTitle title="Selected builds with real product mechanics." subtitle="Projects chosen for authentication, live data, real-time behavior, admin flows, and responsive interface work." />
          <a href="https://github.com/raizel7738-creator" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 self-start rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white hover:border-accent/50 hover:bg-white/[0.05] transition-all">
            More on GitHub <ExternalLink size={16} />
          </a>
        </div>

        {usingFallback && (
          <p className="mb-8 rounded-xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-center text-amber-100 text-sm">
            Could not load projects from Sanity CMS. Showing saved fallback content.
            {error ? ` (${error})` : ""}
          </p>
        )}

        {!loading && !usingFallback && cmsProjects.length === 0 && (
          <p className="mb-8 text-center text-zinc-400 text-sm">
            No published projects in Sanity yet. Add projects in the studio and turn on "Show on Portfolio".
          </p>
        )}

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project._id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={index === 0 ? "lg:col-span-2" : ""}
              >
                <GlassCard hover className="h-full flex flex-col overflow-hidden">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-sm font-black text-accent-ink">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400">
                      <Layers size={14} />
                      {project.featured ? "Featured" : "Project"}
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-sm mb-5 leading-7">
                    {project.description}
                  </p>

                  {project.points && (
                    <ul className="space-y-3 mb-5 flex-grow">
                      {project.points.map((point) => (
                        <li key={point} className="text-zinc-400 text-sm flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => <TechBadge key={tech} name={tech} />)}
                  </div>

                  <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                      <GitHubMark /> GitHub
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-accent text-sm font-medium transition-colors">
                        <ExternalLink size={16} /> Live demo
                      </a>
                    )}
                  </div>
                </GlassCard>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
