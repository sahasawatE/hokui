import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Tabs as BaseTabs, TabList, Tab as BaseTab, TabPanel } from "./Tabs";
import type { Color, TabsVariant } from "../types/prop.type";
import { tv } from "tailwind-variants";

export type TabsProps<
  T extends { key: string; title: string; [k: string]: any },
> = {
  selectedKey?: string;
  defaultSelectedKey?: string;
  label?: string;
  orientation?: "vertical" | "horizontal";
  disabledKeys?: string[];
  className?: string;
  variant?: TabsVariant;
  color?: Color;
  items: T[];
  onSelectionChange?: (key: string) => void;
  renderTabItems?: (tabItemProps: {
    key: string;
    title: string;
  }) => React.ReactNode;
  children: (item: T) => React.ReactNode;
};

const tabStyles = tv({
  base: "absolute inset-0",
  variants: {
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
      default: "rounded-sm mix-blend-multiply bg-[--bg] shadow",
      flat: "rounded-sm mix-blend-multiply bg-[--bg]",
      underlined: "border-b-2 border-[--bg]",
    },
  },
  defaultVariants: {
    variant: "default",
    color: "default",
  },
});

const tabTextStyles = tv({
  base: "relative",
  variants: {
    isSelected: {
      true: "",
      false: "text-[--textColor]",
    },
    color: {
      default: "[--textColor:hsl(var(--hok-default-600))]",
      primary: "[--textColor:hsl(var(--hok-primary-600))]",
      secondary: "[--textColor:hsl(var(--hok-secondary-600))]",
      success: "[--textColor:hsl(var(--hok-success-600))]",
      danger: "[--textColor:hsl(var(--hok-danger-600))]",
      warning: "[--textColor:hsl(var(--hok-warning-600))]",
      info: "[--textColor:hsl(var(--hok-info-600))]",
    },
    variant: {
      default: "",
      flat: "",
      underlined: "",
    },
  },
  defaultVariants: {
    color: "default",
    variant: "default",
  },
  compoundVariants: [
    {
      variant: ["default", "flat"],
      isSelected: true,
      className: "text-white",
    },
    {
      variant: "underlined",
      isSelected: true,
      className: "text-[--textColor]",
    },
  ],
});

export function Tabs<
  T extends { key: string; title: string; [k: string]: any },
>(props: TabsProps<T>) {
  return (
    <BaseTabs
      aria-label={props.label}
      defaultSelectedKey={props.defaultSelectedKey}
      orientation={props.orientation}
      disabledKeys={props.disabledKeys}
      selectedKey={props.selectedKey}
      className={(renderProps) =>
        twMerge(props.className, renderProps.defaultClassName)
      }
      onSelectionChange={(key) => {
        if (props.onSelectionChange) {
          return props.onSelectionChange(String(key));
        }

        return undefined;
      }}
    >
      <TabList items={props.items} color={props.color} variant={props.variant}>
        {props.items.map((e) => (
          <BaseTab id={e.key} key={e.key} className="relative">
            {props.selectedKey === e.key && (
              <motion.div
                layoutId="tab-indicator"
                className={tabStyles({
                  color: props.color,
                  variant: props.variant,
                })}
                transition={{
                  type: "spring",
                  duration: 0.3,
                }}
              ></motion.div>
            )}
            <div
              className={tabTextStyles({
                color: props.color,
                isSelected: props.selectedKey === e.key,
                variant: props.variant,
              })}
            >
              {props.renderTabItems ? props.renderTabItems(e) : e.title}
            </div>
          </BaseTab>
        ))}
      </TabList>

      {props.items.map((e) => (
        <TabPanel key={e.key} id={e.key}>
          {props.children(e)}
        </TabPanel>
      ))}
    </BaseTabs>
  );
}
