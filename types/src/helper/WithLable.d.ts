import type { ReactNode } from "react";
import type { ValidationResult } from "react-aria-components";
export interface WithLabelProps {
    label?: string;
    isRequired?: boolean;
    description?: string | null;
    errorMessage?: string | ((validation: ValidationResult) => string);
    children: ReactNode;
}
export declare function WithLabel(props: WithLabelProps): import("react/jsx-runtime").JSX.Element;
