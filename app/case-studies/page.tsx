import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how SoftwarePros has helped brands grow their social media presence, increase engagement, and drive revenue with real case studies and results.",
};

const caseStudies = [
  {
    industry: "Beauty & Skincare",
    title: "How Lumina Beauty grew from 5K to 120K followers in 6 months",
    challenge:
      "Lumina Beauty had a great product but zero social media presence. They were posting inconsistently with no strategy, getting minimal engagement, and losing market share to competitors with strong online brands.",
    solution:
      "We built a content-first strategy centered on short-form video and UGC-style content. We launched a TikTok-first approach with daily posting, paired with Instagram Reels repurposing and a targeted paid campaign to amplify top-performing organic content.",
    results:
      "In 6 months, Lumina went from 5K to 120K followers across platforms. Their engagement rate hit 6.2% (3x industry average), and social-driven revenue increased by 340%.",
    metrics: [
      { label: "Followers", before: "5K", after: "120K" },
      { label: "Engagement Rate", before: "0.8%", after: "6.2%" },
      { label: "Social Revenue", before: "$12K/mo", after: "$52K/mo" },
    ],
  },
  {
    industry: "Health & Nutrition",
    title: "FitFuel Nutrition: 4.8x ROAS on their first paid campaign",
    challenge:
      "FitFuel was spending $15K/month on Meta ads with a 1.2x ROAS. Their creative was stale, targeting was broad, and they had no testing framework. They were burning cash with diminishing returns.",
    solution:
      "We rebuilt their ad account from scratch. New creative formats (UGC testimonials, before/after content), refined audience segmentation, and a systematic A/B testing framework. We also aligned their organic content with paid messaging for consistency.",
    results:
      "Within 90 days, ROAS jumped from 1.2x to 4.8x. Cost per acquisition dropped by 62%, and monthly revenue from paid social doubled — all on the same ad budget.",
    metrics: [
      { label: "ROAS", before: "1.2x", after: "4.8x" },
      { label: "CPA", before: "$45", after: "$17" },
      { label: "Monthly Revenue", before: "$18K", after: "$72K" },
    ],
  },
  {
    industry: "B2B SaaS",
    title: "CloudStack generated 200+ qualified leads via LinkedIn",
    challenge:
      "CloudStack had a strong product but struggled to generate inbound leads. Their LinkedIn presence was corporate and dry, their content got almost no engagement, and their sales team was relying entirely on cold outreach.",
    solution:
      "We repositioned their LinkedIn strategy around thought leadership and founder-led content. We ghostwrote posts for their CEO and VP of Sales, created a content series around customer pain points, and ran targeted LinkedIn ad campaigns to drive demo bookings.",
    results:
      "In 4 months, CloudStack generated 200+ qualified leads from LinkedIn alone. Their CEO's profile grew from 2K to 15K followers, and the average cost per qualified lead dropped to $35.",
    metrics: [
      { label: "Qualified Leads", before: "12/mo", after: "50+/mo" },
      { label: "CEO Followers", before: "2K", after: "15K" },
      { label: "Cost per Lead", before: "$120", after: "$35" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 animate-fade-in">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary tracking-tight animate-fade-in-up delay-1">
            Real brands. Real results.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in-up delay-2">
            See how we&apos;ve helped brands across industries grow their social presence,
            increase engagement, and drive real revenue.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-6">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.title} {...study} delay={i + 1} />
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
