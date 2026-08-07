import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL, BUSINESS_NAME } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: BUSINESS_NAME,
  description: "Programmatic SEO demo built with Next.js App Router.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
