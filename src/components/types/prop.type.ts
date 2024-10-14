import type { ReactNode } from "react";
import type { DateValue } from "react-aria";

type Color =
  | "primary"
  | "secondary"
  | "default"
  | "success"
  | "danger"
  | "warning"
  | "info";

type SelectionMode = "multiple" | "single" | "none";

type Alignment = "start" | "center" | "end";

type FontWeight = "thin" | "light" | "medium" | "semibold" | "bold";

type FontSize = "xs" | "sm" | "base" | "lg" | "xl";

type ButtonVariant = "default" | "bordered" | "flat" | "text" | "icon";

type InputVariant = "bordered" | "underlined" | "flat";

type LinkVariant = "text" | "flat";

type Rounded = "none" | "sm" | "md" | "lg" | "xl" | "full";

type Size = "sm" | "md" | "lg" | "xl";

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

type BadgeVariant = "default" | "bordered" | "flat";

type BadgeRounded = "default" | "full";

type TagVariant = BadgeVariant;

type TagRounded = BadgeRounded;

type TableVariant = "bordered" | "flat" | "float";

type TableRounded = "none" | "sm" | "md" | "lg" | "xl";

type Shadow = "none" | "sm" | "md" | "lg";

type CardVariant = BadgeVariant;

type CardRounded = TableRounded;

type DataTableHeaderProps = {
  key: string;
  title: string;
  isRowHeader?: boolean;
  decoration?: {
    width?: string | number;
    fontWeight?: FontWeight;
    fontSize?: FontSize;
    fontColor?: Color;
    align?: Alignment;
  };
}[];

type DataTablePaginationProps = {
  page: number;
  perPage: number;
  total: number;
};

type TableCellCallback<T> = {
  index: number;
  key: string;
  value: any;
  columnValue: T;
};

type DataTableProps<T extends { [key: string]: any; key: string }> = {
  header: DataTableHeaderProps;
  items: T[];
  paging: DataTablePaginationProps;
  variant?: TableVariant;
  color?: Color;
  hiehgt?: number | string;
  width?: number | string;
  rounded?: Rounded;
  children?: (cell: TableCellCallback<T>) => ReactNode;
};

type CalendarEventDetail = { type: string; details: string };

type CalendarEventColor = {
  type: string;
  color: string;
  textColor?: string;
}[];

type CalendarEvent = {
  day: string;
  events: CalendarEventDetail[];
};

type TabsVariant = "default" | "underlined" | "flat";

type DialogVariant = "info" | "danger" | "warning" | "success";

export type {
  DateValue,
  Color,
  ButtonVariant,
  InputVariant,
  Rounded,
  Size,
  Position,
  BadgeVariant,
  BadgeRounded,
  TagVariant,
  TagRounded,
  LinkVariant,
  TableVariant,
  DataTableProps,
  FontWeight,
  FontSize,
  Alignment,
  SelectionMode,
  TableRounded,
  TableCellCallback,
  Shadow,
  CardVariant,
  CardRounded,
  CalendarEvent,
  CalendarEventDetail,
  CalendarEventColor,
  TabsVariant,
  DialogVariant,
};
