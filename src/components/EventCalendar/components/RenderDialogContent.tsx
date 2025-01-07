import { useContext } from "react";
import type { RenderDialogContentProps } from "../props";
import { CalendarContext } from "./context";

export function RenderDialogContent({
  cb,
  chipBg,
  event,
  date,
}: RenderDialogContentProps) {
  const ctx = useContext(CalendarContext);

  return (
    <div className="max-w-96 overflow-scroll no-scrollbar p-2">
      {ctx.eventsDialog ? (
        ctx.eventsDialog(cb())
      ) : (
        <div className="flex flex-col gap-4">
          <div>{`${date.day} ${ctx.displayDate}`}</div>

          <div className="max-h-80 overflow-scroll no-scrollbar">
            {event ? (
              event.map((ev, i) => (
                <div key={i} className="flex flex-row items-center gap-4">
                  <div
                    className="h-2 max-h-2 min-h-2 w-2 max-w-2 min-w-2 rounded-full"
                    style={{
                      backgroundColor: chipBg(ev.type).color,
                    }}
                  />
                  <span className="text-nowrap">{ev.details}</span>
                </div>
              ))
            ) : (
              <div className="flex flexrow justify-center text-gray-300">
                No Item.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
