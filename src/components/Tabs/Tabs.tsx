import { createContext, useContext } from "react";
import {
  Tab as RACTab,
  TabList as RACTabList,
  TabPanel as RACTabPanel,
  Tabs as RACTabs,
  TabListProps,
  TabPanelProps,
  TabProps,
  TabsProps,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "../utils";
import type { Color, TabsVariant } from "../types/prop.type";

const tabsStyles = tv({
  base: "flex gap-4",
  variants: {
    orientation: {
      horizontal: "flex-col",
      vertical: "flex-row w-[800px]",
    },
  },
});

export function Tabs(props: TabsProps) {
  return (
    <RACTabs
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabsStyles({ ...renderProps, className }),
      )}
    />
  );
}

const tabListStyles = tv({
  base: "flex gap-1 p-1 rounded",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-start",
    },
    variant: {
      default: "bg-gray-200",
      flat: "bg-transparent border-2",
      underlined: "bg-transparent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type TabsContextType = {
  variant?: TabsVariant;
  color?: Color;
};

const TabsContext = createContext<TabsContextType>({
  variant: "default",
  color: "default",
});

export interface TabListProp<T> extends TabListProps<T>, TabsContextType {}

export function TabList<T extends object>(props: TabListProp<T>) {
  return (
    <TabsContext.Provider
      value={{ variant: props.variant, color: props.color }}
    >
      <RACTabList
        {...props}
        className={composeRenderProps(
          props.className,
          (className, renderProps) =>
            tabListStyles({
              ...renderProps,
              variant: props.variant,
              className,
            }),
        )}
      />
    </TabsContext.Provider>
  );
}

const tabProps = tv({
  extend: focusRing,
  base: "rounded-sm transition forced-color-adjust-none flex items-center cursor-pointer px-4 py-1.5 text-sm font-medium",
  variants: {
    isDisabled: {
      true: "cursor-not-allowed",
    },
    color: {
      default:
        "[--bgHover:hsl(var(--hok-default-200))] [--bg:hsl(var(--hok-default-500))] [--textDisabled:hsl(var(--hok-default-300))]",
      primary:
        "[--bgHover:hsl(var(--hok-primary-200))] [--bg:hsl(var(--hok-primary-500))] [--textDisabled:hsl(var(--hok-primary-300))]",
      secondary:
        "[--bgHover:hsl(var(--hok-secondary-200))] [--bg:hsl(var(--hok-secondary-500))] [--textDisabled:hsl(var(--hok-secondary-300))]",
      success:
        "[--bgHover:hsl(var(--hok-success-200))] [--bg:hsl(var(--hok-success-500))] [--textDisabled:hsl(var(--hok-success-300))]",
      danger:
        "[--bgHover:hsl(var(--hok-danger-200))] [--bg:hsl(var(--hok-danger-500))] [--textDisabled:hsl(var(--hok-danger-300))]",
      warning:
        "[--bgHover:hsl(var(--hok-warning-200))] [--bg:hsl(var(--hok-warning-500))] [--textDisabled:hsl(var(--hok-warning-300))]",
      info: "[--bgHover:hsl(var(--hok-info-200))] [--bg:hsl(var(--hok-info-500))] [--textDisabled:hsl(var(--hok-info-300))]",
    },
    variant: {
      default: "",
      flat: "",
      underlined: "",
    },
  },
  defaultVariants: {
    variant: "default",
    color: "default",
  },
  compoundVariants: [
    {
      isDisabled: true,
      isSelected: false,
      variant: ["default", "flat"],
      className: "text-gray-300",
    },
    {
      isDisabled: false,
      isSelected: true,
      variant: ["default", "flat"],
      className: "bg-[--bg] text-white",
    },
    {
      isDisabled: false,
      isSelected: true,
      variant: "default",
      className: "shadow",
    },
    {
      isDisabled: true,
      isSelected: true,
      variant: "default",
      className: "bg-gray-100 text-gray-300",
    },
    {
      isDisabled: true,
      isSelected: true,
      variant: "flat",
      className: "bg-[--bgHover] text-white",
    },
    {
      isDisabled: true,
      isSelected: true,
      variant: "underlined",
      className:
        "border-0 border-b-2 rounded-none border-[--bgHover] text-gray-300",
    },
    {
      isDisabled: true,
      isSelected: false,
      variant: "underlined",
      className: "rounded-none text-gray-300",
    },
    {
      isDisabled: false,
      isSelected: true,
      variant: "underlined",
      className: "border-0 border-b-2 rounded-none border-[--bg]",
    },
  ],
});

export function Tab(props: TabProps) {
  const ctx = useContext(TabsContext);
  return (
    <RACTab
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabProps({
          ...renderProps,
          color: ctx.color,
          variant: ctx.variant,
          className,
        }),
      )}
    />
  );
}

const tabPanelStyles = tv({
  extend: focusRing,
  base: "flex-1 p-4 text-sm text-gray-900",
});

export function TabPanel(props: TabPanelProps) {
  return (
    <RACTabPanel
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabPanelStyles({ ...renderProps, className }),
      )}
    />
  );
}
