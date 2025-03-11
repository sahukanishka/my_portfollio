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
import { Metadata } from "next";

// Define metadata for the page
export const metadata: Metadata = {
  title: "Tech Stack | kanishka sahu - Developer & Engineer",
  description:
    "Explore the technologies, frameworks, and tools I've mastered throughout my career including React, TypeScript, AWS, and more.",
  keywords:
    "tech stack, developer skills, frontend, backend, cloud, AI, mobile development",
  openGraph: {
    title: "Tech Stack | kanishka sahu - Developer & Engineer",
    description:
      "Explore the technologies, frameworks, and tools I've mastered throughout my career.",
    url: "https://kanishkasahu.com/stack",
    type: "website",
  },
};

const techStack = {
  languages: {
    icon: <Code2 className="h-3 w-3" />,
    title: "Languages",
    items: [
      { name: "TypeScript", level: "Expert", years: 5 },
      { name: "Python", level: "Expert", years: 3 },
      { name: "JavaScript", level: "Expert", years: 8 },
      { name: "C++", level: "Advanced", years: 3 },
      // { name: "Rust", level: "Intermediate", years: 2 },
    ],
  },
  frontend: {
    icon: <Layout className="h-3 w-3" />,
    title: "Frontend",
    items: [
      { name: "React", level: "Expert", years: 3 },
      { name: "Next.js", level: "Expert", years: 4 },
      // { name: "Vue.js", level: "Advanced", years: 3 },
      { name: "Tailwind CSS", level: "Expert", years: 4 },
      { name: "Bootstrap", level: "Advanced", years: 4 },
    ],
  },
  backend: {
    icon: <Database className="h-3 w-3" />,
    title: "Backend",
    items: [
      { name: "Node.js", level: "Expert", years: 4 },
      { name: "Django", level: "Advanced", years: 3 },
      { name: "PostgreSQL", level: "Expert", years: 3 },
      { name: "MongoDB", level: "Advanced", years: 4 },
      { name: "Redis", level: "Advanced", years: 3 },
    ],
  },
  cloud: {
    icon: <Cloud className="h-3 w-3" />,
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", level: "Expert", years: 5 },
      { name: "Docker", level: "Advanced", years: 4 },
      { name: "Kubernetes", level: "Advanced", years: 3 },
      { name: "GitHub Actions", level: "Advanced", years: 3 },
      { name: "Azure", level: "Advanced", years: 1 },
    ],
  },
  ai: {
    icon: <Brain className="h-3 w-3" />,
    title: "AI & ML",
    items: [
      { name: "TensorFlow", level: "Expert", years: 4 },
      { name: "PyTorch", level: "Advanced", years: 3 },
      { name: "OpenAI API", level: "Advanced", years: 2 },
      { name: "Hugging Face", level: "Advanced", years: 2 },
    ],
  },
  mobile: {
    icon: <Smartphone className="h-3 w-3" />,
    title: "Mobile",
    items: [
      { name: "React Native", level: "Expert", years: 4 },
      { name: "Flutter", level: "Advanced", years: 1 },
      { name: "iOS (Swift)", level: "Advanced", years: 3 },
      { name: "Android (Kotlin)", level: "Advanced", years: 3 },
    ],
  },
  testing: {
    icon: <TestTube className="h-3 w-3" />,
    title: "Testing",
    items: [
      { name: "Jest", level: "Expert", years: 5 },
      { name: "Cypress", level: "Advanced", years: 3 },
      { name: "Playwright", level: "Advanced", years: 2 },
      { name: "Vitest", level: "Expert", years: 2 },
    ],
  },
  tools: {
    icon: <Settings className="h-3 w-3" />,
    title: "Tools & Others",
    items: [
      { name: "Git", level: "Expert", years: 8 },
      { name: "VS Code", level: "Expert", years: 3 },
      { name: "Figma", level: "Advanced", years: 3 },
      { name: "Postman", level: "Expert", years: 5 },
    ],
  },
};

export default function Stack() {
  return (
    <div className="min-h-screen pt-24 pb-13">
      <div className="container mx-auto px-3">
        <PageHeader
          title="Tech Stack"
          description="Some fancy tech I've worked with"
        />

        <div className="mt-12">
          <StackGrid categories={techStack} />
        </div>
      </div>
    </div>
  );
}
