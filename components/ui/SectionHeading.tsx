interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered = true, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight animate-fade-in-up">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in-up delay-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
