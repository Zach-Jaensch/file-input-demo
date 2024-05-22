"use client";

import { type Dispatch, type SetStateAction, useEffect, useRef } from "react";

import { type Folder, type File } from "../_types/common";
import { useBlockDocumentDrop } from "./useBlockDocumentDrop";

export function useMyDropzone(
  setFileSystem: Dispatch<SetStateAction<(File | Folder)[]>>,
) {
  const dropareaRef = useRef<HTMLDivElement>(null);

  useBlockDocumentDrop(dropareaRef);

  useEffect(() => {
    if (!dropareaRef.current) return;

    const droparea = dropareaRef.current;

    function handleDrop(event: DragEvent) {
      event.preventDefault();

      // https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
      const items = event.dataTransfer?.items;

      if (!items) return;

      const rootFolder: (File | Folder)[] = [];

      Promise.all(
        Array.from(items).map(async (item) => {
          // https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/webkitGetAsEntry
          rootFolder.push(await scanEntry(item.webkitGetAsEntry()!));
        }),
      )
        .catch(console.error)
        .finally(() => {
          setFileSystem(rootFolder);
        });
    }

    droparea.addEventListener("drop", handleDrop);
    return () => {
      droparea.removeEventListener("drop", handleDrop);
    };
  }, [dropareaRef, setFileSystem]);

  return dropareaRef;
}

function isDirectory(
  entry: FileSystemEntry,
): entry is FileSystemDirectoryEntry {
  return entry.isDirectory;
}

// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
async function scanEntry(entry: FileSystemEntry): Promise<Folder | File> {
  // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
  if (isDirectory(entry)) {
    const folder: Folder = { name: entry.name, items: [] };

    await new Promise<void>((resolve) => {
      entry
        // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
        .createReader()
        // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
        .readEntries((entries) => {
          Promise.all(
            entries.map(async (subEntry) => {
              folder.items.push(await scanEntry(subEntry));
            }),
          )
            .catch(console.error)
            .finally(resolve);
        });
    });
    console.log(folder);
    return folder;
  }
  console.log({ name: entry.name });
  return { name: entry.name };
}
