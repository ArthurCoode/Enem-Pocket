import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import TopicsSection from "@/components/sections/TopicsSection";
import VideoSection from "@/components/sections/VideoSection";
import EssaySection from "@/components/sections/EssaySection";
import EditorSection from "@/components/sections/EditorSection";
import QuizSection from "@/components/sections/QuizSection";
import FormulaSection from "@/components/sections/FormulaSection";
import ReviewSection from "@/components/sections/ReviewSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TopicsSection />
      <VideoSection />
      <EssaySection />
      <EditorSection />
      <QuizSection />
      <FormulaSection />
      <ReviewSection />

      <footer className="py-8 border-t bg-muted/30">
        <div className="container text-center text-sm text-muted-foreground space-y-1">
          <p>© 2025 NextEnem - Seu Canivete Suíço para o ENEM</p>
          <p>
<p>
  Desenvolvido pela{" "}
  <a
    href="https://instagram.com/nextdev.io"
    target="_blank"
  className="text-red-500 no-underline hover:text-red-600 transition"
  >
    NextDev
  </a>
</p>

          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
