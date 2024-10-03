import { createContext, ReactNode, useContext } from "react";
import {
  Radio as RACRadio,
  RadioGroup as RACRadioGroup,
  RadioGroupProps as RACRadioGroupProps,
  RadioProps,
  ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Description, FieldError, Label } from "../Field";
import { composeTailwindRenderProps, focusRing } from "../utils";
import type { Color } from "../types/prop.type";

type CustomProps = {
  color?: Color;
};

const GroupContext = createContext<CustomProps>({
  color: "default",
});

export interface RadioGroupProps<T>
  extends Omit<RACRadioGroupProps, "children">,
    CustomProps {
  label?: string;
  children?: (option: T) => ReactNode;
  options: T[];
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function RadioGroup<
  T extends { [key: string]: any; value: string; title: string },
>(props: RadioGroupProps<T>) {
  return (
    <RACRadioGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-col gap-2",
      )}
    >
      <Label>
        {props.label}{" "}
        {props.isRequired && <span className="text-danger">*</span>}
      </Label>
      <GroupContext.Provider value={{ color: props.color }}>
        <div className="flex group-orientation-vertical:flex-col gap-2 group-orientation-horizontal:gap-4">
          {props.options.map((e) =>
            props.children ? (
              props.children(e)
            ) : (
              <Radio key={e.value} value={e.value}>
                {e.title}
              </Radio>
            ),
          )}
        </div>
      </GroupContext.Provider>
      {props.description && <Description>{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </RACRadioGroup>
  );
}

const RadioBtnStyles = tv({
  extend: focusRing,
  base: "w-5 h-5 max-w-5 max-h-5 min-w-5 min-h-5  rounded-full border-2 bg-white transition-all cursor-pointer",
  variants: {
    isSelected: {
      false:
        "border-[--borderUnselected] group-pressed:border-[--borderUnselectedPressed]",
      true: "border-[7px] border-[--border] forced-colors:!border-[Highlight] group-pressed:border-[--borderPressed]",
    },
    isInvalid: {
      true: "border-red-700 group-pressed:border-red-800 forced-colors:!border-[Mark]",
    },
    isDisabled: {
      true: "border-gray-200 forced-colors:!border-[GrayText]",
    },
    color: {
      default:
        "[--borderUnselected:hsl(var(--hok-default-300))] [--borderUnselectedPressed:hsl(var(--hok-default-400))] [--border:hsl(var(--hok-default-400))] [--borderPressed:hsl(var(--hok-default-600))]",
      primary:
        "[--borderUnselected:hsl(var(--hok-primary-300))] [--borderUnselectedPressed:hsl(var(--hok-primary-400))] [--border:hsl(var(--hok-primary-400))] [--borderPressed:hsl(var(--hok-primary-600))]",
      secondary:
        "[--borderUnselected:hsl(var(--hok-secondary-400))] [--borderUnselectedPressed:hsl(var(--hok-secondary-500))] [--border:hsl(var(--hok-secondary-500))] [--borderPressed:hsl(var(--hok-secondary-700))]",
      success:
        "[--borderUnselected:hsl(var(--hok-success-400))] [--borderUnselectedPressed:hsl(var(--hok-success-500))] [--border:hsl(var(--hok-success-500))] [--borderPressed:hsl(var(--hok-success-600))]",
      danger:
        "[--borderUnselected:hsl(var(--hok-danger-400))] [--borderUnselectedPressed:hsl(var(--hok-danger-500))] [--border:hsl(var(--hok-danger-500))] [--borderPressed:hsl(var(--hok-danger-600))]",
      warning:
        "[--borderUnselected:hsl(var(--hok-warning-400))] [--borderUnselectedPressed:hsl(var(--hok-warning-500))] [--border:hsl(var(--hok-warning-500))] [--borderPressed:hsl(var(--hok-warning-600))]",
      info: "[--borderUnselected:hsl(var(--hok-info-200))] [--borderUnselectedPressed:hsl(var(--hok-info-400))] [--border:hsl(var(--hok-info-400))] [--borderPressed:hsl(var(--hok-info-500))]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

interface RadioProp extends Omit<RadioProps, "children"> {
  children: React.ReactNode;
}

export function Radio(props: RadioProp) {
  const groupContext = useContext(GroupContext);
  return (
    <RACRadio
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex gap-2 items-center group text-gray-800 disabled:text-gray-300 forced-colors:disabled:text-[GrayText] text-sm transition",
      )}
    >
      {(renderProps) => (
        <div className="flex flex-row items-start gap-2">
          <div
            className={RadioBtnStyles({
              ...renderProps,
              color: groupContext.color,
            })}
          />
          {props.children}
        </div>
      )}
    </RACRadio>
  );
}
