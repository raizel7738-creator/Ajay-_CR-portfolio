import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useSanityData } from "../hooks/useSanityData"
import { projectsQuery } from "../lib/queries"
import type { Project } from "../types"
import { fallbackProjects } from "../data/fallback"
import GlassCard from "./ui/GlassCard"
import SectionTitle from "./ui/SectionTitle"
import TechBadge from "./ui/TechBadge"
import SkeletonCard from "./ui/SkeletonCard"

const Projects = () => {
  const { data, loading, error } = useSanityData<Project[]>(projectsQuery)
  
  // Use Sanity data if available and has items, otherwise use fallback
  const projects = (data && data.length > 0) ? data : fallbackProjects
  
  // Log for debugging
  console.log('Projects data:', { data, loading, error, projects })

  return (
    <section id="Projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Featured Projects" subtitle="Some of my recent work" centered />

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={project._id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <GlassCard hover className="h-full flex flex-col">
                  {/* Number tag */}
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white font-bold text-sm mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bullet points */}
                  {project.points && (
                    <ul className="space-y-2 mb-4 flex-grow">
                      {project.points.map((point, i) => (
                        <li key={i} className="text-slate-400 text-xs flex items-start gap-2">
                          <span className="text-indigo-400 mt-0.5">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => <TechBadge key={t} name={t} />)}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> GitHub
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
