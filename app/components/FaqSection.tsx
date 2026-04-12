"use client";

import { useState } from "react";
import ScrollFadeIn from "./ScrollFadeIn";

const faqs = [
  {
    question: "01. What is your design philosophy?",
    answer:
      "I believe great design is the point where functionality meets visual engagement. My informatics background helps me ensure every design is technically feasible and optimized for performance.",
  },
  {
    question: "02. How do you handle complex design requirements?",
    answer:
      "I excel at translating abstract complexity into intuitive, scalable solutions. I use iterative prototyping and usability testing to refine ideas until they are crystal clear for the end-user.",
  },
  {
    question: "03. Can you collaborate effectively with developer teams?",
    answer:
      "Yes. Having a technical foundation in NextJs, Python, and SQL allows me to speak the same language as developers, ensuring smooth handovers and accurate implementation of designs.",
  },
  {
    question: "04. What tools do you use for user research?",
    answer:
      "I use a combination of Figma for wireframing, Maze for usability testing, and surveys to gather behavioral insights. I rely on data to drive design decisions rather than just intuition.",
  },
  {
    question: "05. Are you open to both local and remote opportunities?",
    answer:
      "Absolutely. Based in DI Yogyakarta, I am open to collaborating with clients and teams worldwide to create impactful digital products.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="section-inner">
        <ScrollFadeIn className="flex justify-center w-full">
          <div className="fn-label !text-[#111] text-center">FAQ</div>
        </ScrollFadeIn>
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
      </div>
    </section>
  );
}
