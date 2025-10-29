import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "One replacement line changed my week. I stopped arguing with myself.",
      author: "Client A",
    },
    {
      text: "I finally had one End sentence and knew what to say in my head.",
      author: "Client B",
    },
    {
      text: "The micro step felt doable. That's why I stuck to it.",
      author: "Client C",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Real Results</h2>
          <p className="text-xl text-muted-foreground">Short, Human Wins</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="text-foreground font-semibold">— {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
