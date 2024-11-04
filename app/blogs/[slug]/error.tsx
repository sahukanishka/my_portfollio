"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Something went wrong!
          </h2>
          <p className="text-muted-foreground mb-8">
            We couldn't load this blog post. Please try again later.
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={reset}>Try again</Button>
            <Button variant="outline" asChild>
              <Link href="/blogs">Back to Blogs</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
