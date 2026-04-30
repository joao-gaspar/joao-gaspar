import Link from "next/link"
import { Linkedin, Mail, BookOpen, GraduationCap } from "lucide-react"

import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations('Hero')
  const th = useTranslations('Header') // For nav items

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Name and Title */}
          <div className="lg:sticky lg:top-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              {t('name')}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-primary font-medium">
              {t('subtitle')}
            </p>
            <p className="mt-2 text-muted-foreground">
              {t('role1')}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {t('role2')}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {t('role3')}
            </p>

            {/* Navigation */}
            <nav className="mt-12 hidden lg:block">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#sobre"
                    className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
                    <span className="text-sm uppercase tracking-widest">{th('nav_sobre')}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#experiencia"
                    className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
                    <span className="text-sm uppercase tracking-widest">{th('nav_experiencia')}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#publicacoes"
                    className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
                    <span className="text-sm uppercase tracking-widest">{th('nav_publicacoes')}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
                    <span className="text-sm uppercase tracking-widest">{th('nav_contato')}</span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Social Links */}
            <div className="mt-12 flex items-center gap-6">
              <Link
                href="https://www.linkedin.com/in/joao-motta-gaspar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.researchgate.net/profile/Joao-Alberto-Gaspar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="ResearchGate"
              >
                <GraduationCap className="h-6 w-6" />
              </Link>
              <Link
                href="https://loja.ebbim.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Loja EBBIM"
              >
                <BookOpen className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:contato@joaogaspar.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Right Column - About */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about1_1')}<span className="text-foreground font-medium">{t('about1_2')}</span>{t('about1_3')} 
              <span className="text-foreground font-medium">{t('about1_4')}</span>{t('about1_5')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about2_1')}<span className="text-foreground font-medium">{t('about2_2')}</span>{t('about2_3')} 
              <span className="text-foreground font-medium">{t('about2_4')}</span>{t('about2_5')}
              <span className="text-foreground font-medium">{t('about2_6')}</span>{t('about2_7')}
              <span className="text-foreground font-medium">{t('about2_8')}</span>{t('about2_9')} 
              <span className="text-foreground font-medium">{t('about2_10')}</span>{t('about2_11')} 
              <span className="text-foreground font-medium">{t('about2_12')}</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about3_1')}<span className="text-foreground font-medium">{t('about3_2')}</span>{t('about3_3')} 
              <span className="text-foreground font-medium">{t('about3_4')}</span>{t('about3_5')} 
              <span className="text-foreground font-medium">{t('about3_6')}</span>{t('about3_7')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
