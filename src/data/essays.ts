export interface EssayTheme {
  id: string;
  title: string;
  category: string;
  proposal: string;
  repertoires: string[];
  introModel: string;
  arguments: string[];
  videoUrl: string;
}

export const essays: EssayTheme[] = [
  {
    id: "essay1",
    title: "Desafios da Saúde Mental no Brasil Contemporâneo",
    category: "Saúde",
    proposal: `A saúde mental tem sido cada vez mais discutida na sociedade brasileira, especialmente após a pandemia de COVID-19. Dados do Ministério da Saúde indicam aumento significativo nos casos de depressão e ansiedade. Considerando esse cenário, elabore um texto dissertativo-argumentativo sobre os desafios da saúde mental no Brasil contemporâneo, apresentando proposta de intervenção que respeite os direitos humanos.`,
    repertoires: [
      "**Organização Mundial da Saúde (OMS)**: Define saúde como estado de completo bem-estar físico, mental e social, não apenas ausência de doença. Em 2023, classificou o Brasil como o país mais ansioso do mundo.",
      "**Filme 'Divertida Mente' (2015)**: Animação da Pixar aborda de forma lúdica as emoções humanas, mostrando importância de reconhecer e lidar com sentimentos negativos como tristeza, contribuindo para desestigmatizar questões de saúde mental.",
      "**Lei 10.216/2001 - Reforma Psiquiátrica**: Marco legal que estabeleceu direitos de pessoas com transtornos mentais no Brasil, priorizando tratamento em serviços comunitários (CAPS) em vez de internação em hospitais psiquiátricos."
    ],
    introModel: "Na obra '1984', de George Orwell, a sociedade é controlada através da manipulação psicológica, evidenciando como a saúde mental é fundamental para autonomia individual. No Brasil contemporâneo, embora não haja controle totalitário, a população enfrenta crescente deterioração do bem-estar psicológico, resultado de múltiplos fatores sociais e econômicos. Nesse contexto, torna-se imperativo analisar os desafios da saúde mental brasileira, considerando tanto o acesso limitado a tratamentos quanto o estigma social persistente.",
    arguments: [
      "**Insuficiência do Sistema Público**: O SUS possui apenas 1 psicólogo para cada 10 mil habitantes, muito abaixo do recomendado pela OMS. Os CAPS (Centros de Atenção Psicossocial) estão concentrados em grandes centros urbanos, deixando população rural e periferias desassistidas. Além disso, há longas filas de espera e falta de medicamentos essenciais.",
      "**Estigma Social e Cultura do Silêncio**: A cultura brasileira ainda trata saúde mental como tabu ou 'frescura'. Nas redes sociais, expressões como 'mimimi' deslegitimam sofrimento psíquico real. No ambiente corporativo, funcionários temem revelar diagnósticos por medo de demissão. Esse estigma impede busca por ajuda e agrava quadros clínicos."
    ],
    videoUrl: "https://www.youtube.com/embed/j5xJKjj2V6U"
  },
  {
    id: "essay2",
    title: "Educação Financeira nas Escolas Brasileiras",
    category: "Educação",
    proposal: `O endividamento das famílias brasileiras atingiu níveis recordes nos últimos anos. Segundo o Banco Central, mais de 70% das famílias possuem algum tipo de dívida. Especialistas apontam que a falta de educação financeira é um dos principais fatores dessa realidade. A partir dessa problemática, produza um texto dissertativo-argumentativo sobre a importância da educação financeira nas escolas brasileiras, propondo soluções viáveis.`,
    repertoires: [
      "**Base Nacional Comum Curricular (BNCC)**: Desde 2020, educação financeira é tema transversal obrigatório na educação básica brasileira. No entanto, pesquisa do Instituto Axxus (2023) mostra que apenas 38% das escolas implementaram o conteúdo de forma efetiva.",
      "**Conceito de 'Armadilha da Pobreza'**: Teoria econômica que explica como famílias em situação de vulnerabilidade, sem educação financeira, perpetuam ciclo de endividamento através de crédito predatório e consumo impulsivo, dificultando ascensão social.",
      "**Programa 'Contas em Dia' do Governo Federal**: Iniciativa lançada em 2023 oferece cursos gratuitos de educação financeira para população adulta, mas carece de alcance entre jovens, que são público prioritário para prevenção."
    ],
    introModel: "No livro 'Pai Rico, Pai Pobre', Robert Kiyosaki demonstra como a educação financeira transforma vidas ao ensinar sobre investimentos e gestão patrimonial. No Brasil, contudo, essa formação é negligenciada no sistema educacional, resultando em população adulta despreparada para lidar com finanças pessoais. Tal realidade manifesta-se nas alarmantes taxas de endividamento familiar e no baixo índice de poupança nacional. Diante disso, é fundamental discutir a implementação efetiva da educação financeira nas escolas como ferramenta de transformação social.",
    arguments: [
      "**Ausência de Formação Adequada para Professores**: A BNCC tornou educação financeira obrigatória, mas não houve investimento proporcional em capacitação docente. Professores, muitas vezes, não possuem conhecimento técnico sobre investimentos, juros compostos e planejamento financeiro para ensinar com propriedade. Sem formação continuada específica, o conteúdo é abordado superficialmente ou simplesmente ignorado.",
      "**Cultura do Consumismo Imediatista**: A sociedade brasileira é bombardeada por propaganda que incentiva consumo impulsivo. Crianças e adolescentes são alvos prioritários do marketing, crescendo em ambiente que valoriza posse material sobre planejamento financeiro. Sem contraponto educacional crítico na escola, perpetua-se comportamento financeiro irresponsável na vida adulta."
    ],
    videoUrl: "https://www.youtube.com/embed/nQ-QU1MF4gE"
  },
  {
    id: "essay3",
    title: "Combate à Desinformação na Era Digital",
    category: "Tecnologia",
    proposal: `A disseminação de notícias falsas (fake news) tornou-se fenômeno preocupante na sociedade digital, afetando processos democráticos, saúde pública e convivência social. Durante a pandemia de COVID-19, informações inverídicas sobre tratamentos e vacinas colocaram vidas em risco. Considerando esse contexto, elabore texto dissertativo-argumentativo sobre os desafios do combate à desinformação na era digital, respeitando os direitos humanos.`,
    repertoires: [
      "**Conceito de 'Infodemia' (OMS)**: Termo criado pela Organização Mundial da Saúde para descrever excesso de informações, incluindo falsas ou enganosas, que dificulta encontrar fontes confiáveis. Durante pandemia, infodemia prejudicou campanhas de vacinação e adesão a protocolos sanitários.",
      "**Lei Brasileira de Liberdade, Responsabilidade e Transparência na Internet (PL 2630/2020)**: Projeto de lei conhecido como 'PL das Fake News' busca regulamentar redes sociais e estabelecer responsabilidades, mas enfrenta debate sobre equilíbrio entre combate à desinformação e preservação da liberdade de expressão.",
      "**Experimento da Universidade de Stanford sobre Viés de Confirmação**: Pesquisa demonstrou que pessoas tendem a acreditar em informações que confirmam suas crenças preexistentes, mesmo quando apresentadas com evidências contrárias, explicando propagação rápida de fake news em bolhas ideológicas."
    ],
    introModel: "Na distopia '1984', de George Orwell, o Ministério da Verdade manipulava fatos históricos para controlar população. Paradoxalmente, no século XXI, vivemos fenômeno inverso mas igualmente nocivo: a desinformação descentralizada e viral das redes sociais. Se no romance havia controle estatal da informação, hoje o desafio é combater dispersão massiva de conteúdo falso sem incorrer em censura. Nesse cenário, torna-se crucial analisar mecanismos de propagação das fake news e estratégias democráticas para seu combate.",
    arguments: [
      "**Algoritmos e Câmaras de Eco**: Plataformas digitais utilizam algoritmos que priorizam engajamento sobre veracidade. Conteúdo polêmico e emocional, geralmente falso, gera mais cliques, curtidas e compartilhamentos, sendo favorecido pelo algoritmo. Isso cria 'câmaras de eco' onde usuários são expostos apenas a conteúdos alinhados às suas crenças, radicalizando opiniões e dificultando acesso a fontes diversificadas e confiáveis.",
      "**Déficit de Letramento Digital**: Grande parte da população, especialmente idosos, não desenvolveu habilidades para avaliar criticamente informações online. Não sabem identificar fontes confiáveis, verificar autoria, ou reconhecer sinais de manipulação. Esse analfabetismo digital torna milhões de pessoas vulneráveis à desinformação, sendo alvos fáceis de correntes virais enganosas."
    ],
    videoUrl: "https://www.youtube.com/embed/j5xJKjj2V6U"
  },
  {
    id: "essay4",
    title: "Mobilidade Urbana Sustentável no Brasil",
    category: "Meio Ambiente",
    proposal: `As grandes cidades brasileiras enfrentam graves problemas de mobilidade urbana: congestionamentos crônicos, poluição atmosférica e transporte público deficiente. Segundo pesquisa do IPEA, trabalhadores brasileiros gastam em média 2 horas por dia em deslocamentos. Com base nisso, redija texto dissertativo-argumentativo sobre os desafios e soluções para mobilidade urbana sustentável no Brasil.`,
    repertoires: [
      "**Conceito de 'Cidade de 15 Minutos'**: Modelo urbanístico onde cidadãos acessam trabalho, escola, serviços e lazer em até 15 minutos a pé ou de bicicleta. Paris e Barcelona adotaram esse conceito, reduzindo dependência de carros e melhorando qualidade de vida.",
      "**Política Nacional de Mobilidade Urbana (Lei 12.587/2012)**: Estabelece diretrizes para mobilidade brasileira, priorizando transporte coletivo, não motorizado e sustentável. Porém, municípios têm dificuldade em implementar planos locais por falta de recursos e vontade política.",
      "**Curitiba como Exemplo**: Capital paranaense é referência mundial em transporte público com sistema de Bus Rapid Transit (BRT). Na década de 1970, implementou corredores exclusivos e integração tarifária, reduzindo uso de carros particulares."
    ],
    introModel: "No documentário 'Ruas Vivas' (2017), é apresentado contraste entre cidades planejadas para carros e aquelas pensadas para pessoas. No Brasil, o modelo rodoviarista do século XX legou metrópoles congestionadas, poluídas e hostis a pedestres e ciclistas. Tal realidade não é mera inconveniência, mas problema que afeta saúde pública, economia e meio ambiente. Portanto, é imperativo analisar entraves à mobilidade urbana sustentável e propor caminhos para cidades mais humanas e eficientes.",
    arguments: [
      "**Herança Rodoviarista e Lobby Automobilístico**: Desde JK, Brasil priorizou indústria automotiva e malha rodoviária. Incentivos fiscais para compra de carros, infraestrutura voltada a veículos individuais e lobby do setor automobilístico junto a governantes perpetuam esse modelo insustentável. Investimento em transporte coletivo é politicamente menos atrativo, pois tem retorno eleitoral menor.",
      "**Transporte Público Sucateado e Privatização Ineficiente**: Ônibus brasileiros são caros, lotados e lentos. Tarifas elevadas excluem população de baixa renda. Privatização sem regulação adequada resultou em empresas que operam com lucro máximo e serviço mínimo. Falta integração entre modais (ônibus, metrô, trem) e investimento em modernização e expansão."
    ],
    videoUrl: "https://www.youtube.com/embed/j5xJKjj2V6U"
  },
  {
    id: "essay5",
    title: "Violência contra a Mulher no Brasil",
    category: "Direitos Humanos",
    proposal: `O Brasil registra altíssimos índices de violência contra a mulher. A cada 4 minutos, uma mulher é agredida no país, segundo dados do Fórum Brasileiro de Segurança Pública. A Lei Maria da Penha, criada em 2006, foi marco importante, mas desafios persistem. Produza texto dissertativo-argumentativo sobre a violência contra mulheres no Brasil e caminhos para superação desse problema.`,
    repertoires: [
      "**Lei Maria da Penha (11.340/2006)**: Considerada pela ONU uma das três melhores legislações do mundo para proteção de mulheres. Criou mecanismos para coibir violência doméstica e familiar, mas enfrenta dificuldades de implementação plena por falta de estrutura e capacitação de agentes públicos.",
      "**Conceito de 'Feminicídio'**: Assassinato de mulheres por razão de gênero, incluído no Código Penal em 2015 como qualificadora de homicídio. Brasil é 5º país com mais feminicídios no mundo. Dados mostram que maioria ocorre dentro de casa, praticado por parceiros ou ex-parceiros.",
      "**Teoria do 'Ciclo da Violência' (Lenore Walker)**: Psicóloga americana identificou padrão em relacionamentos abusivos: tensão, agressão, reconciliação ('lua de mel') e nova tensão. Compreender esse ciclo é essencial para políticas que auxiliem mulheres a romperem relacionamentos violentos."
    ],
    introModel: "Na obra 'O Conto da Aia', de Margaret Atwood, mulheres vivem em sociedade distópica onde são subjugadas e violentadas. Embora ficcional, a narrativa reflete realidade de milhões de mulheres que, no Brasil contemporâneo, sofrem violência física, psicológica, sexual e patrimonial. Apesar de avanços legais como Lei Maria da Penha, estruturas patriarcais persistem, mantendo alarmantes índices de agressões e feminicídios. Dessa forma, é essencial examinar raízes culturais e falhas institucionais que perpetuam essa violência.",
    arguments: [
      "**Cultura Machista e Banalização da Violência**: Sociedade brasileira ainda naturaliza violência contra mulheres através de expressões como 'em briga de marido e mulher não se mete a colher'. Músicas populares romantizam ciúmes e posse. Educação patriarcal ensina meninas a serem submissas e meninos a serem dominadores. Essa cultura torna agressões 'normais', impedindo denúncias e intervenções.",
      "**Insuficiência de Delegacias e Casas-Abrigo**: Apenas 8% dos municípios brasileiros possuem Delegacia da Mulher. Horários de funcionamento restritos (maioria funciona apenas em horário comercial) deixam mulheres desassistidas justamente nos períodos de maior risco (noites e fins de semana). Casas-abrigo são insuficientes e têm vagas limitadas, fazendo com que vítimas voltem para lares violentos por falta de alternativa."
    ],
    videoUrl: "https://www.youtube.com/embed/nQ-QU1MF4gE"
  }
];

export const categories = ["Todas", "Saúde", "Educação", "Tecnologia", "Meio Ambiente", "Direitos Humanos"];
