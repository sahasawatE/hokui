import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "../../Button";
import { useMemo } from "react";
import type { PaginationProps } from "../props";

export function Pagination(props: PaginationProps) {
  const handleClickPage = (page: number) => {
    if (props.onPagechange) {
      props.onPagechange({
        page:
          page === -1 ? props.page - 3 : page === -2 ? props.page + 3 : page,
        perPage: props.perPage,
        total: props.total,
      });
    }
  };

  const handleClickPrev = () => {
    if (props.onPagechange && props.page - 1 > 0) {
      props.onPagechange({
        page: props.page - 1,
        perPage: props.perPage,
        total: props.total,
      });
    }
  };

  const handleClickNext = () => {
    if (
      props.onPagechange &&
      props.page + 1 <= Math.ceil(props.total / props.perPage)
    ) {
      props.onPagechange({
        page: props.page + 1,
        perPage: props.perPage,
        total: props.total,
      });
    }
  };

  const pageButtons = useMemo(() => {
    const totalPage = Math.ceil(props.total / props.perPage);
    const arrBtn = Array(totalPage)
      .fill("")
      .map((_t, i) => ({
        page: String(i + 1),
        title: String(i + 1),
      }));

    if (arrBtn.length < 8) {
      return arrBtn;
    } else {
      const pivot = arrBtn.splice(0, 7);
      pivot[0] = { page: "1", title: "1" };
      pivot[6] = { page: String(totalPage), title: String(totalPage) };

      if (props.page - 1 > (pivot.length - 1) / 2) {
        pivot[1] = { page: String(-1), title: "..." };

        if (props.page + 3 < totalPage) {
          pivot[2] = {
            page: String(props.page - 1),
            title: String(props.page - 1),
          };
          pivot[3] = {
            page: String(props.page),
            title: String(props.page),
          };
          pivot[4] = {
            page: String(props.page + 1),
            title: String(props.page + 1),
          };
        } else {
          pivot[2] = {
            page: String(totalPage - 4),
            title: String(totalPage - 4),
          };
          pivot[3] = {
            page: String(totalPage - 3),
            title: String(totalPage - 3),
          };
          pivot[4] = {
            page: String(totalPage - 2),
            title: String(totalPage - 2),
          };
        }
      }

      if (props.page + 3 < totalPage) {
        pivot[5] = { page: String(-2), title: "..." };
      } else {
        pivot[5] = {
          page: String(totalPage - 1),
          title: String(totalPage - 1),
        };
      }

      return pivot;
    }
  }, [props]);

  return (
    <div className="flex flex-row gap-2">
      <Button variant="icon" color={props.color} onPress={handleClickPrev}>
        <ChevronLeft />
      </Button>

      <div className="flex flex-row gap-1">
        {pageButtons.map((btn, i) => (
          <Button
            key={i}
            color={props.color}
            variant={Number(btn.page) === props.page ? "default" : "text"}
            onPress={() => handleClickPage(Number(btn.page))}
          >
            {(renderProps) => {
              if (btn.title === "..." && renderProps.isHovered) {
                if (btn.page === "-1") {
                  return <ChevronsLeft />;
                }
                return <ChevronsRight />;
              }

              return btn.title;
            }}
          </Button>
        ))}
      </div>

      <Button variant="icon" color={props.color} onPress={handleClickNext}>
        <ChevronRight />
      </Button>
    </div>
  );
}
