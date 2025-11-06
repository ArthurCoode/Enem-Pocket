export interface VideoData {
  id: string;
  title: string;
  subject: string;
  teacher: string;
  duration: string;
  level: "Básico" | "Intermediário" | "Avançado";
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
}

export const videos: VideoData[] = [
  {
    id: "v1",
    title: "Funções: Conceitos Fundamentais",
    subject: "Matemática",
    teacher: "Prof. Ferreto",
    duration: "45min",
    level: "Básico",
    thumbnailUrl: "https://img.youtube.com/vi/MfLZk_aLMa0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/MfLZk_aLMa0",
    description: "Aprenda os conceitos básicos de funções matemáticas com exemplos práticos."
  },
  {
    id: "v2",
    title: "Análise Sintática Completa",
    subject: "Português",
    teacher: "Prof. Noslen",
    duration: "38min",
    level: "Intermediário",
    thumbnailUrl: "https://img.youtube.com/vi/P-MN8FEsT7Y/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/P-MN8FEsT7Y",
    description: "Domine análise sintática de forma definitiva para o ENEM."
  },
  {
    id: "v3",
    title: "Primeira Guerra Mundial",
    subject: "História",
    teacher: "Prof. Débora Aladim",
    duration: "52min",
    level: "Intermediário",
    thumbnailUrl: "https://img.youtube.com/vi/Gny_bqNjIok/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/Gny_bqNjIok",
    description: "Causas, desenvolvimento e consequências da Grande Guerra."
  },
  {
    id: "v4",
    title: "Termodinâmica para o ENEM",
    subject: "Física",
    teacher: "Prof. Boaro",
    duration: "41min",
    level: "Avançado",
    thumbnailUrl: "https://img.youtube.com/vi/qkTVfqk-RJY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/qkTVfqk-RJY",
    description: "Leis da termodinâmica com resolução de exercícios do ENEM."
  },
  {
    id: "v5",
    title: "Ecologia: Cadeias Alimentares",
    subject: "Biologia",
    teacher: "Prof. Samuel Cunha",
    duration: "28min",
    level: "Básico",
    thumbnailUrl: "https://img.youtube.com/vi/i2WAMACGN_E/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/i2WAMACGN_E",
    description: "Entenda cadeias e teias alimentares, fluxo de energia e matéria."
  },
  {
    id: "v6",
    title: "Reações Orgânicas",
    subject: "Química",
    teacher: "Prof. Café com Química",
    duration: "35min",
    level: "Avançado",
    thumbnailUrl: "https://img.youtube.com/vi/zH4L-vhKYXc/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/zH4L-vhKYXc",
    description: "Principais reações orgânicas cobradas no ENEM com macetes."
  },
  {
    id: "v7",
    title: "Geopolítica Mundial Atual",
    subject: "Geografia",
    teacher: "Prof. Claudio Hansen",
    duration: "44min",
    level: "Intermediário",
    thumbnailUrl: "https://img.youtube.com/vi/T8hS3FoMdmQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/T8hS3FoMdmQ",
    description: "Conflitos contemporâneos e relações internacionais."
  },
  {
    id: "v8",
    title: "Redação Nota 1000: Passo a Passo",
    subject: "Redação",
    teacher: "Prof. Letícia Góes",
    duration: "55min",
    level: "Intermediário",
    thumbnailUrl: "https://img.youtube.com/vi/nQ-QU1MF4gE/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/nQ-QU1MF4gE",
    description: "Estratégias comprovadas para alcançar a nota máxima na redação."
  },
  {
    id: "v9",
    title: "Geometria Espacial Descomplicada",
    subject: "Matemática",
    teacher: "Prof. Ferreto",
    duration: "50min",
    level: "Avançado",
    thumbnailUrl: "https://img.youtube.com/vi/R_FQU4KzN7A/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/R_FQU4KzN7A",
    description: "Volumes e áreas de sólidos geométricos com exercícios resolvidos."
  },
  {
    id: "v10",
    title: "Figuras de Linguagem",
    subject: "Português",
    teacher: "Prof. Noslen",
    duration: "32min",
    level: "Básico",
    thumbnailUrl: "https://img.youtube.com/vi/9xjdFWX-qDk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/9xjdFWX-qDk",
    description: "Todas as figuras de linguagem com exemplos práticos e mnemônicos."
  },
  {
    id: "v11",
    title: "Era Vargas Completa",
    subject: "História",
    teacher: "Prof. Débora Aladim",
    duration: "48min",
    level: "Intermediário",
    thumbnailUrl: "https://img.youtube.com/vi/hRN0UqShPEo/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/hRN0UqShPEo",
    description: "Do Golpe de 1930 ao fim do Estado Novo, análise completa."
  },
  {
    id: "v12",
    title: "Eletroquímica: Pilhas e Baterias",
    subject: "Química",
    teacher: "Prof. Café com Química",
    duration: "39min",
    level: "Intermediário",
    thumbnailUrl: "https://img.youtube.com/vi/1OJMsM9cW8A/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/1OJMsM9cW8A",
    description: "Oxirredução, pilhas, eletrólise e aplicações práticas."
  }
];

export const subjects = ["Todas", "Matemática", "Português", "História", "Geografia", "Física", "Química", "Biologia", "Redação"];
export const levels = ["Todos", "Básico", "Intermediário", "Avançado"];
export const durations = ["Todos", "Curto (<30min)", "Médio (30-45min)", "Longo (>45min)"];
