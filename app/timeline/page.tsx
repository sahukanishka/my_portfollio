"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timelineEvents = [
  {
    year: "2023",
    title: "AI Innovation Lead",
    company: "Tech Innovators Inc.",
    description: "Leading AI research and development initiatives.",
    badges: ["AI", "Leadership", "Innovation"],
  },
  {
    year: "2021",
    title: "Startup Founder",
    company: "AI Solutions Co.",
    description: "Founded and scaled an AI-powered analytics platform.",
    badges: ["Startup", "AI", "Analytics"],
  },
  {
    year: "2019",
    title: "Senior Tech Lead",
    company: "Global Tech Corp",
    description: "Led development of enterprise-scale AI solutions.",
    badges: ["Enterprise", "Leadership", "Development"],
  },
];

export default function Timeline() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <PageHeader
          title="My Journey"
          description="A timeline of my professional experience and key milestones in technology and innovation."
        />

        <div className="mt-16 space-y-8">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-sm text-primary font-medium mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {event.company}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {event.badges.map((badge, badgeIndex) => (
                        <Badge key={badgeIndex} variant="secondary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
