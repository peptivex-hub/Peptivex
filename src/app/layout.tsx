import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peptivex | Peptide & Longevity Research Intelligence",
  description:
    "Peptivex transforms scientific literature, clinical trials, and biomedical research into clear, citation-first intelligence for peptides, GLP-1s, and longevity compounds.",
  openGraph: {
    title: "Peptivex",
    description: "The intelligence layer for peptide and longevity research.",
    url: "https://peptivex.com",
    siteName: "Peptivex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptivex",
    description: "The intelligence layer for peptide and longevity research.",
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