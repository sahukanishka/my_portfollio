"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  link: string;
  image: string;
  author: string;
  categories: string[];
}

export function BlogCard({
  title,
  description,
  date,
  link,
  image,
  author,
  categories,
}: BlogCardProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="group">
      <div className="border border-border rounded-lg overflow-hidden hover:border-foreground/20 transition-colors">
        <div className="relative h-44">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-5">
          <p className="font-mono text-xs text-muted-foreground mb-2">
            {format(new Date(date), "MMM d, yyyy")}
          </p>
          <h3 className="font-medium mb-2 line-clamp-2 group-hover:text-foreground/80 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {categories.slice(0, 3).map((category) => (
              <span
                key={category}
                className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
