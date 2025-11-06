export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  subject: string;
  questions: QuizQuestion[];
}

export const quizzes: Quiz[] = [
  {
    subject: "Matemática",
    questions: [
      {
        id: "mat-q1",
        question: "Uma escada de 5 metros está apoiada em uma parede, formando um ângulo de 60° com o solo. A que altura a escada toca a parede? (Use: sen 60° ≈ 0,87)",
        options: ["3,5 metros", "4,35 metros", "2,5 metros", "5 metros"],
        correctAnswer: 1,
        explanation: "Altura = 5 × sen(60°) = 5 × 0,87 = 4,35 metros. Usa-se o seno porque ele relaciona cateto oposto (altura) com hipotenusa (escada)."
      },
      {
        id: "mat-q2",
        question: "Em uma PA, o primeiro termo é 3 e a razão é 5. Qual o 10° termo?",
        options: ["48", "53", "58", "43"],
        correctAnswer: 0,
        explanation: "Fórmula: an = a1 + (n-1)×r → a10 = 3 + (10-1)×5 = 3 + 45 = 48."
      },
      {
        id: "mat-q3",
        question: "Qual a área de um círculo com diâmetro 10cm? (Use π = 3,14)",
        options: ["31,4 cm²", "78,5 cm²", "314 cm²", "157 cm²"],
        correctAnswer: 1,
        explanation: "Raio = diâmetro/2 = 5cm. Área = π×r² = 3,14 × 5² = 3,14 × 25 = 78,5 cm²."
      },
      {
        id: "mat-q4",
        question: "Uma mercadoria custava R$ 200,00 e teve dois descontos sucessivos de 10% e 20%. Qual o preço final?",
        options: ["R$ 140,00", "R$ 144,00", "R$ 120,00", "R$ 160,00"],
        correctAnswer: 1,
        explanation: "Após 1º desconto: 200 × 0,90 = 180. Após 2º desconto: 180 × 0,80 = 144. Não é 140 porque descontos sucessivos não se somam!"
      },
      {
        id: "mat-q5",
        question: "Resolva a equação: 2x - 3 = 11",
        options: ["x = 5", "x = 7", "x = 8", "x = 4"],
        correctAnswer: 1,
        explanation: "2x - 3 = 11 → 2x = 11 + 3 → 2x = 14 → x = 7."
      }
    ]
  },
  {
    subject: "Português",
    questions: [
      {
        id: "port-q1",
        question: "'O Brasil inteiro assistiu à final da Copa.' Qual a função sintática de 'à final da Copa'?",
        options: ["Objeto direto", "Objeto indireto", "Adjunto adverbial", "Complemento nominal"],
        correctAnswer: 1,
        explanation: "Quem assiste, assiste A algo. É objeto indireto pois completa verbo transitivo indireto com preposição obrigatória."
      },
      {
        id: "port-q2",
        question: "Identifique a figura de linguagem: 'Suas palavras eram veneno puro.'",
        options: ["Metáfora", "Comparação", "Metonímia", "Personificação"],
        correctAnswer: 0,
        explanation: "Metáfora compara sem uso de 'como'. Palavras não são literalmente veneno, mas causam dano como se fossem."
      },
      {
        id: "port-q3",
        question: "Qual frase apresenta concordância correta?",
        options: [
          "Fazem três anos que me formei",
          "Houveram muitos problemas",
          "Faz três anos que me formei",
          "Podem haver soluções"
        ],
        correctAnswer: 2,
        explanation: "'Fazer' (tempo) e 'haver' (existir) são impessoais: ficam no singular. Correto: 'Faz três anos' e 'Pode haver'."
      },
      {
        id: "port-q4",
        question: "Em qual alternativa a vírgula está usada corretamente?",
        options: [
          "O menino, estudou muito.",
          "João, Maria e Pedro, viajaram.",
          "Estudei muito, mas não passei.",
          "Os alunos que estudam, passam."
        ],
        correctAnswer: 2,
        explanation: "Vírgula antes de 'mas' (conjunção adversativa) é obrigatória. Separa orações coordenadas."
      },
      {
        id: "port-q5",
        question: "Identifique o tipo de predicado: 'A criança ficou feliz.'",
        options: ["Verbal", "Nominal", "Verbo-nominal", "Sem predicado"],
        correctAnswer: 1,
        explanation: "Predicado nominal tem verbo de ligação (ficar) + predicativo do sujeito (feliz). Não indica ação, mas estado."
      }
    ]
  },
  {
    subject: "História",
    questions: [
      {
        id: "hist-q1",
        question: "Qual evento marca o início da Idade Moderna?",
        options: [
          "Queda de Roma (476)",
          "Queda de Constantinopla (1453)",
          "Descobrimento da América (1492)",
          "Revolução Francesa (1789)"
        ],
        correctAnswer: 1,
        explanation: "A queda de Constantinopla (1453) marca o fim da Idade Média e início da Moderna. Fim do Império Bizantino."
      },
      {
        id: "hist-q2",
        question: "O que foi a Revolução Industrial?",
        options: [
          "Processo de mecanização da produção iniciado na Inglaterra no século XVIII",
          "Guerra pela independência das colônias",
          "Movimento artístico do século XIX",
          "Revolta de escravos no Brasil"
        ],
        correctAnswer: 0,
        explanation: "Revolução Industrial iniciou na Inglaterra (séc. XVIII) com máquinas a vapor, fábricas e urbanização."
      },
      {
        id: "hist-q3",
        question: "O que caracterizou o Estado Novo no Brasil (1937-1945)?",
        options: [
          "Democracia plena",
          "Regime ditatorial de Getúlio Vargas",
          "Monarquia parlamentarista",
          "República oligárquica"
        ],
        correctAnswer: 1,
        explanation: "Estado Novo foi ditadura de Vargas: fechamento do Congresso, censura, repressão e centralização do poder."
      },
      {
        id: "hist-q4",
        question: "O que foi o Plano Marshall?",
        options: [
          "Programa de reconstrução da Europa após a 2ª Guerra",
          "Tratado de paz da 1ª Guerra Mundial",
          "Aliança militar soviética",
          "Programa espacial americano"
        ],
        correctAnswer: 0,
        explanation: "Plano Marshall (1947) foi programa de ajuda econômica dos EUA para reconstruir Europa Ocidental após 2ª Guerra."
      },
      {
        id: "hist-q5",
        question: "Qual a principal característica do Absolutismo?",
        options: [
          "Divisão dos três poderes",
          "Concentração de poder nas mãos do rei",
          "Poder do povo através de eleições",
          "Poder da Igreja sobre o Estado"
        ],
        correctAnswer: 1,
        explanation: "Absolutismo concentra todo poder no rei, que governa sem limites legais. Frase típica: 'O Estado sou eu' (Luís XIV)."
      }
    ]
  },
  {
    subject: "Geografia",
    questions: [
      {
        id: "geo-q1",
        question: "O que é um bioma?",
        options: [
          "Conjunto de ecossistemas com características semelhantes",
          "Tipo de animal marinho",
          "Formação rochosa específica",
          "Fenômeno climático"
        ],
        correctAnswer: 0,
        explanation: "Bioma é conjunto de ecossistemas com fauna, flora e clima característicos. Ex: Amazônia, Cerrado, Caatinga."
      },
      {
        id: "geo-q2",
        question: "Qual a diferença entre clima e tempo?",
        options: [
          "São sinônimos",
          "Clima é momentâneo, tempo é duradouro",
          "Tempo é momentâneo, clima é padrão duradouro",
          "Não há diferença científica"
        ],
        correctAnswer: 2,
        explanation: "Tempo atmosférico é condição momentânea (hoje chove). Clima é padrão de anos (região tropical chuvosa)."
      },
      {
        id: "geo-q3",
        question: "O que causa as estações do ano?",
        options: [
          "Distância da Terra ao Sol",
          "Inclinação do eixo terrestre",
          "Rotação da Terra",
          "Fases da Lua"
        ],
        correctAnswer: 1,
        explanation: "Estações ocorrem pela inclinação de 23,5° do eixo terrestre. Isso faz diferentes regiões receberem mais ou menos luz solar ao longo do ano."
      },
      {
        id: "geo-q4",
        question: "O que é urbanização?",
        options: [
          "Crescimento da população rural",
          "Processo de expansão das cidades",
          "Reflorestamento urbano",
          "Construção de rodovias"
        ],
        correctAnswer: 1,
        explanation: "Urbanização é processo de crescimento das cidades e migração da população rural para áreas urbanas."
      },
      {
        id: "geo-q5",
        question: "O que caracteriza um país desenvolvido?",
        options: [
          "Grande território",
          "Muitos recursos naturais",
          "Alto IDH, industrialização, boa infraestrutura",
          "População numerosa"
        ],
        correctAnswer: 2,
        explanation: "País desenvolvido tem: alto IDH (educação, saúde, renda), economia industrializada, infraestrutura de qualidade e baixa desigualdade."
      }
    ]
  },
  {
    subject: "Física",
    questions: [
      {
        id: "fis-q1",
        question: "Um carro parte do repouso e atinge 20 m/s em 5 segundos. Qual sua aceleração?",
        options: ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"],
        correctAnswer: 1,
        explanation: "Aceleração = ΔV / Δt = (20 - 0) / 5 = 20/5 = 4 m/s²."
      },
      {
        id: "fis-q2",
        question: "Qual a primeira lei de Newton (Lei da Inércia)?",
        options: [
          "F = m × a",
          "Corpo em repouso tende a permanecer em repouso",
          "Ação e reação",
          "Energia não se cria nem se destrói"
        ],
        correctAnswer: 1,
        explanation: "1ª Lei de Newton (Inércia): corpo em repouso fica em repouso, corpo em movimento fica em movimento, a menos que force externa atue."
      },
      {
        id: "fis-q3",
        question: "O que é energia cinética?",
        options: [
          "Energia armazenada",
          "Energia de movimento",
          "Energia elétrica",
          "Energia química"
        ],
        correctAnswer: 1,
        explanation: "Energia cinética é energia que um corpo possui devido ao seu movimento. Fórmula: Ec = (m×v²)/2."
      },
      {
        id: "fis-q4",
        question: "Um objeto de 2 kg cai de 5 metros de altura. Qual sua energia potencial gravitacional? (g = 10 m/s²)",
        options: ["10 J", "100 J", "50 J", "20 J"],
        correctAnswer: 1,
        explanation: "Ep = m × g × h = 2 × 10 × 5 = 100 Joules."
      },
      {
        id: "fis-q5",
        question: "O que é um movimento uniforme?",
        options: [
          "Movimento com aceleração constante",
          "Movimento com velocidade constante",
          "Movimento circular",
          "Movimento sem atrito"
        ],
        correctAnswer: 1,
        explanation: "Movimento uniforme tem velocidade constante (não há aceleração). O corpo percorre distâncias iguais em tempos iguais."
      }
    ]
  },
  {
    subject: "Química",
    questions: [
      {
        id: "quim-q1",
        question: "Quantos prótons tem um átomo de oxigênio? (O = 8)",
        options: ["6", "8", "10", "16"],
        correctAnswer: 1,
        explanation: "O número atômico (Z) indica quantidade de prótons. Oxigênio tem Z = 8, logo 8 prótons."
      },
      {
        id: "quim-q2",
        question: "O que é uma ligação iônica?",
        options: [
          "Compartilhamento de elétrons",
          "Transferência de elétrons",
          "Ligação entre moléculas",
          "Ligação metálica"
        ],
        correctAnswer: 1,
        explanation: "Ligação iônica ocorre por transferência de elétrons entre metal (doa) e ametal (recebe), formando íons."
      },
      {
        id: "quim-q3",
        question: "Qual a fórmula molecular da água?",
        options: ["HO", "H2O", "H2O2", "H3O"],
        correctAnswer: 1,
        explanation: "Água é H2O: 2 átomos de hidrogênio e 1 de oxigênio."
      },
      {
        id: "quim-q4",
        question: "O que é pH?",
        options: [
          "Potencial hidrogênico (mede acidez/basicidade)",
          "Peso do hidrogênio",
          "Pressão de gases",
          "Ponto de fusão"
        ],
        correctAnswer: 0,
        explanation: "pH mede acidez (pH < 7), neutralidade (pH = 7) ou basicidade (pH > 7) de soluções aquosas."
      },
      {
        id: "quim-q5",
        question: "O que é a Lei de Lavoisier?",
        options: [
          "Energia não se cria nem se destrói",
          "Na natureza nada se cria, tudo se transforma",
          "Átomos são indivisíveis",
          "Gases se expandem com calor"
        ],
        correctAnswer: 1,
        explanation: "Lei de Lavoisier (Conservação das Massas): em reações químicas, massa total dos reagentes = massa total dos produtos."
      }
    ]
  },
  {
    subject: "Biologia",
    questions: [
      {
        id: "bio-q1",
        question: "Qual a função da mitocôndria?",
        options: [
          "Fotossíntese",
          "Produção de energia (ATP)",
          "Síntese de proteínas",
          "Divisão celular"
        ],
        correctAnswer: 1,
        explanation: "Mitocôndria é responsável pela respiração celular, produzindo energia (ATP) a partir de glicose e oxigênio."
      },
      {
        id: "bio-q2",
        question: "O que é fotossíntese?",
        options: [
          "Quebra de glicose para liberar energia",
          "Produção de glicose usando luz solar",
          "Divisão celular",
          "Respiração das plantas"
        ],
        correctAnswer: 1,
        explanation: "Fotossíntese é processo onde plantas usam luz solar, CO2 e água para produzir glicose e liberar O2."
      },
      {
        id: "bio-q3",
        question: "Quantos cromossomos tem uma célula humana normal?",
        options: ["23", "46", "92", "48"],
        correctAnswer: 1,
        explanation: "Humanos têm 46 cromossomos (23 pares): 23 do pai e 23 da mãe. Gametas (óvulo/espermatozoide) têm 23."
      },
      {
        id: "bio-q4",
        question: "O que é um ecossistema?",
        options: [
          "Conjunto de seres vivos",
          "Conjunto de fatores abióticos",
          "Conjunto de seres vivos + ambiente físico interagindo",
          "Apenas plantas de uma região"
        ],
        correctAnswer: 2,
        explanation: "Ecossistema = fatores bióticos (seres vivos) + abióticos (água, solo, clima) em interação."
      },
      {
        id: "bio-q5",
        question: "Qual a diferença entre DNA e RNA?",
        options: [
          "Não há diferença",
          "DNA tem timina, RNA tem uracila; DNA é dupla hélice, RNA é fita simples",
          "DNA é proteína, RNA é carboidrato",
          "DNA está no citoplasma, RNA no núcleo"
        ],
        correctAnswer: 1,
        explanation: "DNA: dupla hélice, timina, armazena informação genética. RNA: fita simples, uracila (no lugar de timina), sintetiza proteínas."
      }
    ]
  }
];

export const subjects = ["Matemática", "Português", "História", "Geografia", "Física", "Química", "Biologia"];
