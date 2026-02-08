import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  delay?: number;
}

export function BlogCard({ title, excerpt, category, date, readTime, slug, delay = 0 }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="bg-surface border border-border rounded-2xl p-6 md:p-8 card-hover animate-fade-in-up group block"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
        {category}
      </span>
      <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary-light transition-colors">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">{excerpt}</p>
      <div className="flex items-center justify-between text-xs text-text-secondary">
        <span>{date}</span>
        <span>{readTime}</span>
      </div>
    </Link>
  );
}
