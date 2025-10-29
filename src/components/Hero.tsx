import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary px-4 py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
      
      <div className="container relative z-10 max-w-5xl mx-auto text-center">
        {/* Top badge */}
        <Badge className="mb-8 bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
          <Sparkles className="w-4 h-4 mr-2" />
          Transform Your Reality in Just 21 Days
        </Badge>

        {/* Main headline */}
        <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Make Your End a{" "}
          <span className="text-primary">Daily Reality</span>
          <br />— Starting Tonight
        </h1>

        {/* Subheadline */}
        <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Book a <span className="text-primary font-semibold">free 30-minute 1:1 consultation</span> with Truecosmic's imagination coach <span className="font-semibold text-foreground">Robert Meade</span>. In one focused session, you'll define your aim, craft a Neville-style <span className="font-semibold text-foreground">clear plan</span> scene, and leave with a <span className="font-semibold text-foreground">7-day plan</span> you can actually follow.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">1,000+ Students Transformed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">21 Daily Lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">Certificate Included</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 text-lg h-14">
            Book Your Free 1:1 Session
          </Button>
          <Button size="lg" variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/10 px-8 text-lg h-14">
            Watch Preview
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            Instant Access
          </div>
          <span className="text-muted-foreground/50">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            30-Day Money Back Guarantee
          </div>
          <span className="text-muted-foreground/50">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            Lifetime Support
          </div>
        </div>
      </div>
    </section>
  );
};
