import type { Metadata } from "next";
import "@/styles/globals.css";
import { fontSans } from "@/lib/fonts";
import { meta } from "@/lib/meta";

export const metadata: Metadata = {
  metadataBase: new URL(meta.url),
  title: {
    default: meta.title,
    template: `%s - ${meta.title}`,
  },
  description: meta.description,
  applicationName: meta.title,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: meta.url,
    title: meta.title,
    description: meta.description,
    siteName: meta.title,
    images: [
      {
        url: meta.ogImage,
        width: 1200,
        height: 630,
        alt: meta.title,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${meta.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable}  antialiased`}>{children}</body>
    </html>
  );
}
