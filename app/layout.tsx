import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Screen Time Tracker",
  description: "Tracks screen time for each tab.",

  // Open Graph metadata
  openGraph: {
    title: "Screen Time Tracker",
    description: "Tracks screen time for each tab.",
    url: "https://screen-time-blond.vercel.app/",
    siteName: "Screen Time Tracker",
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 500,
        alt: "Title with their description",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Screen Time Tracker",
    description: "Tracks screen time for each tab.",
    images: ["/open-graph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased px-[25%] `}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
