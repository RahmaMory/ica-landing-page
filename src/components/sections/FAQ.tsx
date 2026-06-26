import { useState } from "react";

import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import FAQItem from "../ui/FAQItem";

import { faqData } from "../../data/faq";

const FAQ = () => {
  const [openIndex, setOpenIndex] =
    useState<number | null>(null);

  const handleToggle = (
    selectedIndex: number
  ) => {
    setOpenIndex((currentIndex) =>
      currentIndex === selectedIndex
        ? null
        : selectedIndex
    );
  };

  return (
    <section
      id="faq"
      className="relative py-32"
    >
      {/* Desktop glow only */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          hidden
          h-125
          w-125
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-[140px]
          lg:block
        "
      />

      <Container>
        <div className="relative">
          <div className="text-center">
            <SectionTitle
              badge="FAQ"
              title="Frequently Asked Questions"
              description="Everything you need to know about ICA Academy, learning tracks, mentorship, and career opportunities."
            />
          </div>

          <div className="mx-auto mt-20 max-w-4xl space-y-5">
            {faqData.map((item, index) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  handleToggle(index)
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;