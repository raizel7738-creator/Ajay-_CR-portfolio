import { cn } from "../../utils/cn"

const GlassCard = ({ children, className, hover = false, glow = false }) => {
  return (
    <div
      className={cn(
        "bg-surface-card backdrop-blur-sm border border-surface-border rounded-2xl p-6 transition-all duration-300",
        hover && "hover:bg-surface-hover hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10",
        glow && "shadow-lg shadow-accent-glow",
        className
      )}
    >
      {children}
    </div>
  )
}

export default GlassCard
