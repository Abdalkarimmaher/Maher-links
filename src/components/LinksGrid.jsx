import EmptyState from "./EmptyState.jsx";
import LinkCard from "./LinkCard.jsx";
import SkeletonCard from "./SkeletonCard.jsx";

export default function LinksGrid({ links, loading }) {
  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (!links.length) {
    return <EmptyState />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {links.map((link, index) => (
        <LinkCard key={`${link.title}-${link.category}`} link={link} index={index} />
      ))}
    </div>
  );
}
