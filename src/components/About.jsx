import { motion } from "framer-motion"
import { MapPin, BookOpen, Award } from "lucide-react"
import GlassCard from "./ui/GlassCard"
import SectionTitle from "./ui/SectionTitle"
import AnimatedCounter from "./ui/AnimatedCounter"
import TechBadge from "./ui/TechBadge"

const stats = [
  { value: 3,  suffix: "+", label: "Projects Built"   },
  { value: 11, suffix: "+", label: "Technologies"     },
  { value: 1,  suffix: "",  label: "Year Training"    },
  { value: 2,  suffix: "",  label: "Languages Spoken" },
]

const About = () => (
  <section id="About" className="py-20 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="About Me" subtitle="Get to know me better" />

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <GlassCard className="text-center">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-4xl font-display font-bold shadow-lg shadow-indigo-500/30">
                AC
              </div>
              <h3 className="text-2xl font-display font-bold text-white mt-4">Ajay CR</h3>
              <p className="text-indigo-400">MERN Stack Developer</p>
            </div>
          </GlassCard>

          <div className="grid grid-cols-2 gap-4 mt-6">
            {stats.map(({ value, suffix, label }) => (
              <GlassCard key={label} className="text-center" hover>
                <div className="text-3xl font-display font-bold text-white mb-1">
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <p className="text-slate-400 text-sm">{label}</p>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
          <p className="text-slate-300 leading-relaxed">
            A motivated and detail-oriented Frontend Developer and recent Diploma graduate
            with a strong foundation in building responsive, user-centric web interfaces.
            Skilled in React.js, HTML5, CSS3, JavaScript, and Bootstrap, with hands-on
            experience integrating REST APIs and collaborating on full-stack MERN projects.
          </p>

          <GlassCard hover>
            <div className="flex items-start gap-3 mb-3">
              <BookOpen className="text-indigo-400 mt-1" size={20} />
              <div>
                <h4 className="text-white font-semibold mb-1">Education</h4>
                <p className="text-slate-300 font-medium">Diploma in Computer Engineering</p>
                <p className="text-slate-400 text-sm">
                  K. Karunakaran Memorial Model Polytechnic College, Kallettumkara
                </p>
                <p className="text-slate-500 text-sm">IHRD · 2023 – 2025</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard hover>
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="text-cyan-400 mt-1" size={20} />
              <div>
                <h4 className="text-white font-semibold mb-1">Details</h4>
                <p className="text-slate-400 text-sm">📍 Kerala, India</p>
                <p className="text-slate-400 text-sm">📧 ajaycr2005@gmail.com</p>
                <p className="text-slate-400 text-sm">📱 9778200321</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard hover>
            <div className="flex items-start gap-3">
              <Award className="text-purple-400 mt-1" size={20} />
              <div>
                <h4 className="text-white font-semibold mb-2">Activities</h4>
                <div className="flex flex-wrap gap-2">
                  <TechBadge name="NSS Volunteer 2023" />
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  </section>
)

export default About
