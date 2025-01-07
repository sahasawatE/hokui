import {
  TabPanel as RACTabPanel,
  composeRenderProps,
  type TabPanelProps,
} from "react-aria-components";
import { tabPanelStyles } from "../../style";

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
