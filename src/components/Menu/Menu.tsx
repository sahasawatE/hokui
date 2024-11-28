import { Check, ChevronRight } from "lucide-react";
import React, { createContext, useContext } from "react";
import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuProps as AriaMenuProps,
  MenuItemProps as AriaMenuItemProps,
  MenuTrigger,
  Separator,
  SeparatorProps as AriaSeparatorProps,
  composeRenderProps,
} from "react-aria-components";
import {
  DropdownSection,
  DropdownSectionProps as DSProps,
  dropdownItemStyles,
} from "../ListBox/ListBox";
import { Popover, PopoverProps } from "../Popover";
import type { Color } from "../types/prop.type";

type MenuContext = {
  color?: Color;
};

type BtnOptions = {
  props: any;
  ref: any;
  defaultClassName: string;
};

export interface MenuProps<T>
  extends Omit<AriaMenuProps<T>, "onAction" | "onSelectionChange">,
    MenuContext {
  placement?: PopoverProps["placement"];
  elementType?: React.JSXElementConstructor<any> | React.ElementType;
  label?: string;
  isOpen?: boolean;
  activator?: (btnProps: BtnOptions) => React.ReactNode;
  onSelect?: (e: string) => void;
  onSelectionChange?: (e: string[]) => void;
}

const MenuContext = createContext<MenuContext>({
  color: "default",
});

export function Menu<
  T extends { [k: string]: any; key: string; title: string },
>(props: MenuProps<T>) {
  return (
    <MenuTrigger isOpen={props.isOpen}>
      <MenuContext.Provider
        value={{
          color: props.color,
        }}
      >
        <Popover
          showArrow
          label={props.label}
          elementType={props.elementType}
          activator={props.activator}
          placement={props.placement}
          className="min-w-[150px]"
        >
          <AriaMenu
            {...props}
            onAction={(e) => {
              if (props.onSelect) {
                return props.onSelect(String(e));
              }

              return undefined;
            }}
            onSelectionChange={(e) => {
              if (props.onSelectionChange) {
                const keys = Array.from(e).map((k) => String(k));
                return props.onSelectionChange(keys);
              }

              return undefined;
            }}
            className="outline outline-0 max-h-[inherit] overflow-auto [clip-path:inset(0_0_0_0_round_.5rem)]"
          >
            {props.children
              ? props.children
              : (e) => <MenuItem key={e.key}>{e.title}</MenuItem>}
          </AriaMenu>
        </Popover>
      </MenuContext.Provider>
    </MenuTrigger>
  );
}

export type MenuItemProps = AriaMenuItemProps;

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

export type SeparatorProps = AriaSeparatorProps;

export function MenuSeparator(props: SeparatorProps) {
  return (
    <Separator {...props} className="mx-3 my-1 border-b border-gray-300" />
  );
}

export type DropdownSectionProps<T> = DSProps<T>;

export function MenuSection<
  T extends { [k: string]: any; key: string; title: string },
>(props: DropdownSectionProps<T>) {
  return <DropdownSection {...props} />;
}
