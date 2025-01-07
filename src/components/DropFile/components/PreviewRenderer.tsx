import { FileTrigger, Text } from "react-aria-components";
import { FilePlus, X } from "lucide-react";
import { Button } from "../../Button";
import { FileStyles } from "../style";
import { type PreviewRendererProps } from "../props";

export function PreviewRenderer(props: PreviewRendererProps) {
  return (
    <>
      {props.hasFile && (
        <div className="w-full pb-2 justify-center flex flex-row">
          <FileTrigger
            allowsMultiple={props.maxLength !== 1}
            acceptedFileTypes={props.accept}
            onSelect={(e) => {
              if (e && props.onChange) {
                const files = Array.from(e);
                props.onChange(files);
              }
            }}
          >
            <Button
              variant={props.addFileButtonText ? "default" : "icon"}
              rounded="sm"
            >
              {props.addFileButtonText ?? <FilePlus size={20} />}
            </Button>
          </FileTrigger>
        </div>
      )}
      {props.value.length > 0 ? (
        <div className="flex flex-col gap-2">
          {props.value.map((f, i) => (
            <div
              key={i}
              className={FileStyles({
                rounded: props.rounded,
                color: props.color,
              })}
            >
              <div>{props.renderPreview ? props.renderPreview(f) : f.name}</div>
              {props.showDeleteButton && (
                <Button
                  variant="icon"
                  size="sm"
                  rounded="sm"
                  color="danger"
                  onPress={() => {
                    if (props.onClickDelete) {
                      props.onClickDelete(f, i);
                    }
                  }}
                >
                  <X size={18} className="text-danger" />
                </Button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <Text
          slot="label"
          className="text-sm text-default select-none cursor-pointer"
        >
          {props.placeholder ?? "Drop files here"}
        </Text>
      )}
    </>
  );
}
