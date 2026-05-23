import { SearchX } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center shadow-soft dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-mint text-brand-teal dark:bg-brand-teal/15 dark:text-teal-100">
        <SearchX size={26} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-black text-brand-ink dark:text-white">لا توجد نتائج مطابقة</h3>
      <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-300">
        جرّب كلمة مختلفة أو اختر تصنيفاً آخر.
      </p>
    </div>
  );
}
