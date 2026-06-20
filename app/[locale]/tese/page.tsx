import { getTranslations } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default async function Tese() {
  const t = await getTranslations('Tese')

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex flex-col md:overflow-hidden pt-16">

        {/* ── Mobile (< md): página descritiva ── */}
        <div className="md:hidden flex-1 px-5 py-8 space-y-5">

          {/* Hero */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-900 via-blue-700 to-teal-700 p-6 text-white">
            <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-white/20 rounded-full px-3 py-1 mb-4">
              {t('subtitle')}
            </span>
            <h1 className="text-xl font-bold leading-snug mb-3">
              {t('title')}
            </h1>
            <p className="text-sm opacity-90 leading-relaxed">
              {t('description')}
            </p>
            <a
              href="/ferramenta-ecd-bim/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-white text-blue-900 font-semibold text-sm rounded-xl px-5 py-3 transition-opacity hover:opacity-90"
            >
              {t('open_button')} →
            </a>
            <p className="mt-3 text-[11px] opacity-60">
              {t('open_hint')}
            </p>
          </div>

          {/* Cards das partes */}
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-xl border border-border bg-card p-5">
              <span className="inline-block text-xs font-bold text-blue-700 bg-blue-50 dark:bg-blue-950 dark:text-blue-300 px-3 py-1 rounded-full">
                {t('part1_label')}
              </span>
              <h2 className="text-base font-semibold mt-3 mb-2 text-foreground">
                {t('part1_title')}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('part1_desc')}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <span className="inline-block text-xs font-bold text-teal-700 bg-teal-50 dark:bg-teal-950 dark:text-teal-300 px-3 py-1 rounded-full">
                {t('part2_label')}
              </span>
              <h2 className="text-base font-semibold mt-3 mb-2 text-foreground">
                {t('part2_title')}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('part2_desc')}
              </p>
            </div>
          </div>
        </div>

        {/* ── Desktop (≥ md): iframe original ── */}
        <div className="hidden md:flex flex-1 flex-col overflow-hidden">
          <iframe
            src="/ferramenta-ecd-bim/index.html"
            title="Ferramenta de Comparação ECD-BIM — Tese de Doutorado"
            className="flex-1 w-full border-0"
            allowFullScreen
          />
        </div>

      </main>

      <Footer />
    </div>
  )
}
