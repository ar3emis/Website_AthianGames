import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { getSiteUrl } from "@/lib/site";
import { socialProfiles } from "@/lib/config/socialLinks";
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
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Athian Games - Unreal Engine Plugins, Blueprints, Shaders and VFX",
    template: "%s | Athian Games",
  },
  description:
    "Production-ready Unreal Engine plugins, Blueprint systems, shaders, VFX, MetaHuman assets, runtime tools, and game development products from Athian Games.",
  keywords: [
    "Unreal Engine",
    "plugins",
    "blueprints",
    "shaders",
    "VFX",
    "MetaHuman",
    "game development",
    "Athian Games",
    "Niagara",
    "post-process effects",
    "Unreal Engine marketplace",
    "Fab marketplace",
    "indie game development",
  ],
  authors: [{ name: "Athian Games", url: "https://athiangames.com" }],
  creator: "Athian Games",
  publisher: "Athian Games",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/companylogo.png",
    shortcut: "/images/companylogo.png",
    apple: "/images/companylogo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Athian Games",
    title: "Athian Games - Unreal Engine Plugins, Blueprints, Shaders and VFX",
    description:
      "Production-ready Unreal Engine plugins, Blueprint systems, shaders, VFX, MetaHuman assets, runtime tools, and game development products from Athian Games.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Athian Games Unreal Engine products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athian Games - Professional Unreal Engine Tools & Assets",
    description:
      "High-quality Unreal Engine game development plugins, tools, VFX, shaders, and assets for developers and studios.",
    images: ["/images/twitter-image.jpg"],
    creator: "@Sameek_Kundu",
    site: "@Sameek_Kundu",
  },
  other: {
    "profile:company_youtube": socialProfiles.companyYouTube.href,
    "profile:personal_youtube": socialProfiles.personalYouTube.href,
    "profile:linkedin": socialProfiles.companyLinkedIn.href,
    "profile:x": socialProfiles.x.href,
    "profile:instagram": socialProfiles.instagram.href,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: "/",
    types: {
      'application/rss+xml': '/rss.xml',
      'text/plain': '/llms.txt',
      'application/json': '/ai-products.json',
    },
  },
  category: 'technology',
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AuthProvider>
          {!isCreatorSubdomain && <Header />}
          <main className="min-h-screen">{children}</main>
          {!isCreatorSubdomain && <Footer />}
        </AuthProvider>
      </body>
    </html>
  );
}
