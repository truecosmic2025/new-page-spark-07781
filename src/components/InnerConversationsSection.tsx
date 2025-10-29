import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const InnerConversationsSection = () => {
  const characteristics = [
    {
      title: "Short and kind",
      description: "One calm line said once—no fighting yourself.",
    },
    {
      title: "Identity-based",
      description: "Speak from the person who already has it.",
    },
    {
      title: "Cue-based",
      description: "Attach the line to a daily moment so it sticks.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Purple to dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f3460] to-[#16213e]" />
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Inner Conversations Feels Like
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {characteristics.map((char, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{char.title}</h3>
                  <p className="text-muted-foreground">{char.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
            Try It with Cheryl — Free
          </Button>
        </div>
      </div>
    </section>
  );
};
