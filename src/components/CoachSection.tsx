import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import blancaPhoto from "@/assets/blanca-coach.jpg";

export const CoachSection = () => {
  const coachingPoints = [
    {
      title: "Claridad primero",
      description: "Una frase de Fin que se sienta natural en tu boca.",
    },
    {
      title: "Alineación de identidad",
      description: "Elige una línea que tu nuevo yo diría.",
    },
    {
      title: "Simplicidad siempre",
      description: "La práctica ligera y repetible supera el drama.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Purple to dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#16213e] via-[#1a1a2e] to-[#0f3460]" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
            Especialidad: Autoconcepto y Reinicio de Identidad
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Conoce a Tu Coach — <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Blanca Celis</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Coach info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Hola, soy Blanca.</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Hago coaching a través del lente del <span className="text-primary font-semibold">autoconcepto</span>—reentrenando la historia de quién eres para que tu vida lo refleje. Espera claridad, aliento honesto y pasos simples que realmente harás.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-foreground">Cómo trabajaremos en la llamada:</h3>
            <ul className="space-y-4 mb-6">
              {coachingPoints.map((point, index) => (
                <li key={index} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">{point.title}:</span>{" "}
                    <span className="text-muted-foreground">{point.description}</span>
                  </div>
                </li>
              ))}
            </ul>


            <Button 
              size="lg" 
              className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-105 transition-all"
              onClick={() => {
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                window.Claudde?.open();
              }}
            >
              Reserva con Blanca — 30 Minutos Gratis
            </Button>
          </div>

          {/* Coach photo */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_rgba(0,229,255,0.2)]">
              <img 
                src={blancaPhoto} 
                alt="Blanca Celis - Coach de Autoconcepto y Reinicio de Identidad" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
