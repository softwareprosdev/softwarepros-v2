import type { Metadata } from "next";
import { BlogCard } from "@/components/ui/BlogCard";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { posts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, strategies, and actionable advice on social media marketing, content creation, paid advertising, and digital growth from the SoftwarePros team.",
};

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
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                date={post.date}
                readTime={post.readTime}
                slug={post.slug}
                delay={i + 1}
              />
            ))}
          </BentoGrid>
        </div>
      </section>
    </>
  );
}
