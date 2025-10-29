import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Is this a coaching session?",
      answer: "No—it's a clarity consultation. We identify your bottleneck, set an End sentence, choose one starting technique, and recommend the best coaching path.",
    },
    {
      question: "Will I get a full plan?",
      answer: "Not on the consult. You'll receive a short recap and a coaching recommendation where your full plan is built.",
    },
    {
      question: "Do I need Neville experience?",
      answer: "No—Cheryl keeps it simple and practical.",
    },
    {
      question: "Is it really free?",
      answer: "Yes. If a program fits, we'll mention it—no pressure.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur border border-border/50 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
