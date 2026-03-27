import { ContactForm } from "@/components/contact-form";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-3 w-3" />
        Back
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight mb-2">
        Get in Touch
      </h1>
      <p className="text-muted-foreground mb-12 max-w-lg">
        Have a question or want to work together? Send me a message and I'll get
        back to you.
      </p>

      <div className="max-w-lg">
        <ContactForm />
      </div>
    </div>
  );
}
