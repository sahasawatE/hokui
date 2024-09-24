import {
  Link as AriaLink,
  LinkProps as AriaLinkProps,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "../utils";
import type { LinkVariant, Color } from "../types/prop.type";

export interface LinkProps extends AriaLinkProps {
  variant?: LinkVariant;
  color?: Color;
}

const styles = tv({
  extend: focusRing,
  base: "underline disabled:no-underline disabled:cursor-default forced-colors:disabled:text-[GrayText] transition rounded cursor-pointer",
  variants: {
    variant: {
      text: "text-[--text] underline decoration-[--decoration] hover:decoration-[--hoverDecoration]",
      flat: "bg-[--bg] hover:bg-[--hoverBg] text-[--text] px-3 py-[0.2rem] rounded-sm",
    },
    color: {
      default:
        "[--c:var(--hok-default-500)] [--text:hsl(var(--c))] [--decoration:hsl(var(--c)/0.4)] [--hoverDecoration:hsl(var(--c))] [--bg:hsl(var(--c)/0.2)] [--hoverBg:hsl(var(--c)/0.1)]",
      primary:
        "[--c:var(--hok-primary-500)] [--text:hsl(var(--c))] [--decoration:hsl(var(--c)/0.4)] [--hoverDecoration:hsl(var(--c))] [--bg:hsl(var(--c)/0.2)] [--hoverBg:hsl(var(--c)/0.1)]",
      secondary:
        "[--c:var(--hok-secondary-500)] [--text:hsl(var(--c))] [--decoration:hsl(var(--c)/0.4)] [--hoverDecoration:hsl(var(--c))] [--bg:hsl(var(--c)/0.2)] [--hoverBg:hsl(var(--c)/0.1)]",
      success:
        "[--c:var(--hok-success-500)] [--text:hsl(var(--c))] [--decoration:hsl(var(--c)/0.4)] [--hoverDecoration:hsl(var(--c))] [--bg:hsl(var(--c)/0.2)] [--hoverBg:hsl(var(--c)/0.1)]",
      danger:
        "[--c:var(--hok-danger-500)] [--text:hsl(var(--c))] [--decoration:hsl(var(--c)/0.4)] [--hoverDecoration:hsl(var(--c))] [--bg:hsl(var(--c)/0.2)] [--hoverBg:hsl(var(--c)/0.1)]",
      warning:
        "[--c:var(--hok-warning-500)] [--text:hsl(var(--c))] [--decoration:hsl(var(--c)/0.4)] [--hoverDecoration:hsl(var(--c))] [--bg:hsl(var(--c)/0.2)] [--hoverBg:hsl(var(--c)/0.1)]",
      info: "[--c:var(--hok-info-500)] [--text:hsl(var(--c))] [--decoration:hsl(var(--c)/0.4)] [--hoverDecoration:hsl(var(--c))] [--bg:hsl(var(--c)/0.2)] [--hoverBg:hsl(var(--c)/0.1)]",
    },
  },
  defaultVariants: {
    variant: "text",
    color: "default",
  },
});

export function Link(props: LinkProps) {
  return (
    <AriaLink
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        styles({
          ...renderProps,
          className,
          variant: props.variant,
          color: props.color,
        }),
      )}
    />
  );
}
