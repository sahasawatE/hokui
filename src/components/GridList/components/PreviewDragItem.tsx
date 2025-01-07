export function PreviewWithLength1(props: { title?: string }) {
  return (
    <div className="w-28 h-10 flex flex-row items-center gap-2 bg-white p-2 rounded">
      <span className="w-2/3 overflow-hidden text-ellipsis">{props.title}</span>
      <div className="w-6 h-6 rounded-sm bg-default-200 text-center">1</div>
    </div>
  );
}

export function PreviewWithLengthMoreThan1(props: {
  title?: string;
  length: number;
}) {
  return (
    <div className="relative w-32 h-20">
      <div className="w-28 h-10 bg-white drop-shadow-lg absolute z-[1] rounded overflow-hidden translate-x-1/4 translate-y-1/2">
        <div className="flex flex-row items-center gap-2 bg-white p-2">
          <span className="w-2/3 overflow-hidden text-ellipsis">
            {props.title}
          </span>
          <div className="w-6 h-6 rounded-sm bg-default-200 text-center">
            {props.length}
          </div>
        </div>
      </div>
      <div className="w-28 h-10 bg-white absolute top-[0.3rem] left-[0.3rem] rounded-lg translate-x-1/4 translate-y-1/2"></div>
    </div>
  );
}
