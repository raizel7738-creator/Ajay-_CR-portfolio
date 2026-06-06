import { motion } from "framer-motion"
import { Award, BookOpen, MapPin, PanelsTopLeft } from "lucide-react"
import GlassCard from "./ui/GlassCard"
import SectionTitle from "./ui/SectionTitle"
import AnimatedCounter from "./ui/AnimatedCounter"
import TechBadge from "./ui/TechBadge"

const stats = [
  { value: 3, suffix: "+", label: "Project builds" },
  { value: 11, suffix: "+", label: "Technologies" },
  { value: 5, suffix: "", label: "Months training" },
  { value: 2, suffix: "", label: "Languages" },
]

const About = () => (
  <section id="About" className="section-panel py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="A practical developer with a product eye." subtitle="I care about interfaces that are easy to scan, APIs that behave predictably, and layouts that hold up across devices." />

      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <GlassCard className="bg-gradient-to-br from-white/[0.08] to-white/[0.03]">
            <div className="flex items-start gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-accent text-3xl font-display font-extrabold text-accent-ink">
                AC
              </div>
              <div>
                <p className="text-zinc-400 text-sm">MERN Stack Developer</p>
                <h3 className="mt-1 text-3xl font-display font-bold text-white">Ajay CR</h3>
                <p className="mt-3 text-zinc-300 leading-7">
                  Recent Computer Engineering diploma graduate building with React,
                  JavaScript, Node.js, Express, MongoDB, and Tailwind CSS.
                </p>
              </div>
            </div>
          </GlassCard>

          <div className="grid grid-cols-2 gap-4 mt-5">
            {stats.map(({ value, suffix, label }) => (
              <GlassCard key={label} className="text-left" hover>
                <div className="text-3xl font-display font-bold text-white">
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <p className="mt-1 text-zinc-400 text-sm">{label}</p>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid gap-5">
          <GlassCard hover>
            <div className="flex items-start gap-4">
              <PanelsTopLeft className="text-accent mt-1" size={22} />
              <div>
                <h4 className="text-white font-semibold mb-2">How I build</h4>
                <p className="text-zinc-300 leading-7">
                  I start from the user flow, shape the UI with reusable components,
                  connect reliable data paths, then refine motion and responsive behavior
                  so the experience feels polished without getting heavy.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard hover>
            <div className="flex items-start gap-4">
              <BookOpen className="text-accent-cyan mt-1" size={22} />
              <div>
                <h4 className="text-white font-semibold mb-2">Education</h4>
                <p className="text-zinc-200 font-medium">Diploma in Computer Engineering</p>
                <p className="text-zinc-400 text-sm mt-1">
                  K. Karunakaran Memorial Model Polytechnic College, Kallettumkara
                </p>
                <p className="text-zinc-500 text-sm mt-1">IHRD, 2022 - 2025</p>
              </div>
            </div>
          </GlassCard>

          <div className="grid md:grid-cols-2 gap-5">
            <GlassCard hover>
              <div className="flex items-start gap-4">
                <MapPin className="text-accent-lime mt-1" size={22} />
                <div>
                  <h4 className="text-white font-semibold mb-2">Details</h4>
                  <p className="text-zinc-400 text-sm">Kerala, India</p>
                  <p className="text-zinc-400 text-sm">ajaycr2005@gmail.com</p>
                  <p className="text-zinc-400 text-sm">9778200321</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard hover>
              <div className="flex items-start gap-4">
                <Award className="text-accent mt-1" size={22} />
                <div>
                  <h4 className="text-white font-semibold mb-3">Activities</h4>
                  <TechBadge name="NSS Volunteer 2023" />
                </div>
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default About
