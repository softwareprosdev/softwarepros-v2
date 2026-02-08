interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  span?: 1 | 2;
  delay?: number;
}

export function BentoCard({ children, className = "", span = 1, delay = 0 }: BentoCardProps) {
  const spanClass = span === 2 ? "md:col-span-2" : "";

  return (
    <div
      className={`bg-surface border border-border rounded-2xl p-6 md:p-8 card-hover animate-fade-in-up ${spanClass} ${className}`}
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      {children}
    </div>
  );
}
