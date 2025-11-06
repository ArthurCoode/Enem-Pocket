export interface Topic {
  id: string;
  subject: string;
  title: string;
  description: string;
  example: string;
  videoUrl: string;
  question: {
    text: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  };
}

export const topics: Topic[] = [
  // MATEMÁTICA
  {
    id: "mat1",
    subject: "Matemática",
    title: "Regra de Três",
    description:
      "Método para resolver problemas de proporção entre grandezas. Use quando houver relação direta ou inversa entre valores conhecidos e desconhecidos.",
    example:
      "Se 3 pedreiros constroem uma parede em 12 dias, quantos dias levam 6 pedreiros? Resposta: 6 dias (proporção inversa).",
    videoUrl: "https://www.youtube.com/watch?v=q846Qdi-od8",
    question: {
      text: "Uma empresa precisa embalar 1200 produtos. Se 4 funcionários fazem isso em 6 horas, em quanto tempo 8 funcionários farão o mesmo trabalho?",
      options: ["2 horas", "3 horas", "4 horas", "12 horas"],
      correctAnswer: 1,
      explanation:
        "É uma proporção inversa: mais funcionários, menos tempo. 4 × 6 = 24 horas-funcionário. 24 ÷ 8 = 3 horas."
    }
  },
  {
    id: "mat2",
    subject: "Matemática",
    title: "Porcentagem",
    description:
      "Representa partes de um todo em 100. Multiplique o valor pelo percentual dividido por 100, ou use a forma decimal.",
    example:
      "20% de 150 = 150 × 0,20 = 30. Para calcular acréscimo: valor × 1,20 (acréscimo de 20%).",
    videoUrl: "https://www.youtube.com/watch?v=azedx0uou64",
    question: {
      text: "Uma camisa custava R$ 80,00 e teve um desconto de 15%. Qual o novo preço?",
      options: ["R$ 68,00", "R$ 65,00", "R$ 12,00", "R$ 72,00"],
      correctAnswer: 0,
      explanation:
        "80 × 0,15 = 12 (desconto). 80 - 12 = R$ 68,00. Ou use: 80 × 0,85 = R$ 68,00."
    }
  },
  {
    id: "mat3",
    subject: "Matemática",
    title: "Geometria Plana - Área e Perímetro",
    description:
      "Área mede a superfície; perímetro mede o contorno. Triângulo: A = (b×h)/2. Círculo: A = πr². Retângulo: A = b×h.",
    example: "Área de um círculo com raio 5cm: A = π × 5² ≈ 78,5 cm².",
    videoUrl: "https://www.youtube.com/watch?v=P_oB6jR8LiQ",
    question: {
      text: "Qual a área de um triângulo com base 10m e altura 6m?",
      options: ["60 m²", "30 m²", "16 m²", "20 m²"],
      correctAnswer: 1,
      explanation: "A = (base × altura) / 2 = (10 × 6) / 2 = 30 m²."
    }
  },

  // PORTUGUÊS
  {
    id: "port1",
    subject: "Português",
    title: "Interpretação de Texto",
    description:
      "Identifique a ideia central, os argumentos e a intenção do autor. Cuidado com pegadinhas que distorcem o sentido original.",
    example:
      "Em textos argumentativos, busque a tese (opinião defendida) e os argumentos (provas que sustentam a tese).",
    videoUrl: "https://www.youtube.com/watch?v=XsN0e_xPyNI",
    question: {
      text: "Em um texto que defende a redução da maioridade penal citando dados de criminalidade, qual é a tese?",
      options: [
        "Criminalidade juvenil é um problema",
        "A maioridade penal deve ser reduzida",
        "Dados comprovam aumento de crimes",
        "Jovens cometem crimes graves"
      ],
      correctAnswer: 1,
      explanation:
        "A tese é a ideia defendida pelo autor. Os dados são argumentos que sustentam a tese."
    }
  },
  {
    id: "port2",
    subject: "Português",
    title: "Figuras de Linguagem",
    description:
      "Recursos que dão expressividade ao texto. Metáfora: comparação implícita. Metonímia: troca de termos relacionados. Ironia: dizer o contrário.",
    example:
      "Metáfora: 'Aquele rapaz é um leão' (corajoso). Metonímia: 'Li Machado de Assis' (li obras dele).",
    videoUrl: "https://www.youtube.com/watch?v=n0e75nRstcU",
    question: {
      text: "Em 'A cidade inteira veio ao show', qual figura de linguagem foi usada?",
      options: ["Metáfora", "Metonímia", "Hipérbole", "Eufemismo"],
      correctAnswer: 2,
      explanation:
        "Hipérbole é o exagero intencional. Nem todos vieram, mas muita gente foi ao show."
    }
  },
  {
    id: "port3",
    subject: "Português",
    title: "Concordância Verbal",
    description:
      "O verbo concorda com o sujeito em número e pessoa. Sujeito composto antes do verbo: verbo no plural. Sujeito simples: verbo concorda com ele.",
    example:
      "'Os alunos estudam muito' (plural). 'Maria e João chegaram' (composto, plural).",
    videoUrl: "https://www.youtube.com/watch?v=G8FOjN2HzY0",
    question: {
      text: "Qual frase está correta?",
      options: [
        "Fazem dois anos que me formei",
        "Faz dois anos que me formei",
        "Houveram muitos problemas",
        "Haviam muitas pessoas"
      ],
      correctAnswer: 1,
      explanation:
        "'Fazer' (tempo) e 'haver' (existir) são impessoais: ficam no singular. 'Faz dois anos' e 'Havia muitas pessoas' estão corretas."
    }
  },

  // CIÊNCIAS HUMANAS
  {
    id: "hum1",
    subject: "Humanas",
    title: "Era Vargas (1930-1945)",
    description:
      "Período de governo de Getúlio Vargas marcado pelo autoritarismo do Estado Novo, trabalhismo, industrialização e centralização política.",
    example:
      "CLT (1943) regulamentou direitos trabalhistas. O DIP controlava propaganda e censura.",
    videoUrl: "https://www.youtube.com/watch?v=am2tMD_Vnjc",
    question: {
      text: "Qual característica marcou o Estado Novo de Vargas?",
      options: [
        "Democracia plena",
        "Descentralização política",
        "Autoritarismo e censura",
        "Liberalismo econômico"
      ],
      correctAnswer: 2,
      explanation:
        "O Estado Novo (1937-1945) foi um período ditatorial com censura, fechamento do Congresso e controle dos meios de comunicação."
    }
  },
  {
    id: "hum2",
    subject: "Humanas",
    title: "Globalização",
    description:
      "Processo de integração econômica, cultural e política mundial. Características: fluxos comerciais, avanço tecnológico, empresas multinacionais.",
    example:
      "Internet permitiu comunicação instantânea global. Empresas como Apple operam em diversos países.",
    videoUrl: "https://www.youtube.com/watch?v=QGvwWyP1S4o",
    question: {
      text: "Qual NÃO é uma consequência da globalização?",
      options: [
        "Aumento do comércio internacional",
        "Isolamento cultural dos países",
        "Difusão de tecnologias",
        "Formação de blocos econômicos"
      ],
      correctAnswer: 1,
      explanation:
        "A globalização promove integração cultural, não isolamento. Culturas se misturam através de mídia, internet e migração."
    }
  },

  // CIÊNCIAS DA NATUREZA
  {
    id: "nat1",
    subject: "Natureza",
    title: "Leis de Newton",
    description:
      "1ª Lei (Inércia): corpo em repouso tende a permanecer em repouso. 2ª Lei: F = m×a. 3ª Lei: ação e reação.",
    example:
      "Ao frear um carro, você é 'jogado' para frente (inércia). Foguete se move pela reação dos gases expelidos.",
    videoUrl: "https://www.youtube.com/watch?v=dU14qCv5AuI",
    question: {
      text: "Um corpo de 2kg sofre uma força de 10N. Qual sua aceleração?",
      options: ["5 m/s²", "20 m/s²", "2 m/s²", "10 m/s²"],
      correctAnswer: 0,
      explanation: "F = m×a → 10 = 2×a → a = 10/2 = 5 m/s²."
    }
  },
  {
    id: "nat2",
    subject: "Natureza",
    title: "Fotossíntese",
    description:
      "Processo em que plantas convertem luz solar, água e CO₂ em glicose e oxigênio. Ocorre nos cloroplastos.",
    example:
      "6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂. Plantas são produtores primários da cadeia alimentar.",
    videoUrl: "https://www.youtube.com/watch?v=zSOE1uRloZg",
    question: {
      text: "Qual o principal produto da fotossíntese usado pelas plantas?",
      options: ["Oxigênio", "Glicose", "Água", "Gás carbônico"],
      correctAnswer: 1,
      explanation:
        "Glicose é o açúcar produzido e usado como energia pela planta. Oxigênio é liberado como subproduto."
    }
  },
  {
    id: "nat3",
    subject: "Natureza",
    title: "Reações Químicas",
    description:
      "Transformação de substâncias. Reagentes se transformam em produtos. Lei de Lavoisier: nada se cria, tudo se transforma.",
    example: "2H₂ + O₂ → 2H₂O (combustão do hidrogênio forma água).",
    videoUrl: "https://www.youtube.com/watch?v=VrUvy1N66U0",
    question: {
      text: "Qual tipo de reação ocorre quando um metal oxida?",
      options: ["Decomposição", "Síntese", "Oxidação", "Análise"],
      correctAnswer: 2,
      explanation:
        "Oxidação é a reação onde um elemento perde elétrons, como quando ferro se transforma em ferrugem (Fe₂O₃)."
    }
  },

  // REDAÇÃO
  {
    id: "red1",
    subject: "Redação",
    title: "Estrutura da Redação ENEM",
    description:
      "Introdução (tese + contexto), Desenvolvimento (2 parágrafos com argumentos), Conclusão (retomada + proposta de intervenção detalhada).",
    example:
      "Introdução: apresente o tema e sua tese. Desenvolvimento: argumento 1 (parágrafo 2), argumento 2 (parágrafo 3). Conclusão: proposta com agente, ação, meio, finalidade e detalhamento.",
    videoUrl: "https://www.youtube.com/watch?v=CjUCTZstyK8",
    question: {
      text: "Quantos parágrafos são recomendados para a redação do ENEM?",
      options: ["3 parágrafos", "4 parágrafos", "5 parágrafos", "Não há número fixo"],
      correctAnswer: 2,
      explanation:
        "O ideal são 5 parágrafos: 1 introdução, 2 desenvolvimento, 1 conclusão + título (opcional mas recomendado)."
    }
  },
  {
    id: "red2",
    subject: "Redação",
    title: "Proposta de Intervenção",
    description:
      "Deve conter: agente (quem), ação (o quê), modo/meio (como), finalidade (para quê) e detalhamento. Seja específico e viável.",
    example:
      "Agente: Ministério da Educação. Ação: implementar aulas de educação financeira. Modo: através de disciplina obrigatória. Finalidade: para formar cidadãos conscientes. Detalhamento: com material didático gratuito e capacitação de professores.",
    videoUrl: "https://www.youtube.com/watch?v=1mlMoLJpZmM",
    question: {
      text: "O que NÃO é necessário em uma proposta de intervenção?",
      options: [
        "Agente responsável",
        "Ação a ser tomada",
        "Opinião pessoal emotiva",
        "Finalidade da ação"
      ],
      correctAnswer: 2,
      explanation:
        "A proposta deve ser objetiva e técnica, não emotiva. Todos os outros elementos são obrigatórios para a nota máxima."
    }
  }
];

export const subjects = [
  "Todas",
  "Matemática",
  "Português",
  "Humanas",
  "Natureza",
  "Redação"
];
