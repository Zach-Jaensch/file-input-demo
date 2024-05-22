/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";

import { cn } from "~/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { buttonVariants } from "~/components/ui/button";

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={buttonVariants()}>
              &#9750;
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/input" legacyBehavior passHref>
            <NavigationMenuLink className={buttonVariants()}>
              Input
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Dropzone</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/drag-drop"
                  >
                    <img
                      src="data:image/png;base64,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
"
                      alt="React Dropzone logo"
                      className="mt-auto h-1/2 w-1/2 object-contain"
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">Demo</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      using the{" "}
                      <span className="text-nowrap">react-dropzone</span>{" "}
                      package.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="https://react-dropzone.js.org/"
                target="_blank"
                title="Docs"
              >
                Official documentation for{" "}
                <span className="text-nowrap">react-dropzone</span>.
              </ListItem>
              <ListItem
                href="https://github.com/react-dropzone/react-dropzone/blob/master/src/index.js#L564"
                title="Dropzone event handler"
                target="_blank"
              ></ListItem>
              <ListItem
                href="https://github.com/react-dropzone/file-selector/blob/master/src/file-selector.ts#L99-L114"
                title="Extract files from drop event"
                target="_blank"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>My Dropzone</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/drag-drop-custom"
                  >
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Two people walking a glass panel across a street"
                      className="mt-auto h-auto w-auto object-contain"
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">Demo</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      using a <b>VERY</b> fragile implementation.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem"
                target="_blank"
                title="MSDN Docs for DataTransferItem"
              ></ListItem>
              <ListItem
                href="https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry"
                target="_blank"
                title="MSDN Docs for FileSystemEntry"
              ></ListItem>
              <ListItem
                href="https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/webkitGetAsEntry"
                target="_blank"
                title="MSDN Docs for FileSystemEntry"
              >
                Has a great example on how to use it with vanila JS.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
