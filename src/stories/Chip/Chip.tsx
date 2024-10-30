import React from "react";
import { TagGroup, Tag, type TagGroupProps } from "@/components/lib/TagGroup";

/**
 * This is Chip
 */
export const Chip = <
  T extends { [key: string]: any; key: string; title: string },
>(
  props: TagGroupProps<T>,
) => {
  return (
    <TagGroup {...props}>{(e) => <Tag key={e.key}>{e.title}</Tag>}</TagGroup>
  );
};
