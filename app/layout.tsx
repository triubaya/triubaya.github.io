import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://triubaya.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tri Ubaya — Software Engineer & Builder",
  description:
    "Personal portfolio of Tri Ubaya — selected work, current interests, and notes from an ongoing journey in technology.",
  openGraph: {
    title: "Tri Ubaya — Software Engineer & Builder",
    description: "Selected work, current interests, and notes from an ongoing journey in technology.",
    url: siteUrl,
    siteName: "Tri Ubaya",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tri Ubaya personal portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tri Ubaya — Software Engineer & Builder",
    description: "Selected work, current interests, and notes from an ongoing journey in technology.",
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
