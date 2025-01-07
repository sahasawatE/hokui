import { useMemo, useRef, useState } from "react";
import { useTabList } from "react-aria";
import { twMerge } from "tailwind-merge";
import { Item, useTabListState, type Node } from "react-stately";
import { motion } from "framer-motion";
import { StepContext } from "./context";
import { StepIndicator } from "./StepIndicator";
import { StepContent } from "./StepContent";
import type { SteppersProps, StepsObjectOption } from "../props";

export function Steppers<T extends StepsObjectOption>(props: SteppersProps<T>) {
  const [stepItems] = useState(props.steps.map((e, i) => ({ ...e, id: i })));
  const [stepCount, setStepCount] = useState<number[]>(
    Array(props.steps.length).fill(0),
  );

  const stepState = useTabListState({
    ...props,
    items: stepItems,
    selectedKey: props.selectedStep,
    children: (item) => (
      <Item key={item.key} title={item.title}>
        {item.title} {item.id}
      </Item>
    ),
    onSelectionChange: (key) => {
      if (props.onStepChange) {
        props.onStepChange(String(key));
      }
    },
  });

  const steppersSteps = useRef<HTMLDivElement | null>(null);

  const { tabListProps } = useTabList(props, stepState, steppersSteps);

  const lineWidth = useMemo(() => {
    const stepObj = stepState.selectedItem;
    if (stepObj && stepObj.value) {
      const {
        value: { id },
      } = stepObj;

      const containerWidth = steppersSteps.current?.offsetWidth ?? 0;
      const remainWidth = containerWidth - stepCount.reduce((a, b) => a + b);
      const lineCount = stepCount.length - 1;
      const lineAvg = remainWidth / lineCount;

      let result = "0%";
      if (id === 0) {
        result = `${stepCount[id]}px`;
      } else if (id === lineCount) {
        result = "100%";
      } else {
        const tempStepCount = stepCount.filter((_e, i) => i <= id);
        result = `${lineAvg * id + tempStepCount.reduce((a, b) => a + b)}px`;
      }

      return result;
    }

    return "0%";
  }, [stepCount, stepState.selectedItem]);

  const renderNameResponsive = useMemo(() => {
    if (stepState.selectedKey) {
      const result = stepState.collection.getItem(stepState.selectedKey);
      let resultNext: Node<
        T & {
          id: number;
        }
      > | null = null;

      if (result && result.nextKey) {
        resultNext = stepState.collection.getItem(result.nextKey);
      }

      return { ...result, next: resultNext };
    }
    return null;
  }, [stepState.collection, stepState.selectedKey]);

  return (
    <div className={twMerge("flex flex-col gap-2", props.className)}>
      <StepContext.Provider value={{ color: props.color }}>
        <div
          ref={steppersSteps}
          {...tabListProps}
          className="flex flex-row justify-between relative pt-10 lg:p-0"
        >
          {Array.from(stepState.collection).map((item, i) => (
            <div key={item.key} className="z-[3] bg-background">
              <StepIndicator
                hideStep={props.hideStep}
                item={item}
                state={stepState}
                elmWidth={(w) =>
                  setStepCount((prev) => {
                    prev[i] = w;

                    return prev;
                  })
                }
              />
            </div>
          ))}
          <motion.div
            animate={{
              width: lineWidth,
            }}
            style={{
              backgroundColor: `hsl(var(--hok-${props.color ?? "default"}))`,
            }}
            className="absolute h-[2px] top-[calc(50%+1.15rem)] lg:top-1/2 translate-y-1/2 z-[2]"
          ></motion.div>
          <div className="absolute h-[2px] w-full bg-default-200 top-[calc(50%+1.15rem)] lg:top-1/2 translate-y-1/2 z-[1]"></div>
          {renderNameResponsive && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 lg:hidden w-full text-sm">
              <div className="flex flex-row items-center justify-between gap-6">
                <span className="text-start text-nowrap text-ellipsis overflow-hidden">
                  {renderNameResponsive.rendered}
                </span>
                <span className="text-gray-400 text-end text-nowrap text-ellipsis overflow-hidden">
                  {renderNameResponsive.next
                    ? `${props.nextText ?? "Next"}: ${
                        renderNameResponsive.next.rendered
                      }`
                    : props.doneText ?? "Done"}
                </span>
              </div>
            </div>
          )}
        </div>
      </StepContext.Provider>

      <StepContent key={stepState.selectedItem?.key} state={stepState}>
        {(renderProps) =>
          props.children({
            canBack: renderProps.canBack,
            canNext: renderProps.canNext,
            key: renderProps.key,
            onBack: renderProps.onBack,
            onNext: renderProps.onNext,
          })
        }
      </StepContent>
    </div>
  );
}
