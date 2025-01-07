import { SearchIcon, XIcon } from "lucide-react";
import { SearchField as AriaSearchField } from "react-aria-components";
import { Button } from "../../Button";
import { FieldGroup, Input } from "../../Field";
import { composeTailwindRenderProps } from "../../utils";
import type { SearchFieldProps } from "../props";
import { WithLabel } from "../../../helper/WithLable";

export function SearchField({
  label,
  description,
  errorMessage,
  ...props
}: SearchFieldProps) {
  return (
    <AriaSearchField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-col gap-1 min-w-[40px]",
      )}
    >
      <WithLabel
        label={label}
        description={description}
        errorMessage={errorMessage}
      >
        <FieldGroup
          variant={props.variant}
          rounded={props.rounded}
          color={props.color}
        >
          <SearchIcon
            aria-hidden
            className="w-4 h-4 ml-2 text-primary forced-colors:text-[ButtonText] group-disabled:text-gray-200 forced-colors:group-disabled:text-[GrayText]"
          />
          <Input
            name={props.name}
            placeholder={props.placeholder}
            className="[&::-webkit-search-cancel-button]:hidden"
          />
          <Button variant="icon" className="mr-1 w-6 group-empty:invisible">
            <XIcon aria-hidden className="w-4 h-4" />
          </Button>
        </FieldGroup>
      </WithLabel>
    </AriaSearchField>
  );
}
