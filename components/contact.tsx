import Link from "next/link"
import { Linkedin, Mail, MapPin, GraduationCap, BookOpen, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"

export function Contact() {
  const t = useTranslations('Contact')
  return (
    <section id="contato" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm uppercase tracking-widest text-primary mb-12">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-bold text-foreground text-balance">
              {t('subtitle')}
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t('description')}
            </p>

            {/* Consultoria Card */}
            <Card className="mt-6 bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <h4 className="font-medium text-foreground mb-2">{t('card_title')}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {t('card_desc')}
                </p>
                <Link
                  href="https://loja.ebbim.com.br/produto/consultoria-joao-gaspar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  {t('card_button')}
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t('loc_title')}</p>
                <p className="text-foreground">{t('loc_desc')}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Linkedin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t('linkedin')}</p>
                <Link
                  href="https://www.linkedin.com/in/joao-motta-gaspar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  /in/joao-motta-gaspar
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t('researchgate')}</p>
                <Link
                  href="https://www.researchgate.net/profile/Joao-Alberto-Gaspar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Joao-Alberto-Gaspar
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t('ebbim')}</p>
                <Link
                  href="https://loja.ebbim.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  loja.ebbim.com.br
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <ExternalLink className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t('lattes')}</p>
                <Link
                  href="http://lattes.cnpq.br/9745462238309062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {t('curriculo_lattes')}
                </Link>
              </div>
            </div>

            <Button asChild className="mt-6 w-full md:w-auto">
              <Link
                href="https://www.linkedin.com/in/joao-motta-gaspar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('connect_linkedin')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
