import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Devyug | Building Technology That Improves Lives",
  description: "Devyug is a product-first technology company building software that solves meaningful real-world problems. Discover Rakshan, our healthcare continuity platform.",
  openGraph: {
    title: "Devyug | Building Technology That Improves Lives",
    description: "Devyug is a product-first technology company building software that solves meaningful real-world problems. Discover Rakshan, our healthcare continuity platform.",
    url: "https://devyug.com",
    siteName: "Devyug",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devyug | Building Technology That Improves Lives",
    description: "Devyug is a product-first technology company building software that solves meaningful real-world problems. Discover Rakshan, our healthcare continuity platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050505] text-white selection:bg-brand-emerald selection:text-black">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
