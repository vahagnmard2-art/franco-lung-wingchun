export default function Loading() {
  return (
    <div className="min-h-screen bg-ink flex flex-col items-center justify-center gap-8 px-6">
      {/* Logo mark skeleton */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-ink-400 animate-pulse" />
        <div className="h-6 w-40 bg-ink-400 animate-pulse" />
        <div className="h-3 w-20 bg-ink-300 animate-pulse mt-1" />
      </div>

      {/* Gold line separator */}
      <div className="gold-line w-24 opacity-30" />

      {/* Content block skeletons */}
      <div className="w-full max-w-2xl space-y-3">
        <div className="h-3 w-3/4 mx-auto bg-ink-400 animate-pulse" />
        <div className="h-3 w-1/2 mx-auto bg-ink-300 animate-pulse" />
        <div className="h-3 w-2/3 mx-auto bg-ink-300 animate-pulse" />
      </div>

      {/* Spinner */}
      <div className="w-8 h-8 rounded-full border border-ink-400 border-t-gold/60 animate-spin mt-4" />
    </div>
  );
}
