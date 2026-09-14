import type { Metadata } from "next";
import "./globals.css";
import { SiteChrome } from "@/components/site-ui";

export const metadata: Metadata = {
  title: "BylawIQ — Bylaw to Building Intelligence",
  description: "AI bylaw intelligence for BC strata. Your building’s bylaws, applicable legislation, and traceable evidence in one clear view.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"><SiteChrome>{children}</SiteChrome></body>
    </html>
  );
}
