import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"
import { useSanityData } from "../hooks/useSanityData"
import { experienceQuery } from "../lib/queries"
import { fallbackExperience } from "../data/fallback"
import GlassCard from "./ui/GlassCard"
import SectionTitle from "./ui/SectionTitle"

const Experience = () => {
  const { data } = useSanityData(experienceQuery)
  const items = data || fallbackExperience

  return (
    <section id="Experience" className="section-panel py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Training, education, and the work behind the portfolio." subtitle="A concise path through the practical MERN training and engineering foundation behind the projects." centered />

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-cyan to-transparent hidden md:block" />

          <div className="space-y-6">
            {items.map((item, index) => {
              const Icon = item.type === "work" ? Briefcase : GraduationCap
              return (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative md:pl-16"
                >
                  <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-xl border border-accent/35 bg-[#0d1210] text-accent md:flex">
                    <Icon size={18} />
                  </div>

                  <GlassCard hover>
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                      <div>
                        <h3 className="text-xl font-display font-bold text-white mb-1">{item.role}</h3>
                        <p className="text-accent font-semibold">{item.company}</p>
                      </div>

                      <span className="px-3 py-1 bg-white/[0.04] border border-white/10 rounded-lg text-zinc-300 text-xs font-semibold">
                        {item.duration}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="text-zinc-400 text-sm flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
