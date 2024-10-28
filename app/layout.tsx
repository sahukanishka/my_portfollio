import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "John Doe | Tech Innovator & AI Expert",
    template: "%s | John Doe",
  },
  description:
    "Tech entrepreneur and AI specialist with expertise in machine learning, startup development, and innovative solutions.",
  keywords: [
    "AI Expert",
    "Tech Innovator",
    "Startup Founder",
    "Machine Learning",
    "Software Development",
    "Technology Leadership",
  ],
  authors: [{ name: "John Doe" }],
  creator: "John Doe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "John Doe | Tech Innovator & AI Expert",
    description:
      "Tech entrepreneur and AI specialist with expertise in machine learning, startup development, and innovative solutions.",
    siteName: "John Doe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe | Tech Innovator & AI Expert",
    description:
      "Tech entrepreneur and AI specialist with expertise in machine learning, startup development, and innovative solutions.",
    creator: "@johndoe",
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
        <link rel="canonical" href="https://yourdomain.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen bg-background">{children}</main>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
