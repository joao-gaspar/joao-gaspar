import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl"

interface ExperienceItem {
  period: string
  title: string
  company: string
  companyUrl?: string
  description: string
  skills: string[]
}

export function Experience() {
  const t = useTranslations('Experience')
  const experiences = t.raw('items') as ExperienceItem[]

  return (
    <section id="experiencia" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm uppercase tracking-widest text-primary mb-12">
          {t('title')}
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
