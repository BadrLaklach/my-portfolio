import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { siteStructuredData } from "./seo-jsonld";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://badrlaklach.github.io/my-portfolio"),
  title: "Badr Laklach - Portfolio",
  description:
    "Portfolio of Badr Laklach, Software Engineering student at ENSAM Meknès.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://badrlaklach.github.io/my-portfolio",
    languages: {
      "fr": "https://badrlaklach.github.io/my-portfolio",
      "x-default": "https://badrlaklach.github.io/my-portfolio",
    },
  },
  openGraph: {
    title: "Badr Laklach - Portfolio",
    description:
      "Portfolio of Badr Laklach, Software Engineering student at ENSAM Meknès.",
    url: "https://badrlaklach.github.io/my-portfolio",
    siteName: "Badr Laklach - Portfolio",
    images: [
      {
        url: "/portfolio.jpeg",
        width: 1080,
        height: 1080,
        alt: "Badr Laklach",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Badr Laklach - Portfolio",
    description:
      "Portfolio of Badr Laklach, Software Engineering student at ENSAM Meknès.",
    images: ["/portfolio.jpeg"],
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          key="ldjson"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteStructuredData),
          }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
