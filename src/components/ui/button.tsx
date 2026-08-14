import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
}

export const getButtonClasses = (
  variant: "primary" | "secondary" | "ghost" | "outline" = "primary",
  size: "sm" | "md" | "lg" = "md",
  className = ""
) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-accent text-accent-foreground hover:bg-sky-400 active:bg-sky-600 shadow-sm",
    secondary:
      "bg-surface text-foreground hover:bg-surface-hover border border-surface-border",
    ghost:
      "bg-transparent text-muted-foreground hover:text-foreground hover:bg-surface/50",
    outline:
      "bg-transparent text-foreground border border-surface-border hover:border-muted-foreground/30 hover:bg-surface/30",
  };

  const sizes = {
    sm: "h-8 px-3 text-xs gap-1.5",
    md: "h-10 px-4 text-sm gap-2",
    lg: "h-12 px-6 text-base gap-2.5",
  };

  return `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", href, target, rel, children, ...props }, ref) => {
    const combinedClassName = getButtonClasses(variant, size, className);

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
