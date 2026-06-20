'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

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

const INFOG_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 840" width="1400" height="840">
  <rect width="1400" height="840" fill="#F8FAFF"/>
  <rect width="1400" height="72" fill="#1D4ED8"/>
  <text x="700" y="28" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="18" font-weight="800" fill="white" letter-spacing=".5">FERRAMENTA PARA COMPARAÇÃO DO DESEMPENHO DE ENTREGA DE PROJETOS ECD E BIM</text>
  <text x="700" y="54" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="12" fill="white" opacity=".85">Apêndice A da Tese de Doutorado — Instrumento metodológico para análise comparativa de habitações de interesse social (HIS)</text>
  <rect x="24" y="82" width="1352" height="32" fill="#1E3A8A" rx="8"/>
  <text x="700" y="103" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="13" font-weight="700" fill="white" letter-spacing=".5">PARTE 1 — SELEÇÃO E CARACTERIZAÇÃO DOS OBJETOS DE ANÁLISE</text>
  <text x="700" y="132" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="11" fill="#475569">Identificar os pares de projetos ECD e BIM mais semelhantes entre si para garantir a validade da comparação</text>
  <rect x="24" y="142" width="326" height="168" fill="#DBEAFE" rx="12" stroke="#3B82F6" stroke-width="1.5"/>
  <rect x="24" y="142" width="326" height="36" fill="#3B82F6" rx="12"/><rect x="24" y="160" width="326" height="18" fill="#3B82F6"/>
  <text x="187" y="166" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="13" font-weight="800" fill="white">Seção 1.1</text>
  <text x="38" y="196" font-family="system-ui, Arial, sans-serif" font-size="12" font-weight="700" fill="#1E3A8A">Contemporaneidade das</text>
  <text x="38" y="212" font-family="system-ui, Arial, sans-serif" font-size="12" font-weight="700" fill="#1E3A8A">Contratações</text>
  <text x="38" y="232" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#0F172A">Intervalo de tempo entre</text>
  <text x="38" y="246" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#0F172A">as contratações dos projetos</text>
  <text x="38" y="260" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#0F172A">ECD e BIM analisados</text>
  <rect x="30" y="284" width="314" height="22" fill="#1D4ED8" rx="11" opacity=".15"/>
  <text x="187" y="299" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="10" font-weight="700" fill="#1D4ED8">Menor intervalo = par mais adequado</text>
  <rect x="366" y="142" width="326" height="168" fill="#DBEAFE" rx="12" stroke="#3B82F6" stroke-width="1.5"/>
  <rect x="366" y="142" width="326" height="36" fill="#3B82F6" rx="12"/><rect x="366" y="160" width="326" height="18" fill="#3B82F6"/>
  <text x="529" y="166" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="13" font-weight="800" fill="white">Seção 1.2</text>
  <text x="380" y="196" font-family="system-ui, Arial, sans-serif" font-size="12" font-weight="700" fill="#1E3A8A">Características das</text>
  <text x="380" y="212" font-family="system-ui, Arial, sans-serif" font-size="12" font-weight="700" fill="#1E3A8A">Contratações</text>
  <text x="380" y="232" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#0F172A">Semelhança de legislação</text>
  <text x="380" y="246" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#0F172A">e objetos das</text>
  <text x="380" y="260" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#0F172A">contratações (escopo)</text>
  <rect x="372" y="284" width="314" height="22" fill="#1D4ED8" rx="11" opacity=".15"/>
  <text x="529" y="299" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="10" font-weight="700" fill="#1D4ED8">Escala 1–6 (diferente → idêntico)</text>
  <rect x="708" y="142" width="326" height="168" fill="#DBEAFE" rx="12" stroke="#3B82F6" stroke-width="1.5"/>
  <rect x="708" y="142" width="326" height="36" fill="#3B82F6" rx="12"/><rect x="708" y="160" width="326" height="18" fill="#3B82F6"/>
  <text x="871" y="166" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="13" font-weight="800" fill="white">Seção 1.3</text>
  <text x="722" y="196" font-family="system-ui, Arial, sans-serif" font-size="12" font-weight="700" fill="#1E3A8A">Características das Equipes</text>
  <text x="722" y="216" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#0F172A">Projetistas, gerenciadora</text>
  <text x="722" y="230" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#0F172A">e fiscalização (escola</text>
  <text x="722" y="244" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#0F172A">e membros envolvidos)</text>
  <rect x="714" y="284" width="314" height="22" fill="#1D4ED8" rx="11" opacity=".15"/>
  <text x="871" y="299" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="10" font-weight="700" fill="#1D4ED8">Escala 1–5 por equipe</text>
  <rect x="1050" y="142" width="326" height="168" fill="#DBEAFE" rx="12" stroke="#3B82F6" stroke-width="1.5"/>
  <rect x="1050" y="142" width="326" height="36" fill="#3B82F6" rx="12"/><rect x="1050" y="160" width="326" height="18" fill="#3B82F6"/>
  <text x="1213" y="166" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="13" font-weight="800" fill="white">Seção 1.4</text>
  <text x="1064" y="196" font-family="system-ui, Arial, sans-serif" font-size="12" font-weight="700" fill="#1E3A8A">Grau de Esforço Projetual</text>
  <text x="1064" y="212" font-family="system-ui, Arial, sans-serif" font-size="12" font-weight="700" fill="#1E3A8A">(GEP)</text>
  <text x="1064" y="232" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#0F172A">Esforço projetual via</text>
  <text x="1064" y="246" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#0F172A">método IGEP (Andrade</text>
  <text x="1064" y="260" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#0F172A">et al., 2024/2025)</text>
  <rect x="1056" y="284" width="314" height="22" fill="#1D4ED8" rx="11" opacity=".15"/>
  <text x="1213" y="299" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="10" font-weight="700" fill="#1D4ED8">Menor diferença = par mais adequado</text>
  <polygon points="358,220 358,232 370,226" fill="#3B82F6"/>
  <polygon points="700,220 700,232 712,226" fill="#3B82F6"/>
  <polygon points="1042,220 1042,232 1054,226" fill="#3B82F6"/>
  <rect x="24" y="324" width="1352" height="32" fill="#CBD5E1" rx="8"/>
  <text x="700" y="345" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="12" font-weight="700" fill="#1E3A8A">Seção 1.5 — Consolidação dos resultados e seleção dos pares análogos para análise</text>
  <rect x="24" y="372" width="1352" height="32" fill="#0F766E" rx="8"/>
  <text x="700" y="393" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="13" font-weight="700" fill="white" letter-spacing=".5">PARTE 2 — COMPARAÇÃO DOS INDICADORES DE DESEMPENHO DAS ENTREGAS</text>
  <text x="700" y="422" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="11" fill="#475569">Coletar dados de entrega de cada projeto, calcular os 5 indicadores e comparar na síntese (seção 2.7)</text>
  <rect x="24" y="432" width="259" height="192" fill="white" rx="12" stroke="#CBD5E1" stroke-width="1.5"/>
  <rect x="24" y="432" width="259" height="8" fill="#0369A1" rx="12"/><rect x="24" y="436" width="259" height="4" fill="#0369A1"/>
  <text x="36" y="458" font-family="system-ui, Arial, sans-serif" font-size="10" fill="#0369A1" font-weight="700">Seção 2.1+2.2</text>
  <text x="36" y="474" font-family="system-ui, Arial, sans-serif" font-size="13" font-weight="800" fill="#0F172A">Documentos e Tempo</text>
  <text x="36" y="496" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#475569">Qtd. e tipos de docs entregues</text>
  <text x="36" y="510" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#475569">Total de meses de entrega</text>
  <text x="36" y="524" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#475569">(excluindo paralisações)</text>
  <rect x="32" y="598" width="243" height="20" fill="#0369A1" rx="10" opacity=".15"/>
  <text x="153.5" y="612" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="10" font-weight="700" fill="#0369A1">Base de dados</text>
  <rect x="297" y="432" width="259" height="192" fill="white" rx="12" stroke="#CBD5E1" stroke-width="1.5"/>
  <rect x="297" y="432" width="259" height="8" fill="#065F46" rx="12"/><rect x="297" y="436" width="259" height="4" fill="#065F46"/>
  <text x="309" y="458" font-family="system-ui, Arial, sans-serif" font-size="10" fill="#065F46" font-weight="700">Seção 2.3</text>
  <text x="309" y="474" font-family="system-ui, Arial, sans-serif" font-size="13" font-weight="800" fill="#0F172A">Docs por Mês</text>
  <text x="309" y="496" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#475569">Média de documentos</text>
  <text x="309" y="510" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#475569">entregues por mês.</text>
  <text x="309" y="524" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#475569">Mede a cadência de entregas.</text>
  <rect x="305" y="598" width="243" height="20" fill="#065F46" rx="10" opacity=".15"/>
  <text x="426.5" y="612" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="10" font-weight="700" fill="#065F46">Ritmo de entrega</text>
  <rect x="570" y="432" width="259" height="192" fill="white" rx="12" stroke="#CBD5E1" stroke-width="1.5"/>
  <rect x="570" y="432" width="259" height="8" fill="#7C3AED" rx="12"/><rect x="570" y="436" width="259" height="4" fill="#7C3AED"/>
  <text x="582" y="458" font-family="system-ui, Arial, sans-serif" font-size="10" fill="#7C3AED" font-weight="700">Seção 2.4</text>
  <text x="582" y="474" font-family="system-ui, Arial, sans-serif" font-size="13" font-weight="800" fill="#0F172A">Docs vs Consolidação</text>
  <text x="582" y="496" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#475569">Razão: docs entregues</text>
  <text x="582" y="510" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#475569">÷ docs que consolidam</text>
  <text x="582" y="524" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#475569">cada eixo de entrega.</text>
  <rect x="578" y="598" width="243" height="20" fill="#7C3AED" rx="10" opacity=".15"/>
  <text x="699.5" y="612" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="10" font-weight="700" fill="#7C3AED">Eficiência de escopo</text>
  <rect x="843" y="432" width="259" height="192" fill="white" rx="12" stroke="#CBD5E1" stroke-width="1.5"/>
  <rect x="843" y="432" width="259" height="8" fill="#B45309" rx="12"/><rect x="843" y="436" width="259" height="4" fill="#B45309"/>
  <text x="855" y="458" font-family="system-ui, Arial, sans-serif" font-size="10" fill="#B45309" font-weight="700">Seção 2.5</text>
  <text x="855" y="474" font-family="system-ui, Arial, sans-serif" font-size="13" font-weight="800" fill="#0F172A">Versões por Pacote</text>
  <text x="855" y="496" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#475569">Média de versões enviadas</text>
  <text x="855" y="510" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#475569">por pacote de entrega.</text>
  <text x="855" y="524" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#475569">Menos = mais assertivo.</text>
  <rect x="851" y="598" width="243" height="20" fill="#B45309" rx="10" opacity=".15"/>
  <text x="972.5" y="612" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="10" font-weight="700" fill="#B45309">Assertividade</text>
  <rect x="1116" y="432" width="259" height="192" fill="white" rx="12" stroke="#CBD5E1" stroke-width="1.5"/>
  <rect x="1116" y="432" width="259" height="8" fill="#9F1239" rx="12"/><rect x="1116" y="436" width="259" height="4" fill="#9F1239"/>
  <text x="1128" y="458" font-family="system-ui, Arial, sans-serif" font-size="10" fill="#9F1239" font-weight="700">Seção 2.6</text>
  <text x="1128" y="474" font-family="system-ui, Arial, sans-serif" font-size="13" font-weight="800" fill="#0F172A">Revisões por Documento</text>
  <text x="1128" y="496" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#475569">Média de revisões para</text>
  <text x="1128" y="510" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#475569">cada doc aprovado.</text>
  <text x="1128" y="524" font-family="system-ui, Arial, sans-serif" font-size="10.5" fill="#475569">Menos = melhor qualidade.</text>
  <rect x="1124" y="598" width="243" height="20" fill="#9F1239" rx="10" opacity=".15"/>
  <text x="1245.5" y="612" text-anchor="middle" font-family="system-ui, Arial, sans-serif" font-size="10" font-weight="700" fill="#9F1239">Qualidade</text>
  <rect x="24" y="640" width="1352" height="62" fill="#0F766E" rx="12"/>
  <text x="80" y="662" font-family="system-ui, Arial, sans-serif" font-size="13" font-weight="800" fill="white">SEÇÃO 2.7 — QUADRO-SÍNTESE: Comparação dos Indicadores de Desempenho das Entregas</text>
  <text x="80" y="684" font-family="system-ui, Arial, sans-serif" font-size="11.5" fill="white" opacity=".9">Análise consolidada dos 5 indicadores de cada projeto para julgamento: qual modalidade de contratação entregou melhor desempenho?</text>
  <text x="24" y="720" font-family="system-ui, Arial, sans-serif" font-size="10" fill="#475569">Fonte: elaborada pelo Autor (2026) — Apêndice A: Ferramenta para comparação ECD/BIM (HIS) · Instrumento metodológico original</text>
  <text x="1376" y="720" text-anchor="end" font-family="system-ui, Arial, sans-serif" font-size="10" fill="#475569">Minimalista Científico</text>
</svg>`

export function GuiaContent() {
  const t = useTranslations('Guia')

  const requirements = [
    { num: t('req1_num'), title: t('req1_title'), desc: t('req1_desc'), scale: t('req1_scale') },
    { num: t('req2_num'), title: t('req2_title'), desc: t('req2_desc'), scale: t('req2_scale') },
    { num: t('req3_num'), title: t('req3_title'), desc: t('req3_desc'), scale: t('req3_scale') },
    { num: t('req4_num'), title: t('req4_title'), desc: t('req4_desc'), scale: t('req4_scale') },
  ]

  const downloadCards = [
    { label: t('howto_blank_label'), desc: t('howto_blank_desc'), link: t('howto_blank_link'), variant: 'blank' as const },
    { label: t('howto_hypo_label'), desc: t('howto_hypo_desc'), link: t('howto_hypo_link'), variant: 'hypo' as const },
    { label: t('howto_res_label'), desc: t('howto_res_desc'), link: t('howto_res_link'), variant: 'res' as const },
  ]

  const supportCards = [
    { type: t('supp1_type'), val: t('supp1_val'), desc: t('supp1_desc') },
    { type: t('supp2_type'), val: t('supp2_val'), desc: t('supp2_desc') },
  ]

  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl px-6">

        {/* Back navigation */}
        <Link
          href="/tese"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('back')}
        </Link>

        {/* Page badge */}
        <div className="mb-6">
          <Badge variant="secondary" className="text-xs tracking-wide font-medium">
            {t('badge')}
          </Badge>
        </div>

        {/* ── Cover document block ──────────────────────────────────── */}
        <div className="rounded-xl overflow-hidden border border-blue-200 dark:border-blue-900 shadow-lg mb-8">
          {/* Top bar */}
          <div className="bg-blue-900 px-6 py-2.5 flex items-center justify-between gap-4">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-300">
              FAUUSP · Doutorado 2026
            </span>
            <span className="text-xs text-blue-400 tracking-widest uppercase">
              Apêndice A
            </span>
          </div>

          {/* Cover body */}
          <div className="bg-white dark:bg-slate-950 px-8 py-8 border-b-4 border-blue-900">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
              {t('cover_label')}
            </div>

            <p className="font-serif italic text-xl lg:text-2xl text-blue-900 dark:text-blue-200 leading-snug max-w-2xl mb-7 pb-6 border-b border-slate-200 dark:border-slate-700">
              {t('cover_question')}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug max-w-lg">
                  {t('cover_title')}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">
                  {t('cover_subtitle')}
                </p>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
                <div className="flex items-center gap-2.5 px-4 py-2 bg-amber-100 border-2 border-amber-700 text-amber-800 text-xs font-black uppercase tracking-wider rounded-sm">
                  <span className="text-sm font-black">ECD</span>
                  <span>{t('chip_ecd')}</span>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-2 bg-blue-700 text-white text-xs font-black uppercase tracking-wider rounded-sm">
                  <span className="text-sm font-black">BIM</span>
                  <span>{t('chip_bim')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content sections ─────────────────────────────────────── */}
        <div className="space-y-5">

          {/* INTRODUÇÃO */}
          <section className="bg-card border border-border rounded-xl p-7">
            <SectionLabel label={t('sec_intro')} />
            <div className="space-y-4 text-sm leading-relaxed text-foreground">
              <p>{t('intro_p1')}</p>
              <p>{t('intro_p2')}</p>

              <blockquote className="border-l-4 border-blue-700 bg-slate-50 dark:bg-slate-900/60 px-5 py-4 rounded-r-md my-2">
                <p className="font-serif italic text-sm leading-relaxed">
                  {t('intro_law')}
                </p>
                <cite className="block text-xs text-muted-foreground mt-3 not-italic font-semibold tracking-wide">
                  {t('intro_law_cite')}
                </cite>
              </blockquote>

              <p>{t('intro_p3')}</p>
              <p>{t('intro_p4')}</p>

              <div className="space-y-2 mt-2">
                <div className="flex items-start gap-4 p-3 rounded-md border border-border">
                  <span className="font-serif italic text-sm text-muted-foreground flex-shrink-0 pt-0.5 min-w-[20px]">a)</span>
                  <span className="text-sm">{t('consid_a')}</span>
                </div>
                <div className="flex items-start gap-4 p-3 rounded-md border border-blue-500 bg-blue-50 dark:bg-blue-950/30">
                  <span className="font-serif italic text-sm text-blue-600 font-bold flex-shrink-0 pt-0.5 min-w-[20px]">b)</span>
                  <span className="text-sm flex-1">{t('consid_b')}</span>
                  <span className="flex-shrink-0 text-xs font-bold text-blue-600 border border-blue-500 bg-white dark:bg-blue-950 px-2 py-0.5 rounded self-start whitespace-nowrap">
                    {t('consid_b_tag')}
                  </span>
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

          {/* DEFINIÇÕES */}
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
            <p className="text-sm text-muted-foreground mb-5">{t('req_intro')}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {requirements.map((req) => (
                <div key={req.num} className="border border-border rounded-lg overflow-hidden flex flex-col">
                  <div className="h-1 bg-blue-400" />
                  <div className="p-4 flex flex-col flex-1">
                    <div className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-1">{req.num}</div>
                    <div className="font-bold text-sm text-blue-900 dark:text-blue-200 mb-2 leading-tight">{req.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed flex-1">{req.desc}</div>
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 border-t border-border pt-2 mt-3">
                      {req.scale}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* INFORMAÇÕES */}
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

          {/* COMO COMEÇAR */}
          <section className="bg-card border border-border rounded-xl p-7">
            <SectionLabel label={t('sec_howto')} />
            <div className="space-y-3 text-sm leading-relaxed text-foreground mb-6">
              <p>{t('howto_p1')}</p>
              <p>
                {t('howto_p2')}{' '}
                <code className="font-mono text-xs bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded">
                  {t('howto_sheet')}
                </code>.
              </p>
              <p>{t('howto_p3')}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {downloadCards.map((card) => (
                <div key={card.variant} className="border border-border rounded-lg overflow-hidden flex flex-col">
                  <div className={`px-3 py-2 text-xs font-bold tracking-widest uppercase ${
                    card.variant === 'blank'
                      ? 'bg-slate-100 dark:bg-slate-800 text-blue-900 dark:text-blue-200'
                      : card.variant === 'hypo'
                      ? 'bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300'
                      : 'bg-blue-100 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300'
                  }`}>
                    {card.label}
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">{card.desc}</p>
                    <a
                      href="#"
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 border-b border-blue-200 dark:border-blue-800 w-fit"
                    >
                      {card.link}
                    </a>
                  </div>
                </div>
              ))}
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

          {/* INFOGRÁFICO */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-0.5 bg-blue-900 dark:bg-blue-500" />
              <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                {t('infog_label')}
              </span>
            </div>
            <div className="border border-border rounded-lg overflow-hidden">
              <div
                className="overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: INFOG_SVG }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              {t('infog_caption')}
            </p>
          </section>

        </div>

        {/* ── Footer bar ────────────────────────────────────────────── */}
        <div className="mt-8 bg-blue-900 rounded-lg px-7 py-4 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-blue-300 leading-relaxed">{t('footer_text')}</span>
          <span className="text-xs font-semibold text-blue-200 flex-shrink-0">{t('footer_link')}</span>
        </div>

      </div>
    </div>
  )
}
