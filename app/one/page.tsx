"use client";
import { FeatureCard } from "@/components/feature-card";
import ProjectCard from "@/components/projectcard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Code, Quote, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />

          {/* Main Content */}
          {/* <HeroSection /> */}
        </div>

        {/* Stats Section */}
        {/* <StatsSection /> */}
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blog Section */}
      {/* <BlogSection /> */}

      {/* Contact Section */}
      {/* <ContactSection /> */}
    </div>
  );
}

export default Page;

function AboutSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <p className="text-lg text-muted-foreground">
              With over a decade of experience in technology and innovation,
              I've dedicated my career to pushing the boundaries of what's
              possible. From founding successful startups to developing
              cutting-edge AI solutions, my work has consistently been at the
              forefront of technological advancement.
            </p>
            <Button asChild>
              <Link href="/about">Learn More About Me</Link>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <FeatureCard
            icon={<Brain className="h-8 w-8" />}
            title="AI & Machine Learning"
            description="Expertise in developing advanced AI solutions and implementing machine learning algorithms."
          />
          <FeatureCard
            icon={<Code className="h-8 w-8" />}
            title="Software Development"
            description="Full-stack development with modern technologies and best practices."
          />
          <FeatureCard
            icon={<Rocket className="h-8 w-8" />}
            title="Innovation & Strategy"
            description="Strategic thinking and innovative approaches to solving complex problems."
          />
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description:
      "Enterprise-scale analytics platform leveraging machine learning for predictive insights.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    liveUrl: "https://example.com/analytics",
    githubUrl: "https://github.com/example/analytics",
    technologies: ["React", "Python", "TensorFlow", "AWS"],
  },
  {
    title: "Smart City Management System",
    description:
      "IoT-based system for monitoring and managing urban infrastructure efficiently.",
    imageUrl:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop",
    liveUrl: "https://example.com/smartcity",
    technologies: ["Node.js", "MongoDB", "IoT", "Docker"],
  },
  {
    title: "Neural Network Visualization",
    description:
      "Interactive tool for visualizing and understanding neural network architectures.",
    imageUrl:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "https://github.com/example/neural-viz",
    technologies: ["TypeScript", "D3.js", "PyTorch", "WebGL"],
  },
];

function ProjectsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my most impactful projects, showcasing innovation in
            AI, software development, and technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "John's expertise in AI and machine learning helped us transform our business processes and achieve unprecedented efficiency.",
    author: "Sarah Johnson",
    title: "CEO, TechCorp",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
  },
  {
    quote:
      "Working with John was a game-changer for our startup. His innovative solutions and strategic insights were invaluable.",
    author: "Michael Chen",
    title: "Founder, InnovateLab",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
  },
  {
    quote:
      "An exceptional technology leader who consistently delivers cutting-edge solutions with remarkable attention to detail.",
    author: "Emily Rodriguez",
    title: "CTO, FutureTech",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop",
  },
];

function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            What People Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from clients and collaborators who have experienced the
            impact of our work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full flex flex-col">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.author}
                    />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
