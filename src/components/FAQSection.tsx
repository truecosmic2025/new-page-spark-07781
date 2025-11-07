import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "¿Esto es coaching?",
      answer: "Es una consulta de claridad. Identificamos tu obstáculo principal, establecemos una frase de Fin, elegimos una técnica y ofrecemos una recomendación de coaching.",
    },
    {
      question: "¿Salgo con un plan completo?",
      answer: "No de la consulta. Recibirás un breve resumen y una ruta de coaching recomendada donde se construye tu plan completo.",
    },
    {
      question: "¿Necesito experiencia con Neville?",
      answer: "No—Blanca lo mantiene simple y práctico.",
    },
    {
      question: "¿Es realmente gratis?",
      answer: "Sí. Si un programa es adecuado, lo mencionaremos—sin presión.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#16213e]" />
      <div className="container max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
          Preguntas Frecuentes
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
