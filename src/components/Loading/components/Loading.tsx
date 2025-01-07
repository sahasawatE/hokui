import LoadingLine from "./LoadingLine";
import LoadingCircle from "./LoadingCircle";
import type { LoadingProps } from "../props";

export function Loading(props: LoadingProps) {
  if (props.line) {
    return <LoadingLine {...props} />;
  }
  return <LoadingCircle {...props} />;
}
