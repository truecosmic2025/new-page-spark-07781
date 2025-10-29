import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Deep indigo/navy gradient like Robert's page */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f3a] via-[#252b4a] to-[#1e2640]" />
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 to-transparent" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Real Results</h2>
          <p className="text-xl text-muted-foreground">Short, Human Wins</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/40 backdrop-blur border-indigo-500/20 hover:border-indigo-400/40 transition-colors">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-cyan-400 mb-4" />
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="text-foreground font-semibold">— {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
            Book Now — Limited Spots This Week
          </Button>
        </div>
      </div>
    </section>
  );
};
