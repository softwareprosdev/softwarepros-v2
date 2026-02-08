import { Hero } from "@/components/sections/Hero";
import { ServicesSnapshot } from "@/components/sections/ServicesSnapshot";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { FAQItem } from "@/components/ui/FAQItem";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "What social media platforms do you manage?",
    answer:
      "We manage all major platforms including Instagram, TikTok, LinkedIn, X (Twitter), Facebook, YouTube, and Pinterest. We recommend a platform strategy based on your target audience and business goals — you don't need to be everywhere, just where your audience is.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients see measurable improvements in engagement within the first 30 days. Significant follower growth and lead generation typically ramp up by months 2-3. Paid campaigns can deliver results within the first week. We set clear benchmarks so you always know where you stand.",
  },
  {
    question: "Do you create all the content?",
    answer:
      "Yes. Our team handles everything from strategy and scripting to design, filming, and editing. We create platform-native content — meaning each piece is optimized for the specific platform it's published on, not just resized and reposted.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer monthly retainer packages based on the scope of services you need. Packages typically start at $2,000/month for single-platform management and scale up for full-service, multi-platform strategies. Book a free strategy call and we'll build a custom quote.",
  },
  {
    question: "How is SoftwarePros different from other agencies?",
    answer:
      "We're operators, not just marketers. Our team has built and scaled brands from zero — so we understand the business outcomes behind every post, ad, and campaign. We focus on metrics that matter: leads, revenue, and ROI — not just vanity metrics.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSnapshot />
      <Results />
      <Testimonials />

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <SectionHeading
            title="Frequently asked questions"
            subtitle="Quick answers to the questions we hear most."
          />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} delay={i + 1} />
            ))}
          </div>
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
              "Social media marketing and digital growth agency helping brands grow through strategic content, paid advertising, and data-driven strategies.",
            url: "https://softwarepros.org",
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              email: "hello@softwarepros.org",
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
