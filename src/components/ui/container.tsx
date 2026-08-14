import * as React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "full";
}

export const Container: React.FC<ContainerProps> = ({
  className = "",
  size = "lg",
  children,
  ...props
}) => {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    full: "max-w-7xl",
  };

  const combinedClassName = `w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`.trim();

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
};

Container.displayName = "Container";
