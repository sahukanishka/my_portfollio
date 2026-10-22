import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COMING_SOON } from "@/lib/site-config";

const title = "Kanishka Sahu — Coming Soon";
const description = "This site is being rebuilt. Check back shortly.";

// Overrides every field the root layout sets that would otherwise leak site content.
export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: null,
  openGraph: { title, description },
  twitter: { card: "summary", title, description },
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  if (!COMING_SOON) notFound();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-sm font-medium mb-6">kanishka.</p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Coming soon
        </h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
