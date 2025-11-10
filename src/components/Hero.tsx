import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, CheckCircle2 } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/80 via-[#16213e]/70 to-[#0f3460]/80" />
      
      {/* Animated purple to cyan gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-cyan-500/5 animate-gradient" />
      
      {/* Radial glow effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-3xl animate-pulse-slow" />
      
      <div className="container relative z-10 max-w-5xl mx-auto text-center">
        {/* Main headline */}
        <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Conviértete en la Versión de Ti a la que la Vida Dice{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            "Sí"
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Reserva una <span className="text-primary font-semibold">consulta de claridad gratuita de 30 minutos</span> con <span className="font-semibold text-foreground">Blanca Celis</span>. Identificaremos el bloqueo real, elegiremos <span className="font-semibold text-foreground">una técnica</span> para comenzar, y compartiremos el <span className="font-semibold text-foreground">camino de coaching correcto</span> para generar impulso—basado en <span className="font-semibold text-foreground">autoconcepto y reinicio de identidad</span>.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-muted-foreground">
          <span>Cálido, sin juicios</span>
          <span className="text-muted-foreground/50">•</span>
          <span>Métodos Neville</span>
          <span className="text-muted-foreground/50">•</span>
          <span>Micro pasos que perduran</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 text-lg h-14"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Reserva Tu Consulta de Claridad
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-foreground/30 text-foreground hover:bg-foreground/10 px-8 text-lg h-14"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ve Cómo el Autoconcepto Cambia Resultados
          </Button>
        </div>

        {/* Micro-copy */}
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto italic">
          Esta es una <span className="font-semibold">llamada diagnóstica</span>, no una sesión completa de coaching. Si el coaching es adecuado, recibirás una recomendación clara—<span className="font-semibold">sin presión</span>.
        </p>
      </div>
    </section>
  );
};
