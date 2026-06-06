import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-scroll"

const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"]

const GitHubMark = ({ size = 18 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.66-.31-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.05.14 3.01.4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
  </svg>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkClass = "text-zinc-400 hover:text-white text-sm font-semibold cursor-pointer transition-colors"

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#070807]/82 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="Home" smooth duration={500} className="group flex items-center gap-3 cursor-pointer">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-sm font-black text-accent-ink transition-transform group-hover:-translate-y-0.5">
              AC
            </span>
            <span className="hidden sm:block text-sm font-bold text-white">Ajay CR</span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link key={link} to={link} smooth duration={500} spy activeClass="!text-accent" className={linkClass}>
                {link}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/raizel7738-creator" target="_blank" rel="noopener noreferrer" aria-label="Open Ajay CR on GitHub" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:border-accent/45 transition-colors">
              <GitHubMark />
            </a>
            <Link to="Contact" smooth duration={500} className="px-5 py-2.5 bg-accent text-accent-ink rounded-xl text-sm font-bold hover:bg-accent-light transition-colors cursor-pointer">
              Hire Me
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu" className="md:hidden text-white p-2 rounded-xl border border-white/10">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#070807]/95 border-t border-white/10 backdrop-blur-xl">
            <div className="px-4 py-3">
              {navLinks.map((link) => (
                <Link key={link} to={link} smooth duration={500} onClick={() => setIsOpen(false)} className="block rounded-xl px-3 py-3 text-zinc-400 hover:text-white hover:bg-white/[0.04] text-sm font-semibold cursor-pointer transition-colors">
                  {link}
                </Link>
              ))}
              <Link to="Contact" smooth duration={500} onClick={() => setIsOpen(false)} className="mt-3 block px-5 py-3 bg-accent text-accent-ink rounded-xl text-sm font-bold text-center">
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
