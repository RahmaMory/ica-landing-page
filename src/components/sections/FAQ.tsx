import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import FAQItem from "../ui/FAQItem";
import { faqData } from "../../data/faq";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-32"
    >
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <Container>
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
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;