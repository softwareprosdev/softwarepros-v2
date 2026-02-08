import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BentoCard } from "@/components/ui/BentoCard";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service social media marketing: management, content creation, paid advertising, influencer marketing, and analytics. See how SoftwarePros drives growth.",
};

const services = [
  {
    icon: "📱",
    title: "Social Media Management",
    description:
      "We take full ownership of your social channels. From content planning to daily publishing and community management, your brand stays active and engaging without you lifting a finger.",
    deliverables: [
      "Custom content calendar",
      "Daily posting & scheduling",
      "Community management & DMs",
      "Monthly performance reports",
      "Platform-specific optimization",
    ],
    outcome: "Consistent brand presence that builds trust and drives engagement across every platform.",
    span: 2 as const,
  },
  {
    icon: "✍️",
    title: "Content Strategy & Creation",
    description:
      "We create scroll-stopping content that earns attention. Our in-house team handles everything from concept to final edit — short-form video, carousels, stories, and static posts.",
    deliverables: [
      "Content strategy & brand voice",
      "Short-form video production",
      "Carousel & static design",
      "Copywriting & captions",
      "Trend analysis & adaptation",
    ],
    outcome: "Content that stops the scroll, starts conversations, and converts followers into customers.",
    span: 1 as const,
  },
  {
    icon: "📊",
    title: "Paid Social Advertising",
    description:
      "We build and optimize paid campaigns on Meta, TikTok, LinkedIn, and X. Every dollar is tracked, tested, and optimized to deliver the highest possible return on ad spend.",
    deliverables: [
      "Campaign strategy & setup",
      "Audience research & targeting",
      "Ad creative production",
      "A/B testing & optimization",
      "Weekly performance reporting",
    ],
    outcome: "Profitable ad campaigns that scale your reach and drive measurable revenue growth.",
    span: 1 as const,
  },
  {
    icon: "🤝",
    title: "Influencer & Creator Marketing",
    description:
      "We connect your brand with creators who actually move the needle. From identifying the right partners to managing campaigns and tracking ROI — we handle the full lifecycle.",
    deliverables: [
      "Creator discovery & vetting",
      "Outreach & negotiation",
      "Campaign brief creation",
      "Content review & approval",
      "Performance tracking & ROI",
    ],
    outcome: "Authentic creator partnerships that expand your reach and build genuine brand advocacy.",
    span: 1 as const,
  },
  {
    icon: "📈",
    title: "Analytics & Optimization",
    description:
      "Data drives everything we do. We set up comprehensive tracking, deliver clear dashboards, and use insights to continuously improve your strategy and results.",
    deliverables: [
      "Analytics setup & tracking",
      "Custom dashboards & reports",
      "Competitor benchmarking",
      "Growth opportunity analysis",
      "Quarterly strategy reviews",
    ],
    outcome: "Clear visibility into what's working, what's not, and exactly where to invest next.",
    span: 1 as const,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 animate-fade-in">
            Our Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary tracking-tight animate-fade-in-up delay-1">
            Full-service social media growth
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in-up delay-2">
            Everything you need to build a powerful social presence, engage your audience,
            and drive real business results.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, i) => (
              <BentoCard
                key={service.title}
                span={service.span}
                delay={i + 1}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-sm uppercase tracking-wider text-text-secondary font-semibold mb-3">
                    What you get
                  </h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-accent font-medium">{service.outcome}</p>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
