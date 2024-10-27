"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const mediaFeatures = [
  {
    title: "AI Innovation Reshaping the Future",
    publication: "Tech Chronicle",
    date: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    link: "https://example.com/article1",
    excerpt:
      "An in-depth look at how AI is transforming industries and creating new opportunities for innovation.",
  },
  {
    title: "Leading the AI Revolution",
    publication: "Digital Innovator",
    date: "2023",
    imageUrl:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    link: "https://example.com/article2",
    excerpt:
      "Profile feature on breakthrough achievements in artificial intelligence and machine learning.",
  },
  {
    title: "The Future of Smart Cities",
    publication: "Future Tech Magazine",
    date: "2023",
    imageUrl:
      "https://images.unsplash.com/photo-1494522358652-f30e61a60313?q=80&w=2070&auto=format&fit=crop",
    link: "https://example.com/article3",
    excerpt:
      "Exploring innovative solutions for urban development and smart infrastructure.",
  },
];

const mediaLogos = [
  {
    name: "TechCrunch",
    imageUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop",
  },
  {
    name: "Forbes",
    imageUrl:
      "https://images.unsplash.com/photo-1579547621869-0231e1f95b5c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Bloomberg",
    imageUrl:
      "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Wired",
    imageUrl:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Media() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <PageHeader
          title="Media Coverage"
          description="Featured in leading technology publications and news outlets worldwide."
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <LogoSlider logos={mediaLogos} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {mediaFeatures.map((feature, index) => (
            <MediaCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface Logo {
  name: string;
  imageUrl: string;
}

interface LogoSliderProps {
  logos: Logo[];
}

export function LogoSlider({ logos }: LogoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [logos.length]);

  return (
    <div className="w-full overflow-hidden bg-secondary/50 rounded-xl py-12">
      <div className="flex justify-center items-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative h-16 w-48"
        >
          <Image
            src={logos[currentIndex].imageUrl}
            alt={logos[currentIndex].name}
            fill
            className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {logos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary w-4" : "bg-primary/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

interface MediaCardProps {
  title: string;
  publication: string;
  date: string;
  imageUrl: string;
  link: string;
  excerpt: string;
}

export function MediaCard({
  title,
  publication,
  date,
  imageUrl,
  link,
  excerpt,
}: MediaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link href={link} target="_blank">
        <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">
                {publication}
              </span>
              <span className="text-sm text-muted-foreground">{date}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground mb-4">{excerpt}</p>
            <div className="flex items-center text-primary">
              <span className="text-sm">Read Article</span>
              <ExternalLink className="h-4 w-4 ml-2" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
