import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, DollarSign, Sparkles } from "lucide-react";
import useCaseCareer from "@/assets/use-case-career.jpg";

export const UseCasesSection = () => {
  const useCases = [
    {
      icon: DollarSign,
      title: "Carrera e Ingresos",
      description: "Opera como la persona que es seleccionada y compensada.",
    },
    {
      icon: Heart,
      title: "Amor y Relaciones",
      description: "Interactúa como la versión segura y elegida de ti.",
    },
    {
      icon: Sparkles,
      title: "Paz y Presencia",
      description: "Camina durante el día con una línea base más estable.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Dark blue background */}
      <div className="absolute inset-0 bg-[#16213e]" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Elige Tu Fin</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">Casos de Uso</p>
          <div className="max-w-2xl mx-auto mb-8">
            <img 
              src={useCaseCareer} 
              alt="Professional success with inner peace" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card key={index} className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
            onClick={() => {
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              window.Claudde?.open();
            }}
          >
            Comienza con un 1:1 Gratis
          </Button>
        </div>
      </div>
    </section>
  );
};
