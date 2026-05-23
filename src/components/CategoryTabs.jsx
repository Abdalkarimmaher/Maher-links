export default function CategoryTabs({ categories, activeCategory, onChange }) {
  return (
    <div className="scrollbar-hide -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <div className="flex min-w-max gap-2 pb-1" role="tablist" aria-label="تصنيفات الروابط">
        {categories.map((category) => {
          const isActive = activeCategory === category.name;

          return (
            <button
              key={category.name}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(category.name)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-extrabold transition focus:outline-none focus:ring-4 focus:ring-brand-teal/20 ${
                isActive
                  ? "border-brand-teal bg-brand-teal text-white shadow-lift"
                  : "border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-brand-teal hover:text-brand-teal dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              }`}
            >
              <span>{category.name}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300"
                }`}
              >
                {category.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
