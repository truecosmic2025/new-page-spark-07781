import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { TrendingUp } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Purple gradient final section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#0f3460]" />
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Reescribe Quién Eres
          <br />
          hasta el Resultado
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Reserva tu consulta <span className="text-primary font-semibold">gratuita, sin presión</span> de 30 minutos con <span className="font-semibold text-foreground">Blanca Castillo</span>. Sal con una <span className="font-semibold text-foreground">frase de Fin</span> clara, <span className="font-semibold text-foreground">una técnica ideal</span>, y una <span className="font-semibold text-foreground">recomendación de coaching personalizada</span>.
        </p>

        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2">
            <TrendingUp className="w-4 h-4 text-red-400" />
            <p className="text-sm text-red-400 font-semibold">Última oportunidad — cupos finales cerrando pronto</p>
          </div>
          <CountdownTimer urgent />
        </div>

        <Button 
          size="lg" 
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-12 text-lg h-14 mb-4 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-105 transition-all"
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Reserva Tu Consulta de Claridad — Actúa Ahora
        </Button>
        <p className="text-xs text-muted-foreground mb-12">⚡ Disponibilidad limitada. La mayoría de los espacios se llenan en horas.</p>

        <div className="bg-card/30 backdrop-blur border border-border/50 rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground">
            Nos preocupamos por los resultados y el bienestar emocional. La orientación es gentil, sin juicios y adaptada a la vida real. Por favor busca atención profesional licenciada para preocupaciones médicas o de salud mental.
          </p>
        </div>
      </div>
    </section>
  );
};
