import {
  type FormProps as RACFormProps,
  Form as RACForm,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export type FormProps = RACFormProps;

export function Form(props: FormProps) {
  return (
    <RACForm
      {...props}
      className={twMerge("flex flex-col gap-4", props.className)}
    />
  );
}
