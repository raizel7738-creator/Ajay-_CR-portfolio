import { ArrowUp } from "lucide-react"
import { Link } from "react-scroll"

const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"]

const Footer = () => (
  <footer className="bg-surface-card border-t border-white/5 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
        <div className="text-2xl font-display font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Ajay CR
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link}
              smooth
              duration={500}
              className="text-slate-400 hover:text-white text-sm font-medium cursor-pointer transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>

        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08]
            flex items-center justify-center text-slate-400 hover:text-white
            hover:border-indigo-500/40 transition-all">
          <ArrowUp size={18} />
        </button>
      </div>

      <div className="border-t border-white/5 pt-6 text-center space-y-2">
        <p className="text-slate-400 text-sm">
          Built with React + TypeScript + Tailwind CSS + Sanity CMS
        </p>
        <p className="text-slate-500 text-xs">
          © 2025 Ajay CR. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
