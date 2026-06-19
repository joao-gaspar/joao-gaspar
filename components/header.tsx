"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

import { useTranslations, useLocale } from "next-intl"

export function Header() {
  const t = useTranslations('Header')
  const locale = useLocale()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/#sobre", label: t('nav_sobre') },
    { href: "/#experiencia", label: t('nav_experiencia') },
    { href: "/#publicacoes", label: t('nav_publicacoes') },
    { href: "/tese", label: t('nav_tese') },
    { href: "/#contato", label: t('nav_contato') },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-foreground">
            João Gaspar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3 border-l border-border pl-8">
              <Link href="/pt" className={`text-xs font-bold transition-colors ${locale === 'pt' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>PT</Link>
              <Link href="/en" className={`text-xs font-bold transition-colors ${locale === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>EN</Link>
              <Link href="/es" className={`text-xs font-bold transition-colors ${locale === 'es' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>ES</Link>
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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-6 mt-2 pt-4 border-t border-border">
                <Link href="/pt" className={`text-sm font-bold transition-colors ${locale === 'pt' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`} onClick={() => setIsMenuOpen(false)}>PT</Link>
                <Link href="/en" className={`text-sm font-bold transition-colors ${locale === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`} onClick={() => setIsMenuOpen(false)}>EN</Link>
                <Link href="/es" className={`text-sm font-bold transition-colors ${locale === 'es' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`} onClick={() => setIsMenuOpen(false)}>ES</Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
