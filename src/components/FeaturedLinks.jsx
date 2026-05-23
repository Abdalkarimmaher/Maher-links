import LinkCard from "./LinkCard.jsx";

export default function FeaturedLinks({ links }) {
  if (!links.length) return null;

  return (
    <section id="featured" className="scroll-mt-28">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-extrabold text-brand-teal">روابط مقترحة</p>
          <h2 className="mt-1 text-2xl font-black text-brand-ink dark:text-white">الأكثر استخداماً</h2>
        </div>
        <span className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-slate-500 shadow-sm dark:bg-slate-900 dark:text-slate-300">
          {links.length}
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {links.map((link, index) => (
          <LinkCard key={link.title} link={link} index={index} compact />
        ))}
      </div>
    </section>
  );
}
