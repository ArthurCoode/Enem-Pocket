import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Timer, Download, Maximize, Type } from "lucide-react";
import jsPDF from "jspdf";

const EditorSection = () => {
  const [text, setText] = useState("");
  const [time, setTime] = useState(3600); // 60 minutos
  const [isRunning, setIsRunning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lineCount = text.split('\n').length;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && time > 0) {
      interval = setInterval(() => setTime(t => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(text, 180);
    doc.setFontSize(12);
    doc.text(lines, 15, 20);
    doc.save("minha-redacao.pdf");
  };

  return (
    <section id="editor" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Editor de Redação</h2>
          <p className="text-muted-foreground text-lg">Escreva sua redação com timer e contador de palavras</p>
        </div>

        <Card className={`p-6 ${isFullscreen ? 'fixed inset-4 z-50 overflow-auto' : ''}`}>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Type className="h-5 w-5" />
              <span className="font-semibold">{wordCount} palavras</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">{lineCount} linhas</span>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="h-5 w-5" />
              <span className="font-semibold">{formatTime(time)}</span>
            </div>
            <Button size="sm" onClick={() => setIsRunning(!isRunning)}>
              {isRunning ? "Pausar" : "Iniciar"} Timer
            </Button>
            <Button size="sm" variant="outline" onClick={() => setTime(3600)}>Resetar</Button>
            <Button size="sm" variant="outline" onClick={() => setIsFullscreen(!isFullscreen)}>
              <Maximize className="h-4 w-4" />
            </Button>
            <Button size="sm" onClick={exportPDF}>
              <Download className="h-4 w-4 mr-2" /> PDF
            </Button>
          </div>

          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Comece a escrever sua redação aqui..."
            className="min-h-[400px] font-mono"
          />
        </Card>
      </div>
    </section>
  );
};

export default EditorSection;
