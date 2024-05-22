"use client";

import { type RefObject, useEffect } from "react";

export function useBlockDocumentDrop(dropareaRef: RefObject<HTMLDivElement>) {
  useEffect(() => {
    function onDocumentDragOver(event: DragEvent) {
      event.preventDefault();
    }

    function onDocumentDrop(event: DragEvent) {
      if (dropareaRef.current?.contains(event.target as Node)) {
        return;
      }
      event.preventDefault();
    }

    document.addEventListener("dragover", onDocumentDragOver, false);
    document.addEventListener("drop", onDocumentDrop, false);

    return () => {
      document.removeEventListener("dragover", onDocumentDragOver);
      document.removeEventListener("drop", onDocumentDrop);
    };
  }, [dropareaRef]);
}
