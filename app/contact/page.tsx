import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";
import { FAQItem } from "@/components/ui/FAQItem";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SoftwarePros. Book a free strategy call and learn how we can help grow your brand through social media marketing.",
};

const contactFaqs = [
  {
    question: "What happens after I submit this form?",
    answer:
      "A member of our team will reach out within 24 hours to schedule a free 30-minute strategy call. On that call, we'll learn about your business, audit your current social presence, and share initial recommendations — no strings attached.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. We work with brands at every stage — from pre-launch startups to established companies doing $50M+ in revenue. Our packages are designed to scale with your needs and budget.",
  },
  {
    question: "How long are your contracts?",
    answer:
      "We typically work on 3-month initial engagements, which gives enough time to build momentum and demonstrate real results. After that, engagements continue month-to-month. No long-term lock-ins.",
  },
  {
    question: "Can I see examples of your work first?",
    answer:
      "Absolutely. Check out our Case Studies page for detailed breakdowns of the results we've delivered for clients across multiple industries.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 animate-fade-in">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary tracking-tight animate-fade-in-up delay-1">
            Let&apos;s grow your brand
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in-up delay-2">
            Book a free strategy call. We&apos;ll audit your social presence and show you exactly
            how we&apos;d scale it.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Form */}
            <div className="animate-fade-in-up delay-2">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up delay-3">
              <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-text-primary mb-6">Other ways to reach us</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Email</p>
                    <p className="text-text-primary font-medium">hello@softwarepros.org</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Response Time</p>
                    <p className="text-text-primary font-medium">Within 24 hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Based In</p>
                    <p className="text-text-primary font-medium">Remote-first, US-based team</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-text-primary mb-4">What to expect</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">
                      1
                    </span>
                    <div>
                      <p className="text-text-primary font-medium text-sm">Free strategy call</p>
                      <p className="text-text-secondary text-sm">30-minute call to understand your goals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">
                      2
                    </span>
                    <div>
                      <p className="text-text-primary font-medium text-sm">Social audit & proposal</p>
                      <p className="text-text-secondary text-sm">We audit your presence and deliver a custom plan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">
                      3
                    </span>
                    <div>
                      <p className="text-text-primary font-medium text-sm">Kickoff & execution</p>
                      <p className="text-text-secondary text-sm">We get to work within the first week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12 animate-fade-in-up">
            Questions about getting started
          </h2>
          <div className="space-y-3">
            {contactFaqs.map((faq, i) => (
              <FAQItem key={i} {...faq} delay={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: contactFaqs.map((faq) => ({
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
