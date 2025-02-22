import Hero from "@/components/Hero";
import { HeroCard, HeroCardData } from "@/components/screen/landing";
import { generatePersonSchema } from "@/components/structured-data";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://kanishkasahu.com"),
  title: {
    default: "Kanishka Sahu | Tech Entrepreneur",
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
  authors: [{ name: "Kanishka Sahu" }],
  creator: "Kanishka Sahu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kanishka.vercel.app",
    title: "Kanishka Sahu | AI Innovator, Tech Entrepreneur & Builder",
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

export default function Home() {
  return (
    <div className=" ">
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema()),
        }}
      />
      <Hero />
      <div className="container mx-auto px-6">
        {HeroCardData.map((data, index) => (
          <HeroCard
            title={data.title}
            description={data.description}
            image={data.image}
            link={data.link}
            reverse={data.reverse}
          />
        ))}
      </div>
    </div>
  );
}
