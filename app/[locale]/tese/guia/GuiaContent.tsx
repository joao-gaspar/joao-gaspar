'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 whitespace-nowrap">
        {label}
      </span>
      <span className="flex-1 h-px bg-border" />
    </div>
  )
}

export function GuiaContent() {
  const t = useTranslations('Guia')
  const locale = useLocale()

  const supportCards = [
    { type: t('supp1_type'), val: t('supp1_val'), desc: t('supp1_desc') },
    { type: t('supp2_type'), val: t('supp2_val'), desc: t('supp2_desc') },
  ]

  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl px-6">

        {/* Back navigation */}
        <Link
          href={`/${locale}/tese`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('back')}
        </Link>

        {/* Thesis identification */}
        <div className="mb-8 space-y-1.5">
          <p className="text-sm font-medium text-foreground leading-snug max-w-3xl">
            ProposiÃ§Ã£o de ferramenta para comparar o desempenho de entregas de projetos de HIS baseadas em desenhos ou em BIM em contrataÃ§Ãµes pÃºblicas no Brasil
          </p>
          <p className="text-xs text-muted-foreground">
            JoÃ£o Alberto da Motta Gaspar Â· Orientador: Prof. Dr. Gil Garcia de Barros Â· FAUUSP Â· 2026
          </p>
          <p className="text-xs text-muted-foreground">
            ApÃªndice A â€” Ferramenta para ComparaÃ§Ã£o do Desempenho de Entrega de Projetos ECD e BIM em HIS
          </p>
        </div>

        {/* â”€â”€ Cover document block â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="rounded-xl overflow-hidden border border-blue-200 dark:border-blue-900 shadow-lg mb-8">
          {/* Cover body */}
          <div className="bg-white dark:bg-slate-950 px-8 py-8 border-b-4 border-blue-900">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
              {t('cover_label')}
            </div>

            <p className="font-serif italic text-xl lg:text-2xl text-blue-900 dark:text-blue-200 leading-snug max-w-2xl">
              {t('cover_question')}
            </p>
          </div>
        </div>

        {/* â”€â”€ Content sections â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="space-y-5">

          {/* INTRODUÃ‡ÃƒO */}
          <section className="bg-card border border-border rounded-xl p-7">
            <SectionLabel label={t('sec_intro')} />
            <div className="space-y-4 text-sm leading-relaxed text-foreground">
              <p>{t('intro_p1')}</p>
              <p>{t('intro_p2')}</p>

              <blockquote className="border-l-4 border-blue-700 bg-slate-50 dark:bg-slate-900/60 px-5 py-4 rounded-r-md my-2">
                <p className="font-serif italic text-sm leading-relaxed">
                  {t.rich('intro_law', { b: (chunks) => <strong className="not-italic">{chunks}</strong> })}
                </p>
                <cite className="block text-xs text-muted-foreground mt-3 not-italic font-semibold tracking-wide">
                  {t('intro_law_cite')}
                </cite>
              </blockquote>

              <p>{t.rich('intro_p3', { b: (chunks) => <strong>{chunks}</strong> })}</p>
              <p>{t('intro_p4')}</p>
              <blockquote className="border-l-4 border-primary bg-primary/5 px-5 py-4 rounded-r-md my-3">
                <p className="font-serif italic text-sm leading-relaxed text-foreground">
                  &ldquo;{t('intro_question')}&rdquo;
                </p>
              </blockquote>
              <p>{t('intro_p4b')}</p>

              <div className="space-y-2 mt-2">
                <div className="flex items-start gap-4 p-3 rounded-md border border-border">
                  <span className="font-serif italic text-sm text-muted-foreground flex-shrink-0 pt-0.5 min-w-[20px]">a)</span>
                  <span className="text-sm">{t('consid_a')}</span>
                </div>
                <div className="flex items-start gap-4 p-3 rounded-md border border-border">
                  <span className="font-serif italic text-sm text-muted-foreground flex-shrink-0 pt-0.5 min-w-[20px]">b)</span>
                  <span className="text-sm">{t('consid_b')}</span>
                </div>
                <div className="flex items-start gap-4 p-3 rounded-md border border-border">
                  <span className="font-serif italic text-sm text-muted-foreground flex-shrink-0 pt-0.5 min-w-[20px]">c)</span>
                  <span className="text-sm">{t('consid_c')}</span>
                </div>
              </div>

              <p className="pt-1">{t('intro_p5')}</p>
              <p>{t('intro_p6')}</p>
            </div>
          </section>

          {/* DEFINIÃ‡Ã•ES */}
          <section className="bg-card border border-border rounded-xl p-7">
            <SectionLabel label={t('sec_defs')} />
            <p className="text-sm leading-relaxed text-foreground mb-6">{t('defs_p1')}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-t-4 border-amber-600">
                <div className="text-xs font-black tracking-widest uppercase text-amber-700 dark:text-amber-400 mb-1">
                  {t('ecd_tag')}
                </div>
                <div className="font-bold text-sm text-foreground mb-2 leading-tight">{t('ecd_name')}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{t('ecd_desc')}</div>
              </div>
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-t-4 border-blue-600">
                <div className="text-xs font-black tracking-widest uppercase text-blue-700 dark:text-blue-400 mb-1">
                  {t('bim_tag')}
                </div>
                <div className="font-bold text-sm text-foreground mb-2 leading-tight">{t('bim_name')}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{t('bim_desc')}</div>
              </div>
            </div>
          </section>

          {/* PARA QUE SERVE */}
          <section className="bg-card border border-border rounded-xl p-7">
            <SectionLabel label={t('sec_purpose')} />
            <blockquote className="border-l-4 border-blue-900 dark:border-blue-500 bg-slate-50 dark:bg-slate-900/60 px-5 py-4 rounded-r-md font-serif italic text-sm leading-relaxed text-foreground">
              {t('purpose_text')}
            </blockquote>
          </section>

          {/* REQUISITOS */}
          <section className="bg-card border border-border rounded-xl p-7">
            <SectionLabel label={t('sec_req')} />
            <p className="text-sm text-muted-foreground mb-4">{t('req_intro')}</p>
            <div className="space-y-2">
              <div className="flex items-start gap-3 text-sm">
                <span className="font-serif italic text-muted-foreground flex-shrink-0 min-w-[20px]">a)</span>
                <span>{t('req_item_a')}</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="font-serif italic text-muted-foreground flex-shrink-0 min-w-[20px]">b)</span>
                <span>{t('req_item_b')}</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="font-serif italic text-muted-foreground flex-shrink-0 min-w-[20px]">c)</span>
                <span>{t('req_item_c')}</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="font-serif italic text-muted-foreground flex-shrink-0 min-w-[20px]">d)</span>
                <span>{t('req_item_d')}</span>
              </div>
            </div>
          </section>

          {/* INFORMAÃ‡Ã•ES */}
          <section className="bg-card border border-border rounded-xl p-7">
            <SectionLabel label={t('sec_info')} />
            <div className="space-y-3 text-sm leading-relaxed text-foreground mb-7">
              <p>{t('info_p1')}</p>
              <p>{t('info_p2')}</p>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-5 h-0.5 bg-slate-300 dark:bg-slate-600" />
                  <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                    {t('info_grp1_label')}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {(['info_grp1_li1', 'info_grp1_li2', 'info_grp1_li3'] as const).map((key) => (
                    <li key={key} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-[7px]" />
                      {t(key)}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-5 h-0.5 bg-slate-300 dark:bg-slate-600" />
                  <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                    {t('info_grp2_label')}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-foreground mb-3">{t('info_grp2_intro')}</p>
                <ul className="space-y-2.5">
                  {(['info_grp2_li1', 'info_grp2_li2', 'info_grp2_li3', 'info_grp2_li4', 'info_grp2_li5', 'info_grp2_li6', 'info_grp2_li7'] as const).map((key) => (
                    <li key={key} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-[7px]" />
                      {t(key)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* COMO COMEÃ‡AR */}
          <section className="bg-card border border-border rounded-xl p-7">
            <SectionLabel label={t('sec_howto')} />
            <div className="mt-4 p-6 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-base font-medium text-blue-900 dark:text-blue-100">
                {t('howto_text')}...
              </p>
              <Link
                href="/ferramenta-ecd-bim/"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 hover:shadow-blue-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-95"
              >
                {t('howto_link_label')}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </section>

          {/* SUPORTE */}
          <section className="bg-card border border-border rounded-xl p-7">
            <SectionLabel label={t('sec_support')} />
            <p className="text-sm leading-relaxed text-foreground mb-4">{t('support_p1')}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {supportCards.map((supp) => (
                <div key={supp.type} className="border border-border rounded-lg p-4 flex flex-col gap-2">
                  <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                    {supp.type}
                  </div>
                  <div className="text-sm font-semibold text-blue-900 dark:text-blue-200 break-all">
                    {supp.val}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{supp.desc}</div>
                </div>
              ))}
            </div>
          </section>

        </div>

      </div>
    </div>
  )
}
