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
    title: "O QUE SÃO FUNÇÕES MATEMÁTICAS?",
    subject: "Matemática",
    teacher: "Descomplica",
    duration: "6min",
    level: "Básico",
    thumbnailUrl: "https://img.youtube.com/vi/xpv-SWbDUr8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=xpv-SWbDUr8",
    description: "Aprenda os conceitos básicos de funções matemáticas com exemplos práticos."
  },
  {
    id: "v2",
    title: "Análise Sintática Completa",
    subject: "Português",
    teacher: "Prof. Noslen",
    duration: "9min",
    level: "Intermediário",
    thumbnailUrl: "https://img.youtube.com/vi/ZR_Ou01WsK0/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=ZR_Ou01WsK0",
    description: "Domine análise sintática de forma definitiva para o ENEM."
  },
  {
    id: "v3",
    title: "Primeira Guerra Mundial",
    subject: "História",
    teacher: "ProEnem",
    duration: "45min",
    level: "Intermediário",
    thumbnailUrl: "https://img.youtube.com/vi/eLUWaUIQ4DU/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=eLUWaUIQ4DU",
    description: "Causas, desenvolvimento e consequências da Grande Guerra."
  },
  {
    id: "v4",
    title: "A Primeira Lei da Termodinâmica",
    subject: "Física",
    teacher: "Ciência Todo Dia",
    duration: "13min",
    level: "Avançado",
    thumbnailUrl: "https://img.youtube.com/vi/GYxXCr6HXcw/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=GYxXCr6HXcw",
    description: "Leis da termodinâmica com resolução de exercícios do ENEM."
  },
  {
    id: "v5",
    title: "Ecologia: Cadeia alimentar e Teia alimentar",
    subject: "Biologia",
    teacher: "Canal Futura",
    duration: "9min",
    level: "Básico",
    thumbnailUrl: "https://img.youtube.com/vi/wmVhZQN8-m4/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=wmVhZQN8-m4",
    description: "Entenda cadeias e teias alimentares, fluxo de energia e matéria."
  },
  {
    id: "v6",
    title: "Reações Orgânicas",
    subject: "Química",
    teacher: "Brasil Escola",
    duration: "10min",
    level: "Avançado",
    thumbnailUrl: "https://img.youtube.com/vi/HUd-LE3KZhE/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=HUd-LE3KZhE",
    description: "Principais reações orgânicas cobradas no ENEM com macetes."
  },
  {
    id: "v7",
    title: "Nova Ordem Mundial ",
    subject: "Geografia",
    teacher: "Geo Ilustrada",
    duration: "8min",
    level: "Intermediário",
    thumbnailUrl: "https://img.youtube.com/vi/WcjoERdBBTM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=WcjoERdBBTM",
    description: "Conflitos contemporâneos e relações internacionais."
  },
  {
    id: "v8",
    title: "Redação Nota 1000: Passo a Passo",
    subject: "Redação",
    teacher: "Prof. Noslen",
    duration: "19min",
    level: "Intermediário",
    thumbnailUrl: "https://img.youtube.com/vi/NYwITitdk0A/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=NYwITitdk0A",
    description: "Estratégias comprovadas para alcançar a nota máxima na redação."
  },
  {
    id: "v9",
    title: "Geometria Espacial",
    subject: "Matemática",
    teacher: "Prof. Sandro Curió",
    duration: "27min",
    level: "Avançado",
    thumbnailUrl: "https://img.youtube.com/vi/Y_gD7S6OkC4/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Y_gD7S6OkC4",
    description: "Volumes e áreas de sólidos geométricos com exercícios resolvidos."
  },
  {
    id: "v10",
    title: "Figuras de Linguagem",
    subject: "Português",
    teacher: "Prof. Noslen",
    duration: "14min",
    level: "Básico",
    thumbnailUrl: "https://img.youtube.com/vi/n0e75nRstcU/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=n0e75nRstcU&t",
    description: "Todas as figuras de linguagem com exemplos práticos e mnemônicos."
  },
  {
    id: "v11",
    title: "Era Vargas Completa",
    subject: "História",
    teacher: "Parabólica",
    duration: "1hr 6min",
    level: "Intermediário",
    thumbnailUrl: "https://img.youtube.com/vi/C6IUgc_arhc/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=C6IUgc_arhc",
    description: "Do Golpe de 1930 ao fim do Estado Novo, análise completa."
  },
  {
    id: "v12",
    title: "Eletroquímica: Pilhas e Baterias",
    subject: "Química",
    teacher: "Prof. Paulo Valim",
    duration: "26min",
    level: "Intermediário",
    thumbnailUrl: "https://img.youtube.com/vi/z5GziuQoUxk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=z5GziuQoUxk",
    description: "Oxirredução, pilhas, eletrólise e aplicações práticas."
  }
];

export const subjects = ["Todas", "Matemática", "Português", "História", "Geografia", "Física", "Química", "Biologia", "Redação"];
export const levels = ["Todos", "Básico", "Intermediário", "Avançado"];
export const durations = ["Todos", "Curto (<30min)", "Médio (30-45min)", "Longo (>45min)"];
