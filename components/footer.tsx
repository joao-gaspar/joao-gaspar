import Link from "next/link"
import { Linkedin, BookOpen, GraduationCap } from "lucide-react"

import { useTranslations } from "next-intl"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations('Footer')

  return (
    <footer className="py-12 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link
              href="https://www.linkedin.com/in/joao-motta-gaspar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.researchgate.net/profile/Joao-Alberto-Gaspar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="ResearchGate"
            >
              <GraduationCap className="h-5 w-5" />
            </Link>
            <Link
              href="https://loja.ebbim.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Loja EBBIM"
            >
              <BookOpen className="h-5 w-5" />
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            {currentYear} {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
