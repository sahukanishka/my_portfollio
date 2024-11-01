"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { StackGrid } from "@/components/stack/stack-grid";
import {
  Brain,
  Cloud,
  Code2,
  Database,
  Layout,
  Settings,
  Smartphone,
  TestTube,
} from "lucide-react";

const techStack = {
  languages: {
    icon: <Code2 className="h-6 w-6" />,
    title: "Languages",
    items: [
      { name: "TypeScript", level: "Expert", years: 5 },
      { name: "Python", level: "Expert", years: 7 },
      { name: "JavaScript", level: "Expert", years: 8 },
      { name: "Go", level: "Advanced", years: 3 },
      { name: "Rust", level: "Intermediate", years: 2 },
    ],
  },
  frontend: {
    icon: <Layout className="h-6 w-6" />,
    title: "Frontend",
    items: [
      { name: "React", level: "Expert", years: 6 },
      { name: "Next.js", level: "Expert", years: 4 },
      { name: "Vue.js", level: "Advanced", years: 3 },
      { name: "Tailwind CSS", level: "Expert", years: 4 },
      { name: "Framer Motion", level: "Advanced", years: 2 },
    ],
  },
  backend: {
    icon: <Database className="h-6 w-6" />,
    title: "Backend",
    items: [
      { name: "Node.js", level: "Expert", years: 7 },
      { name: "Django", level: "Advanced", years: 5 },
      { name: "PostgreSQL", level: "Expert", years: 6 },
      { name: "MongoDB", level: "Advanced", years: 4 },
      { name: "Redis", level: "Advanced", years: 3 },
    ],
  },
  cloud: {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", level: "Expert", years: 5 },
      { name: "Docker", level: "Advanced", years: 4 },
      { name: "Kubernetes", level: "Advanced", years: 3 },
      { name: "GitHub Actions", level: "Advanced", years: 3 },
      { name: "Terraform", level: "Advanced", years: 2 },
    ],
  },
  ai: {
    icon: <Brain className="h-6 w-6" />,
    title: "AI & ML",
    items: [
      { name: "TensorFlow", level: "Expert", years: 4 },
      { name: "PyTorch", level: "Advanced", years: 3 },
      { name: "Scikit-learn", level: "Expert", years: 5 },
      { name: "OpenAI API", level: "Advanced", years: 2 },
      { name: "Hugging Face", level: "Advanced", years: 2 },
    ],
  },
  mobile: {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile",
    items: [
      { name: "React Native", level: "Expert", years: 4 },
      { name: "Flutter", level: "Advanced", years: 2 },
      { name: "iOS (Swift)", level: "Advanced", years: 3 },
      { name: "Android (Kotlin)", level: "Advanced", years: 3 },
    ],
  },
  testing: {
    icon: <TestTube className="h-6 w-6" />,
    title: "Testing",
    items: [
      { name: "Jest", level: "Expert", years: 5 },
      { name: "Cypress", level: "Advanced", years: 3 },
      { name: "Playwright", level: "Advanced", years: 2 },
      { name: "Vitest", level: "Expert", years: 2 },
    ],
  },
  tools: {
    icon: <Settings className="h-6 w-6" />,
    title: "Tools & Others",
    items: [
      { name: "Git", level: "Expert", years: 8 },
      { name: "VS Code", level: "Expert", years: 6 },
      { name: "Figma", level: "Advanced", years: 3 },
      { name: "Postman", level: "Expert", years: 5 },
    ],
  },
};

export default function Stack() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <PageHeader
          title="Tech Stack"
          description="An overview of the technologies, frameworks, and tools I specialize in, built over years of hands-on experience."
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <StackGrid categories={techStack} />
        </motion.div>
      </div>
    </div>
  );
}
