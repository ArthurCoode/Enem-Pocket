import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { essays, categories, EssayTheme } from "@/data/essays";
import { FileText, Video, Download, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import jsPDF from "jspdf";

const EssaySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [detailModal, setDetailModal] = useState<EssayTheme | null>(null);
  const [videoModal, setVideoModal] = useState<EssayTheme | null>(null);

  const filteredEssays = selectedCategory === "Todas" 
    ? essays 
    : essays.filter(e => e.category === selectedCategory);

  const generatePDF = (essay: EssayTheme) => {
    const doc = new jsPDF();
    const margin = 15;
    const pageWidth = doc.internal.pageSize.width;
    const maxWidth = pageWidth - 2 * margin;
    let yPosition = 20;

    // Title
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("TEMA DE REDAÇÃO ENEM", margin, yPosition);
    yPosition += 10;

    // Essay title
    doc.setFontSize(14);
    const titleLines = doc.splitTextToSize(essay.title, maxWidth);
    doc.text(titleLines, margin, yPosition);
    yPosition += titleLines.length * 7 + 5;

    // Proposal
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("PROPOSTA:", margin, yPosition);
    yPosition += 7;
    doc.setFont("helvetica", "normal");
    const proposalLines = doc.splitTextToSize(essay.proposal, maxWidth);
    doc.text(proposalLines, margin, yPosition);
    yPosition += proposalLines.length * 5 + 10;

    // Check if need new page
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }

    // Repertoires
    doc.setFont("helvetica", "bold");
    doc.text("REPERTÓRIOS SOCIOCULTURAIS:", margin, yPosition);
    yPosition += 7;
    doc.setFont("helvetica", "normal");
    essay.repertoires.forEach((rep, index) => {
      const repLines = doc.splitTextToSize(`${index + 1}. ${rep.replace(/\*\*/g, '')}`, maxWidth);
      if (yPosition + repLines.length * 5 > 280) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(repLines, margin, yPosition);
      yPosition += repLines.length * 5 + 5;
    });

    // Check if need new page
    if (yPosition > 220) {
      doc.addPage();
      yPosition = 20;
    }

    // Intro model
    yPosition += 5;
    doc.setFont("helvetica", "bold");
    doc.text("MODELO DE INTRODUÇÃO:", margin, yPosition);
    yPosition += 7;
    doc.setFont("helvetica", "normal");
    const introLines = doc.splitTextToSize(essay.introModel, maxWidth);
    doc.text(introLines, margin, yPosition);
    yPosition += introLines.length * 5 + 10;

    // Check if need new page
    if (yPosition > 220) {
      doc.addPage();
      yPosition = 20;
    }

    // Arguments
    doc.setFont("helvetica", "bold");
    doc.text("SUGESTÕES DE ARGUMENTOS:", margin, yPosition);
    yPosition += 7;
    doc.setFont("helvetica", "normal");
    essay.arguments.forEach((arg, index) => {
      const argLines = doc.splitTextToSize(`${index + 1}. ${arg.replace(/\*\*/g, '')}`, maxWidth);
      if (yPosition + argLines.length * 5 > 280) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(argLines, margin, yPosition);
      yPosition += argLines.length * 5 + 8;
    });

    doc.save(`tema-redacao-${essay.id}.pdf`);
  };

  return (
    <section id="essays" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Temas de Redação para Treinar
          </h2>
          <p className="text-muted-foreground text-lg">
            Temas completos com repertórios, modelos e argumentos prontos
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredEssays.map((essay) => (
            <Card key={essay.id} className="hover:shadow-elegant transition-smooth">
              <CardHeader>
                <Badge className="w-fit mb-2">{essay.category}</Badge>
                <CardTitle className="text-xl">{essay.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {essay.proposal}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDetailModal(essay)}
                  >
                    <FileText className="h-4 w-4 mr-1" />
                    Ver Completo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setVideoModal(essay)}
                  >
                    <Video className="h-4 w-4 mr-1" />
                    Videoaula
                  </Button>
                  <Button
                    size="sm"
                    className="col-span-2"
                    onClick={() => generatePDF(essay)}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Baixar PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!detailModal} onOpenChange={() => setDetailModal(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{detailModal?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Proposta:
              </h3>
              <p className="text-sm leading-relaxed">{detailModal?.proposal}</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-warning" />
                Repertórios Socioculturais:
              </h3>
              <div className="space-y-3">
                {detailModal?.repertoires.map((rep, index) => (
                  <div key={index} className="p-3 bg-muted rounded-lg">
                    <p className="text-sm" dangerouslySetInnerHTML={{ 
                      __html: rep.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                    }} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Modelo de Introdução:</h3>
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm leading-relaxed italic">{detailModal?.introModel}</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Sugestões de Argumentos:</h3>
              <div className="space-y-3">
                {detailModal?.arguments.map((arg, index) => (
                  <div key={index} className="p-3 bg-secondary/10 border border-secondary/20 rounded-lg">
                    <p className="text-sm" dangerouslySetInnerHTML={{ 
                      __html: arg.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                    }} />
                  </div>
                ))}
              </div>
            </div>

            <Button 
              className="w-full" 
              size="lg"
              onClick={() => detailModal && generatePDF(detailModal)}
            >
              <Download className="h-5 w-5 mr-2" />
              Baixar Tema Completo em PDF
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Video Modal */}
      <Dialog open={!!videoModal} onOpenChange={() => setVideoModal(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{videoModal?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={videoModal?.videoUrl}
              title={videoModal?.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EssaySection;
