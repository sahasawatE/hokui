import { motion } from "framer-motion";
import { IndicatorStyles } from "../style";
import type { LoadingProps } from "../props";

export default function LoadingLine(props: LoadingProps) {
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
