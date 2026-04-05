"use client";

import type { FaqItem } from "@/content/home";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section className="bg-[var(--section-bg)] py-12 sm:py-16 md:py-20">
      {/* Wrapper-only changes: spacing + stacking to keep FAQ readable on mobile */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-8 text-xs uppercase tracking-[0.35em] text-[var(--text-accent)] sm:pb-10">
          <span>006</span>
          <span className="normal-case tracking-normal">{"//FAQ"}</span>
        </div>
        <div className="grid gap-8 md:gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <h2 className="text-display text-[clamp(2.2rem,4.4vw,3.35rem)] leading-[1.05] tracking-[-0.02em]">
              Questions
              <br />
              & <span className="text-italic text-accent">Answers</span>
            </h2>
          </div>
          <div className="border-t border-[var(--divider)]">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
