import { cn } from "../../utils/cn"

const GradientButton = ({
  children, href, onClick, variant = "filled", className, disabled, download
}) => {
  const base = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer"
  const filled = "bg-accent text-accent-ink hover:bg-accent-light hover:shadow-lg hover:shadow-accent-glow active:scale-95"
  const outline = "border border-white/15 text-white hover:bg-white/[0.08] hover:border-accent/60"

  if (href) {
    const isExternal = href.startsWith("http")
    return (
      <a
        href={href}
        download={download}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={cn(base, variant === "filled" ? filled : outline, className)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(base, variant === "filled" ? filled : outline, disabled && "opacity-50 cursor-not-allowed", className)}
    >
      {children}
    </button>
  )
}

export default GradientButton
