import { Select, SelectItem } from "../../Select";
import { Label } from "../../Field";
import { Pagination } from "../../Pagination";
import type { TablePaginationProps } from "../props";

export default function TablePagination(props: TablePaginationProps) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-2 items-center">
        <Label>แสดงข้อมูล</Label>
        <Select
          aria-label="paging"
          defaultSelectedKey="50"
          selectedKey={String(props.paging.perPage)}
          color={props.color}
          items={
            props.perPageOption ?? [
              { key: "50", title: "50" },
              { key: "100", title: "100" },
              { key: "150", title: "150" },
              { key: "200", title: "200" },
            ]
          }
          className="w-20"
          onSelect={({ key }) => {
            if (props.onPagechange) {
              const perPage = Number(key);

              props.onPagechange({
                ...props.paging,
                perPage,
              });
            }
          }}
        >
          {(page) => <SelectItem key={page.key}>{page.title}</SelectItem>}
        </Select>
        <Label>จากทั้งหมด {props.paging.total} รายการ</Label>
      </div>
      <Pagination
        page={props.paging.page}
        perPage={props.paging.perPage}
        total={props.paging.total}
        color={props.color}
        onPagechange={props.onPagechange}
      />
    </div>
  );
}
