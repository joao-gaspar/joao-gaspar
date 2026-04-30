import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl"

export function Skills() {
  const t = useTranslations('Skills')
  const skillCategories = t.raw('categories') as { title: string, skills: string[] }[]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm uppercase tracking-widest text-primary mb-12">
          {t('title')}
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
