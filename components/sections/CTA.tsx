import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative bg-surface border border-border rounded-3xl p-8 md:p-16 text-center overflow-hidden">
          {/* Background gradient orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight animate-fade-in-up">
              Ready to grow your brand?
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto animate-fade-in-up delay-1">
              Book a free strategy call. We&apos;ll audit your social presence and show you exactly
              how we&apos;d scale it.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-2">
              <Button href="/contact" variant="primary" size="lg">
                Book Free Strategy Call
              </Button>
              <Button href="/case-studies" variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
