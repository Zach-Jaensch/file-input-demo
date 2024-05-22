"use client";

import { useState } from "react";

import { UList } from "~/components/ui/list";
import { Card, CardHeader } from "~/components/ui/card";

import { type Folder, type File } from "./_types/common";
import { Entry } from "./_components/entry";
import { useMyDropzone } from "./_hooks/useMyDropzone";

export default function HomePage() {
  const [fileSystem, setFileSystem] = useState<(Folder | File)[]>([]);

  const dropareaRef = useMyDropzone(setFileSystem);

  return (
    <div>
      <Card className="text-center" ref={dropareaRef}>
        <CardHeader>
          <h2>My dropzone</h2>
        </CardHeader>
      </Card>

      <UList className="pt-4">
        {fileSystem.map((item) => {
          return (
            <li key={item.name}>
              <Entry entry={item} />
            </li>
          );
        })}
      </UList>
    </div>
  );
}
