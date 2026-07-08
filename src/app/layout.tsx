import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "Muhammad Shahzaib | MERN Stack Developer",
  description: "Portfolio of Muhammad Shahzaib, a MERN stack and frontend developer based in Islamabad, Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
