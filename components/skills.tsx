import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Tecnologias BIM",
    skills: ["Revit Architecture", "ArchiCAD", "SketchUp Pro", "Navisworks", "BIM 360", "Vectorworks", "IFC"],
  },
  {
    title: "Metodologias e Normas",
    skills: ["BIM Management", "ISO 19650", "NBR 15965", "LOD/LOI", "Clash Detection", "IFC Coordination"],
  },
  {
    title: "Áreas de Especialização",
    skills: ["Building Information Modelling", "Construction Technology", "Cost Estimation", "Project Cycle Management", "Architecture Science"],
  },
  {
    title: "Competências Acadêmicas",
    skills: ["Pesquisa Científica", "Revisão Sistemática", "Análise Cienciométrica", "Docência Superior"],
  },
  {
    title: "Idiomas",
    skills: ["Português (Nativo)", "Inglês (Profissional)", "Espanhol (Profissional)"],
  },
]

export function Skills() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm uppercase tracking-widest text-primary mb-12">
          Competências
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-foreground font-medium mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
