import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";

import { MainNav } from "./_components/main-nav";

export const metadata = {
  title: "File input demo",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-8 text-white">
        <h1 className="text-5xl font-extrabold tracking-tight text-white ">
          File input demo
        </h1>

        <div className=" p-4">
          <MainNav />
        </div>

        <main className="w-1/3 min-w-[40rem]">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
