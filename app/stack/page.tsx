"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
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

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const techStack = {
  languages: {
    icon: <Code2 className="h-6 w-6" />,
    title: "Languages",
    items: [
      { name: "TypeScript", proficiency: 95 },
      { name: "Python", proficiency: 90 },
      { name: "JavaScript", proficiency: 95 },
      { name: "Go", proficiency: 85 },
      { name: "Rust", proficiency: 75 },
    ],
  },
  frontend: {
    icon: <Layout className="h-6 w-6" />,
    title: "Frontend",
    items: [
      { name: "React", proficiency: 95 },
      { name: "Next.js", proficiency: 90 },
      { name: "Vue.js", proficiency: 85 },
      { name: "Tailwind CSS", proficiency: 90 },
      { name: "Framer Motion", proficiency: 85 },
    ],
  },
  backend: {
    icon: <Database className="h-6 w-6" />,
    title: "Backend",
    items: [
      { name: "Node.js", proficiency: 95 },
      { name: "Django", proficiency: 85 },
      { name: "PostgreSQL", proficiency: 90 },
      { name: "MongoDB", proficiency: 85 },
      { name: "Redis", proficiency: 80 },
    ],
  },
  cloud: {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", proficiency: 90 },
      { name: "Docker", proficiency: 85 },
      { name: "Kubernetes", proficiency: 80 },
      { name: "GitHub Actions", proficiency: 85 },
      { name: "Terraform", proficiency: 80 },
    ],
  },
  ai: {
    icon: <Brain className="h-6 w-6" />,
    title: "AI & ML",
    items: [
      { name: "TensorFlow", proficiency: 90 },
      { name: "PyTorch", proficiency: 85 },
      { name: "Scikit-learn", proficiency: 90 },
      { name: "OpenAI API", proficiency: 85 },
      { name: "Hugging Face", proficiency: 80 },
    ],
  },
  mobile: {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile",
    items: [
      { name: "React Native", proficiency: 90 },
      { name: "Flutter", proficiency: 85 },
      { name: "iOS (Swift)", proficiency: 80 },
      { name: "Android (Kotlin)", proficiency: 80 },
    ],
  },
  testing: {
    icon: <TestTube className="h-6 w-6" />,
    title: "Testing",
    items: [
      { name: "Jest", proficiency: 90 },
      { name: "Cypress", proficiency: 85 },
      { name: "Playwright", proficiency: 85 },
      { name: "Vitest", proficiency: 90 },
    ],
  },
  tools: {
    icon: <Settings className="h-6 w-6" />,
    title: "Tools & Others",
    items: [
      { name: "Git", proficiency: 95 },
      { name: "VS Code", proficiency: 95 },
      { name: "Figma", proficiency: 85 },
      { name: "Postman", proficiency: 90 },
    ],
  },
};

function Stack() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <PageHeader
          title="Tech Stack"
          description="An overview of the technologies, frameworks, and tools I specialize in."
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {Object.entries(techStack).map(([key, category], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StackCategory
                icon={category.icon}
                title={category.title}
                items={category.items}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Stack;

interface StackItem {
  name: string;
  proficiency: number;
}

interface StackCategoryProps {
  icon: ReactNode;
  title: string;
  items: StackItem[];
}

export function StackCategory({ icon, title, items }: StackCategoryProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="text-primary">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">{item.name}</span>
              <span className="text-sm text-muted-foreground">
                {item.proficiency}%
              </span>
            </div>
            <Progress value={item.proficiency} className="h-2" />
          </motion.div>
        ))}
      </div>
    </Card>
  );
}
