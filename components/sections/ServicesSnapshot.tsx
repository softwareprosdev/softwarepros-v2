import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { BentoGrid } from "@/components/ui/BentoGrid";

const services = [
  {
    icon: "📱",
    title: "Social Media Management",
    description:
      "Full-service management of your social channels. We handle strategy, content calendars, publishing, and community engagement so you can focus on your business.",
  },
  {
    icon: "✍️",
    title: "Content Strategy & Creation",
    description:
      "Scroll-stopping content crafted for your audience. From short-form video to carousels and stories — every piece designed to drive engagement.",
  },
  {
    icon: "📊",
    title: "Paid Social Advertising",
    description:
      "High-ROI ad campaigns on Meta, TikTok, LinkedIn, and X. We target, test, and optimize to maximize every dollar of your ad spend.",
  },
  {
    icon: "🤝",
    title: "Influencer & Creator Marketing",
    description:
      "We connect your brand with the right creators. From micro-influencers to established voices — authentic partnerships that drive real results.",
  },
  {
    icon: "📈",
    title: "Analytics & Optimization",
    description:
      "Data doesn't lie. We track every metric that matters, deliver clear reports, and continuously optimize your strategy for growth.",
  },
];

export function ServicesSnapshot() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="Everything you need to grow"
          subtitle="We offer a full suite of social media marketing services, each built around one goal: measurable growth for your brand."
        />
        <BentoGrid cols={3}>
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} delay={i + 1} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
