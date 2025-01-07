import { Form as RACForm } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import type { FormProps } from "../props";

export function Form(props: FormProps) {
  return (
    <RACForm
      {...props}
      className={twMerge("flex flex-col gap-4", props.className)}
    />
  );
}
