"use client";

import { useState } from "react";
import { Input } from "~/components/ui/input";
import { UList } from "~/components/ui/list";
import { InputOptionsForm } from "./_components/input-options-form";

interface InputOptions {
  type?: "file" | "directory" | "both";
  output?: "name" | "webkitRelativePath" | "path";
  selection?: "single" | "multiple";
}

export default function HomePage() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [inputOptions, setInputOptions] = useState<InputOptions>({});

  return (
    <div className="flex flex-col gap-4">
      <InputOptionsForm onSubmit={setInputOptions} />
      <Input
        type="file"
        onChange={(e) => setFiles(e.target.files)}
        // @ts-ignore https://github.com/facebook/react/issues/3468 😢
        webkitdirectory={inputOptions.type === "directory" ? "" : undefined}
        multiple={inputOptions.selection === "multiple"}
      />
      <UList>
        {files &&
          Array.from(files).map((file) => (
            // @ts-expect-error
            <li key={file.name}>{file[inputOptions.output ?? "name"]}</li>
          ))}
      </UList>
    </div>
  );
}
