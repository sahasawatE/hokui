import {
  TabList as RACTabList,
  composeRenderProps,
} from "react-aria-components";
import { TabsContext } from "../context";
import { tabListStyles } from "../../style";
import type { TabListProp } from "../../props";

export function TabList<
  T extends { key: string; title: string; [k: string]: any },
>(props: TabListProp<T>) {
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
