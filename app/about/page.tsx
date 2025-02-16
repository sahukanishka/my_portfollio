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
          title="My Auto-biography"
          description="Hello World! I'm Kanishka"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"
        >
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground">
              I’m a CSE graduate from Punjabi University and have been bringing
              my ideas to life for the past four years. From building robots and
              IoT-powered taxi-top billboards to creating apps and developing AI
              voice agents, my journey has been a wild mix of innovation and
              adventure. On the frontend, my life looks awesome, but on the
              backend, it's a chaotic mess just like any great tech project. But
              hey, I love the way I live!
            </p>
            <p className="text-lg text-muted-foreground">
              I played a key role in scaling Oyela’s platform from search to
              over 500k MAU, built multiple products from scratch, and led tech
              teams to success. I’ve also been recognized as the Youngest Child
              Scientist and won National Science Fair awards so yeah, I’ve been
              geeking out since childhood.
            </p>
            <p className="text-lg text-muted-foreground">
              Beyond tech, I’m always chasing thrill and adventure. I’ve done
              the world’s highest paragliding in Bir Billing at 2,400 meters
              above sea level and taken a leap of faith with the world’s
              second-highest bungee jump in Nepal at 228 meters.
            </p>
            <p className="text-lg text-muted-foreground">
              By day, I build AI-powered solutions, and by night, I’m a tech
              geek, foodie at heart, and traveler by nature. My passion spans
              across startups, AI, automation, and solving real world problems,
              and I’m always looking for the next big thing to build.<br></br>{" "}
              And no matter where I go, my love for dogs follows me because some
              things in life are just non-negotiable. 🐶💙
            </p>
            {/* <Button asChild className="mt-4">
              <Link href="/timeline">View My Journey</Link>
            </Button> */}
          </div>
          <div className="relative h-[650px] rounded-lg overflow-hidden">
            <Image
              src="/about-kanishka.jpeg"
              alt="Working on code"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* <motion.div
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
        </motion.div> */}
      </div>
    </div>
  );
}
