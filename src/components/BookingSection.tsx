import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Users } from "lucide-react";

export const BookingSection = () => {
  const steps = [
    {
      number: "1",
      title: "Pick a time with Cheryl",
      description: "Choose a convenient slot from our calendar.",
    },
    {
      number: "2",
      title: "Answer 3 quick questions",
      description: "Your goal + sticking point.",
    },
    {
      number: "3",
      title: "Check your email",
      description: "For the confirmation and Zoom link.",
    },
    {
      number: "4",
      title: "Join at your scheduled time",
      description: "We'll diagnose, pick one technique, and recommend your best coaching path.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#1a1a2e]" />
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            How Booking Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {steps.map((step) => (
            <Card key={step.number} className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="pt-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/30 backdrop-blur border border-primary/30 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-primary">
              <Users className="w-5 h-5" />
              <p className="font-semibold">12 people are viewing this page right now</p>
            </div>
            <CountdownTimer />
            <p className="text-sm text-muted-foreground">Book within the next 24 hours to secure this week's slot</p>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12">
            Book Your Clarity Consultation — Don't Wait
          </Button>
          <p className="text-xs text-muted-foreground mt-3">Spots fill fast. Most clients book within 6 hours of visiting.</p>
        </div>
      </div>
    </section>
  );
};
