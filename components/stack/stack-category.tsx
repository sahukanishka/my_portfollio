"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface StackItem {
  name: string;
  level: string;
  years: number;
}

interface StackCategoryProps {
  icon: React.ReactNode;
  title: string;
  items: StackItem[];
}

const levelColors = {
  Expert: "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20",
  Advanced: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
  Intermediate: "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20",
};

export function StackCategory({ icon, title, items }: StackCategoryProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300">
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
            className="group"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{item.name}</span>
                      <Badge
                        variant="secondary"
                        className={`${
                          levelColors[item.level as keyof typeof levelColors]
                        } transition-colors`}
                      >
                        {item.level}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {item.years} {item.years === 1 ? "year" : "years"}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {item.years} years of experience with {item.name}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}
