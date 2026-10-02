import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL, BUSINESS_NAME } from "@/lib/config";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: BUSINESS_NAME,
  description: "Programmatic SEO demo built with Next.js App Router.",
  verification: {
    google: "DFwIHnDZytYU1eu2Sl_pJET_7oLpinwEhwu4tkfuQgc",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VYE4G5SJY5"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VYE4G5SJY5');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
