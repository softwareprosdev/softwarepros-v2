import Link from "next/link";

interface Metric {
  label: string;
  before: string;
  after: string;
}

interface CaseStudyCardProps {
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: Metric[];
  delay?: number;
}

export function CaseStudyCard({
  industry,
  title,
  challenge,
  solution,
  results,
  metrics,
  delay = 0,
}: CaseStudyCardProps) {
  return (
    <div
      className="bg-surface border border-border rounded-2xl p-6 md:p-8 card-hover animate-fade-in-up"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
        {industry}
      </span>
      <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-4">{title}</h3>

      <div className="space-y-3 mb-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold mb-1">Challenge</p>
          <p className="text-text-secondary text-sm leading-relaxed">{challenge}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold mb-1">Solution</p>
          <p className="text-text-secondary text-sm leading-relaxed">{solution}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-text-secondary font-semibold mb-1">Results</p>
          <p className="text-text-secondary text-sm leading-relaxed">{results}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-background rounded-xl p-3 text-center">
            <p className="text-xs text-text-secondary mb-1">{metric.label}</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-text-secondary text-sm line-through">{metric.before}</span>
              <span className="text-success font-bold font-mono">{metric.after}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
