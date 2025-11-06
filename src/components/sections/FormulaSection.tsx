import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formulas, categories } from "@/data/formulas";
import { Copy, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import jsPDF from "jspdf";

const FormulaSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  
  const filteredFormulas = selectedCategory === "Todas" ? formulas : formulas.filter(f => f.category === selectedCategory);

  const copyFormula = (formula: string) => {
    navigator.clipboard.writeText(formula);
    toast({ title: "Copiado!", description: "Fórmula copiada para área de transferência" });
  };

  const downloadAllPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Formulário ENEM - Fórmulas Essenciais", 15, 20);
    let y = 35;
    
    filteredFormulas.forEach((f, i) => {
      if (y > 270) { doc.addPage(); y = 20; }
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text(`${i + 1}. ${f.name}`, 15, y);
      y += 7;
      doc.setFont("courier", "normal");
      doc.setFontSize(11);
      doc.text(f.formula, 20, y);
      y += 12;
    });
    
    doc.save("formulas-enem.pdf");
  };

  return (
    <section id="formulas" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Formulário Mágico</h2>
          <p className="text-muted-foreground text-lg">Fórmulas essenciais sempre à mão</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map(cat => (
            <Button key={cat} variant={selectedCategory === cat ? "default" : "outline"} onClick={() => setSelectedCategory(cat)} size="sm">{cat}</Button>
          ))}
          <Button onClick={downloadAllPDF} size="sm"><Download className="h-4 w-4 mr-2" />Baixar Todas</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFormulas.map(formula => (
            <Card key={formula.id} className="p-4">
              <h3 className="font-bold mb-2">{formula.name}</h3>
              <div className="bg-muted p-3 rounded font-mono text-sm mb-2 whitespace-pre-wrap">{formula.formula}</div>
              <p className="text-xs text-muted-foreground mb-2">{formula.description}</p>
              <p className="text-xs mb-3"><strong>Ex:</strong> {formula.example}</p>
              <Button size="sm" variant="outline" className="w-full" onClick={() => copyFormula(formula.formula)}><Copy className="h-3 w-3 mr-1" />Copiar</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormulaSection;
