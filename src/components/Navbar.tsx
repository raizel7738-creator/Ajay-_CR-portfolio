import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-scroll"

const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-surface/80 backdrop-blur-xl border-b border-white/5 shadow-lg" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="Home" smooth duration={500} className="text-2xl font-display font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer">
            AC
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link}
                smooth
                duration={500}
                spy
                activeClass="text-white"
                className="text-slate-400 hover:text-white text-sm font-medium cursor-pointer transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/raizel7738-creator" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <Link to="Contact" smooth duration={500} className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
              Hire Me
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-surface-card border-t border-white/5 backdrop-blur-xl">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link}
                smooth
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-slate-400 hover:text-white border-b border-white/5
                  text-sm font-medium cursor-pointer transition-colors px-4"
              >
                {link}
              </Link>
            ))}
            <Link to="Contact" smooth duration={500} onClick={() => setIsOpen(false)} className="block mx-4 my-4 px-5 py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg text-sm font-medium text-center">
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
