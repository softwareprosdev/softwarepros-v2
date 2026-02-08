"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-xl font-bold text-text-primary tracking-tight">
            Software<span className="text-primary">Pros</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl btn-glow"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className="w-6 h-0.5 bg-text-primary transition-transform duration-200"
              style={{
                transform: mobileOpen ? "rotate(45deg) translate(2.5px, 2.5px)" : "none",
              }}
            />
            <span
              className="w-6 h-0.5 bg-text-primary transition-opacity duration-200"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="w-6 h-0.5 bg-text-primary transition-transform duration-200"
              style={{
                transform: mobileOpen ? "rotate(-45deg) translate(2.5px, -2.5px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 border-t border-border"
        style={{ maxHeight: mobileOpen ? "400px" : "0px" }}
      >
        <div className="px-4 py-4 space-y-3 bg-surface">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-text-secondary hover:text-text-primary transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center px-5 py-3 bg-primary text-white font-semibold rounded-xl mt-2"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
