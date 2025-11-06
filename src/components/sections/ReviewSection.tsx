import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const reviews = [
  { title: "Mitocôndria", content: "Organela responsável pela respiração celular e produção de ATP (energia).", category: "Biologia" },
  { title: "Revolução Francesa", content: "1789 - Queda da Bastilha. Lema: Liberdade, Igualdade, Fraternidade. Fim do Absolutismo.", category: "História" },
  { title: "Regra de Três", content: "Proporção entre grandezas. Direta: mais → mais. Inversa: mais → menos.", category: "Matemática" },
  { title: "Fotossíntese", content: "6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂. Plantas produzem glicose e liberam oxigênio.", category: "Biologia" },
  { title: "Globalização", content: "Integração econômica, cultural e política mundial. Características: fluxo de capital, tecnologia, culturas.", category: "Geografia" },
  { title: "Leis de Newton", content: "1ª Inércia | 2ª F=ma | 3ª Ação e reação", category: "Física" },
  { title: "Concordância Verbal", content: "Verbo concorda com sujeito. 'Fazer' e 'Haver' (tempo/existir) são impessoais = singular.", category: "Português" },
  { title: "pH", content: "Mede acidez. pH<7: ácido | pH=7: neutro | pH>7: básico/alcalino", category: "Química" },
];

const ReviewSection = () => {
  const [currentReview, setCurrentReview] = useState(reviews[0]);

  const surpriseMe = () => {
    const random = reviews[Math.floor(Math.random() * reviews.length)];
    setCurrentReview(random);
  };

  return (
    <section id="review" className="py-20 bg-muted/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Revisão de 5 Minutos</h2>
          <p className="text-muted-foreground text-lg">Resumos ultra-rápidos para fixação</p>
        </div>

        <Card className="p-8 text-center">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            {currentReview.category}
          </div>
          <h3 className="text-2xl font-bold mb-4">{currentReview.title}</h3>
          <p className="text-lg mb-6">{currentReview.content}</p>
          <Button size="lg" onClick={surpriseMe}>
            <Sparkles className="h-5 w-5 mr-2" />
            Surpreenda-me
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default ReviewSection;
