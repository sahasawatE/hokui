import { MeterProps as AriaMeterProps } from "react-aria-components";
export interface MeterProps extends AriaMeterProps {
    label?: string;
}
export declare function Meter({ label, ...props }: MeterProps): import("react/jsx-runtime").JSX.Element;
