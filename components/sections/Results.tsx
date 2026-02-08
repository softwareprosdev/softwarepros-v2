import { SectionHeading } from "@/components/ui/SectionHeading";
import { MetricCard } from "@/components/ui/MetricCard";

const metrics = [
  { value: "500M+", label: "Impressions Delivered", growth: "127% YoY" },
  { value: "3.2x", label: "Average Engagement Rate", growth: "vs industry avg" },
  { value: "50+", label: "Brands Scaled", growth: "across 12 industries" },
  { value: "4.8x", label: "Average ROAS", growth: "on paid campaigns" },
];

export function Results() {
  return (
    <section className="py-20 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="Results that speak for themselves"
          subtitle="We measure our success by yours. Here's what our strategies have delivered across all clients."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} {...metric} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
