import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const CoachSection = () => {
  const coachingPoints = [
    {
      title: "Clarity first",
      description: "One End sentence you can actually live from.",
    },
    {
      title: "Voice upgrade",
      description: "One replacement line you'll use when doubt appears.",
    },
    {
      title: "Consistency over drama",
      description: "Tiny, sustainable repetitions that reshape identity.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Purple to dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#16213e] via-[#1a1a2e] to-[#0f3460]" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
            Specialty: Inner Conversations & Self-Concept
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Meet Your Coach — Cheryl Andrisani
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Coach info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Who I am:</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm Cheryl, an imagination & consciousness coach at Truecosmic. I specialise in <span className="text-primary font-semibold">Inner Conversations</span> and <span className="text-primary font-semibold">Self-Concept</span>—translating Neville's teachings into simple, repeatable practices you can live with.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-foreground">How I coach:</h3>
            <ul className="space-y-4 mb-6">
              {coachingPoints.map((point, index) => (
                <li key={index} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">{point.title}:</span>{" "}
                    <span className="text-muted-foreground">{point.description}</span>
                  </div>
                </li>
              ))}
            </ul>

            <Card className="bg-card/50 backdrop-blur border-primary/30 mb-6">
              <CardContent className="pt-6">
                <p className="text-foreground italic">
                  <span className="font-semibold">Guiding idea:</span> Your self-concept speaks first—we train that voice.
                </p>
              </CardContent>
            </Card>

            <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              Book with Cheryl — Free 30 Minutes
            </Button>
          </div>

          {/* Coach photo placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary overflow-hidden border border-primary/30">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                {/* Photo will be added here */}
                <p className="text-sm">Coach photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
