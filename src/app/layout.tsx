import RightBar from "@/components/RightBar";
import "./globals.css";
import LeftBar from "@/components/LeftBar";

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
          <div>HomePage</div>
          <div>
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
