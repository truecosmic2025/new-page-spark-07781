import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MicroStepsSection = () => {
  const techniques = [
    {
      title: "Si se elige Habla Interna:",
      step: 'Cuando aparezca la vieja etiqueta, di tu nueva línea de identidad una vez y sigue adelante: "Respondo como alguien para quien ya funcionó."',
    },
    {
      title: "Si se elige SATS:",
      step: "Esta noche, ejecuta una escena semilla de 10-20 segundos dos veces (un lugar, un toque, una línea que escuchas), con calma.",
    },
    {
      title: "Si se elige Revisión:",
      step: "Toma un momento de hoy que llevó la vieja historia; re-velo una vez con tu nuevo significado, luego continúa.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f3460] to-[#16213e]" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Ejemplos de Micro-Pasos
          </h2>
          <p className="text-xl text-muted-foreground">Basados en la técnica</p>
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
