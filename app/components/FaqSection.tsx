"use client";

import { useState } from "react";
import ScrollFadeIn from "./ScrollFadeIn";

const faqs = [
  {
    question: "01. How are your projects finished?",
    answer:
      "Each project follows a structured process: discovery → design → development → launch. I provide regular updates throughout and ensure everything is thoroughly tested before delivery.",
  },
  {
    question: "02. How often do we stay in contact during the project?",
    answer:
      "We maintain regular communication through weekly check-ins, progress updates, and real-time collaboration. You'll always know exactly where your project stands.",
  },
  {
    question: "03. Can you work with existing design tools/systems?",
    answer:
      "Absolutely. I'm experienced with Figma, Adobe Creative Suite, Framer, Webflow, and many other tools. I can integrate seamlessly into your existing workflow.",
  },
  {
    question: "04. How do you handle client feedback?",
    answer:
      "I welcome feedback at every stage. Each project includes revision rounds, and I use collaborative tools to ensure feedback is clearly communicated and implemented efficiently.",
  },
  {
    question: "05. Do you provide post-launch support?",
    answer:
      "Yes! I offer post-launch support packages to ensure your website continues to perform optimally. This includes minor updates, bug fixes, and performance monitoring.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <ScrollFadeIn className="faq-tag">FAQ</ScrollFadeIn>
      <ScrollFadeIn>
        <h2 className="faq-h2">Got Questions?</h2>
      </ScrollFadeIn>
      <ScrollFadeIn className="faq-list">
        {faqs.map((faq, i) => (
          <div
            className={`faq-item${openIndex === i ? " open" : ""}`}
            key={faq.question}
          >
            <div className="faq-q" onClick={() => toggleFaq(i)}>
              <span>{faq.question}</span>
              <div className="faq-toggle">+</div>
            </div>
            <div className="faq-a">{faq.answer}</div>
          </div>
        ))}
      </ScrollFadeIn>
    </section>
  );
}
