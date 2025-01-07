import {
  Tabs as RACTabs,
  TabsProps,
  composeRenderProps,
} from "react-aria-components";
import { tabsStyles } from "../../style";

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
