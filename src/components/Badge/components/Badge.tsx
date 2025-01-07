import { BadgeProps } from "../props";
import { badgeStyle } from "../style";

export function Badge(props: BadgeProps) {
  return (
    <div className="relative">
      <div
        className={badgeStyle({
          position: props.position,
          variant: props.variant,
          rounded: props.rounded,
          color: props.color,
          className: props.className,
        })}
      >
        <div>{props.content}</div>
      </div>
      {props.children}
    </div>
  );
}
