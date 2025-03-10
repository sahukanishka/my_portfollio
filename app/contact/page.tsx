import { ContactForm } from "@/components/contact-form";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6">
            <ContactForm />
          </Card>
        </div>
      </div>
    </section>
  );
}
