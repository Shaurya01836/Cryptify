import React from "react"
import { cn } from "../../lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
  
  const variants = {
    default: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover1)]",
    destructive: "bg-[var(--color-error)] text-white hover:bg-red-600",
    outline: "border border-[var(--color-border)] bg-transparent hover:bg-[var(--color-surface)] hover:text-[var(--color-foreground)]",
    secondary: "bg-[var(--color-secondary)] text-[var(--color-foreground)] hover:bg-[var(--color-secondary)]/80",
    ghost: "hover:bg-[var(--color-surface)] hover:text-[var(--color-foreground)]",
    link: "underline-offset-4 hover:underline text-[var(--color-primary)]"
  }
  
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10"
  }
  
  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button }