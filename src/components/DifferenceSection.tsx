import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const DifferenceSection = () => {
  const differences = [
    {
      title: "Diagnóstico, no teoría",
      description: "Aislamos un obstáculo que realmente importa.",
    },
    {
      title: "Una herramienta a la vez",
      description: "La claridad supera intentar todo a la vez.",
    },
    {
      title: "Sin presión",
      description: "Si es adecuado, obtienes una recomendación de coaching clara.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Dark to purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#16213e] to-[#1a1a2e]" />
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Por Qué Esta Llamada Es <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Diferente</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {differences.map((diff, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-primary/30">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{diff.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{diff.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Obtén Tu Recomendación Personal
          </Button>
        </div>
      </div>
    </section>
  );
};
