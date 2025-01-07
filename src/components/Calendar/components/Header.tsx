import { Heading, useLocale } from "react-aria-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../Button";

function Header() {
  return (
    <div className="w-full">
      <Heading className="flex-1 font-semibold text-xl text-center mx-2 text-zinc-900" />
    </div>
  );
}

export function CalendarHeader() {
  const { direction } = useLocale();

  return (
    <div className="flex items-center gap-1 pb-4 px-1 w-full">
      <Button variant="icon" slot="previous">
        {direction === "rtl" ? (
          <ChevronRight aria-hidden />
        ) : (
          <ChevronLeft aria-hidden />
        )}
      </Button>
      <Header />
      <Button variant="icon" slot="next">
        {direction === "rtl" ? (
          <ChevronLeft aria-hidden />
        ) : (
          <ChevronRight aria-hidden />
        )}
      </Button>
    </div>
  );
}
