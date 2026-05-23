import { ShieldAlert } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import CategoryTabs from "./components/CategoryTabs.jsx";
import FeaturedLinks from "./components/FeaturedLinks.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import LinksGrid from "./components/LinksGrid.jsx";
import SearchBar from "./components/SearchBar.jsx";
import { links } from "./data/links.js";

const ALL_CATEGORY = "الكل";
const CATEGORY_ORDER = [
  ALL_CATEGORY,
  "رسمي",
  "مساعدات غذائية",
  "تحديث بيانات",
  "ترميم وإيواء",
  "أيتام",
  "أطفال وذوي إعاقة",
  "مؤسسات خيرية",
  "روابط عامة",
];

function normalizeText(value) {
  return value
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .trim();
}

function WarningBanner() {
  return (
    <section className="mb-6 rounded-3xl border border-amber-200 bg-amber-50 px-4 py-4 text-amber-950 shadow-sm dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-100">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white text-amber-600 shadow-sm dark:bg-slate-900 dark:text-amber-200">
          <ShieldAlert size={21} aria-hidden="true" />
        </span>
        <p className="text-sm font-extrabold leading-7">
          تنويه هام: يرجى التأكد من الروابط وعدم مشاركة البيانات إلا عبر الجهات الرسمية أو المصادر الموثوقة.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("portal-theme") === "dark";
  });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 520);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("portal-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const categories = useMemo(() => {
    const counts = links.reduce(
      (accumulator, link) => {
        accumulator[link.category] = (accumulator[link.category] ?? 0) + 1;
        accumulator[ALL_CATEGORY] += 1;
        return accumulator;
      },
      { [ALL_CATEGORY]: 0 }
    );

    return CATEGORY_ORDER.map((name) => ({
      name,
      count: counts[name] ?? 0,
    }));
  }, []);

  const filteredLinks = useMemo(() => {
    const normalizedQuery = normalizeText(query);

    return links.filter((link) => {
      const matchesCategory = activeCategory === ALL_CATEGORY || link.category === activeCategory;
      const searchableText = normalizeText(`${link.title} ${link.category} ${link.description}`);
      const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const featuredLinks = useMemo(() => links.filter((link) => link.featured), []);

  return (
    <div id="top" className="min-h-screen bg-brand-cloud text-brand-ink antialiased dark:bg-slate-950">
      <Header isDark={isDark} onThemeToggle={() => setIsDark((value) => !value)} />

      <main className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <WarningBanner />

        <section className="mb-9">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold text-brand-teal">منصة مركزية للروابط</p>
            <h1 className="mt-3 text-3xl font-black leading-[1.35] text-brand-navy sm:text-4xl lg:text-5xl dark:text-white">
              وصول سريع وآمن إلى روابط المساعدات والخدمات
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              واجهة عربية منظمة تجمع الروابط الرسمية ومصادر المساعدات في مكان واحد واضح وسهل الاستخدام.
            </p>
          </div>
        </section>

        <div className="space-y-8">
          <SearchBar value={query} onChange={setQuery} resultCount={filteredLinks.length} />
          <CategoryTabs categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />
          {!query && activeCategory === ALL_CATEGORY && <FeaturedLinks links={featuredLinks} />}

          <section id="links" className="scroll-mt-32">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-extrabold text-brand-teal">دليل المواقع</p>
                <h2 className="mt-1 text-2xl font-black text-brand-ink dark:text-white">كل الروابط</h2>
              </div>
              <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
                {filteredLinks.length} من {links.length}
              </span>
            </div>
            <LinksGrid links={filteredLinks} loading={loading} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
