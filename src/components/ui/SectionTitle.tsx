interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
        {title}
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mb-4" />
      {subtitle && <p className="text-slate-400 text-lg max-w-2xl">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
