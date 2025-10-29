import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary px-4 py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
      
      <div className="container relative z-10 max-w-5xl mx-auto text-center">
        {/* Main headline */}
        <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Change the Voice Inside —{" "}
          <span className="text-primary">Change the Life Outside</span>
        </h1>

        {/* Subheadline */}
        <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Book a <span className="text-primary font-semibold">free 30-minute clarity consult</span> with <span className="font-semibold text-foreground">Cheryl Andrisani</span>. We'll identify your main bottleneck, craft a clean End sentence, and recommend the right coaching path using Neville's <span className="font-semibold text-foreground">Inner Conversations</span> and <span className="font-semibold text-foreground">Self-Concept</span> methods.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-muted-foreground">
          <span>Judgment-free</span>
          <span className="text-muted-foreground/50">•</span>
          <span>Neville methods</span>
          <span className="text-muted-foreground/50">•</span>
          <span>Practical micro steps</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 text-lg h-14">
            Book Your Clarity Consultation
          </Button>
          <Button size="lg" variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/10 px-8 text-lg h-14">
            Learn How Inner Conversations Work
          </Button>
        </div>

        {/* Micro-copy */}
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto italic">
          It's a diagnostic consult—not a full coaching session. If a program fits, we'll recommend it—no pressure.
        </p>
      </div>
    </section>
  );
};
