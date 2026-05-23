export default function SkeletonCard() {
  return (
    <div className="relative min-h-[238px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="absolute inset-0 translate-x-full bg-gradient-to-l from-transparent via-white/70 to-transparent animate-shimmer dark:via-slate-700/25" />
      <div className="flex justify-between">
        <div className="h-12 w-12 rounded-2xl bg-slate-100 dark:bg-slate-800" />
        <div className="h-7 w-20 rounded-full bg-slate-100 dark:bg-slate-800" />
      </div>
      <div className="mt-7 h-5 w-2/3 rounded-full bg-slate-100 dark:bg-slate-800" />
      <div className="mt-4 h-3 w-full rounded-full bg-slate-100 dark:bg-slate-800" />
      <div className="mt-3 h-3 w-4/5 rounded-full bg-slate-100 dark:bg-slate-800" />
      <div className="mt-9 h-10 w-24 rounded-full bg-slate-100 dark:bg-slate-800" />
    </div>
  );
}
