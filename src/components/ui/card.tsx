"use client";

import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", interactive = false, children, ...props }, ref) => {
    const baseStyles =
      "bg-surface border border-surface-border rounded-xl p-6 transition-all duration-200";
    const interactiveStyles = interactive
      ? "hover:border-muted-foreground/30 hover:bg-surface-hover cursor-pointer"
      : "";

    const combinedClassName = `${baseStyles} ${interactiveStyles} ${className}`.trim();

    return (
      <div ref={ref} className={combinedClassName} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
