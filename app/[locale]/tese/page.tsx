import type { ReactNode } from "react"
import { getTranslations } from "next-intl/server"
import { Presentation, BookOpen, BarChart3, GitCompare, ExternalLink } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

function Card({
  href,
  topBar,
  borderHover,
  iconBg,
  icon,
  title,
  desc,
  btn,
  btnColor,
}: {
  href: string
  topBar: string
  borderHover: string
  iconBg: string
  icon: ReactNode
  title: string
  desc: string
  btn: string
  btnColor: string
}) {
  const ready = href !== "#"
  const base = `group block bg-card border border-border rounded-2xl overflow-hidden transition-all`
  const className = ready
    ? `${base} hover:shadow-lg ${borderHover}`
    : `${base} opacity-60 cursor-default`

  const inner = (
    <>
      <div className={`h-1 ${topBar}`} />
      <div className="p-6">
        <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-5`}>
          {icon}
        </div>
        <h2 className="text-lg font-semibold mb-2 text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{desc}</p>
        <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${btnColor} ${ready ? "group-hover:underline" : ""}`}>
          {btn}
          <ExternalLink className="w-3.5 h-3.5" />
        </span>
      </div>
    </>
  )

  if (!ready) return <div className={className}>{inner}</div>

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  )
}

export default async function Tese() {
  const t = await getTranslations('Tese')

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 pt-16">

        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-teal-700">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase bg-white/20 text-white rounded-full px-4 py-1.5 mb-6">
              {t('badge')}
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-snug mb-4 max-w-3xl">
              {t('hero_title')}
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl">
              {t('hero_desc')}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Apresentação para Banca — TODO: adicionar URL */}
            <Card
              href="#"
              topBar="bg-violet-500"
              borderHover="hover:border-violet-300 dark:hover:border-violet-700"
              iconBg="bg-violet-100 dark:bg-violet-950"
              icon={<Presentation className="w-6 h-6 text-violet-700 dark:text-violet-400" />}
              title={t('banca_title')}
              desc={t('banca_desc')}
              btn={t('banca_btn')}
              btnColor="text-violet-700 dark:text-violet-400"
            />

            {/* Guia — TODO: adicionar URL */}
            <Card
              href="#"
              topBar="bg-amber-500"
              borderHover="hover:border-amber-300 dark:hover:border-amber-700"
              iconBg="bg-amber-100 dark:bg-amber-950"
              icon={<BookOpen className="w-6 h-6 text-amber-700 dark:text-amber-400" />}
              title={t('guia_title')}
              desc={t('guia_desc')}
              btn={t('guia_btn')}
              btnColor="text-amber-700 dark:text-amber-400"
            />

            {/* IGEP — TODO: adicionar URL */}
            <Card
              href="#"
              topBar="bg-blue-500"
              borderHover="hover:border-blue-300 dark:hover:border-blue-700"
              iconBg="bg-blue-100 dark:bg-blue-950"
              icon={<BarChart3 className="w-6 h-6 text-blue-700 dark:text-blue-400" />}
              title={t('igep_title')}
              desc={t('igep_desc')}
              btn={t('igep_btn')}
              btnColor="text-blue-700 dark:text-blue-400"
            />

            {/* Comparação ECD-BIM */}
            <Card
              href="/ferramenta-ecd-bim/index.html"
              topBar="bg-teal-500"
              borderHover="hover:border-teal-300 dark:hover:border-teal-700"
              iconBg="bg-teal-100 dark:bg-teal-950"
              icon={<GitCompare className="w-6 h-6 text-teal-700 dark:text-teal-400" />}
              title={t('ecd_title')}
              desc={t('ecd_desc')}
              btn={t('ecd_btn')}
              btnColor="text-teal-700 dark:text-teal-400"
            />

          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
