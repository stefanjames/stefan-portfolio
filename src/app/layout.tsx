import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stefan James — Security Consultant & Cloud Security Engineer",
  description:
    "Security Consultant & Cloud Security Engineer with 16+ years of expertise in Cloud Security, NIST RMF, DevSecOps, and federal compliance. Delivering enterprise-grade security solutions across government and private sector.",
  openGraph: {
    title: "Stefan James — Security Consultant & Cloud Security Engineer",
    description:
      "Security Consultant specializing in Cloud Security, DevSecOps, and Risk Management Framework.",
    type: "website",
    url: "https://stefanjames.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stefan James — Security Consultant & Cloud Security Engineer",
    description:
      "Security Consultant specializing in Cloud Security, DevSecOps, and Risk Management Framework.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
