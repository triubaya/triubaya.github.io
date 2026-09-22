import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://triubaya.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tri Ubaya — Software Engineer & Researcher",
  description:
    "Academic and professional profile of Tri Ubaya — publications, projects, scholarships, and research funding.",
  openGraph: {
    title: "Tri Ubaya — Software Engineer & Researcher",
    description: "Publications, projects, scholarships, and research funding.",
    url: siteUrl,
    siteName: "Tri Ubaya",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tri Ubaya personal portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tri Ubaya — Software Engineer & Researcher",
    description: "Publications, projects, scholarships, and research funding.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3efe6",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
