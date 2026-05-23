import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange, resultCount }) {
  return (
    <section className="sticky top-[69px] z-30 border-b border-slate-200/70 bg-brand-cloud/[0.92] px-4 py-3 backdrop-blur-xl sm:static sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 dark:border-slate-800 dark:bg-slate-950/[0.92] sm:dark:bg-transparent">
      <div className="relative mx-auto max-w-3xl">
        <Search
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-teal"
          size={21}
          aria-hidden="true"
        />
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="ابحث باسم الموقع أو التصنيف"
          className="h-14 w-full rounded-2xl border border-slate-200 bg-white pr-12 pl-24 text-sm font-semibold text-brand-ink shadow-soft outline-none transition placeholder:text-slate-400 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/15 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          aria-label="البحث في الروابط"
        />
        <div className="absolute left-2 top-1/2 flex -translate-y-1/2 items-center gap-2">
          {value && (
            <button
              type="button"
              onClick={() => onChange("")}
              className="grid h-9 w-9 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-teal/20 dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label="مسح البحث"
            >
              <X size={18} aria-hidden="true" />
            </button>
          )}
          <span className="rounded-full bg-brand-mint px-3 py-1.5 text-xs font-extrabold text-brand-navy dark:bg-brand-teal/20 dark:text-teal-100">
            {resultCount}
          </span>
        </div>
      </div>
    </section>
  );
}
