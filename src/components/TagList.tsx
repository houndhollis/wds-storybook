import { useState } from "react";
import TagButton from "./TagButton";

interface TagListPorps<T extends string> {
  tagList: T[];
  onTagClick: (tag: T) => void;
}

export default function TagList<T extends string>({
  tagList,
  onTagClick,
}: TagListPorps<T>) {
  const [selectedTag, setSelectedTag] = useState<T>(tagList[0]);

  return (
    <div
      onClick={(event) => {
        const eventTarget = event.target as HTMLElement;
        const tag = eventTarget.textContent;
        onTagClick(tag as T);
      }}
      className="justify-center flex gap-x-4"
    >
      {tagList.map((tag) => (
        <TagButton
          key={tag}
          children={tag}
          isChecked={tag === selectedTag}
          onClick={() => setSelectedTag(tag)}
        />
      ))}
    </div>
  );
}
