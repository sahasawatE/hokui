import React from "react";
import {
  DropZone as AriaDropZone,
  FileTrigger,
  Text,
  type DropZoneProps as AriaDropZoneProps,
  type ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import type { Color, Rounded } from "../types/prop.type";
import { Button } from "../Button";
import { FilePlus, X } from "lucide-react";
import { Description, FieldError, Label } from "../Field";

const DropFileStyles = tv({
  base: "border-2 transition-all p-2",
  variants: {
    isDisabled: {
      true: "!border-default-200 !bg-default-100 pointer-event-none",
    },
    isInvalid: {
      true: "!border-danger-300 !bg-danger-100",
    },
    isDropEnter: {
      false: "border-dashed",
    },
    color: {
      default: "border-default",
      primary: "border-primary",
      secondary: "border-secondary",
      success: "border-success",
      danger: "border-danger",
      warning: "border-warning",
      info: "border-info",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    color: "default",
    rounded: "md",
  },
});

const FileStyles = tv({
  base: "p-2 flex flex-row items-center justify-between gap-2",
  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-none",
      md: "rounded-sm",
      lg: "rounded",
      xl: "rounded-lg",
      full: "rounded-full",
    },
    color: {
      default: "bg-default-200",
      primary: "bg-primary-200",
      secondary: "bg-secondary-200",
      success: "bg-success-200",
      danger: "bg-danger-200",
      warning: "bg-warning-200",
      info: "bg-info-200",
    },
  },
  defaultVariants: {
    rounded: "md",
    color: "default",
  },
});

export interface DropFileProps
  extends Omit<
    AriaDropZoneProps,
    | "getDropOperation"
    | "onDropEnter"
    | "onDropExit"
    | "onDrop"
    | "onDropActivate"
    | "onDropMove"
    | "onHoverChange"
    | "onHoverEnd"
    | "onHoverStart"
  > {
  accept?: string[];
  placeholder?: string;
  color?: Color;
  rounded?: Rounded;
  maxLength?: number;
  renderPreview?: (file: File) => React.ReactNode;
  value: File[];
  onChange?: (files: File[]) => void;
  showDeleteButton?: boolean;
  onClickDelete?: (file: File, index: number) => void;
  isInvalid?: boolean;
  errorMessage?: string | ((validation: ValidationResult) => string);
  isRequired?: boolean;
  label?: string;
  description?: string;
  hideAddFileButton?: boolean;
  addFileButtonText?: React.ReactNode;
}

const defaultAccept = [
  "image/png",
  "image/jpg",
  "image/PNG",
  "image/JPG",
  "image/jpeg",
];

export function DropFile(props: DropFileProps) {
  const [dropped, setDropped] = React.useState(false);
  const [dropEnter, setDropEnter] = React.useState(false);

  return (
    <div className="flex flex-col gap-1 items-start">
      {props.label && (
        <Label>
          {props.label}
          {props.isRequired && <span className="text-danger">*</span>}
        </Label>
      )}
      <AriaDropZone
        {...props}
        className={(renderProps) =>
          DropFileStyles({
            ...renderProps,
            isDropEnter: dropEnter,
            color: props.color,
            rounded: props.rounded,
            isInvalid: props.isInvalid,
          })
        }
        getDropOperation={(types) => {
          const accept = props.accept
            ? props.accept.map((e) => types.has(e))
            : defaultAccept.map((e) => types.has(e));

          return accept.includes(true) ? "copy" : "cancel";
        }}
        onDropEnter={() => setDropEnter(true)}
        onDropExit={() => setDropEnter(false)}
        onDrop={async ({ items }) => {
          const file = (await Promise.all(
            items.map((e: any) => e.getFile()),
          )) as File[];
          setDropped(true);
          if (props.onChange) {
            if (props.maxLength && file.length <= props.maxLength) {
              props.onChange(file);
            }
          }
        }}
      >
        {!props.hideAddFileButton &&
          (props.value.length < (props.maxLength ?? props.value.length) ||
            !props.maxLength) && (
            <div className="w-full pb-2 justify-center flex flex-row">
              <FileTrigger
                allowsMultiple={props.maxLength !== 1}
                acceptedFileTypes={props.accept ?? defaultAccept}
                onSelect={(e) => {
                  if (e && props.onChange) {
                    const files = Array.from(e);
                    props.onChange(files);
                    setDropped(true);
                  }
                }}
              >
                <Button
                  variant={props.addFileButtonText ? "default" : "icon"}
                  rounded="sm"
                >
                  {props.addFileButtonText ?? <FilePlus size={20} />}
                </Button>
              </FileTrigger>
            </div>
          )}
        {dropped || props.value.length > 0 ? (
          <div className="flex flex-col gap-2">
            {props.value.map((f, i) => (
              <div
                key={i}
                className={FileStyles({
                  rounded: props.rounded,
                  color: props.color,
                })}
              >
                <div>
                  {props.renderPreview ? props.renderPreview(f) : f.name}
                </div>
                {props.showDeleteButton && (
                  <Button
                    variant="icon"
                    size="sm"
                    rounded="sm"
                    color="danger"
                    onPress={() => {
                      if (props.onClickDelete) {
                        props.onClickDelete(f, i);
                        if (!props.value.length) {
                          setDropped(false);
                        }
                      }
                    }}
                  >
                    <X size={18} className="text-danger" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <Text
            slot="label"
            className="text-sm text-default select-none cursor-pointer"
          >
            {props.placeholder ?? "Drop files here"}
          </Text>
        )}
      </AriaDropZone>
      {props.description && <Description>{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </div>
  );
}
