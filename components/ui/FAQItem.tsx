"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  delay?: number;
}

export function FAQItem({ question, answer, delay = 0 }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-border rounded-2xl overflow-hidden animate-fade-in-up"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left bg-surface hover:bg-surface-elevated transition-colors"
      >
        <span className="font-semibold text-text-primary pr-4">{question}</span>
        <span
          className="text-primary text-xl flex-shrink-0 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "500px" : "0px" }}
      >
        <div className="px-6 pb-5 text-text-secondary leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
