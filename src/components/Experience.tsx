import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"
import { useSanityData } from "../hooks/useSanityData"
import { experienceQuery } from "../lib/queries"
import type { Experience as ExperienceType } from "../types"
import { fallbackExperience } from "../data/fallback"
import GlassCard from "./ui/GlassCard"
import SectionTitle from "./ui/SectionTitle"

const Experience = () => {
  const { data } = useSanityData<ExperienceType[]>(experienceQuery)
  const items = data || fallbackExperience

  return (
    <section id="Experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Experience & Education" subtitle="My professional journey" centered />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 hidden md:block" />

          <div className="space-y-8">
            {items.map((item) => (
              <motion.div key={item._id} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 border-4 border-surface hidden md:flex items-center justify-center">
                  {item.type === "work"
                    ? <Briefcase size={10} className="text-white" />
                    : <GraduationCap size={10} className="text-white" />
                  }
                </div>

                <div className="md:ml-20">
                  <GlassCard hover>
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <h3 className="text-xl font-display font-bold text-white mb-1">{item.role}</h3>
                        <p className="text-indigo-400 font-medium">{item.company}</p>
                      </div>

                      <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-indigo-300 text-xs font-medium">
                        {item.duration}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {item.points.map((point, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                          <span className="text-indigo-400 mt-1">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
