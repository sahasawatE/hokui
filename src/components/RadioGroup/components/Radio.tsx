import { useContext } from "react";
import { Radio as RACRadio } from "react-aria-components";
import { RadioBtnStyles } from "../style";
import { composeTailwindRenderProps } from "../../utils";
import { GroupContext } from "./context";
import type { RadioProps } from "../props";

export function Radio(props: RadioProps) {
  const groupContext = useContext(GroupContext);
  return (
    <RACRadio
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex gap-2 items-center group text-gray-800 disabled:text-gray-300 forced-colors:disabled:text-[GrayText] text-sm transition",
      )}
    >
      {(renderProps) => (
        <div className="flex flex-row items-start gap-2">
          <div
            className={RadioBtnStyles({
              ...renderProps,
              color: groupContext.color,
            })}
          />
          {props.children}
        </div>
      )}
    </RACRadio>
  );
}
