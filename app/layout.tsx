import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SoftwarePros — Social Media Marketing & Digital Growth Agency",
    template: "%s | SoftwarePros",
  },
  description:
    "SoftwarePros helps brands grow through strategic social media marketing, content creation, paid advertising, and data-driven digital growth strategies.",
  keywords: [
    "social media marketing",
    "digital growth agency",
    "content strategy",
    "paid social advertising",
    "influencer marketing",
    "social media management",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SoftwarePros",
    title: "SoftwarePros — Social Media Marketing & Digital Growth Agency",
    description:
      "We help brands grow through strategic social media marketing and data-driven digital growth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftwarePros — Social Media Marketing & Digital Growth Agency",
    description:
      "We help brands grow through strategic social media marketing and data-driven digital growth.",
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
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
