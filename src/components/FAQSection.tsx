import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Do I need Neville experience?",
      answer: "No prior experience is needed. Whether you're new to Neville Goddard's teachings or have been practicing for years, we'll meet you where you are and create a personalized plan that works for you.",
    },
    {
      question: "Is the session really free?",
      answer: "Yes, absolutely. The 30-minute consultation is completely free with no hidden costs or obligations. We want you to experience the value firsthand before making any commitments.",
    },
    {
      question: "How fast will I see changes?",
      answer: "Many students report feeling shifts in their inner state within the first week. External manifestations vary by person and goal, but consistent practice typically shows results within 21-30 days.",
    },
    {
      question: "What if my goal changes?",
      answer: "That's completely normal. Your plan is flexible and can be adjusted as your desires clarify. The techniques you'll learn can be applied to any goal you choose.",
    },
    {
      question: "Is this therapy?",
      answer: "No, this is imagination coaching based on Neville Goddard's teachings. While it can be emotionally supportive, it's not a substitute for licensed mental health care. We recommend seeking professional help for medical or mental health concerns.",
    },
    {
      question: "What should I prepare?",
      answer: "Come with one clear goal or desire in mind. That's it. We'll handle the rest together during the session.",
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
