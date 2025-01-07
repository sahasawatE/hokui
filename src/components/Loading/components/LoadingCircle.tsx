import { motion } from "framer-motion";
import { IndicatorStyles, WarperStyles } from "../style";
import type { LoadingProps } from "../props";

export default function LoadingCircle(props: LoadingProps) {
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
