import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  useTab,
  useTabList,
  useTabPanel,
  type AriaTabListOptions,
} from "react-aria";
import { twMerge } from "tailwind-merge";
import {
  Item,
  useTabListState,
  type Node,
  type TabListState,
} from "react-stately";
import { tv } from "tailwind-variants";
import { focusRing } from "../utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { Color } from "../types/prop.type";

const StepContext = createContext<{ color?: Color }>({
  color: "default",
});

export type StepsObjectOption = {
  key: string;
  title: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  [key: string]: any;
};

type StepsChildrenProps<T extends StepsObjectOption> = {
  key: T["key"];
  canBack: boolean;
  canNext: boolean;
  onBack: (targetStep?: T["key"]) => void;
  onNext: (targetStep?: T["key"]) => void;
};

export interface SteppersProps<T extends StepsObjectOption>
  extends Omit<
    AriaTabListOptions<T>,
    "items" | "children" | "onSelectionChange" | "selectedKey" | "orientation"
  > {
  steps: T[];
  children: (childProps: StepsChildrenProps<T>) => ReactNode;
  color?: Color;
  hideStep?: boolean;
  selectedStep?: string;
  onStepChange?: (key: string) => void;
  className?: string;
  doneText?: string;
  nextText?: string;
}

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

const StepIndicatorStyles = tv({
  extend: focusRing,
  base: "select-none flex flex-row items-center pointer-events-none transition-all",
  variants: {
    isSelected: {
      true: "text-[--c]",
      false: "text-black",
    },
    color: {
      default:
        "[--c:hsl(var(--hok-default))] [--c2:hsl(var(--hok-default-300))]",
      primary:
        "[--c:hsl(var(--hok-primary))] [--c2:hsl(var(--hok-primary-300))]",
      secondary:
        "[--c:hsl(var(--hok-secondary))] [--c2:hsl(var(--hok-secondary-300))]",
      success:
        "[--c:hsl(var(--hok-success))] [--c2:hsl(var(--hok-success-300))]",
      danger: "[--c:hsl(var(--hok-danger))] [--c2:hsl(var(--hok-danger-300))]",
      warning:
        "[--c:hsl(var(--hok-warning))] [--c2:hsl(var(--hok-warning-300))]",
      info: "[--c:hsl(var(--hok-info))] [--c2:hsl(var(--hok-info-300))]",
    },
  },
  defaultVariants: {
    isSelected: false,
    color: "default",
  },
});

const StepIndicatorStepStyles = tv({
  base: "h-8 w-8 flex flex-row justify-center items-center rounded-sm",
  variants: {
    color: StepIndicatorStyles.variants.color,
    selected: {
      true: "text-white border-none bg-[--c]",
      false: "border-2",
    },
  },
  defaultVariants: {
    color: "default",
    selected: false,
  },
});

const StepIndicatorDotStyles = tv({
  base: "h-4 w-4 rounded-full lg:hidden border-none",
  variants: {
    color: StepIndicatorStyles.variants.color,
    isPassed: {
      true: "bg-[--c2]",
      false: "bg-gray-300",
    },
    isSelected: {
      true: "bg-[--c]",
      false: "",
    },
  },
  defaultVariants: {
    color: "default",
    isPassed: false,
    isSelected: false,
  },
});

function StepIndicator<T extends StepsObjectOption & { id: number }>({
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

function StepContent<T extends StepsObjectOption & { id: number }>({
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
