import * as React from "react";

import { cn } from "~/lib/utils";

export type UListProps = React.InputHTMLAttributes<HTMLUListElement>;

const UList = React.forwardRef<HTMLUListElement, UListProps>(
  ({ className, ...props }, ref) => {
    return <ul className={cn("*:pl-4", className)} ref={ref} {...props} />;
  },
);
UList.displayName = "UList";

export { UList };
