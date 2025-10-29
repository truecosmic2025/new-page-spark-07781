import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    "You've read about manifestation but struggle to be consistent.",
    "You're not sure if your inner conversations are helping or hurting.",
    "You've tried SATS, scripting, or revision…and ended up overthinking.",
    "You want results you can feel—in love, money, or peace of mind.",
  ];

  const solutions = [
    "A single, personalised plan based on Neville's Live in the End—tailored to your goal.",
    "A clear imaginal scene you can sink into nightly (no more guesswork).",
    "Daily prompts that keep you on track when doubt creeps in.",
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary to-background">
      <div className="container max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Is this you? */}
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Is this you?</h2>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What changes here */}
          <Card className="bg-card/50 backdrop-blur border-primary/30">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold mb-6 text-foreground">What changes here:</h2>
              <ul className="space-y-4 mb-8">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Book Your Free 1:1 Session
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
