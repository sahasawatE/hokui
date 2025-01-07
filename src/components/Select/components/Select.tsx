import { useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { Select as AriaSelect, SelectValue } from "react-aria-components";
import { FieldGroup } from "../../Field";
import { ListBox } from "../../ListBox";
import { Popover } from "../../Popover";
import { Button } from "../../Button";
import { SelectItem } from "./SelectItem";
import { selectStyles, textStyle } from "../style";
import type { SelectProps } from "../props";
import { WithLabel } from "../../../helper/WithLable";

export function Select<
  T extends { [k: string]: any; key: string; title: string },
>({
  label,
  description,
  errorMessage,
  children,
  items,
  isRequired,
  ...props
}: SelectProps<T>) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <div ref={triggerRef}>
      <AriaSelect
        {...props}
        onSelectionChange={(e) => {
          const i = items as T[];
          const f = i.findLast((j) => j.key === e);
          if (props.onSelect && f) {
            props.onSelect(f);
          }

          if (props.onSelectionChange) {
            props.onSelectionChange(f?.key ?? null);
          }

          setOpen(false);
        }}
        className={(renderProps) => selectStyles({ ...renderProps })}
      >
        <WithLabel
          label={label}
          isRequired={isRequired}
          description={description}
          errorMessage={errorMessage}
        >
          <FieldGroup
            isDisabled={props.isDisabled}
            isInvalid={props.isInvalid}
            color={props.color}
            variant={props.variant}
            rounded={props.rounded}
          >
            {(fieldProps) => (
              <div className="flex flex-row w-full justify-between px-2 gap-4">
                <Popover
                  isOpen={open}
                  triggerRef={triggerRef}
                  elementType={props.elementType}
                  activator={
                    <div onClick={() => setOpen((prev) => !prev)}>
                      <SelectValue
                        className={textStyle({
                          isDisabled: props.isDisabled,
                        })}
                      />
                    </div>
                  }
                  className="min-w-[--trigger-width]"
                  onOpenChange={setOpen}
                >
                  <ListBox
                    items={items}
                    color={props.color}
                    selectionMode="single"
                    className="border-0 max-h-60 overflow-y-scroll overflow-x-visible no-scrollbar"
                  >
                    {children
                      ? children
                      : (e) => <SelectItem key={e.key}>{e.title}</SelectItem>}
                  </ListBox>
                </Popover>
                <div className="flex flex-row items-center gap-1">
                  {!!props.onClear && (
                    <>
                      {(fieldProps.isFocusWithin || props.selectedKey) && (
                        <Button
                          variant="icon"
                          size="sm"
                          rounded="full"
                          color={props.color}
                          isDisabled={props.isDisabled}
                          onPress={() => {
                            const k =
                              props.defaultSelectedKey !== undefined
                                ? String(props.defaultSelectedKey)
                                : null;
                            props.onClear!(k);
                          }}
                        >
                          <X
                            size={14}
                            style={{ color: `hsl(var(--hok-${props.color}))` }}
                          />
                        </Button>
                      )}
                    </>
                  )}
                  <ChevronDown
                    aria-hidden
                    className="w-4 h-4 text-gray-600 group-disabled:text-gray-200 cursor-pointer"
                    onClick={() => {
                      if (!props.isDisabled) {
                        setOpen((prev) => !prev);
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </FieldGroup>
        </WithLabel>
      </AriaSelect>
    </div>
  );
}
