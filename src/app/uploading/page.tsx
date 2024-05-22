"use client";

import { useState } from "react";
import { Input } from "~/components/ui/input";
import { UList } from "~/components/ui/list";

export default function HomePage() {
  const [files, setFiles] = useState<FileList | null>(null);
  return (
    <div>
      <Input type="file" onChange={(e) => setFiles(e.target.files)} />
      <UList className="pt-4">
        {files &&
          Array.from(files).map((file) => (
            <li key={file.webkitRelativePath || file.name}>
              {file.webkitRelativePath || file.name}
            </li>
          ))}
      </UList>
    </div>
  );
}

// webkitdirectory=""

// file.name
// file.webkitRelativePath
