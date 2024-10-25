import {
  createContext,
  useCallback,
  useContext,
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
    "items" | "children" | "onSelectionChange" | "selectedKey"
  > {
  steps: T[];
  children: (childProps: StepsChildrenProps<T>) => ReactNode;
  color?: Color;
  showStep?: boolean;
  selectedStep?: string;
  onStepChange?: (key: string) => void;
  className?: string;
}

export function Steppers<T extends StepsObjectOption>(props: SteppersProps<T>) {
  const [stepItems] = useState(props.steps.map((e, i) => ({ ...e, id: i })));

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

      const percent = Math.floor((id * 100) / (stepItems.length - 1));

      return `${percent}%`;
    }

    return "0%";
  }, [stepItems.length, stepState.selectedItem]);

  return (
    <div className={twMerge("flex flex-col gap-2", props.className)}>
      <StepContext.Provider value={{ color: props.color }}>
        <div
          ref={steppersSteps}
          {...tabListProps}
          className="flex flex-row justify-between gap-6 relative"
        >
          {Array.from(stepState.collection).map((item) => (
            <div
              key={item.key}
              className="flex flex-row gap-2 items-center z-[3]"
            >
              <StepIndicator
                showStep={props.showStep}
                item={item}
                state={stepState}
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
            className="absolute h-[2px] top-1/2 translate-y-1/2 z-[2]"
          ></motion.div>
          <div className="absolute h-[2px] w-full bg-default-200 top-1/2 translate-y-1/2 z-[1]"></div>
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
      default: "[--c:hsl(var(--hok-default))]",
      primary: "[--c:hsl(var(--hok-primary))]",
      secondary: "[--c:hsl(var(--hok-secondary))]",
      success: "[--c:hsl(var(--hok-success))]",
      danger: "[--c:hsl(var(--hok-danger))]",
      warning: "[--c:hsl(var(--hok-warning))]",
      info: "[--c:hsl(var(--hok-info))]",
    },
  },
  defaultVariants: {
    isSelected: false,
    color: "default",
  },
});

const StepIndicatorStepStyles = tv({
  base: "border-2 h-8 w-8 flex flex-row justify-center items-center rounded-sm data-[selected=true]:text-white data-[selected=true]:border-none data-[selected=true]:bg-[--c]",
  variants: {
    color: StepIndicatorStyles.variants.color,
  },
  defaultVariants: {
    color: "default",
  },
});

function StepIndicator<T extends StepsObjectOption & { id: number }>({
  item,
  state,
  showStep,
}: {
  item: Node<T>;
  state: TabListState<T>;
  showStep?: boolean;
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

  return (
    <div
      ref={stepRef}
      {...tabProps}
      className={StepIndicatorStyles({
        isSelected: state.selectedKey === key,
        color: ctx.color,
      })}
    >
      {value ? (
        <div className="bg-background h-fit w-fit px-2 flex flex-row gap-2 items-center">
          {showStep && (
            <div
              data-selected={state.selectedKey === key || isPassed}
              className={StepIndicatorStepStyles({ color: ctx.color })}
            >
              {isPassed ? <Check /> : value.id ? value.id + 1 : 1}
            </div>
          )}
          {value.startContent}
          {rendered}
          {value.endContent}
        </div>
      ) : (
        <div className="bg-background h-fit w-fit px-2 flex flex-row gap-2 items-center">
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
