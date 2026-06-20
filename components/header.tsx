"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

import { useTranslations, useLocale } from "next-intl"

export function Header() {
  const t = useTranslations('Header')
  const locale = useLocale()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isOnHomePage = pathname === `/${locale}` || pathname === `/${locale}/`
  const isOnTesePage = pathname === `/${locale}/tese`

  // Strip the locale prefix to build locale-switch links that preserve the current page
  const pathWithoutLocale = (pathname ?? '/')
    .replace(/^\/(pt|en|es)(\/|$)/, '/')
    .replace(/\/$/, '') || '/'

  function localePath(targetLocale: string) {
    return `/${targetLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
  }

  const homePrefix = isOnHomePage ? '' : `/${locale}`
  const navItems = [
    { href: `${homePrefix}#sobre`, label: t('nav_sobre'), isTese: false },
    { href: `${homePrefix}#experiencia`, label: t('nav_experiencia'), isTese: false },
    { href: `${homePrefix}#publicacoes`, label: t('nav_publicacoes'), isTese: false },
    { href: `/${locale}/tese`, label: t('nav_tese'), isTese: true },
    { href: `${homePrefix}#contato`, label: t('nav_contato'), isTese: false },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${locale}`} className="text-lg font-semibold text-foreground">
            João Gaspar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navItems.map((item) =>
                item.isTese && isOnTesePage ? (
                  <span
                    key={item.href}
                    className="text-sm text-primary font-medium cursor-default"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <div className="flex items-center gap-3 border-l border-border pl-8">
              <Link href={localePath('pt')} className={`text-xs font-bold transition-colors ${locale === 'pt' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>PT</Link>
              <Link href={localePath('en')} className={`text-xs font-bold transition-colors ${locale === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>EN</Link>
              <Link href={localePath('es')} className={`text-xs font-bold transition-colors ${locale === 'es' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>ES</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.isTese && isOnTesePage ? (
                  <span
                    key={item.href}
                    className="text-sm text-primary font-medium cursor-default"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="flex items-center gap-6 mt-2 pt-4 border-t border-border">
                <Link href={localePath('pt')} className={`text-sm font-bold transition-colors ${locale === 'pt' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`} onClick={() => setIsMenuOpen(false)}>PT</Link>
                <Link href={localePath('en')} className={`text-sm font-bold transition-colors ${locale === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`} onClick={() => setIsMenuOpen(false)}>EN</Link>
                <Link href={localePath('es')} className={`text-sm font-bold transition-colors ${locale === 'es' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`} onClick={() => setIsMenuOpen(false)}>ES</Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
