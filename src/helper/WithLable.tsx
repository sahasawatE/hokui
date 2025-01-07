import type { ReactNode } from "react";
import type { ValidationResult } from "react-aria-components";
import { Description, FieldError, Label } from "../components/Field";

export interface WithLabelProps {
  label?: string;
  isRequired?: boolean;
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
  children: ReactNode;
}

export function WithLabel(props: WithLabelProps) {
  return (
    <>
      {props.label && (
        <Label>
          {props.label}
          {props.isRequired && <span className="text-danger">*</span>}
        </Label>
      )}
      {props.children}
      {props.description && <Description>{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </>
  );
}
