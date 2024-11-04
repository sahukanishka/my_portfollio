import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Categories */}
          <div className="flex gap-2 mb-6">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
          </div>

          {/* Title */}
          <Skeleton className="h-12 w-3/4 mb-6" />

          {/* Meta Info */}
          <div className="flex gap-4 mb-8">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-32" />
          </div>

          {/* Featured Image */}
          <Skeleton className="w-full h-[400px] md:h-[600px] rounded-lg mb-12" />

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-12">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div>
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-4 w-48" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
            <Skeleton className="h-6 w-4/6" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
}
