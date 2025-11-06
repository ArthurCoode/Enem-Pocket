export interface Formula {
  id: string;
  category: string;
  name: string;
  formula: string;
  description: string;
  example: string;
}

export const formulas: Formula[] = [
  // MATEMÁTICA
  {
    id: "f1",
    category: "Matemática",
    name: "Área do Triângulo",
    formula: "A = (b × h) / 2",
    description: "Onde b = base e h = altura perpendicular à base",
    example: "Base 10cm, altura 6cm: A = (10 × 6) / 2 = 30 cm²"
  },
  {
    id: "f2",
    category: "Matemática",
    name: "Área do Círculo",
    formula: "A = π × r²",
    description: "Onde r = raio do círculo e π ≈ 3,14",
    example: "Raio 5cm: A = 3,14 × 5² = 78,5 cm²"
  },
  {
    id: "f3",
    category: "Matemática",
    name: "Bhaskara (Eq. 2º grau)",
    formula: "x = (-b ± √Δ) / 2a\nΔ = b² - 4ac",
    description: "Resolve equações ax² + bx + c = 0",
    example: "x² - 5x + 6 = 0\nΔ = 25 - 24 = 1\nx = (5 ± 1) / 2 → x₁=3, x₂=2"
  },
  {
    id: "f4",
    category: "Matemática",
    name: "Porcentagem",
    formula: "P = (V × i) / 100",
    description: "P = parte, V = valor total, i = taxa percentual",
    example: "20% de 150: P = (150 × 20) / 100 = 30"
  },
  {
    id: "f5",
    category: "Matemática",
    name: "PA - Termo Geral",
    formula: "aₙ = a₁ + (n-1) × r",
    description: "PA = Progressão Aritmética, r = razão",
    example: "PA: 2, 5, 8... (r=3)\na₅ = 2 + (5-1)×3 = 14"
  },
  {
    id: "f6",
    category: "Matemática",
    name: "PG - Termo Geral",
    formula: "aₙ = a₁ × qⁿ⁻¹",
    description: "PG = Progressão Geométrica, q = razão",
    example: "PG: 2, 6, 18... (q=3)\na₄ = 2 × 3³ = 54"
  },
  {
    id: "f7",
    category: "Matemática",
    name: "Teorema de Pitágoras",
    formula: "a² = b² + c²",
    description: "a = hipotenusa, b e c = catetos",
    example: "Catetos 3 e 4:\na² = 9 + 16 = 25 → a = 5"
  },
  {
    id: "f8",
    category: "Matemática",
    name: "Volume do Cilindro",
    formula: "V = π × r² × h",
    description: "r = raio da base, h = altura",
    example: "r=3cm, h=10cm:\nV = 3,14×9×10 = 282,6 cm³"
  },

  // FÍSICA
  {
    id: "f9",
    category: "Física",
    name: "2ª Lei de Newton",
    formula: "F = m × a",
    description: "F = força (N), m = massa (kg), a = aceleração (m/s²)",
    example: "Massa 10kg, a=2m/s²:\nF = 10 × 2 = 20 N"
  },
  {
    id: "f10",
    category: "Física",
    name: "Energia Cinética",
    formula: "Ec = (m × v²) / 2",
    description: "m = massa (kg), v = velocidade (m/s)",
    example: "2kg a 10m/s:\nEc = (2×100) / 2 = 100 J"
  },
  {
    id: "f11",
    category: "Física",
    name: "Energia Potencial Gravitacional",
    formula: "Ep = m × g × h",
    description: "m = massa, g ≈ 10 m/s², h = altura",
    example: "5kg a 3m de altura:\nEp = 5×10×3 = 150 J"
  },
  {
    id: "f12",
    category: "Física",
    name: "Velocidade Média",
    formula: "V = ΔS / Δt",
    description: "ΔS = variação de espaço, Δt = variação de tempo",
    example: "Percorre 100m em 5s:\nV = 100 / 5 = 20 m/s"
  },
  {
    id: "f13",
    category: "Física",
    name: "Aceleração Média",
    formula: "a = ΔV / Δt",
    description: "ΔV = variação de velocidade, Δt = tempo",
    example: "0 a 20m/s em 4s:\na = 20 / 4 = 5 m/s²"
  },
  {
    id: "f14",
    category: "Física",
    name: "Lei de Ohm",
    formula: "V = R × I",
    description: "V = tensão (V), R = resistência (Ω), I = corrente (A)",
    example: "R=10Ω, I=2A:\nV = 10 × 2 = 20 V"
  },
  {
    id: "f15",
    category: "Física",
    name: "Potência Elétrica",
    formula: "P = V × I",
    description: "P = potência (W), V = tensão, I = corrente",
    example: "V=220V, I=5A:\nP = 220 × 5 = 1100 W"
  },
  {
    id: "f16",
    category: "Física",
    name: "Temperatura (Celsius ↔ Kelvin)",
    formula: "K = C + 273\nC = K - 273",
    description: "Conversão entre escalas termométricas",
    example: "25°C em Kelvin:\nK = 25 + 273 = 298 K"
  },

  // QUÍMICA
  {
    id: "f17",
    category: "Química",
    name: "Número de Mols",
    formula: "n = m / MM",
    description: "n = mols, m = massa (g), MM = massa molar (g/mol)",
    example: "40g de NaOH (MM=40):\nn = 40 / 40 = 1 mol"
  },
  {
    id: "f18",
    category: "Química",
    name: "Concentração Molar",
    formula: "M = n / V",
    description: "M = molaridade (mol/L), n = mols, V = volume (L)",
    example: "2 mols em 1L:\nM = 2 / 1 = 2 mol/L"
  },
  {
    id: "f19",
    category: "Química",
    name: "pH",
    formula: "pH = -log[H⁺]",
    description: "[H⁺] = concentração de íons H⁺",
    example: "[H⁺] = 10⁻³:\npH = -log(10⁻³) = 3"
  },
  {
    id: "f20",
    category: "Química",
    name: "Variação de Entalpia",
    formula: "ΔH = Hprodutos - Hreagentes",
    description: "ΔH < 0: exotérmica, ΔH > 0: endotérmica",
    example: "Produtos=100kJ, Reagentes=150kJ:\nΔH = 100-150 = -50kJ (exotérmica)"
  },
  {
    id: "f21",
    category: "Química",
    name: "Lei dos Gases Ideais",
    formula: "PV = nRT",
    description: "P = pressão, V = volume, n = mols, R = constante, T = temperatura",
    example: "n=1, T=300K, R=0,082, V=10L:\nP = (1×0,082×300) / 10 = 2,46 atm"
  }
];

export const categories = ["Todas", "Matemática", "Física", "Química"];
