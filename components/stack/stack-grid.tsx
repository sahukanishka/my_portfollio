"use client";

import { motion } from "framer-motion";
import { StackCategory } from "./stack-category";

interface StackGridProps {
  categories: Record<
    string,
    {
      icon: React.ReactNode;
      title: string;
      items: Array<{
        name: string;
        level: string;
        years: number;
      }>;
    }
  >;
}

export function StackGrid({ categories }: StackGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.entries(categories).map(([key, category], index) => (
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
    </div>
  );
}
