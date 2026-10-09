import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hariom | Purple Login Demo",
  description: "A purple glassmorphism sign-in card demo.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
