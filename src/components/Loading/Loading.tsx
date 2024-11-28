import { motion } from "framer-motion";

import type { Color, Size } from "../types/prop.type";
import { tv } from "tailwind-variants";

export interface LoadingProps {
  color?: Color;
  size?: Size;
  value?: number;
  line?: boolean;
}

const WarperStyles = tv({
  variants: {
    size: {
      sm: "h-6 w-6",
      md: "h-8 w-8",
      lg: "h-10 w-10",
      xl: "h-12 w-12",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const IndicatorStyles = tv({
  base: "stroke-[--c] bg-[--c]",
  variants: {
    color: {
      default: "[--c:hsl(var(--hok-default))]",
      primary: "[--c:hsl(var(--hok-primary))]",
      secondary: "[--c:hsl(var(--hok-secondary))]",
      success: "[--c:hsl(var(--hok-success))]",
      danger: "[--c:hsl(var(--hok-danger))]",
      warning: "[--c:hsl(var(--hok-warning))]",
      info: "[--c:hsl(var(--hok-info))]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export function Loading(props: LoadingProps) {
  if (props.line) {
    return (
      <div className="relative rounded w-full h-[5px] bg-gray-200 overflow-hidden">
        <motion.div
          animate={{
            width: ["0", "50%"],
            left: ["-2%", "100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            delay: 1.5,
            repeatDelay: 1.5,
            ease: "easeInOut",
          }}
          className={IndicatorStyles({
            color: props.color,
            className: "h-[5px] w-[0px] rounded absolute",
          })}
        />
        <motion.div
          animate={{
            width: ["100%", "0"],
            left: ["-100%", "102%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className={IndicatorStyles({
            color: props.color,
            className: "h-[5px] w-[100%] rounded absolute",
          })}
        />
      </div>
    );
  }
  return (
    <div className={WarperStyles({ size: props.size })}>
      <motion.svg viewBox="0 0 100 100">
        <motion.circle
          cx="50"
          cy="50"
          r="25"
          fill="transparent"
          strokeWidth={6}
          animate={{
            pathLength: [0.9, 0.1, 0.9],
            rotate: [0, 360, 720],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
            times: [0, 0.4, 1],
          }}
          className={IndicatorStyles({ color: props.color })}
        />
      </motion.svg>
    </div>
  );
}
