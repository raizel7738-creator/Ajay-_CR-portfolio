import { useState } from "react"
import { motion } from "framer-motion"
import { fallbackSkills } from "../data/fallback"
import GlassCard from "./ui/GlassCard"
import SectionTitle from "./ui/SectionTitle"

const categories = ["All", "Frontend", "Backend", "Database", "Language", "Tools"]

const Skills = () => {
  const skills = fallbackSkills
  const [active, setActive] = useState("All")

  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active)

  return (
    <section id="Skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Skills & Technologies" subtitle="Tools and technologies I work with" centered />

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                ${active === cat
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/20"
                  : "bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.07]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((skill) => (
            <motion.div key={skill._id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <GlassCard hover className="h-full">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                  <span className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded text-indigo-300 text-xs">
                    {skill.category}
                  </span>
                </div>

                <div className="w-full bg-white/5 rounded-full h-2 mb-2 overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
                </div>

                <p className="text-slate-400 text-sm text-right">{skill.level}%</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
