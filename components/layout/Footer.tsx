import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Services: [
    { href: "/services", label: "Social Media Management" },
    { href: "/services", label: "Content Strategy" },
    { href: "/services", label: "Paid Advertising" },
    { href: "/services", label: "Influencer Marketing" },
    { href: "/services", label: "Analytics & Optimization" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Resources: [
    { href: "/blog", label: "Insights" },
    { href: "/case-studies", label: "Success Stories" },
    { href: "/contact", label: "Free Consultation" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="SoftwarePros" width={150} height={34} />
            </Link>
            <p className="mt-4 text-text-secondary text-sm leading-relaxed">
              We help brands grow through strategic social media marketing and data-driven digital growth strategies.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-colors"
              >
                𝕏
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-colors"
              >
                in
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-colors"
              >
                IG
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-text-primary mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} SoftwarePros. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-secondary">
            <a href="#" className="hover:text-text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
