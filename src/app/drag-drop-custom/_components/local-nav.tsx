import Link from "next/link";

import { Button } from "~/components/ui/button";

export function LocalNav() {
  return (
    <nav
      aria-label="how drag and drop processing works works"
      className="flex w-auto justify-center gap-4 justify-self-start pb-4"
    >
      <Button asChild>
        <a
          href="https://github.com/react-dropzone/file-selector/blob/master/src/file-selector.ts#L99-L114"
          target="_blank"
        >
          Processing
        </a>
      </Button>
      <Button asChild>
        <a
          href="https://github.com/react-dropzone/file-selector/blob/master/src/file-selector.ts#L99-L114"
          target="_blank"
        >
          Spec
        </a>
      </Button>
      <Button asChild>
        <Link href="/drag-drop">react-dropzone</Link>
      </Button>
    </nav>
  );
}
