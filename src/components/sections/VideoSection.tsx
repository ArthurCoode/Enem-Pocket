import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { videos, subjects, levels, durations, VideoData } from "@/data/videos";
import { Play, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const VideoSection = () => {
  const [selectedSubject, setSelectedSubject] = useState("Todas");
  const [selectedLevel, setSelectedLevel] = useState("Todos");
  const [selectedDuration, setSelectedDuration] = useState("Todos");
  const [videoModal, setVideoModal] = useState<VideoData | null>(null);

  const filteredVideos = videos.filter(video => {
    const subjectMatch = selectedSubject === "Todas" || video.subject === selectedSubject;
    const levelMatch = selectedLevel === "Todos" || video.level === selectedLevel;
    
    let durationMatch = true;
    if (selectedDuration !== "Todos") {
      const minutes = parseInt(video.duration);
      if (selectedDuration === "Curto (<30min)") durationMatch = minutes < 30;
      if (selectedDuration === "Médio (30-45min)") durationMatch = minutes >= 30 && minutes <= 45;
      if (selectedDuration === "Longo (>45min)") durationMatch = minutes > 45;
    }
    
    return subjectMatch && levelMatch && durationMatch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Básico": return "bg-info text-info-foreground";
      case "Intermediário": return "bg-warning text-warning-foreground";
      case "Avançado": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="videos" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Diretório de Videoaulas
          </h2>
          <p className="text-muted-foreground text-lg">
            Videoaulas selecionadas dos melhores professores do YouTube
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div>
            <h3 className="text-sm font-semibold mb-2">Matéria:</h3>
            <div className="flex flex-wrap gap-2">
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
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-semibold mb-2">Nível:</h3>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <Button
                    key={level}
                    variant={selectedLevel === level ? "default" : "outline"}
                    onClick={() => setSelectedLevel(level)}
                    size="sm"
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Duração:</h3>
              <div className="flex flex-wrap gap-2">
                {durations.map((duration) => (
                  <Button
                    key={duration}
                    variant={selectedDuration === duration ? "default" : "outline"}
                    onClick={() => setSelectedDuration(duration)}
                    size="sm"
                  >
                    {duration}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-elegant transition-smooth">
              <div 
                className="relative aspect-video bg-muted cursor-pointer group"
                onClick={() => setVideoModal(video)}
              >
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-smooth flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge>{video.subject}</Badge>
                  <Badge className={getLevelColor(video.level)}>{video.level}</Badge>
                </div>
                <CardTitle className="text-lg line-clamp-2">{video.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="mb-4 line-clamp-2">
                  {video.description}
                </CardDescription>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {video.teacher}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {video.duration}
                  </div>
                </div>

                <Button 
                  className="w-full mt-4"
                  onClick={() => setVideoModal(video)}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Assistir
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Nenhuma videoaula encontrada com os filtros selecionados.
            </p>
          </div>
        )}
      </div>

      {/* Video Modal */}
      <Dialog open={!!videoModal} onOpenChange={() => setVideoModal(null)}>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle>{videoModal?.title}</DialogTitle>
            <DialogDescription>
              {videoModal?.teacher} • {videoModal?.duration}
            </DialogDescription>
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
          <p className="text-sm text-muted-foreground">
            {videoModal?.description}
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoSection;
