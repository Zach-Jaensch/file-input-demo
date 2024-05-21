"use client";

import { useState } from "react";

import { UList } from "~/components/ui/list";

import { useDropzone } from "react-dropzone";
import { Card, CardHeader } from "~/components/ui/card";

export default function HomePage() {
  const [files, setFiles] = useState<File[]>([]);

  const onDropAccepted = (acceptedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted,
  });

  return (
    <div>
      <Card className="text-center" {...getRootProps()}>
        <CardHeader>
          <h2>react-dropzone</h2>
        </CardHeader>
      </Card>
      <input {...getInputProps()} />
      <UList className="pt-4">
        {files.map((file) => (
          <li key={file.path}>{file.path}</li>
        ))}
      </UList>
    </div>
  );
}

// webkitdirectory=""

// file.name
// file.webkitRelativePath
