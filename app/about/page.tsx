import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BentoCard } from "@/components/ui/BentoCard";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "SoftwarePros is a social media marketing and digital growth agency built by operators who understand that marketing only matters if it drives business results.",
};

const values = [
  {
    title: "Results over activity",
    description:
      "We don't measure success by how many posts we publish. We measure it by the leads, revenue, and growth our work creates for your business.",
    icon: "🎯",
  },
  {
    title: "Radical transparency",
    description:
      "You'll always know exactly what we're doing, why we're doing it, and how it's performing. No black boxes, no vanity metrics, no fluff.",
    icon: "🔍",
  },
  {
    title: "Speed and iteration",
    description:
      "Social media moves fast. We test, learn, and optimize in real time — not quarterly. If something isn't working, we fix it this week, not next month.",
    icon: "⚡",
  },
  {
    title: "Brand-first thinking",
    description:
      "Growth hacks fade. Strong brands compound. We build strategies that grow your audience and strengthen your brand at the same time.",
    icon: "💎",
  },
];

const approach = [
  {
    step: "01",
    title: "Understand",
    description:
      "We start by deeply understanding your business, audience, competitors, and goals. No cookie-cutter strategies — every engagement begins with research.",
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "We build a custom growth plan with clear targets, platform priorities, content pillars, and a paid media framework designed to hit your specific goals.",
  },
  {
    step: "03",
    title: "Execute",
    description:
      "Our team goes to work — creating content, managing channels, running campaigns, and engaging your community. You stay focused on your business.",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "We continuously monitor performance, test new approaches, and refine the strategy based on real data. Every month gets better than the last.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero / Mission */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 animate-fade-in">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary tracking-tight animate-fade-in-up delay-1">
            Built by operators.{" "}
            <span className="gradient-text">Driven by growth.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-2">
            SoftwarePros started as a software development company. We pivoted because we saw an
            opportunity to apply the same rigorous, data-driven approach to social media marketing.
            We&apos;re not traditional marketers — we&apos;re builders who happen to be great at growing
            brands online.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeading
            title="How we work"
            subtitle="A proven four-step framework that we apply to every engagement."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {approach.map((item, i) => (
              <BentoCard key={item.step} delay={i + 1}>
                <span className="text-4xl font-bold font-mono text-primary/30">{item.step}</span>
                <h3 className="text-xl font-bold text-text-primary mt-2 mb-3">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeading
            title="What we believe"
            subtitle="The principles that guide every decision we make."
          />
          <BentoGrid cols={2}>
            {values.map((value, i) => (
              <BentoCard key={value.title} delay={i + 1}>
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{value.title}</h3>
                <p className="text-text-secondary leading-relaxed">{value.description}</p>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <BentoCard span={2} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Why brands trust us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold font-mono gradient-text">50+</p>
                <p className="text-text-secondary mt-1">Brands scaled</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-mono gradient-text">12</p>
                <p className="text-text-secondary mt-1">Industries served</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-mono gradient-text">500M+</p>
                <p className="text-text-secondary mt-1">Impressions delivered</p>
              </div>
            </div>
            <p className="mt-8 text-text-secondary max-w-2xl mx-auto leading-relaxed">
              From DTC brands and SaaS companies to health and wellness startups, we&apos;ve helped
              businesses at every stage grow their social presence and turn followers into revenue.
            </p>
          </BentoCard>
        </div>
      </section>

      <CTA />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SoftwarePros",
            description:
              "Social media marketing and digital growth agency built by operators who understand that marketing only matters if it drives business results.",
            url: "https://softwarepros.org",
            foundingDate: "2020",
            numberOfEmployees: {
              "@type": "QuantitativeValue",
              minValue: 10,
              maxValue: 50,
            },
          }),
        }}
      />
    </>
  );
}
