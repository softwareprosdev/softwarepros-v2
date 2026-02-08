import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { BentoGrid } from "@/components/ui/BentoGrid";

const testimonials = [
  {
    quote:
      "SoftwarePros completely transformed our social presence. In 6 months, we went from 5k to 120k followers — and more importantly, our DM inquiries tripled.",
    author: "Sarah Chen",
    role: "CMO",
    company: "Lumina Beauty",
  },
  {
    quote:
      "They don't just post content — they build systems. Our engagement rate went from 1.2% to 4.8%, and we're converting followers into paying customers every week.",
    author: "Marcus Rivera",
    role: "Founder",
    company: "FitFuel Nutrition",
  },
  {
    quote:
      "The team at SoftwarePros treats our brand like their own. Their strategic approach to paid social cut our cost per lead by 60% while doubling our pipeline.",
    author: "Emily Watson",
    role: "VP Marketing",
    company: "CloudStack SaaS",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="Trusted by growing brands"
          subtitle="Don't take our word for it — hear from the brands we've helped scale."
        />
        <BentoGrid cols={3}>
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.author} {...testimonial} delay={i + 1} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
