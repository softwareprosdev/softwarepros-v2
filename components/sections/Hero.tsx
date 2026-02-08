import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-pattern pt-20">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center py-20 md:py-32">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
            Social Media Marketing & Digital Growth
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary tracking-tight leading-tight animate-fade-in-up delay-1">
          We grow brands that{" "}
          <span className="gradient-text">people actually follow</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-2">
          Strategic social media marketing, content that converts, and data-driven growth
          strategies that turn followers into customers.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-3">
          <Button href="/contact" variant="primary" size="lg">
            Start Growing Today
          </Button>
          <Button href="/case-studies" variant="secondary" size="lg">
            See Our Results
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-text-secondary text-sm animate-fade-in delay-5">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success" />
            500M+ Impressions Delivered
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success" />
            50+ Brands Scaled
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success" />
            3x Average Engagement
          </span>
        </div>
      </div>
    </section>
  );
}
