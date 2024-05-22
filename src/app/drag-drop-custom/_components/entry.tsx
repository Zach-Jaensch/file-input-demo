import { UList } from "~/components/ui/list";

import { type Folder, type File } from "../_types/common";

function isFolder(entry: Folder | File): entry is Folder {
  return "items" in entry;
}
interface EntryProps {
  entry: File | Folder;
  prepend?: string;
}
export function Entry({ entry, prepend }: EntryProps) {
  return (
    <>
      <div>
        {prepend}
        {entry.name}
      </div>
      {isFolder(entry) && (
        <UList>
          {entry.items.map((item) => {
            return (
              <li key={item.name}>
                <Entry entry={item} prepend="&#10551; " />
              </li>
            );
          })}
        </UList>
      )}
    </>
  );
}
