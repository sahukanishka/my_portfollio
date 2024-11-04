"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { BlogCard } from "@/components/blog-card";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getMediumPosts } from "@/lib/medium";

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
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <PageHeader
          title="Blog"
          description="Thoughts and insights on AI, technology, and innovation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {loading
            ? // Loading skeletons
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="space-y-4">
                  <Skeleton className="h-48 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))
            : // Actual blog posts
              posts.map((post, index) => (
                <motion.div
                  key={post.guid}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard
                    title={post.title}
                    description={post.description}
                    date={post.pubDate}
                    link={post.link}
                    image={post.thumbnail}
                    author={post.author}
                    categories={post.categories}
                  />
                </motion.div>
              ))}
        </div>
      </div>
    </div>
  );
}
