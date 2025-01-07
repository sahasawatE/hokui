import { useContext } from "react";
import {
  Tab as RACTab,
  type TabProps,
  composeRenderProps,
} from "react-aria-components";
import { TabsContext } from "../context";
import { tabBaseStyles } from "../../style";

export function Tab(props: TabProps) {
  const ctx = useContext(TabsContext);
  return (
    <RACTab
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabBaseStyles({
          ...renderProps,
          color: ctx.color,
          variant: ctx.variant,
          className,
        }),
      )}
    />
  );
}
