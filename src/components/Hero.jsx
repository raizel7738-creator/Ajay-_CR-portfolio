import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Mail, Download, ArrowDown } from "lucide-react"
import GradientButton from "./ui/GradientButton"
import { Link } from "react-scroll"

const titles = ["MERN Stack Developer", "React.js Developer", "Full Stack Developer", "Frontend Developer"]

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = titles[titleIndex]
    if (typing) {
      if (displayed.length < current.length) {
        const timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(timeout)
      } else {
        setTitleIndex((prev) => (prev + 1) % titles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, titleIndex])

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="Home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />

      <motion.div variants={container} initial="hidden" animate="visible" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-400 text-sm font-medium">
            Available for Work
          </span>
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Ajay CR
          </span>
        </motion.h1>

        <motion.div variants={item} className="text-2xl md:text-3xl font-medium text-indigo-400 mb-6 h-10">
          {displayed}<span className="animate-blink">|</span>
        </motion.div>

        <motion.p variants={item} className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          A motivated MERN Stack Developer passionate about building responsive,
          user-centric web interfaces. I turn ideas into clean, accessible, and
          visually polished digital experiences.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Link to="Projects" smooth duration={500}>
            <GradientButton variant="filled">
              View My Projects <ArrowDown size={18} />
            </GradientButton>
          </Link>
          <GradientButton href="/resume.pdf" variant="outline">
            Download Resume <Download size={18} />
          </GradientButton>
        </motion.div>

        <motion.div variants={item} className="flex items-center justify-center gap-4 text-slate-400 text-sm">
          <a href="https://github.com/raizel7738-creator" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> GitHub
          </a>
          |
          <a href="mailto:ajaycr2005@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={16} /> ajaycr2005@gmail.com
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
