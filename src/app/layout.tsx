import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peptivex | Peptide & Longevity Research Intelligence",
  description:
    "AI-powered peptide and longevity research intelligence platform built for citation-first compound research, clinical evidence, and emerging therapeutic insights.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Peptivex",
    description:
      "The intelligence layer for peptide and longevity research.",
    url: "https://peptivex.com",
    siteName: "Peptivex",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 1024,
        height: 1024,
        alt: "Peptivex logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptivex",
    description:
      "The intelligence layer for peptide and longevity research.",
    images: ["/icon.png"],
  },
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