import { useCallback, useRef, type ReactNode } from "react";
import { useTabPanel } from "react-aria";
import type { TabListState } from "react-stately";
import type { StepsChildrenProps, StepsObjectOption } from "../props";

export function StepContent<T extends StepsObjectOption & { id: number }>({
  state,
  children,
  ...props
}: {
  state: TabListState<T>;
  children: (childProps: StepsChildrenProps<T>) => ReactNode;
}) {
  const stepContentRef = useRef<HTMLDivElement | null>(null);
  const { tabPanelProps } = useTabPanel(props, state, stepContentRef);

  const disabledBtn = useCallback(
    (isBack: boolean) => {
      const id = state.selectedItem?.value?.id ?? 0;

      if (isBack) {
        return id <= 0;
      }
      return id >= state.collection.size - 1;
    },
    [state.collection.size, state.selectedItem?.value?.id],
  );

  return (
    <div ref={stepContentRef} {...tabPanelProps}>
      {children({
        canBack: disabledBtn(true),
        canNext: disabledBtn(false),
        key: state.selectedKey as string,
        onBack: (target) => {
          if (!target) {
            const k = state.selectedItem?.prevKey ?? null;
            state.setSelectedKey(k);
          } else {
            state.setSelectedKey(target);
          }
        },
        onNext: (target) => {
          if (!target) {
            const k = state.selectedItem?.nextKey ?? null;
            state.setSelectedKey(k);
          } else {
            state.setSelectedKey(target);
          }
        },
      })}
    </div>
  );
}
