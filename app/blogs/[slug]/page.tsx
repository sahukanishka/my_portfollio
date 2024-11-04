"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { format } from "date-fns";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";

// This would typically come from your API or CMS
const getBlogPost = (slug: string) => {
  // Simulated blog post data
  return {
    title: "The Future of AI: Trends and Predictions",
    description:
      "Exploring upcoming trends in artificial intelligence and their potential impact on various industries.",
    content: `
      <p>Artificial Intelligence continues to evolve at an unprecedented pace, reshaping industries and creating new possibilities. In this comprehensive analysis, we'll explore the key trends that are likely to define the future of AI and their potential impact across various sectors.</p>

      <h2>1. Automated Machine Learning (AutoML)</h2>
      <p>AutoML is democratizing artificial intelligence by making it more accessible to organizations without extensive data science teams. This technology automates the process of applying machine learning to real-world problems, significantly reducing the barrier to entry for AI adoption.</p>

      <h2>2. Edge Computing and AI</h2>
      <p>The integration of AI with edge computing is enabling faster, more efficient processing of data at the source, rather than in centralized cloud servers. This trend is particularly important for IoT devices and applications requiring real-time decision-making.</p>

      <h2>3. Ethical AI and Responsible Development</h2>
      <p>As AI systems become more prevalent, there's an increasing focus on developing ethical frameworks and ensuring responsible AI development. This includes addressing bias in AI systems, ensuring transparency, and protecting privacy.</p>
    `,
    date: "2024-02-15",
    readingTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2940&auto=format&fit=crop",
    author: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
      role: "AI Researcher & Tech Innovator",
    },
    categories: ["AI", "Technology", "Future Trends"],
  };
};

export default function BlogPost() {
  const params = useParams();
  const post = getBlogPost(params.slug as string);

  return (
    <article className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blogs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Link>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>
                {format(new Date(post.date), "MMMM d, yyyy")}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-12"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">
                  {post.author.role}
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <Separator className="max-w-4xl mx-auto mb-12" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
