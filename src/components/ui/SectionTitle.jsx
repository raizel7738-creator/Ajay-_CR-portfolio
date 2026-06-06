const SectionTitle = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <p className="eyebrow mb-3">Portfolio</p>
      <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-3 text-balance">
        {title}
      </h2>
      <div className={`h-px w-24 bg-gradient-to-r from-accent to-accent-cyan mb-4 ${centered ? "mx-auto" : ""}`} />
      {subtitle && <p className={`text-zinc-400 text-lg max-w-2xl ${centered ? "mx-auto" : ""}`}>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
