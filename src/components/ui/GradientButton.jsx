import { cn } from "../../utils/cn"

const GradientButton = ({
  children, href, onClick, variant = "filled", className, disabled
}) => {
  const base = "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer"
  const filled = "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-90 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
  const outline = "border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400"

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
