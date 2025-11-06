import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { topics, subjects, Topic } from "@/data/topics";
import { Video, HelpCircle, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TopicsSection = () => {
  const [selectedSubject, setSelectedSubject] = useState("Todas");
  const [videoModal, setVideoModal] = useState<Topic | null>(null);
  const [questionModal, setQuestionModal] = useState<Topic | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const filteredTopics = selectedSubject === "Todas" 
    ? topics 
    : topics.filter(t => t.subject === selectedSubject);

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
  };

  const closeQuestionModal = () => {
    setQuestionModal(null);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <section id="topics" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que Mais Cai no ENEM
          </h2>
          <p className="text-muted-foreground text-lg">
            Foque no que realmente importa. Tópicos essenciais de cada matéria.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {subjects.map((subject) => (
            <Button
              key={subject}
              variant={selectedSubject === subject ? "default" : "outline"}
              onClick={() => setSelectedSubject(subject)}
              size="sm"
            >
              {subject}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic) => (
            <Card key={topic.id} className="hover:shadow-elegant transition-smooth">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge variant="secondary">{topic.subject}</Badge>
                </div>
                <CardTitle className="text-xl mt-2">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-1 flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    Explicação:
                  </h4>
                  <CardDescription className="text-sm">
                    {topic.description}
                  </CardDescription>
                </div>

                <div className="p-3 bg-muted rounded-md">
                  <p className="text-sm">
                    <strong>Exemplo:</strong> {topic.example}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setVideoModal(topic)}
                    className="flex-1"
                  >
                    <Video className="h-4 w-4 mr-1" />
                    Videoaula
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setQuestionModal(topic)}
                    className="flex-1"
                  >
                    <HelpCircle className="h-4 w-4 mr-1" />
                    Exercício
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

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

      {/* Question Modal */}
      <Dialog open={!!questionModal} onOpenChange={closeQuestionModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{questionModal?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-foreground">{questionModal?.question.text}</p>
            
            <div className="space-y-2">
              {questionModal?.question.options.map((option, index) => {
                const isCorrect = index === questionModal.question.correctAnswer;
                const isSelected = index === selectedAnswer;
                
                let buttonVariant: "outline" | "default" | "destructive" | "secondary" = "outline";
                if (showResult && isSelected && isCorrect) buttonVariant = "default";
                if (showResult && isSelected && !isCorrect) buttonVariant = "destructive";
                if (showResult && !isSelected && isCorrect) buttonVariant = "secondary";

                return (
                  <Button
                    key={index}
                    variant={buttonVariant}
                    className="w-full justify-start text-left h-auto py-3 px-4"
                    onClick={() => !showResult && handleAnswerClick(index)}
                    disabled={showResult}
                  >
                    <span className="font-bold mr-2">
                      {String.fromCharCode(65 + index)})
                    </span>
                    {option}
                  </Button>
                );
              })}
            </div>

            {showResult && (
              <div className={`p-4 rounded-lg ${selectedAnswer === questionModal.question.correctAnswer ? 'bg-success/10 border border-success' : 'bg-destructive/10 border border-destructive'}`}>
                <h4 className="font-bold mb-2">
                  {selectedAnswer === questionModal.question.correctAnswer ? '✅ Correto!' : '❌ Incorreto'}
                </h4>
                <p className="text-sm">{questionModal?.question.explanation}</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TopicsSection;
