import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: "300"
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: "300"
});

export const metadata: Metadata = {
  title: "Connor W. Floyd's Portfolio",
  description: 'Connor Floyd’s portfolio: Computational Science student & web developer.',
  keywords: [
    'Connor Floyd',
    'portfolio',
    'computational science',
    'web development',
    'software engineering',
    'programming',
    'Connor W Floyd',
    'Connor W. Floyd',
    'Connor Floyd portfolio',
    'Connor Floyd website',
    'Connor Floyd resume',
    'Connor Floyd projects',
    'Connor Floyd skills',
    'Connor Floyd contact',
    'Connor Floyd about',
    'Connor Floyd USCB',
    'Connor Floyd University of South Carolina Beaufort',
    'Connor Floyd student',
    'Connor Floyd web developer',
    'Connor Floyd software engineer',
    'Connor Wayne Floyd',
    'Connor F',
    'Connor F.',
    'Connor Wayne Floyd portfolio',
    'Connor Wayne Floyd website',
    'Connor Wayne Floyd resume',
    'Connor Wayne Floyd projects',
    'web developer for hire',
    'software engineer for hire',
    'web development portfolio',
    'software engineering portfolio',
    'web development resume',
    'software engineering resume',
    'web development projects',
    'software engineering projects',
    'web development skills',
    'software engineering skills',
    'web development contact',
    'software engineering contact',
  ],
  authors: [{ name: 'Connor W. Floyd' }],
  icons: {
    icon: '@/public/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: 'https://connorwfloyd.dev',
    title: "Connor W. Floyd's Portfolio",
    description: 'Web developer & Computational Science student.',
    images: ['/headshot.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <SpeedInsights />
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
