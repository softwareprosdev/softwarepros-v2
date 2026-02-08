import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/ui/BlogCard";
import { BentoGrid } from "@/components/ui/BentoGrid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, strategies, and actionable advice on social media marketing, content creation, paid advertising, and digital growth from the SoftwarePros team.",
};

const posts = [
  {
    title: "The 2025 Social Media Algorithm Playbook: What Actually Works",
    excerpt:
      "Algorithms change constantly, but the fundamentals don't. Here's what's working right now across Instagram, TikTok, LinkedIn, and X — and how to adapt your strategy.",
    category: "Strategy",
    date: "Jan 15, 2025",
    readTime: "8 min read",
  },
  {
    title: "Why Your Brand Needs Short-Form Video (And How to Start)",
    excerpt:
      "Short-form video isn't optional anymore — it's the highest-performing content format on every major platform. Here's how to start creating it without a massive production budget.",
    category: "Content",
    date: "Jan 8, 2025",
    readTime: "6 min read",
  },
  {
    title: "How to Calculate Social Media ROI (With Real Formulas)",
    excerpt:
      "Tired of guessing whether your social strategy is working? Here's the exact framework we use to measure ROI for our clients — from impressions to revenue.",
    category: "Analytics",
    date: "Dec 28, 2024",
    readTime: "10 min read",
  },
  {
    title: "Paid Social vs. Organic: Where to Spend Your Marketing Budget",
    excerpt:
      "The organic vs. paid debate is a false choice. The best strategies use both. Here's how to allocate your budget for maximum growth at every stage.",
    category: "Paid Media",
    date: "Dec 18, 2024",
    readTime: "7 min read",
  },
  {
    title: "The Founder-Led Content Playbook for LinkedIn",
    excerpt:
      "Your CEO's LinkedIn profile is your most underused marketing channel. Here's how we've helped founders build audiences that drive real pipeline.",
    category: "LinkedIn",
    date: "Dec 10, 2024",
    readTime: "9 min read",
  },
  {
    title: "5 Social Media Metrics That Actually Matter (And 5 That Don't)",
    excerpt:
      "Not all metrics are created equal. Follower count means nothing if it doesn't drive business outcomes. Here are the numbers you should actually care about.",
    category: "Analytics",
    date: "Dec 2, 2024",
    readTime: "5 min read",
  },
];

const categories = ["All", "Strategy", "Content", "Analytics", "Paid Media", "LinkedIn"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 animate-fade-in">
            Blog & Insights
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary tracking-tight animate-fade-in-up delay-1">
            Actionable insights for growth
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in-up delay-2">
            Strategies, frameworks, and lessons learned from growing 50+ brands on social media.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center animate-fade-in delay-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  cat === "All"
                    ? "bg-primary text-white"
                    : "bg-surface border border-border text-text-secondary hover:text-text-primary hover:border-primary/30"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <BentoGrid cols={3}>
            {posts.map((post, i) => (
              <BlogCard key={post.title} {...post} delay={i + 1} />
            ))}
          </BentoGrid>
        </div>
      </section>
    </>
  );
}
