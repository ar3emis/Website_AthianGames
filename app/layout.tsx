import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { headers } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Athian Games - Professional Unreal Engine Tools & Assets",
    template: "%s | Athian Games",
  },
  description:
    "High-quality Unreal Engine plugins, tools, and assets for serious creators. Production-ready solutions for game development, VFX, and procedural systems.",
  keywords: [
    "Unreal Engine",
    "UE5",
    "plugins",
    "assets",
    "game development",
    "VFX",
    "procedural generation",
    "Athian Games",
  ],
  authors: [{ name: "Athian Games" }],
  creator: "Athian Games",
  icons: {
    icon: "/images/companylogo.png",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Athian Games",
    title: "Athian Games - Professional Unreal Engine Tools & Assets",
    description:
      "High-quality Unreal Engine plugins, tools, and assets for serious creators.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Athian Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athian Games - Professional Unreal Engine Tools & Assets",
    description:
      "High-quality Unreal Engine plugins, tools, and assets for serious creators.",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const host = headersList.get("host") || "";

  // Check if this is the creator subdomain
  const isCreatorSubdomain = host.includes("sameekkundu.");

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {!isCreatorSubdomain && <Header />}
        <main className="min-h-screen">{children}</main>
        {!isCreatorSubdomain && <Footer />}
      </body>
    </html>
  );
}
