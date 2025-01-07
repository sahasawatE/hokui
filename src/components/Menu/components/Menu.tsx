import { Menu as AriaMenu, MenuTrigger } from "react-aria-components";
import { Popover } from "../../Popover";
import { MenuContext } from "./context";
import { MenuItem } from "./MenuItem";
import type { MenuProps } from "../props";

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
