import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { quizzes, subjects } from "@/data/quizzes";
import { Trophy } from "lucide-react";

const QuizSection = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuiz = quizzes.find(q => q.subject === selectedSubject);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
    if (currentQuiz && index === currentQuiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuiz && currentQuestion < currentQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  const restart = () => {
    setSelectedSubject(null);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  if (!selectedSubject) {
    return (
      <section id="quizzes" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mini Simulados</h2>
            <p className="text-muted-foreground text-lg">5 questões por matéria para testar seus conhecimentos</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {subjects.map(subject => (
              <Button key={subject} size="lg" onClick={() => setSelectedSubject(subject)}>{subject}</Button>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isFinished) {
    return (
      <section id="quizzes" className="py-20 bg-muted/30">
        <div className="container max-w-2xl">
          <Card className="p-8 text-center">
            <Trophy className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Simulado Concluído!</h2>
            <p className="text-xl mb-2">Você acertou <span className="font-bold text-primary">{score}</span> de {currentQuiz?.questions.length} questões</p>
            <p className="text-muted-foreground mb-6">Percentual: {Math.round((score / (currentQuiz?.questions.length || 1)) * 100)}%</p>
            <div className="flex gap-4 justify-center">
              <Button onClick={restart}>Fazer Outro Simulado</Button>
              <Button variant="outline" onClick={() => window.location.reload()}>Voltar ao Início</Button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  const question = currentQuiz?.questions[currentQuestion];
  
  return (
    <section id="quizzes" className="py-20 bg-muted/30">
      <div className="container max-w-3xl">
        <Card className="p-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">{selectedSubject}</h3>
            <p className="text-muted-foreground">Questão {currentQuestion + 1} de {currentQuiz?.questions.length}</p>
          </div>

          <p className="text-lg mb-6">{question?.question}</p>

          <div className="space-y-2 mb-6">
            {question?.options.map((option, index) => {
              const isCorrect = index === question.correctAnswer;
              const isSelected = index === selectedAnswer;
              let variant: "outline" | "default" | "destructive" | "secondary" = "outline";
              if (showResult && isSelected && isCorrect) variant = "default";
              if (showResult && isSelected && !isCorrect) variant = "destructive";
              if (showResult && !isSelected && isCorrect) variant = "secondary";

              return (
                <Button key={index} variant={variant} className="w-full justify-start h-auto py-3" onClick={() => !showResult && handleAnswer(index)} disabled={showResult}>
                  <span className="font-bold mr-2">{String.fromCharCode(65 + index)})</span> {option}
                </Button>
              );
            })}
          </div>

          {showResult && (
            <div className={`p-4 rounded-lg mb-4 ${selectedAnswer === question?.correctAnswer ? 'bg-success/10' : 'bg-destructive/10'}`}>
              <p className="font-semibold mb-2">{selectedAnswer === question?.correctAnswer ? '✅ Correto!' : '❌ Incorreto'}</p>
              <p className="text-sm">{question?.explanation}</p>
            </div>
          )}

          {showResult && <Button onClick={nextQuestion} className="w-full">Próxima Questão</Button>}
        </Card>
      </div>
    </section>
  );
};

export default QuizSection;
