import { Button } from "@/components/ui/button";
import { BookOpen, Video, PenTool, Trophy } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Seu Canivete Suíço para o ENEM
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Tudo que você precisa para estudar e se preparar para o ENEM em um só lugar. 
            Videoaulas, simulados, redação, fórmulas e muito mais!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("topics")}
              className="gap-2"
            >
              <BookOpen className="h-5 w-5" />
              Começar a Estudar
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("editor")}
              className="gap-2"
            >
              <PenTool className="h-5 w-5" />
              Escrever Redação
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: BookOpen, label: "Conteúdo", value: "100+ tópicos" },
              { icon: Video, label: "Videoaulas", value: "50+ vídeos" },
              { icon: PenTool, label: "Redações", value: "30+ temas" },
              { icon: Trophy, label: "Simulados", value: "200+ questões" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-card border shadow-elegant transition-smooth hover:scale-105"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
