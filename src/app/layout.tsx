import "./globals.css";

import React from "react";

import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /*  xsm: "500px",
    sm: "600px",
    md: "690px",
    lg: "988px",
    xl: "1078px",
    xxl: "1265px",
    */
    <html lang="en">
      <body>
        <div className="xxl:max-w-screen-xxl mx-auto flex max-w-screen-md justify-between lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="xsm:px-4 xxl:px-8 px-2">
            <LeftBar></LeftBar>
          </div>

          <div className="border-borderGrey flex-1 border-x-[1px] lg:min-w-[600px]">{children}</div>
          <div className="ml-4 hidden flex-1 md:ml-8 lg:flex">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
