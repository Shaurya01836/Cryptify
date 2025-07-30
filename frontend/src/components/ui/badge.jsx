import React from "react"
import { cn } from "../../lib/utils"

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover1)]",
    secondary: "bg-[var(--color-secondary)] text-[var(--color-foreground)] hover:bg-[var(--color-secondary)]/80",
    destructive: "bg-[var(--color-error)] text-white hover:bg-red-600",
    outline: "text-[var(--color-foreground)] border border-[var(--color-border)]"
  }
  
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }