import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("transition-colors", {
  variants: {
    type: {
      default: "text-black",
      subtitle: "text-black/50",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
    bold: {
      default: "font-normal",
      bold: "font-bold",
      semibold: "font-semibold",
    },
  },
  defaultVariants: {
    type: "default",
    size: "default",
    bold: "default",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLButtonElement, TypographyProps>(
  ({ className, type, bold, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";
    return (
      <Comp
        className={cn(typographyVariants({ type, size, bold, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };
