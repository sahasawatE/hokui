import React from "react";
import { useListData, type ListData } from "react-stately";

export type WithListDataProps<T extends object> = {
  listData: ListData<T>;
};

export function WithListData<
  T extends { [key: string]: any; key: string },
  P extends WithListDataProps<T> = WithListDataProps<T>,
>(Component: React.ComponentType<P>) {
  function ComponentWithListDataHook(
    props: Omit<P, keyof WithListDataProps<T>>,
  ) {
    const list = useListData<T>({
      initialItems: [],
    });

    return <Component {...(props as P)} listData={list} />;
  }

  return ComponentWithListDataHook;
}
