import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export const ConsultSection = () => {
  const consultSteps = [
    {
      title: "A quick diagnostic of your primary bottleneck",
    },
    {
      title: "Your End sentence (already-done outcome)",
    },
    {
      title: "One recommended technique to start",
      description: "(Inner Speech / SATS / Revision)",
    },
    {
      title: "One micro step you can try tonight",
      description: "(under 5 minutes)",
    },
    {
      title: "A brief recap email",
      description: "with your End, the technique recommendation, and suggested next step",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What You'll Get In Your Free 30-Minute Consult
          </h2>
        </div>

        <div className="grid gap-6 mb-12">
          {consultSteps.map((step, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                    {step.description && (
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12">
            Claim Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
