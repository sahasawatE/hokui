import { Switch as AriaSwitch } from "react-aria-components";
import { motion } from "framer-motion";
import { composeTailwindRenderProps } from "../../utils";
import { handle, track } from "../style";
import type { SwitchProps } from "../props";

export function Switch({ label, ...props }: SwitchProps) {
  return (
    <AriaSwitch
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex gap-2 items-center text-gray-800 disabled:text-gray-300 forced-colors:disabled:text-[GrayText] text-sm transition",
      )}
    >
      {(renderProps) => (
        <>
          <div className={track({ ...renderProps, color: props.color })}>
            <motion.div
              layout
              transition={{
                type: "spring",
                stiffness: 700,
                damping: 30,
              }}
              className={handle(renderProps)}
            />
          </div>
          {label}
        </>
      )}
    </AriaSwitch>
  );
}
