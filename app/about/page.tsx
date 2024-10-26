"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Rocket, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { FeatureCard } from "@/components/feature-card";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <PageHeader
          title="About Me"
          description="Passionate about technology and innovation, I've dedicated my career to pushing the boundaries of what's possible with AI and software development."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"
        >
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              With over a decade of experience in tech and AI, I've had the
              privilege of working on groundbreaking projects that have shaped
              the industry. My journey began with a simple fascination with code
              and has evolved into a mission to create technology that makes a
              difference.
            </p>
            <p className="text-lg text-muted-foreground">
              As a founder and tech leader, I've built and scaled multiple
              successful startups, each focused on solving real-world problems
              through innovative technology solutions.
            </p>
            <Button asChild className="mt-4">
              <Link href="/timeline">View My Journey</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop"
              alt="Working on code"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          <FeatureCard
            icon={<Brain className="h-8 w-8" />}
            title="AI Expertise"
            description="Specialized in machine learning, natural language processing, and computer vision applications."
          />
          <FeatureCard
            icon={<Rocket className="h-8 w-8" />}
            title="Startup Success"
            description="Founded and scaled multiple tech startups, with successful exits and ongoing ventures."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8" />}
            title="Team Leadership"
            description="Led diverse teams of engineers and researchers in building innovative solutions."
          />
        </motion.div>
      </div>
    </div>
  );
}
