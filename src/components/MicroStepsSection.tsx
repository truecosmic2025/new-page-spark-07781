import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MicroStepsSection = () => {
  const techniques = [
    {
      title: "If Inner Conversations is recommended:",
      step: 'When the old line appears, say your new line once: "I move as someone it already worked for." Then carry on.',
    },
    {
      title: "If SATS is recommended:",
      step: "Tonight, run a 10–20 second scene seed (one place, one touch, one line you hear) twice, calmly.",
    },
    {
      title: "If Revision is recommended:",
      step: "Pick one moment from today that triggered the old story; re-see it once with your new meaning, then move on.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary to-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Sample Micro-Steps
          </h2>
          <p className="text-xl text-muted-foreground">Based on the technique</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {techniques.map((technique, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-lg text-primary">{technique.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{technique.step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
