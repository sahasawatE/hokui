import { DialogProps } from "react-aria-components";
import type { Button } from "../Button";
interface DialogProp extends DialogProps {
    activator?: () => ReturnType<typeof Button>;
    label?: string;
}
export declare function Dialog(props: DialogProp): import("react/jsx-runtime").JSX.Element;
export {};
