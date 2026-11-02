// 


import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "cn";

const buttonVariants = cva(
  [
    "group/button inline-flex shrink-0 items-center justify-center",
    "gap-2 whitespace-nowrap rounded-lg border border-transparent",
    "bg-clip-padding text-sm font-medium",
    "transition-all duration-200 ease-out",
    "outline-none select-none",
    "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",
    "active:translate-y-px",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-invalid:border-destructive aria-invalid:ring-2",
    "aria-invalid:ring-destructive/20",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        // Primary action: cyan in dark mode, blue in light mode.
        default: [
          "bg-primary text-primary-foreground",
          "shadow-sm",
          "hover:bg-primary/90",
          "hover:shadow-md",
          "focus-visible:ring-primary/50",
        ].join(" "),

        // Secondary action with a clear theme-aware border.
        outline: [
          "border-border bg-background text-foreground",
          "hover:bg-muted hover:text-foreground",
          "aria-expanded:bg-muted",
        ].join(" "),

        // Supporting actions and secondary CTAs.
        secondary: [
          "bg-secondary text-secondary-foreground",
          "hover:bg-secondary/80",
          "aria-expanded:bg-secondary/80",
        ].join(" "),

        // Low-emphasis actions, such as carousel controls.
        ghost: [
          "text-foreground",
          "hover:bg-muted hover:text-foreground",
          "aria-expanded:bg-muted",
        ].join(" "),

        // Destructive actions, such as removing an item.
        destructive: [
          "bg-destructive text-white",
          "hover:bg-destructive/90",
          "focus-visible:ring-destructive/30",
        ].join(" "),

        // Text-only navigation actions.
        link: [
          "h-auto rounded-none border-0 bg-transparent p-0",
          "text-primary underline-offset-4",
          "hover:underline",
        ].join(" "),
      },

      size: {
        xs: "h-7 rounded-md px-2 text-xs",
        sm: "h-8 rounded-lg px-3 text-xs",
        default: "h-10 rounded-lg px-4",
        lg: "h-11 rounded-xl px-6 text-sm",
        icon: "size-10 p-0",
        "icon-xs": "size-7 rounded-md p-0",
        "icon-sm": "size-8 rounded-lg p-0",
        "icon-lg": "size-11 rounded-xl p-0",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants>;

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
