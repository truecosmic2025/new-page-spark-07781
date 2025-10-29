import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary to-background">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          The End You Want Already Exists—
          <br />
          Let's Practice Living There
        </h2>
        
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Book your <span className="text-primary font-semibold">free, no-pressure</span> 30-minute session with Robert Meade and leave with a personalised action plan you can start tonight.
        </p>

        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 text-lg h-14 mb-12">
          Book Your Free 1:1 with Robert
        </Button>

        <div className="bg-card/30 backdrop-blur border border-border/50 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-foreground mb-2">Ethos & Safety</h3>
          <p className="text-sm text-muted-foreground">
            We care about <span className="font-semibold text-foreground">outcomes and emotional wellbeing</span>. Guidance is <span className="font-semibold text-foreground">gentle, non-judgmental</span>, and tailored to real life. Please seek licensed care for medical or mental-health concerns.
          </p>
        </div>
      </div>
    </section>
  );
};
