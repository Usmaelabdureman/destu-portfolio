import { Skeleton } from "@/components/ui/skeleton"

export function CardSkeleton() {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-80 w-full overflow-hidden bg-muted">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent p-6">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="mt-2 h-4 w-full" />
      </div>
    </div>
  )
}
