import { Button, ButtonProps } from "react-aria-components";

export function StepperButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className="px-0.5 cursor-default text-default pressed:bg-default-100 group-disabled:text-default-200 forced-colors:group-disabled:text-default"
    />
  );
}
