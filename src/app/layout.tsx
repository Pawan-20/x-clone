import React from "react";
import "./globals.css";

import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-between">
          <div>
            <LeftBar></LeftBar>
          </div>
          <div>{children}</div>
          <div>
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
