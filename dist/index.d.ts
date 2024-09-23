import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode } from 'react';
import { DialogProps, BreadcrumbsProps, ButtonProps as ButtonProps$1, DateValue, CalendarProps as CalendarProps$1, CheckboxGroupProps as CheckboxGroupProps$1, ValidationResult, CheckboxProps, ListBoxItemProps, ListBoxProps as ListBoxProps$1, SectionProps, ComboBoxProps as ComboBoxProps$1, DateInputProps, DateFieldProps as DateFieldProps$1, DatePickerProps as DatePickerProps$1, DateRangePickerProps as DateRangePickerProps$1, LabelProps, TextProps, FieldErrorProps, GroupProps, InputProps, FormProps, GridListProps, GridListItemProps, LinkProps as LinkProps$1, PopoverProps as PopoverProps$1, MenuItemProps, SeparatorProps, MenuProps as MenuProps$1, MeterProps as MeterProps$1, ModalOverlayProps, NumberFieldProps as NumberFieldProps$1, ProgressBarProps as ProgressBarProps$1, RadioProps, RadioGroupProps as RadioGroupProps$1, RangeCalendarProps as RangeCalendarProps$1, SearchFieldProps as SearchFieldProps$1, SelectProps as SelectProps$1, SliderProps as SliderProps$1, SwitchProps as SwitchProps$1, TableProps, TabsProps, TabListProps, TabProps, TabPanelProps, TagProps, TagGroupProps as TagGroupProps$1, TagListProps, TextFieldProps as TextFieldProps$1, TimeValue, TimeFieldProps as TimeFieldProps$1, ToggleButtonProps, TooltipProps as TooltipProps$1 } from 'react-aria-components';
import { ListData } from 'react-stately';
import * as tailwind_variants from 'tailwind-variants';
import * as tailwind_variants_dist_config from 'tailwind-variants/dist/config';

interface AlertDialogProps extends Omit<DialogProps, "children"> {
    title: string;
    children: ReactNode;
    actionLabel: string;
    cancelLabel?: string;
    onAction?: () => void;
}
declare function AlertDialog({ title, cancelLabel, actionLabel, onAction, children, ...props }: AlertDialogProps): react_jsx_runtime.JSX.Element;

type Color = "primary" | "secondary" | "default" | "success" | "danger" | "warning" | "info";
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
type ChipVariant = BadgeVariant;
type ChipRounded = BadgeRounded;
type TableVariant = "bordered" | "flat" | "float";
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
type DataTableProps<T extends {
    [key: string]: any;
    key: string;
    title: string;
}> = {
    header: DataTableHeaderProps;
    items: ListData<T>;
    paging: DataTablePaginationProps;
    variant?: TableVariant;
    color?: Color;
    hiehgt?: number | string;
    width?: number | string;
    rounded?: Rounded;
    children?: (cell: {
        index: number;
        key: string;
        value: any;
        columnValue: T;
    }) => ReactNode;
};

type BadgeProps = {
    color?: Color;
    content?: string;
    children?: React.ReactNode;
    position?: Position;
    variant?: BadgeVariant;
    rounded?: BadgeRounded;
    className?: string;
};
declare function Badge(props: BadgeProps): react_jsx_runtime.JSX.Element;

interface BcsProps<T> extends BreadcrumbsProps<T> {
    menus: {
        title: string;
        to?: string;
    }[];
}
declare function Breadcrumbs<T extends object>(props: BcsProps<T>): react_jsx_runtime.JSX.Element;

interface ButtonProps extends ButtonProps$1 {
    variant?: ButtonVariant;
    color?: Color;
    rounded?: Rounded;
    isLoading?: boolean;
    size?: Size;
}
declare function Button(props: ButtonProps): react_jsx_runtime.JSX.Element;

type customProps$6 = {
    color?: Color;
};
interface CalendarProps<T extends DateValue> extends Omit<CalendarProps$1<T>, "visibleDuration">, customProps$6 {
    errorMessage?: string;
}
declare function Calendar<T extends DateValue>({ errorMessage, ...props }: CalendarProps<T>): react_jsx_runtime.JSX.Element;
declare function CalendarHeader(): react_jsx_runtime.JSX.Element;
declare function CalendarGridHeader(): react_jsx_runtime.JSX.Element;

interface CheckboxGroupProps extends Omit<CheckboxGroupProps$1, "children"> {
    label?: string;
    children?: ReactNode;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
interface cbProps extends Omit<CheckboxProps, "children"> {
    children?: ReactNode;
    color?: Color;
}
declare function CheckboxGroup(props: CheckboxGroupProps): react_jsx_runtime.JSX.Element;
declare function Checkbox(props: cbProps): react_jsx_runtime.JSX.Element;

type CustomProps$7 = {
    color?: Color;
};
interface ListBoxProps<T> extends Omit<ListBoxProps$1<T>, "layout" | "orientation" | "children">, CustomProps$7 {
    children?: (item: T) => React.ReactNode;
    onSelect?: (value: string[]) => void;
}
declare function ListBox<T extends {
    [k: string]: any;
    key: string;
    title: string;
}>({ children, ...props }: ListBoxProps<T>): react_jsx_runtime.JSX.Element;
declare function ListBoxItem(props: ListBoxItemProps): react_jsx_runtime.JSX.Element;
declare function DropdownItem(props: ListBoxItemProps): react_jsx_runtime.JSX.Element;
interface DropdownSectionProps<T> extends SectionProps<T> {
    title?: string;
}
declare function DropdownSection<T extends object>(props: DropdownSectionProps<T>): react_jsx_runtime.JSX.Element;

interface ComboBoxProps<T extends {
    [k: string]: any;
    key: string;
    title: string;
}> extends Omit<ComboBoxProps$1<T>, "children" | "onSelectionChange"> {
    label?: string;
    description?: string | null;
    errorMessage?: string | ((validation: ValidationResult) => string);
    color?: Color;
    rounded?: Rounded;
    variant?: InputVariant;
    children?: (item: T) => React.ReactNode;
    onSelectionChange?: (key: string) => void;
}
declare function ComboBox<T extends {
    [k: string]: any;
    key: string;
    title: string;
}>({ label, description, errorMessage, children, items, ...props }: ComboBoxProps<T>): react_jsx_runtime.JSX.Element;
declare function ComboBoxItem(props: ListBoxItemProps): react_jsx_runtime.JSX.Element;
declare function ComboBoxSection<T extends {
    [k: string]: any;
    key: string;
    title: string;
}>(props: DropdownSectionProps<T>): react_jsx_runtime.JSX.Element;

type CustomProps$6 = {
    variant?: InputVariant;
    color?: Color;
    rounded?: Rounded;
};
interface DateFieldProps<T extends DateValue> extends DateFieldProps$1<T>, CustomProps$6 {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
declare function DateField<T extends DateValue>({ label, description, errorMessage, ...props }: DateFieldProps<T>): react_jsx_runtime.JSX.Element;
declare function DateInput(props: Omit<DateInputProps, "children"> & CustomProps$6): react_jsx_runtime.JSX.Element;

type customProps$5 = {
    color?: Color;
    rounded?: Rounded;
    variant?: InputVariant;
};
interface DatePickerProps<T extends DateValue> extends DatePickerProps$1<T>, customProps$5 {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
declare function DatePicker<T extends DateValue>({ label, description, errorMessage, ...props }: DatePickerProps<T>): react_jsx_runtime.JSX.Element;

type customProps$4 = {
    color?: Color;
    rounded?: Rounded;
    variant?: InputVariant;
};
interface DateRangePickerProps<T extends DateValue> extends DateRangePickerProps$1<T>, customProps$4 {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
declare function DateRangePicker<T extends DateValue>({ label, description, errorMessage, ...props }: DateRangePickerProps<T>): react_jsx_runtime.JSX.Element;

interface DialogProp extends DialogProps {
    activator?: () => ReturnType<typeof Button>;
    label?: string;
}
declare function Dialog(props: DialogProp): react_jsx_runtime.JSX.Element;

type customProps$3 = {
    color?: Color;
    rounded?: Rounded;
    variant?: InputVariant;
};
declare function Label(props: LabelProps): react_jsx_runtime.JSX.Element;
declare function Description(props: TextProps): react_jsx_runtime.JSX.Element;
declare function FieldError(props: FieldErrorProps): react_jsx_runtime.JSX.Element;
declare const fieldBorderStyles: tailwind_variants.TVReturnType<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}, {
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}>, {
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}, {
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}>, unknown, unknown, undefined>>;
declare const fieldGroupStyles: tailwind_variants.TVReturnType<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}, undefined, "group flex items-center h-9 bg-white forced-colors:bg-[Field] overflow-hidden", tailwind_variants_dist_config.TVConfig<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}>, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, "outline outline-primary forced-colors:outline-[Highlight] outline-offset-1", tailwind_variants_dist_config.TVConfig<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}>, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, "outline outline-primary forced-colors:outline-[Highlight] outline-offset-1", tailwind_variants_dist_config.TVConfig<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}>, unknown, unknown, undefined>>>;
declare function FieldGroup(props: GroupProps & customProps$3): react_jsx_runtime.JSX.Element;
declare function Input(props: InputProps): react_jsx_runtime.JSX.Element;

declare function Form(props: FormProps): react_jsx_runtime.JSX.Element;

type customGridListProps<T> = {
    items?: ListData<T>;
    color?: Color;
    rounded?: Rounded;
    variant?: InputVariant;
    allowDragandDrop?: boolean;
    children?: (item: T) => React.ReactNode;
    onSelect?: (value: string[]) => void;
};
type GridListP<T> = Omit<GridListProps<T>, "items" | "children" | "onSelectionChange"> & customGridListProps<T>;
type GridListItemP = GridListItemProps;
declare function GridList<T extends {
    [k: string]: any;
    key: string;
    title: string;
}>(props: GridListP<T>): react_jsx_runtime.JSX.Element;
declare function GridListItem({ children, ...props }: GridListItemP): react_jsx_runtime.JSX.Element;

interface LinkProps extends LinkProps$1 {
    variant?: LinkVariant;
    color?: Color;
}
declare function Link(props: LinkProps): react_jsx_runtime.JSX.Element;

type CustomProps$5 = {
    activator?: () => ReturnType<typeof Button>;
    label?: string;
};
interface PopoverProps extends Omit<PopoverProps$1, "children">, CustomProps$5 {
    showArrow?: boolean;
    children: React.ReactNode;
}
declare function Popover({ children, showArrow, className, ...props }: PopoverProps): react_jsx_runtime.JSX.Element;

interface MenuProps<T> extends MenuProps$1<T> {
    placement?: PopoverProps["placement"];
    activator?: () => ReturnType<typeof Button>;
    label?: string;
}
declare function Menu<T extends {
    [k: string]: any;
    key: string;
    title: string;
}>(props: MenuProps<T>): react_jsx_runtime.JSX.Element;
declare function MenuItem(props: MenuItemProps): react_jsx_runtime.JSX.Element;
declare function MenuSeparator(props: SeparatorProps): react_jsx_runtime.JSX.Element;
declare function MenuSection<T extends {
    [k: string]: any;
    key: string;
    title: string;
}>(props: DropdownSectionProps<T>): react_jsx_runtime.JSX.Element;

interface MeterProps extends MeterProps$1 {
    label?: string;
}
declare function Meter({ label, ...props }: MeterProps): react_jsx_runtime.JSX.Element;

type customeProps = {
    title?: string;
    size?: Size;
    onCancel?: () => void;
    onOk?: () => void;
};
type ModalProps = ModalOverlayProps & customeProps;
declare function Modal(props: ModalProps): react_jsx_runtime.JSX.Element;

type customProps$2 = {
    color?: Color;
    rounded?: Rounded;
    variant?: InputVariant;
    hideSpinButton?: boolean;
};
interface NumberFieldProps extends NumberFieldProps$1, customProps$2 {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
declare function NumberField({ label, description, errorMessage, ...props }: NumberFieldProps): react_jsx_runtime.JSX.Element;

interface ProgressBarProps extends ProgressBarProps$1 {
    label?: string;
}
declare function ProgressBar({ label, ...props }: ProgressBarProps): react_jsx_runtime.JSX.Element;

type CustomProps$4 = {
    color?: Color;
};
interface RadioGroupProps<T> extends Omit<RadioGroupProps$1, "children"> {
    label?: string;
    children?: (option: T) => ReactNode;
    options: T[];
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
declare function RadioGroup<T extends {
    [key: string]: any;
    value: string;
    title: string;
}>(props: RadioGroupProps<T> & CustomProps$4): react_jsx_runtime.JSX.Element;
declare function Radio(props: RadioProps & CustomProps$4): react_jsx_runtime.JSX.Element;

type customProps$1 = {
    color?: Color;
};
interface RangeCalendarProps<T extends DateValue> extends Omit<RangeCalendarProps$1<T>, "visibleDuration">, customProps$1 {
    errorMessage?: string;
}
declare function RangeCalendar<T extends DateValue>({ errorMessage, ...props }: RangeCalendarProps<T>): react_jsx_runtime.JSX.Element;

type CustomProps$3 = {
    color?: Color;
    variant?: InputVariant;
    rounded?: Rounded;
};
interface SearchFieldProps extends SearchFieldProps$1, CustomProps$3 {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
declare function SearchField({ label, description, errorMessage, ...props }: SearchFieldProps): react_jsx_runtime.JSX.Element;

type customProps<T> = {
    rounded?: Rounded;
    color?: Color;
    variant?: InputVariant;
    onSelect?: (value: T) => void;
};
interface SelectProps<T extends {
    [k: string]: any;
    key: string;
}> extends Omit<SelectProps$1<T>, "children">, customProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    items: Iterable<T>;
    children: React.ReactNode | ((item: T) => React.ReactNode);
}
declare function Select<T extends {
    [k: string]: any;
    key: string;
}>({ label, description, errorMessage, children, items, ...props }: SelectProps<T>): react_jsx_runtime.JSX.Element;
declare function SelectItem(props: ListBoxItemProps): react_jsx_runtime.JSX.Element;
declare function SelectSection<T extends object>(props: DropdownSectionProps<T>): react_jsx_runtime.JSX.Element;

declare function Separator(props: SeparatorProps): react_jsx_runtime.JSX.Element;

type CustomProps$2 = {
    color?: Color;
};
interface SliderProps<T> extends SliderProps$1<T>, CustomProps$2 {
    label?: string;
    thumbLabels?: string[];
}
declare function Slider<T extends number | number[]>({ label, thumbLabels, ...props }: SliderProps<T>): react_jsx_runtime.JSX.Element;

type CustomProps$1 = {
    color?: Color;
};
interface SwitchProps extends Omit<SwitchProps$1, "children">, CustomProps$1 {
    label?: React.ReactNode;
}
declare function Switch({ label, ...props }: SwitchProps): react_jsx_runtime.JSX.Element;

interface TableCustomProps<T extends {
    [key: string]: any;
    key: string;
    title: string;
}> extends Omit<TableProps, "children" | "onSelectionChange">, DataTableProps<T> {
    onSelect?: (selected: any) => void;
    allowDragAndDrop?: boolean;
}
declare function Table<T extends {
    [key: string]: any;
    key: string;
    title: string;
}>(props: TableCustomProps<T>): react_jsx_runtime.JSX.Element;

declare function Tabs(props: TabsProps): react_jsx_runtime.JSX.Element;
declare function TabList<T extends object>(props: TabListProps<T>): react_jsx_runtime.JSX.Element;
declare function Tab(props: TabProps): react_jsx_runtime.JSX.Element;
declare function TabPanel(props: TabPanelProps): react_jsx_runtime.JSX.Element;

interface TagGroupProps<T> extends Omit<TagGroupProps$1, "children" | "onRemove" | "selectionMode">, Pick<TagListProps<T>, "children" | "renderEmptyState"> {
    color?: Color;
    label?: string;
    description?: string;
    errorMessage?: string;
    variant?: ChipVariant;
    rounded?: ChipRounded;
    items?: ListData<T>;
    selectionMode?: SelectionMode;
    onRemove?: (keys: string[]) => void;
}
declare function TagGroup<T extends {
    [key: string]: any;
    key: string;
    title: string;
}>({ label, description, errorMessage, items, children, renderEmptyState, selectionMode, ...props }: TagGroupProps<T>): react_jsx_runtime.JSX.Element;
declare function Tag({ children, ...props }: TagProps): react_jsx_runtime.JSX.Element;

interface TextFieldProps extends TextFieldProps$1 {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
declare function TextField({ label, description, errorMessage, ...props }: TextFieldProps): react_jsx_runtime.JSX.Element;

interface TimeFieldProps<T extends TimeValue> extends TimeFieldProps$1<T> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
declare function TimeField<T extends TimeValue>({ label, description, errorMessage, ...props }: TimeFieldProps<T>): react_jsx_runtime.JSX.Element;

type CustomProps = {
    color?: Color;
    variant?: Exclude<ButtonVariant, "default">;
    rounded?: Rounded;
    size?: Size;
};
declare function ToggleButton(props: ToggleButtonProps & CustomProps): react_jsx_runtime.JSX.Element;

interface TooltipProps extends Omit<TooltipProps$1, "children"> {
    children: React.ReactNode;
}
declare function Tooltip({ children, ...props }: TooltipProps): react_jsx_runtime.JSX.Element;

type ColorVariant = {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    DEFAULT: string;
};
type ColorVariables = {
    background: string;
    default: ColorVariant | string;
    primary: ColorVariant | string;
    secondary: ColorVariant | string;
    success: ColorVariant | string;
    warning: ColorVariant | string;
    danger: ColorVariant | string;
    info: ColorVariant | string;
};
type Theme = {
    [themeName: string]: ColorVariables;
    light: ColorVariables;
};

declare function hokTheme(config?: Theme): {
    handler: tailwindcss_types_config.PluginCreator;
    config?: any;
};

type WithListDataProps<T extends object> = {
    listData: ListData<T>;
};
declare function WithListData<T extends {
    [key: string]: any;
    key: string;
}, P extends WithListDataProps<T> = WithListDataProps<T>>(Component: React.ComponentType<P>): (props: Omit<P, keyof WithListDataProps<T>>) => react_jsx_runtime.JSX.Element;

export { AlertDialog, type Alignment, Badge, type BadgeRounded, type BadgeVariant, Breadcrumbs, Button, type ButtonVariant, Calendar, CalendarGridHeader, CalendarHeader, Checkbox, CheckboxGroup, type ChipRounded, type ChipVariant, type Color, ComboBox, ComboBoxItem, ComboBoxSection, type DataTableProps, DateField, DateInput, DatePicker, DateRangePicker, Description, Dialog, DropdownItem, DropdownSection, FieldError, FieldGroup, type FontSize, type FontWeight, Form, GridList, GridListItem, Input, type InputVariant, Label, Link, type LinkVariant, ListBox, ListBoxItem, Menu, MenuItem, MenuSection, MenuSeparator, Meter, Modal, NumberField, Popover, type Position, ProgressBar, Radio, RadioGroup, RangeCalendar, type Rounded, SearchField, Select, SelectItem, SelectSection, type SelectionMode, Separator, type Size, Slider, Switch, Tab, TabList, TabPanel, Table, type TableVariant, Tabs, Tag, TagGroup, TextField, TimeField, type TimeFieldProps, ToggleButton, Tooltip, WithListData, type WithListDataProps, fieldBorderStyles, fieldGroupStyles, hokTheme };
