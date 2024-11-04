"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";
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
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>
              {format(new Date(date), "MMMM d, yyyy")}
            </time>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{author}</span>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
