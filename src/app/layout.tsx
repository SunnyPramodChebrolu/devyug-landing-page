import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "DEVYUG — Engineering Excellence",
  description:
    "DEVYUG is a premium software engineering company. Precision, craftsmanship, and engineering excellence at every scale.",
  metadataBase: new URL("https://devyug.com"),
  openGraph: {
    title: "DEVYUG — Engineering Excellence",
    description:
      "DEVYUG is a premium software engineering company. Precision, craftsmanship, and engineering excellence at every scale.",
    url: "https://devyug.com",
    siteName: "DEVYUG",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEVYUG — Engineering Excellence",
    description:
      "DEVYUG is a premium software engineering company. Precision, craftsmanship, and engineering excellence at every scale.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable}`}>
      <body>
        {/* Film grain overlay */}
        <div className="noise" aria-hidden="true" />
        {/* Blue scan line at top */}
        <div className="scan-line" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
