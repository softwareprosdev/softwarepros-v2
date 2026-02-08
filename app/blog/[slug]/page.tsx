import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/blog-data";
import { Button } from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl md:text-3xl font-bold text-text-primary mt-12 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl md:text-2xl font-bold text-text-primary mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- **")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`list-${i}`} className="space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-text-secondary leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`list-${i}`} className="space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-text-secondary leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith("| ")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("| ") || lines[i]?.startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      elements.push(renderTable(tableLines, i));
      continue;
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="text-text-primary font-semibold mt-6 mb-2">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      elements.push(
        <p
          key={i}
          className="text-text-secondary leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: formatInline(line) }}
        />
      );
    }

    i++;
  }

  return elements;
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-text-primary font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

function renderTable(lines: string[], keyBase: number) {
  const rows = lines.filter((l) => !l.match(/^\|[\s-|]+$/));
  if (rows.length === 0) return null;

  const parseRow = (row: string) =>
    row
      .split("|")
      .slice(1, -1)
      .map((c) => c.trim());

  const headers = parseRow(rows[0]);
  const bodyRows = rows.slice(1).map(parseRow);

  return (
    <div key={`table-${keyBase}`} className="overflow-x-auto my-6">
      <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-surface-elevated">
            {headers.map((h, j) => (
              <th key={j} className="px-4 py-3 text-left text-text-primary font-semibold border-b border-border">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, j) => (
            <tr key={j} className="border-b border-border last:border-0">
              {row.map((cell, k) => (
                <td
                  key={k}
                  className="px-4 py-3 text-text-secondary"
                  dangerouslySetInnerHTML={{ __html: formatInline(cell) }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <article className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="mb-8 animate-fade-in">
            <Link
              href="/blog"
              className="text-sm text-text-secondary hover:text-primary transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>

          <header className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4 animate-fade-in">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight animate-fade-in-up delay-1">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-4 text-sm text-text-secondary animate-fade-in-up delay-2">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Article Body */}
          <div className="animate-fade-in-up delay-3">
            {renderContent(post.content)}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 text-center">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Want results like these for your brand?
              </h3>
              <p className="text-text-secondary mb-6">
                Book a free strategy call and we&apos;ll show you exactly how we&apos;d grow your social presence.
              </p>
              <Button href="/contact" variant="primary">
                Book Free Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: "SoftwarePros",
            },
            publisher: {
              "@type": "Organization",
              name: "SoftwarePros",
              url: "https://softwarepros.org",
            },
          }),
        }}
      />
    </>
  );
}
