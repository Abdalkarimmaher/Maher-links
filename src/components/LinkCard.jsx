import { ArrowUpLeft, Clock3 } from "lucide-react";
import { FallbackIcon, iconMap } from "../utils/icons.jsx";

export default function LinkCard({ link, index = 0, compact = false }) {
  const Icon = iconMap[link.icon] ?? FallbackIcon;
  const isDisabled = link.comingSoon || !link.url;
  const animationDelay = `${Math.min(index * 45, 420)}ms`;

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-mint text-brand-teal transition group-hover:bg-brand-teal group-hover:text-white dark:bg-brand-teal/15 dark:text-teal-200">
          <Icon size={23} aria-hidden="true" />
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {link.category}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="text-lg font-extrabold leading-7 text-brand-ink dark:text-white">{link.title}</h3>
        <p className={`mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300 ${compact ? "line-clamp-2" : ""}`}>
          {link.description}
        </p>
      </div>

      <div className="mt-auto flex items-center justify-between pt-6">
        {isDisabled ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-extrabold text-slate-500 dark:bg-slate-800 dark:text-slate-300">
            <Clock3 size={17} aria-hidden="true" />
            قريباً
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-4 py-2 text-sm font-extrabold text-white transition group-hover:bg-brand-teal">
            فتح
            <ArrowUpLeft size={17} aria-hidden="true" />
          </span>
        )}
      </div>
    </>
  );

  const className =
    "group flex min-h-[238px] flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-teal/50 hover:shadow-lift focus:outline-none focus:ring-4 focus:ring-brand-teal/20 dark:border-slate-800 dark:bg-slate-900";

  if (isDisabled) {
    return (
      <article className={`${className} opacity-85 animate-fadeUp`} style={{ animationDelay }}>
        {content}
      </article>
    );
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className={`${className} animate-fadeUp`}
      style={{ animationDelay }}
      aria-label={`فتح ${link.title} في تبويب جديد`}
    >
      {content}
    </a>
  );
}
