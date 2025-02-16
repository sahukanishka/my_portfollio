import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kanishka.vercel.app"),
  title: {
    default: "Kanishka | Tech Entrepreneur",
    template: "%s | Kanishka",
  },
  description:
    "AI innovator, tech entrepreneur, and problem solver. Experienced in building scalable platforms, AI-powered solutions, startups, and automation tools.",
  keywords: [
    "AI Innovator",
    "Tech Entrepreneur",
    "Startup Founder",
    "Machine Learning",
    "Software Development",
    "Automation",
    "Voice AI",
    "Chatbots",
    "SaaS",
    "Geofencing",
  ],
  authors: [{ name: "Kanishka" }],
  creator: "Kanishka",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kanishka.vercel.app",
    title: "Kanishka | AI Innovator, Tech Entrepreneur & Builder",
    description:
      "AI innovator, tech entrepreneur, and problem solver. Experienced in building scalable platforms, AI-powered solutions, startups, and automation tools.",
    siteName: "Kanishka Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanishka | AI Innovator, Tech Entrepreneur & Builder",
    description:
      "AI innovator, tech entrepreneur, and problem solver. Experienced in building scalable platforms, AI-powered solutions, startups, and automation tools.",
    creator: "@kanishkasahu",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://kanishka.vercel.app" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen bg-background">{children}</main>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
