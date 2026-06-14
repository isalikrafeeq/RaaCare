import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CareGuard — Premium Elder Care Platform for Saudi Families",
  description:
    "CareGuard helps Saudi families monitor elderly parents with diabetes and chronic conditions. Real-time health tracking, medication reminders, emergency alerts, and family dashboards — all in one platform.",
  keywords: [
    "elder care Saudi Arabia",
    "diabetes monitoring",
    "elderly health tracking",
    "caregiver platform",
    "chronic disease management",
    "medication reminders",
    "family health dashboard",
  ],
  authors: [{ name: "CareGuard Technologies" }],
  creator: "CareGuard Technologies",
  openGraph: {
    title: "CareGuard — Premium Elder Care Platform",
    description:
      "Real-time health monitoring for elderly parents with diabetes and chronic conditions. Trusted by Saudi families.",
    type: "website",
    locale: "en_SA",
    siteName: "CareGuard",
  },
  twitter: {
    card: "summary_large_image",
    title: "CareGuard — Premium Elder Care Platform",
    description:
      "Real-time health monitoring for elderly parents with diabetes and chronic conditions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#07081f] text-slate-50 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
