import React from "react";
import { DropZone as AriaDropZone } from "react-aria-components";
import { DropFileStyles } from "../style";
import { defaultAccept, type DropFileProps } from "../props";
import { PreviewRenderer } from "./PreviewRenderer";
import { WithLabel } from "../../../helper/WithLable";

export function DropFile(props: DropFileProps) {
  const [dropEnter, setDropEnter] = React.useState(false);

  return (
    <div className="flex flex-col gap-1 items-start">
      <WithLabel
        label={props.label}
        isRequired={props.isRequired}
        description={props.description}
        errorMessage={props.errorMessage}
      >
        <AriaDropZone
          {...props}
          className={(renderProps) =>
            DropFileStyles({
              ...renderProps,
              isDropEnter: dropEnter,
              color: props.color,
              rounded: props.rounded,
              isInvalid: props.isInvalid,
            })
          }
          getDropOperation={(types) => {
            const accept = props.accept
              ? props.accept.map((e) => types.has(e))
              : defaultAccept.map((e) => types.has(e));

            return accept.includes(true) ? "copy" : "cancel";
          }}
          onDropEnter={() => setDropEnter(true)}
          onDropExit={() => setDropEnter(false)}
          onDrop={async ({ items }) => {
            const file = (await Promise.all(
              items.map((e: any) => e.getFile()),
            )) as File[];
            if (props.onChange) {
              if (props.maxLength && file.length <= props.maxLength) {
                props.onChange(file);
              }
            }
          }}
        >
          <PreviewRenderer
            hasFile={
              !props.hideAddFileButton &&
              (props.value.length < (props.maxLength ?? props.value.length) ||
                !props.maxLength)
            }
            color={props.color}
            value={props.value}
            accept={props.accept ?? defaultAccept}
            addFileButtonText={props.addFileButtonText}
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            renderPreview={props.renderPreview}
            rounded={props.rounded}
            showDeleteButton={props.showDeleteButton}
            onChange={props.onChange}
            onClickDelete={props.onClickDelete}
          />
        </AriaDropZone>
      </WithLabel>
    </div>
  );
}
