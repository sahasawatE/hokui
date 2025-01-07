import { useContext } from "react";
import { Check, ChevronRight } from "lucide-react";
import {
  MenuItem as AriaMenuItem,
  composeRenderProps,
} from "react-aria-components";
import { dropdownItemStyles } from "../../ListBox";
import type { MenuItemProps } from "../props";
import { MenuContext } from "./context";

export function MenuItem(props: MenuItemProps) {
  const ctx = useContext(MenuContext);
  return (
    <AriaMenuItem
      {...props}
      className={(renderProps) =>
        dropdownItemStyles({ ...renderProps, color: ctx.color })
      }
    >
      {composeRenderProps(
        props.children,
        (children, { selectionMode, isSelected, hasSubmenu }) => (
          <>
            {selectionMode !== "none" && (
              <span className="flex items-center w-4">
                {isSelected && <Check aria-hidden className="w-4 h-4" />}
              </span>
            )}
            <span className="flex items-center flex-1 gap-2 font-normal truncate group-selected:font-semibold">
              {children}
            </span>
            {hasSubmenu && (
              <ChevronRight aria-hidden className="absolute w-4 h-4 right-2" />
            )}
          </>
        ),
      )}
    </AriaMenuItem>
  );
}
