import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ExperienceItem {
  period: string
  title: string
  company: string
  companyUrl?: string
  description: string
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    period: "Mar 2022 — Mar 2026",
    title: "Doutorando em BIM",
    company: "FAU USP - Faculdade de Arquitetura e Urbanismo e de Design da Universidade de São Paulo",
    companyUrl: "https://www.fau.usp.br/",
    description:
      "Projeto",
    skills: ["Building information modeling (BIM)", " Entrega Centrada em Desenhos (ECD)", "Indicadores de desempenho", "Contratações Públicas", " Habitação de 
Interesse Social (HIS)"],
  },
  {
    period: "Jan 2026 — Presente",
    title: "Diretor de Inovação (CINO)",
    company: "totalCAD Softwares Técnicos",
    companyUrl: "https://totalcad.com.br",
    description:
      "Lidera a estratégia de inovação e transformação digital da empresa, desenvolvendo soluções tecnológicas para o setor AECO (Arquitetura, Engenharia, Construção e Operação).",
    skills: ["Inovação", "BIM", "Estratégia Digital", "Liderança"],
  },
  {
    period: "Abr 2000 — Presente",
    title: "Diretor de Operações",
    company: "EBBIM - Escola Brasileira de BIM",
    companyUrl: "https://loja.ebbim.com.br",
    description:
      "Fundou e dirige a principal escola de BIM do Brasil, formando milhares de profissionais. A escola oferece cursos de História do BIM, IFC, Coordenação de Projetos, SketchUp Pro e consultoria especializada. Parceria com a ProBooks Editora para publicação de livros técnicos.",
    skills: ["BIM", "Educação", "Revit", "ArchiCAD", "SketchUp", "IFC"],
  },
  {
    period: "Presente",
    title: "Coordenador ABNT CEE-134",
    company: "ABNT - Associação Brasileira de Normas Técnicas",
    companyUrl: "https://www.abnt.org.br",
    description:
      "Coordena a Comissão Brasileira responsável pelo desenvolvimento e adoção das normas BIM para o Brasil, incluindo a NBR 15965 - Norma ABNT de Classificação da Construção.",
    skills: ["Normalização", "NBR 15965", "Governança BIM", "Políticas Públicas"],
  },
  {
    period: "2023 — Presente",
    title: "Professor de Pós-graduação em BIM",
    company: "Universidade Mackenzie, FIA Business School, SENAI-ISEP",
    description:
      "Ministra disciplinas de BIM em cursos de pós-graduação, incluindo Metodologias BIM, Gestão de Dados e Gestão Profissional na Era Digital.",
    skills: ["Metodologias BIM", "Gestão de Dados", "Docência", "Pesquisa"],
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm uppercase tracking-widest text-primary mb-12">
          Experiência
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="group relative grid md:grid-cols-[200px_1fr] gap-6 md:gap-12"
            >
              <div className="text-sm text-muted-foreground">
                {exp.period}
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  {exp.companyUrl ? (
                    <Link
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {exp.company}
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  ) : (
                    <p className="text-muted-foreground">{exp.company}</p>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 border-0"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
