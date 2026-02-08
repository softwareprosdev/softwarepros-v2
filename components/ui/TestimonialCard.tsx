interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  delay?: number;
}

export function TestimonialCard({ quote, author, role, company, delay = 0 }: TestimonialCardProps) {
  return (
    <div
      className="bg-surface border border-border rounded-2xl p-6 md:p-8 card-hover animate-fade-in-up"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="text-primary text-3xl mb-4">&ldquo;</div>
      <p className="text-text-primary leading-relaxed mb-6">{quote}</p>
      <div>
        <p className="font-semibold text-text-primary">{author}</p>
        <p className="text-text-secondary text-sm">
          {role}, {company}
        </p>
      </div>
    </div>
  );
}
