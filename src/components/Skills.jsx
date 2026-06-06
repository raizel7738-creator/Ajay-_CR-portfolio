import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { fallbackSkills } from "../data/fallback"
import GlassCard from "./ui/GlassCard"
import SectionTitle from "./ui/SectionTitle"

const categories = ["All", "Frontend", "Backend", "Database", "Language", "Tools"]

const focusAreas = [
  "Responsive React interfaces",
  "REST API integration",
  "MongoDB data modeling",
  "Authentication flows",
]

const Skills = () => {
  const skills = fallbackSkills
  const [active, setActive] = useState("All")

  const filtered = useMemo(
    () => active === "All" ? skills : skills.filter((skill) => skill.category === active),
    [active, skills]
  )

  return (
    <section id="Skills" className="section-panel py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="The stack I use to move from idea to shipped UI." subtitle="A focused MERN toolkit, with enough frontend polish to make real products feel deliberate." centered />

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
          <GlassCard className="sticky top-24 hidden lg:block">
            <p className="eyebrow mb-4">Focus areas</p>
            <div className="space-y-3">
              {focusAreas.map((area, index) => (
                <div key={area} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15 text-sm font-bold text-accent">
                    {index + 1}
                  </span>
                  <span className="text-zinc-200">{area}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`min-h-11 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    active === cat
                      ? "bg-accent text-accent-ink shadow-lg shadow-accent-glow"
                      : "bg-white/[0.04] border border-white/[0.1] text-zinc-400 hover:text-white hover:border-accent/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {filtered.map((skill, index) => (
                <motion.div
                  key={skill._id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                >
                  <GlassCard hover className="h-full p-5">
                    <div className="flex items-center justify-between mb-4 gap-3">
                      <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                      <span className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-zinc-400">
                        {skill.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-full bg-white/[0.07] rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-accent to-accent-cyan rounded-full"
                        />
                      </div>
                      <p className="w-11 text-right text-sm font-semibold text-teal-100">{skill.level}%</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
