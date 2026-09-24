import type { Metadata } from "next";
import SvgDefs from "@/components/SvgDefs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spencer Sterling — Product and Service Designer",
  description:
    "Portfolio of Spencer Sterling, a Product and Service Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SvgDefs />
        {children}
      </body>
    </html>
  );
}
