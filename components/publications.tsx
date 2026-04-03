import { ExternalLink, BookOpen, FileText, GraduationCap } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Publication {
  year: string
  title: string
  type: "book" | "article" | "thesis" | "chapter"
  description: string
  language?: string
  coAuthors?: string[]
  url?: string
}

const publications: Publication[] = [
  {
    year: "2025",
    title: "Efficiency and Accuracy in BIM Quantity Takeoff Application to Flashings and Gutters through IFC-Based Computational Methods",
    type: "article",
    description:
      "Análise da aplicação de BIM na extração de quantitativos de rufos e calhas, com foco na confiabilidade dos dados orçamentários através de métodos computacionais baseados em IFC.",
    coAuthors: ["Alan Soares De Franca", "Gotthard Blum", "Matheus Lopes", "Stefania Dimitrov"],
  },
  {
    year: "2025",
    title: "BIM Element Coding for Budgeting in Housing Projects",
    type: "article",
    description:
      "Metodologia para automatizar a extração de quantitativos em projetos de Habitação de Interesse Social (HIS) no contexto de contratações públicas.",
    coAuthors: ["Gláucia De Assis", "Moura Alexandre", "Alan Soares De Franca", "Stefania Dimitrov"],
  },
  {
    year: "2025",
    title: "Prioritization Method for Mapping Classification Systems for Cost Estimates",
    type: "article",
    description:
      "Mapeamento entre sistemas de classificação IFC e secundária para elaboração de estudos orçamentários mais rápidos e confiáveis em BIM.",
    coAuthors: ["Felipe Barradas", "Stefania Dimitrov"],
  },
  {
    year: "2024",
    title: "BIM na gestão pública: Tópicos para a contratação de projetos",
    type: "chapter",
    description:
      "Capítulo do livro de atas do Congresso ptBIM 2024, sobre implementação BIM na Administração Pública brasileira.",
    coAuthors: ["Eduardo Nardelli", "Carlos Mingione", "João Pires", "Rodrigo Garcia Alvarado"],
  },
  {
    year: "2024",
    title: "Aplicativo de análise automatizada de IFC para estudos orçamentários",
    type: "article",
    description:
      "Desenvolvimento de aplicativo para auditoria de modelos IFC na Operação Urbana Consorciada Água Espraiada (OUCAE) para a SEHAB de São Paulo.",
    coAuthors: ["Lucas Melchiori Pereira", "Stefania Dimitrov", "Alcione Dolavale"],
  },
  {
    year: "2024",
    title: "Algoritmo para cálculo de áreas de geometrias complexas em modelos IFC",
    type: "article",
    description:
      "Pesquisa sobre processos de extração e verificação de quantitativos a partir de modelos BIM, com foco em geometrias de menor recorrência.",
    coAuthors: ["Rodrigo Costa Loureiro", "Alcione Dolavale", "Thaís Bernardo dos Santos"],
  },
  {
    year: "2019",
    title: "O significado atribuído a BIM ao longo do tempo",
    type: "thesis",
    description:
      "Dissertação de mestrado na UNICAMP. Pesquisa sobre a evolução do significado de Building Information Modeling através de Revisão Sistemática da Literatura e Análise Cienciométrica.",
    url: "https://www.researchgate.net/publication/335364254",
  },
  {
    year: "2019",
    title: "Integrated and Collaborative Architectural Design: 10 Years of Experience Teaching BIM",
    type: "chapter",
    description:
      "Proceedings of the 35th CIB W78 2018 Conference. Avaliação do processo colaborativo mediado por BIM ao longo de dez anos de ensino.",
    language: "Inglês",
    coAuthors: ["Regina Ruschel", "Evandro Ziggiatti Monteiro"],
  },
]

const books: Publication[] = [
  {
    year: "2018",
    title: "Gerenciamento e Coordenação de Projetos BIM",
    type: "book",
    description:
      "Guia completo sobre gestão e coordenação de projetos utilizando metodologia BIM, abordando fluxos de trabalho, colaboração e entregáveis.",
    url: "https://loja.ebbim.com.br",
  },
  {
    year: "2018",
    title: "BIM e Inovação em Gestão de Projetos",
    type: "book",
    description:
      "Livro sobre aplicação de BIM para inovação nos processos de gestão de projetos de construção civil.",
    url: "https://loja.ebbim.com.br",
  },
  {
    year: "2015",
    title: "Revit passo a passo - Volume I",
    type: "book",
    description:
      "Guia completo para aprender a usar o Revit, software BIM da Autodesk, com foco em criação de projetos completos em 3D para arquitetura.",
    url: "https://loja.ebbim.com.br",
  },
  {
    year: "2014",
    title: "ArchiCAD passo a passo - Volume I e II",
    type: "book",
    description:
      "Única publicação em português sobre o ArchiCAD, ensinando como desenvolver um projeto completo em 2D e 3D com plantas, perspectivas, cortes e tabelas integradas.",
    url: "https://loja.ebbim.com.br",
  },
  {
    year: "2013",
    title: "SketchUp Pro 2013 passo a passo",
    type: "book",
    description:
      "Guia de SketchUp com procedimentos ilustrados. Publicado também em espanhol (2014) e inglês (2011).",
    url: "https://loja.ebbim.com.br",
    language: "PT/EN/ES",
  },
  {
    year: "2010",
    title: "Vectorworks passo a passo",
    type: "book",
    description:
      "Livro sobre o software Vectorworks para projetos de arquitetura, design de interiores e paisagismo.",
    url: "https://loja.ebbim.com.br",
  },
]

function getTypeIcon(type: Publication["type"]) {
  switch (type) {
    case "book":
      return <BookOpen className="h-5 w-5 text-primary" />
    case "thesis":
      return <GraduationCap className="h-5 w-5 text-primary" />
    default:
      return <FileText className="h-5 w-5 text-primary" />
  }
}

function getTypeLabel(type: Publication["type"]) {
  switch (type) {
    case "book":
      return "Livro"
    case "article":
      return "Artigo"
    case "thesis":
      return "Dissertação"
    case "chapter":
      return "Capítulo"
    default:
      return type
  }
}

export function Publications() {
  return (
    <section id="publicacoes" className="py-20 bg-card/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm uppercase tracking-widest text-primary">
            Publicações Acadêmicas
          </h2>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              33 publicações
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              6.200+ leituras
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-colors group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    {getTypeIcon(pub.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-xs text-muted-foreground">
                        {pub.year}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {getTypeLabel(pub.type)}
                      </Badge>
                      {pub.language && (
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                          {pub.language}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-foreground font-medium group-hover:text-primary transition-colors line-clamp-2">
                      {pub.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {pub.description}
                    </p>
                    {pub.coAuthors && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        Co-autores: {pub.coAuthors.slice(0, 2).join(", ")}
                        {pub.coAuthors.length > 2 && ` +${pub.coAuthors.length - 2}`}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-sm uppercase tracking-widest text-primary mb-8">
          Livros Publicados (ProBooks Editora)
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-colors group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-muted-foreground">
                        {book.year}
                      </span>
                      {book.language && (
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                          {book.language}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-foreground font-medium group-hover:text-primary transition-colors text-sm line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                      {book.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Link
            href="https://www.researchgate.net/profile/Joao-Alberto-Gaspar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            Ver todas no ResearchGate
            <ExternalLink className="h-4 w-4" />
          </Link>
          <Link
            href="https://loja.ebbim.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            Comprar cursos na Loja da EBBIM
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
