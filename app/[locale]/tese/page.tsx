import { getTranslations } from "next-intl/server"
import Link from "next/link"
import { Presentation, BookOpen, BarChart3, GitCompare, ExternalLink } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default async function Tese() {
  const t = await getTranslations('Tese')

  const cards = [
    {
      icon: <Presentation className="h-5 w-5 text-primary" />,
      title: t('banca_title'),
      desc: t('banca_desc'),
      btn: t('banca_btn'),
      href: "#",
      external: false,
    },
    {
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      title: t('guia_title'),
      desc: t('guia_desc'),
      btn: t('guia_btn'),
      href: "/tese/guia",
      external: false,
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-primary" />,
      title: t('igep_title'),
      desc: t('igep_desc'),
      btn: t('igep_btn'),
      href: "/tese/igep",
      external: false,
    },
    {
      icon: <GitCompare className="h-5 w-5 text-primary" />,
      title: t('ecd_title'),
      desc: t('ecd_desc'),
      btn: t('ecd_btn'),
      href: "/ferramenta-ecd-bim/index.html",
      external: true,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 pt-16">
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">

            <h2 className="text-sm uppercase tracking-widest text-primary mb-12">
              {t('section_label')}
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <h1 className="text-3xl font-bold text-foreground text-balance">
                {t('heading')}
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                {t('desc')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {cards.map((card, i) => {
                const ready = card.href !== "#"
                const linkProps = card.external
                  ? { target: '_blank' as const, rel: 'noopener noreferrer' }
                  : {}
                const cardEl = (
                  <Card className={`bg-card border-border transition-colors group ${ready ? 'hover:border-primary/50 cursor-pointer' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          {card.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <h3 className="text-foreground font-medium group-hover:text-primary transition-colors">
                              {card.title}
                            </h3>
                            {!ready && (
                              <Badge variant="secondary" className="text-xs">
                                {t('coming_soon')}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {card.desc}
                          </p>
                          {ready && (
                            <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary">
                              {card.btn}
                              {card.external && <ExternalLink className="h-3 w-3" />}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
                return ready ? (
                  <Link key={i} href={card.href} {...linkProps} className="block">
                    {cardEl}
                  </Link>
                ) : (
                  <div key={i}>{cardEl}</div>
                )
              })}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
