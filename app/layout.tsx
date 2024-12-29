import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Secreen Time Tracker",
  description: "Tracks screen time for each tab. ",

  // Open Graph metadata
  openGraph: {
    title: " Screen Time Tracker",
    description: "Tracks screen time for each tab. ",
    url: "https://screen-time-blond.vercel.app/",
    siteName: "Secreen Time Tracker",
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
    title: " Screen Time Tracker",
    description: "Tracks screen time for each tab. ",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
