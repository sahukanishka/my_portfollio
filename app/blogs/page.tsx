"use client";

import { BlogCard } from "@/components/blog-card";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getMediumPosts } from "@/lib/medium";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Blogs() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const mediumPosts = await getMediumPosts();
        setPosts(mediumPosts);
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-3 w-3" />
        Back
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight mb-2">Writing</h1>
      <p className="text-muted-foreground mb-12">
        Thoughts on engineering, AI, and building products.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))
          : posts.map((post) => (
              <BlogCard
                key={post.guid}
                title={post.title}
                description={post.description}
                date={post.pubDate}
                link={post.link}
                image={post.thumbnail}
                author={post.author}
                categories={post.categories}
              />
            ))}
      </div>
    </div>
  );
}
