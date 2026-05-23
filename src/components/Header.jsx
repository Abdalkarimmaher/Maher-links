import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

const navItems = [
  { label: "الرئيسية", href: "#top" },
  { label: "المميزة", href: "#featured" },
  { label: "الروابط", href: "#links" },
];

export default function Header({ isDark, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/[0.88]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-brand-teal/20">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-navy text-lg font-black text-white shadow-soft">
            ب
          </span>
          <span>
            <span className="block text-base font-extrabold text-brand-ink dark:text-white sm:text-lg">
              بوابة الروابط
            </span>
            <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">
              مرحباً بك، كل ما تحتاجه في مكان واحد
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex" aria-label="التنقل الرئيسي">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-brand-mint hover:text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-teal/20 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy shadow-sm transition hover:border-brand-teal hover:text-brand-teal focus:outline-none focus:ring-4 focus:ring-brand-teal/20 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="فتح القائمة"
          >
            {menuOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-slate-200 bg-white px-4 py-3 md:hidden dark:border-slate-800 dark:bg-slate-950"
          aria-label="التنقل للجوال"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-brand-mint hover:text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-teal/20 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
