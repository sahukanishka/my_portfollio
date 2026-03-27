import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://kanishkasahu.com"),
  title: {
    default: "Kanishka Sahu — Applied AI Engineer",
    template: "%s | Kanishka Sahu",
  },
  description:
    "Applied AI Engineer at Mercor. Working on RL environments, model evals, AI agents, post-training, fine-tuning, and synthetic data generation. Previously CTO & Cofounder at Neurix AI.",
  keywords: [
    "Kanishka Sahu",
    "Applied AI Engineer",
    "Reinforcement Learning",
    "Post-Training",
    "Evals",
    "AI Agents",
    "Fine-Tuning",
    "Synthetic Data",
    "Mercor",
    "Software Engineering",
  ],
  authors: [{ name: "Kanishka Sahu" }],
  creator: "Kanishka Sahu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kanishkasahu.com",
    title: "Kanishka Sahu — Applied AI Engineer",
    description:
      "Applied AI Engineer at Mercor. RL, evals, agents, post-training, and synthetic data generation.",
    siteName: "Kanishka Sahu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanishka Sahu — Applied AI Engineer",
    description:
      "Applied AI Engineer at Mercor. RL, evals, agents, post-training, and synthetic data generation.",
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
        <link rel="canonical" href="https://kanishkasahu.com" />
        <GoogleAnalytics gaId="G-2ZHSG5SRYS" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
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
