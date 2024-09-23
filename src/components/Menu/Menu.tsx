import { Check, ChevronRight } from "lucide-react";
import React from "react";
import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuProps as AriaMenuProps,
  MenuItemProps,
  MenuTrigger,
  Separator,
  SeparatorProps,
  composeRenderProps,
} from "react-aria-components";
import {
  DropdownSection,
  DropdownSectionProps,
  dropdownItemStyles,
} from "../ListBox/ListBox";
import { Popover, PopoverProps } from "../Popover/Popover";
import type { Button } from "../Button";

export interface MenuProps<T> extends AriaMenuProps<T> {
  placement?: PopoverProps["placement"];
  activator?: () => ReturnType<typeof Button>;
  label?: string;
}

export function Menu<
  T extends { [k: string]: any; key: string; title: string },
>(props: MenuProps<T>) {
  return (
    <MenuTrigger>
      <Popover
        showArrow
        label={props.label}
        activator={props.activator}
        placement={props.placement}
        className="min-w-[150px]"
      >
        <AriaMenu
          {...props}
          className="outline outline-0 max-h-[inherit] overflow-auto [clip-path:inset(0_0_0_0_round_.5rem)]"
        >
          {props.children
            ? props.children
            : (e) => <MenuItem key={e.key}>{e.title}</MenuItem>}
        </AriaMenu>
      </Popover>
    </MenuTrigger>
  );
}

export function MenuItem(props: MenuItemProps) {
  return (
    <AriaMenuItem {...props} className={dropdownItemStyles}>
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

export function MenuSeparator(props: SeparatorProps) {
  return (
    <Separator {...props} className="mx-3 my-1 border-b border-gray-300" />
  );
}

export function MenuSection<
  T extends { [k: string]: any; key: string; title: string },
>(props: DropdownSectionProps<T>) {
  return <DropdownSection {...props} />;
}
