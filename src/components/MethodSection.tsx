import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const MethodSection = () => {
  const steps = [
    {
      number: "1",
      title: "Define the End",
      description: "One specific, already-done outcome.",
    },
    {
      number: "2",
      title: "Build the Scene",
      description: "Brief, sensory-rich moment after it's achieved.",
    },
    {
      number: "3",
      title: "Feel It Real — Nightly",
      description: "5–10m SATS wind-down.",
    },
    {
      number: "4",
      title: "Daytime Inner Speech",
      description: "Swap old story for aligned phrases.",
    },
    {
      number: "5",
      title: "Revision",
      description: "Re-assign meaning to wobble moments.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Neville's "Live in the End" Works
          </h2>
          <p className="text-xl text-muted-foreground">
            The Simple Frame Robert Teaches His Students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => (
            <Card key={step.number} className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/30 backdrop-blur border border-primary/30 rounded-lg p-6 mb-8">
          <p className="text-lg text-foreground text-center">
            <span className="font-semibold">Result:</span> A daily rhythm that stabilises state, so behaviour and opportunities naturally align.
          </p>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
            Get Your Personal Plan — Free
          </Button>
        </div>
      </div>
    </section>
  );
};
