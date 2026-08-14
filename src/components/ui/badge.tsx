import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "success" | "outline";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  className = "",
  variant = "default",
  size = "md",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center font-mono font-medium rounded-md tracking-tight";

  const variants = {
    default:
      "bg-surface text-muted-foreground border border-surface-border",
    accent:
      "bg-accent-subtle text-accent border border-accent/20",
    success:
      "bg-status-successBg text-status-success border border-status-success/20",
    outline:
      "bg-transparent text-foreground border border-surface-border",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[11px]",
    md: "px-2.5 py-1 text-xs",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  return (
    <span className={combinedClassName} {...props}>
      {children}
    </span>
  );
};

Badge.displayName = "Badge";
