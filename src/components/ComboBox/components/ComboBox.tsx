import { ChevronDown, X } from "lucide-react";
import { ComboBox as AriaComboBox } from "react-aria-components";
import { FieldGroup, Input } from "../../Field";
import { ListBox } from "../../ListBox";
import { Button } from "../../Button";
import { Popover } from "../../Popover";
import { composeTailwindRenderProps } from "../../utils";
import type { ComboBoxProps } from "../props";
import { ComboBoxItem } from "./item";
import { WithLabel } from "../../../helper/WithLable";

export function ComboBox<
  T extends { [k: string]: any; key: string; title: string },
>({
  label,
  description,
  errorMessage,
  isRequired,
  children,
  items,
  ...props
}: ComboBoxProps<T>) {
  return (
    <AriaComboBox
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-col gap-1",
      )}
      onSelectionChange={(e) => {
        const i = items as T[];
        const f = i.findLast((j) => j.key === e);

        if (props.onSelect && f) {
          props.onSelect(f);
        }

        if (props.onSelectionChange) {
          props.onSelectionChange(f?.key ?? null);
        }
      }}
    >
      <div>
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
            {(renderProps) => (
              <>
                {props.startContent && (
                  <div className="text-gray-400 p-1 select-none">
                    {props.startContent}
                  </div>
                )}
                <Input name={props.name} placeholder={props.placeholder} />
                <div className="flex flex-row gap-1 items-center">
                  {!!props.onClear && (
                    <>
                      {renderProps.isFocusWithin && (
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
                  <Popover
                    elementType={props.elementType}
                    activator={
                      <div className="pr-2">
                        <ChevronDown
                          aria-hidden
                          className="w-4 h-4 text-gray-600 group-disabled:text-gray-200 cursor-pointer"
                        />
                      </div>
                    }
                    className="min-w-[--trigger-width]"
                  >
                    <ListBox
                      items={items}
                      color={props.color}
                      selectionMode="single"
                      className="border-0 max-h-60 overflow-y-scroll overflow-x-visible no-scrollbar"
                    >
                      {children
                        ? children
                        : (e) => (
                            <ComboBoxItem key={e.key}>{e.title}</ComboBoxItem>
                          )}
                    </ListBox>
                  </Popover>
                </div>
              </>
            )}
          </FieldGroup>
        </WithLabel>
      </div>
    </AriaComboBox>
  );
}
