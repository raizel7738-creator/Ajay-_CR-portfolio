import { ArrowUp } from "lucide-react"
import { Link } from "react-scroll"

const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"]

const Footer = () => (
  <footer className="border-t border-white/10 bg-black/20 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
        <div>
          <div className="text-2xl font-display font-extrabold text-white">Ajay CR</div>
          <p className="text-sm text-zinc-500 mt-1">React and MERN Stack Developer</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {navLinks.map((link) => (
            <Link key={link} to={link} smooth duration={500} className="text-zinc-400 hover:text-white text-sm font-semibold cursor-pointer transition-colors">
              {link}
            </Link>
          ))}
        </div>

        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-zinc-400 hover:text-white hover:border-accent/45 transition-all">
          <ArrowUp size={18} />
        </button>
      </div>

      <div className="border-t border-white/10 pt-6 text-center space-y-2">
        <p className="text-zinc-400 text-sm">
          Built with React, JavaScript, Tailwind CSS, Framer Motion, and Sanity CMS.
        </p>
        <p className="text-zinc-500 text-xs">
          Copyright 2026 Ajay CR. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
