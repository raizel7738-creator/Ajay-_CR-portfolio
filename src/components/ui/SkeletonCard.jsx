const SkeletonCard = () => (
  <div className="bg-surface-card border border-surface-border rounded-xl p-6 animate-pulse">
    <div className="h-6 bg-white/5 rounded w-3/4 mb-4" />
    <div className="h-4 bg-white/5 rounded w-full mb-2" />
    <div className="h-4 bg-white/5 rounded w-5/6 mb-4" />
    <div className="flex gap-2 mb-4">
      <div className="h-6 bg-white/5 rounded w-16" />
      <div className="h-6 bg-white/5 rounded w-20" />
      <div className="h-6 bg-white/5 rounded w-16" />
    </div>
    <div className="flex gap-3">
      <div className="h-9 bg-white/5 rounded w-24" />
      <div className="h-9 bg-white/5 rounded w-24" />
    </div>
  </div>
)

export default SkeletonCard
