import { cn } from "../../utils/cn"

const GlassCard = ({ children, className, hover = false, glow = false }) => {
  return (
    <div
      className={cn(
        "bg-surface-card backdrop-blur-xl border border-surface-border rounded-xl p-6 transition-all duration-300",
        hover && "hover:-translate-y-1 hover:bg-surface-hover hover:border-accent/40 hover:shadow-xl hover:shadow-accent-glow",
        glow && "shadow-lg shadow-accent-glow",
        className
      )}
    >
      {children}
    </div>
  )
}

export default GlassCard
