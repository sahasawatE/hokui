import React from "react";
import { useAlert } from "../ComponentProvider/HokUIProvider";

export type WithAlertProps = {
  alert: ReturnType<typeof alert>;
};

export function WithAlert<P extends WithAlertProps = WithAlertProps>(
  Component: React.ComponentType<P>,
) {
  function ComponentWithAlertHook(props: Omit<P, keyof WithAlertProps>) {
    const alert = useAlert();

    return <Component {...(props as P)} alert={alert} />;
  }

  return ComponentWithAlertHook;
}
