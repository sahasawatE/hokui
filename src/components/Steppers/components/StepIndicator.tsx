import { useContext, useEffect, useMemo, useRef } from "react";
import { useTab } from "react-aria";
import type { Node, TabListState } from "react-stately";
import { Check } from "lucide-react";
import {
  StepIndicatorDotStyles,
  StepIndicatorStepStyles,
  StepIndicatorStyles,
} from "../style";
import { StepContext } from "./context";
import type { StepsObjectOption } from "../props";

export function StepIndicator<T extends StepsObjectOption & { id: number }>({
  item,
  state,
  hideStep,
  elmWidth,
}: {
  item: Node<T>;
  state: TabListState<T>;
  hideStep?: boolean;
  elmWidth?: (width: number) => void;
}) {
  const ctx = useContext(StepContext);

  const { key, rendered, value } = item;
  const stepRef = useRef<HTMLDivElement | null>(null);
  const { tabProps } = useTab({ key }, state, stepRef);

  const isPassed = useMemo(() => {
    const state_id = state.selectedItem?.value?.id ?? 0;
    const value_id = value?.id ?? 0;

    return value_id < state_id;
  }, [state.selectedItem?.value?.id, value?.id]);

  const isSelected = useMemo(() => {
    return state.selectedKey === key;
  }, [state.selectedKey, key]);

  useEffect(() => {
    if (elmWidth) {
      elmWidth(stepRef.current?.offsetWidth ?? 0);
    }
  }, [elmWidth]);

  return (
    <div
      ref={stepRef}
      {...tabProps}
      className={StepIndicatorStyles({
        isSelected,
        color: ctx.color,
      })}
    >
      {value ? (
        <div className="h-fit w-fit flex flex-row items-center gap-2 px-2">
          {hideStep ? (
            <div
              className={StepIndicatorDotStyles({
                color: ctx.color,
                isPassed,
                isSelected,
              })}
            />
          ) : (
            <div
              className={StepIndicatorStepStyles({
                color: ctx.color,
                selected: isSelected || isPassed,
              })}
            >
              {isPassed ? <Check /> : value.id ? value.id + 1 : 1}
            </div>
          )}
          <div className="flex-row gap-1 items-center w-0 lg:w-fit hidden lg:flex absolute lg:relative">
            {value.startContent}
            {rendered}
            {value.endContent}
          </div>
        </div>
      ) : (
        <div className="flex-row items-center w-0 lg:w-fit hidden lg:flex absolute lg:relative">
          {rendered}
        </div>
      )}
    </div>
  );
}
