import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Tabs as BaseTabs } from "./base/Tabs";
import { TabList } from "./base/TabList";
import { Tab as BaseTab } from "./base/Tab";
import { tabStyles, tabTextStyles } from "../style";
import { TabPanel } from "./base/TabPanel";
import type { TabsProps } from "../props";

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
        twMerge(
          twMerge(props.classNames?.base, props.className),
          renderProps.defaultClassName,
        )
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
                className={twMerge(
                  tabStyles({
                    color: props.color,
                    variant: props.variant,
                  }),
                  props.classNames?.tabItems,
                )}
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
        <TabPanel
          key={e.key}
          id={e.key}
          className={twMerge(
            "overflow-scroll no-scrollbar",
            props.classNames?.tabPanels,
          )}
          style={{
            maxHeight: `${props.height ?? "580"}px`,
          }}
        >
          {props.children(e)}
        </TabPanel>
      ))}
    </BaseTabs>
  );
}
