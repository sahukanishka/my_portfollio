"use client";
import { PageHeader } from "@/components/page-header";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 pt-16">
        <PageHeader
          title="Projects"
          description="A showcase of my work in AI, software development, and innovative solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
}

function ProjectCard({
  title,
  description,
  imageUrl,
  liveUrl,
  githubUrl,
  technologies,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group">
        <div className="relative h-48 md:h-64">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-secondary rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {liveUrl && (
              <Button asChild size="sm">
                <Link href={liveUrl} target="_blank">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
            )}
            {githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <Link href={githubUrl} target="_blank">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
