import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy shadow-sm transition hover:-translate-y-0.5 hover:border-brand-teal hover:text-brand-teal focus:outline-none focus:ring-4 focus:ring-brand-teal/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      aria-label={isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
      title={isDark ? "الوضع الفاتح" : "الوضع الداكن"}
    >
      {isDark ? <Sun aria-hidden="true" size={20} /> : <Moon aria-hidden="true" size={20} />}
    </button>
  );
}
