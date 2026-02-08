interface MetricCardProps {
  value: string;
  label: string;
  growth?: string;
  delay?: number;
}

export function MetricCard({ value, label, growth, delay = 0 }: MetricCardProps) {
  return (
    <div
      className="bg-surface border border-border rounded-2xl p-6 md:p-8 text-center card-hover animate-fade-in-up"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <p className="text-4xl md:text-5xl font-bold font-mono gradient-text">{value}</p>
      <p className="mt-2 text-text-secondary text-sm md:text-base">{label}</p>
      {growth && (
        <p className="mt-2 text-success text-sm font-mono flex items-center justify-center gap-1">
          <span>↑</span> {growth}
        </p>
      )}
    </div>
  );
}
