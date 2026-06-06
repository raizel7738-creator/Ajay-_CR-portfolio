import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Mail, Sparkles } from "lucide-react"
import { Link } from "react-scroll"
import GradientButton from "./ui/GradientButton"

const titles = ["React interfaces", "MERN products", "REST API workflows", "real-time experiences"]

const metrics = [
  ["3+", "Projects shipped"],
  ["11+", "Core technologies"],
  ["5 mo", "MERN training"],
]

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = titles[titleIndex]
    if (typing && displayed.length < current.length) {
      const timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
      return () => clearTimeout(timeout)
    }
    if (typing) {
      const timeout = setTimeout(() => setTyping(false), 1400)
      return () => clearTimeout(timeout)
    }
    if (displayed.length > 0) {
      const timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 34)
      return () => clearTimeout(timeout)
    }
    const timeout = setTimeout(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
      setTyping(true)
    }, 80)
    return () => clearTimeout(timeout)
  }, [displayed, typing, titleIndex])

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
  }

  return (
    <section id="Home" className="min-h-screen relative overflow-hidden pt-24 pb-16 flex items-center">
      <div className="absolute inset-x-6 top-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center"
      >
        <div>
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-teal-100">
            <span className="h-2 w-2 rounded-full bg-accent-lime shadow-[0_0_18px_rgba(190,242,100,0.8)]" />
            Available for frontend and MERN roles
          </motion.div>

          <motion.p variants={item} className="eyebrow mt-8 mb-4">Ajay CR - Kerala, India</motion.p>

          <motion.h1 variants={item} className="max-w-5xl text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[0.95] text-white text-balance">
            Building clean web products with sharp React craft.
          </motion.h1>

          <motion.div variants={item} className="mt-6 min-h-10 text-2xl md:text-3xl font-semibold text-accent">
            I create {displayed}
            <span className="animate-blink text-accent-lime">|</span>
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            MERN Stack Developer focused on responsive interfaces, practical API integration,
            and polished product details. I like turning rough requirements into calm,
            usable screens that feel fast from the first click.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="Projects" smooth duration={500}>
              <GradientButton>
                Explore projects <ArrowDown size={18} />
              </GradientButton>
            </Link>
            <GradientButton href="mailto:ajaycr2005@gmail.com" variant="outline">
              Start a conversation <Mail size={18} />
            </GradientButton>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-5 text-sm text-zinc-400">
            <a href="https://github.com/raizel7738-creator" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
              GitHub <ArrowUpRight size={15} />
            </a>
            <a href="mailto:ajaycr2005@gmail.com" className="inline-flex items-center gap-2 hover:text-white transition-colors">
              ajaycr2005@gmail.com <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-accent-cyan/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1210]/90 p-5 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
                <span className="h-3 w-3 rounded-full bg-accent/80" />
              </div>
              <span className="text-xs font-medium text-zinc-500">portfolio.jsx</span>
            </div>

            <div className="grid gap-4 py-6">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-2xl font-display font-extrabold text-accent-ink">
                    AC
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Developer profile</p>
                    <h2 className="text-2xl font-display font-bold text-white">Ajay CR</h2>
                  </div>
                </div>
                <div className="mt-5 rounded-xl bg-black/30 p-4 font-mono text-sm leading-7 text-zinc-300">
                  <p><span className="text-accent">const</span> focus = ["React", "Node", "MongoDB"]</p>
                  <p><span className="text-accent-lime">ship</span>("responsive product UI")</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {metrics.map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-2xl font-display font-bold text-white">{value}</p>
                    <p className="mt-1 text-xs leading-5 text-zinc-400">{label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-accent/25 bg-accent/10 p-4 text-teal-50">
                <div className="flex items-center gap-2 font-semibold">
                  <Sparkles size={18} />
                  Ready to build useful, responsive experiences.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
