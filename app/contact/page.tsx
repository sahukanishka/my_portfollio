"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24   pb-16">
      <div className="container  mx-auto px-6">
        <PageHeader
          title="Get in Touch"
          description="Have a question or want to work together? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="p-6">
              <ContactForm />
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
