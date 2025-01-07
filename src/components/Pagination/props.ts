import type { Color, DataTablePaginationProps } from "../types/prop.type";

export interface PaginationProps extends DataTablePaginationProps {
  color?: Color;
  onPagechange?: (paging: DataTablePaginationProps) => void;
}
