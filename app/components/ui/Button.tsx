"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "motion/react";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}

const variants = {
    primary:
        "bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 border-transparent",
    secondary:
        "bg-secondary text-white shadow-lg shadow-secondary/25 hover:shadow-secondary/40 border-transparent",
    outline:
        "bg-transparent border-white/20 text-white hover:bg-white/5 hover:border-white/40 border",
    ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5 border-transparent",
};

const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
