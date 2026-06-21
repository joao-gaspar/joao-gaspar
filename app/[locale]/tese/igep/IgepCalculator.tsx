'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { ArrowLeft, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'

const Group = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
    {children}
  </div>
)

// ── IGEP formula constants ────────────────────────────────────────────────────
// Source: PADRAO_BIM_JOAO GASPAR.xlsm, sheet CRITERIOS
// Formula: IGEP = Π(1 + fi) for criteria 1–11
const AREA_SEGS: [number, number, number, number][] = [
  [0,    300,  -0.700, -0.600],
  [301,  450,  -0.600, -0.300],
  [451,  600,  -0.300,  0.000],
  [601,  750,   0.000,  0.050],
  [751, 1000,   0.051,  0.075],
  [1001,1250,   0.075,  0.100],
  [1251,1900,   0.100,  0.125],
]

function areaFactor(area: number): number {
  if (!area || area <= 0) return 0
  const a = Math.min(area, 1900)
  for (const [lo, hi, f0, f1] of AREA_SEGS) {
    if (a >= lo && a <= hi) return f0 + ((a - lo) / (hi - lo)) * (f1 - f0)
  }
  return 0.125
}

// ── Example defaults: typical moderately complex HIS building (IGEP ≈ 1.11) ──
const DEFAULTS = {
  c1: '0',      // Desnível 3–6 m
  c2: '0',      // Geotécnica Tipo IV (referência)
  c3: '0',      // Laje retangular
  c4: '0.05',   // Planta Tipo 4
  c5: '650',    // 650 m² (interpolado no trecho 601–750)
  c6: '-0.1',   // Circulação Tipo II
  c7: '0.05',   // Fachada RG1 / RG2
  c8: '0',      // 2 tipologias
  c9: '0.1',    // Com balanço (varanda)
  c10: '0',     // 1 escada
  c11: '0',     // Enclausurada
}

type CState = typeof DEFAULTS

function getFactors(s: CState): number[] {
  return [
    parseFloat(s.c1) || 0,
    parseFloat(s.c2) || 0,
    parseFloat(s.c3) || 0,
    parseFloat(s.c4) || 0,
    areaFactor(parseFloat(s.c5) || 0),
    parseFloat(s.c6) || 0,
    parseFloat(s.c7) || 0,
    parseFloat(s.c8) || 0,
    parseFloat(s.c9) || 0,
    parseFloat(s.c10) || 0,
    parseFloat(s.c11) || 0,
  ]
}

// ── Main component ────────────────────────────────────────────────────────────

export function IgepCalculator() {
  const t = useTranslations('Igep')
  const [s, setS] = useState<CState>(DEFAULTS)

  const factors = getFactors(s)
  const igep = factors.reduce((p, f) => p * (1 + f), 1)

  function set(k: keyof CState) {
    return (v: string) => setS(prev => ({ ...prev, [k]: v }))
  }


  const GroupHeader = ({ label }: { label: string }) => (
    <div className="px-4 py-2 bg-muted/60 border-b border-border">
      <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
        {label}
      </span>
    </div>
  )

  const CrRow = ({
    num, label, desc, children,
  }: {
    num: number
    label: string
    desc?: string
    children: React.ReactNode
  }) => (
    <div className="grid grid-cols-[20px_1fr] gap-3 px-4 py-3 border-b border-border last:border-b-0">
      <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
        {num}
      </div>
      <div className="space-y-1.5">
        <p className="text-sm font-medium text-foreground leading-tight">{label}</p>
        {desc && <p className="text-xs text-muted-foreground leading-snug">{desc}</p>}
        {children}
      </div>
    </div>
  )

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">

      {/* Back link */}
      <Link
        href="/tese"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        {t('back')}
      </Link>

      {/* Hero */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">
          {t('heading')}
        </h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          {t('intro')}
        </p>
      </div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-[1fr_260px] gap-5 items-start">

        {/* LEFT — criteria */}
        <div className="space-y-4">

          {/* Group 1 */}
          <Group>
            <GroupHeader label={t('group_terrain')} />
            <CrRow num={1} label={t('c1_label')} desc={t('c1_desc')}>
              <Select value={s.c1} onValueChange={set('c1')}>
                <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="-0.05">{t('c1_o1')}</SelectItem>
                  <SelectItem value="0">{t('c1_o2')}</SelectItem>
                  <SelectItem value="0.02">{t('c1_o3')}</SelectItem>
                  <SelectItem value="0.04">{t('c1_o4')}</SelectItem>
                  <SelectItem value="0.06">{t('c1_o5')}</SelectItem>
                  <SelectItem value="0.07">{t('c1_o6')}</SelectItem>
                  <SelectItem value="0.08">{t('c1_o7')}</SelectItem>
                </SelectContent>
              </Select>
            </CrRow>
            <CrRow num={2} label={t('c2_label')} desc={t('c2_desc')}>
              <Select value={s.c2} onValueChange={set('c2')}>
                <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="-0.1">{t('c2_o1')}</SelectItem>
                  <SelectItem value="-0.07">{t('c2_o2')}</SelectItem>
                  <SelectItem value="-0.05">{t('c2_o3')}</SelectItem>
                  <SelectItem value="0">{t('c2_o4')}</SelectItem>
                  <SelectItem value="0.02">{t('c2_o5')}</SelectItem>
                  <SelectItem value="0.04">{t('c2_o6')}</SelectItem>
                  <SelectItem value="0.06">{t('c2_o7')}</SelectItem>
                  <SelectItem value="0.08">{t('c2_o8')}</SelectItem>
                  <SelectItem value="0.1">{t('c2_o9')}</SelectItem>
                </SelectContent>
              </Select>
            </CrRow>
          </Group>

          {/* Group 2 */}
          <Group>
            <GroupHeader label={t('group_structure')} />
            <CrRow num={3} label={t('c3_label')} desc={t('c3_desc')}>
              <Select value={s.c3} onValueChange={set('c3')}>
                <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="-0.2">{t('c3_o1')}</SelectItem>
                  <SelectItem value="0">{t('c3_o2')}</SelectItem>
                  <SelectItem value="0.1">{t('c3_o3')}</SelectItem>
                  <SelectItem value="0.15">{t('c3_o4')}</SelectItem>
                </SelectContent>
              </Select>
            </CrRow>
            <CrRow num={4} label={t('c4_label')} desc={t('c4_desc')}>
              <Select value={s.c4} onValueChange={set('c4')}>
                <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="-0.1">{t('c4_o1')}</SelectItem>
                  <SelectItem value="-0.05">{t('c4_o2')}</SelectItem>
                  <SelectItem value="0">{t('c4_o3')}</SelectItem>
                  <SelectItem value="0.05">{t('c4_o4')}</SelectItem>
                  <SelectItem value="0.075">{t('c4_o5')}</SelectItem>
                  <SelectItem value="0.1">{t('c4_o6')}</SelectItem>
                  <SelectItem value="0.12">{t('c4_o7')}</SelectItem>
                  <SelectItem value="0.15">{t('c4_o8')}</SelectItem>
                </SelectContent>
              </Select>
            </CrRow>
            <CrRow num={9} label={t('c9_label')} desc={t('c9_desc')}>
              <Select value={s.c9} onValueChange={set('c9')}>
                <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">{t('c9_o1')}</SelectItem>
                  <SelectItem value="0.1">{t('c9_o2')}</SelectItem>
                </SelectContent>
              </Select>
            </CrRow>
          </Group>

          {/* Group 3 */}
          <Group>
            <GroupHeader label={t('group_area')} />
            <CrRow num={5} label={t('c5_label')} desc={t('c5_desc')}>
              <div className="relative">
                <Input
                  type="number"
                  value={s.c5}
                  onChange={e => set('c5')(e.target.value)}
                  min={0} max={1900} step={1}
                  placeholder={t('c5_placeholder')}
                  className="h-8 text-xs pr-10"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-muted-foreground pointer-events-none">
                  {t('c5_unit')}
                </span>
              </div>
            </CrRow>
            <CrRow num={6} label={t('c6_label')} desc={t('c6_desc')}>
              <Select value={s.c6} onValueChange={set('c6')}>
                <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="-0.2">{t('c6_o1')}</SelectItem>
                  <SelectItem value="-0.1">{t('c6_o2')}</SelectItem>
                  <SelectItem value="0">{t('c6_o3')}</SelectItem>
                </SelectContent>
              </Select>
            </CrRow>
          </Group>

          {/* Group 4 */}
          <Group>
            <GroupHeader label={t('group_facade')} />
            <CrRow num={7} label={t('c7_label')} desc={t('c7_desc')}>
              <Select value={s.c7} onValueChange={set('c7')}>
                <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="-0.2">{t('c7_o1')}</SelectItem>
                  <SelectItem value="-0.15">{t('c7_o2')}</SelectItem>
                  <SelectItem value="-0.1">{t('c7_o3')}</SelectItem>
                  <SelectItem value="-0.05">{t('c7_o4')}</SelectItem>
                  <SelectItem value="0">{t('c7_o5')}</SelectItem>
                  <SelectItem value="0.05">{t('c7_o6')}</SelectItem>
                  <SelectItem value="0.1">{t('c7_o7')}</SelectItem>
                  <SelectItem value="0.15">{t('c7_o8')}</SelectItem>
                  <SelectItem value="0.17">{t('c7_o9')}</SelectItem>
                  <SelectItem value="0.2">{t('c7_o10')}</SelectItem>
                </SelectContent>
              </Select>
            </CrRow>
            <CrRow num={8} label={t('c8_label')} desc={t('c8_desc')}>
              <Select value={s.c8} onValueChange={set('c8')}>
                <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="-0.1">{t('c8_o1')}</SelectItem>
                  <SelectItem value="0">{t('c8_o2')}</SelectItem>
                  <SelectItem value="0.025">{t('c8_o3')}</SelectItem>
                  <SelectItem value="0.05">{t('c8_o4')}</SelectItem>
                </SelectContent>
              </Select>
            </CrRow>
          </Group>

          {/* Group 5 */}
          <Group>
            <GroupHeader label={t('group_stairs')} />
            <CrRow num={10} label={t('c10_label')} desc={t('c10_desc')}>
              <Select value={s.c10} onValueChange={set('c10')}>
                <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">{t('c10_o1')}</SelectItem>
                  <SelectItem value="0.02">{t('c10_o2')}</SelectItem>
                  <SelectItem value="0.04">{t('c10_o3')}</SelectItem>
                  <SelectItem value="0.06">{t('c10_o4')}</SelectItem>
                </SelectContent>
              </Select>
            </CrRow>
            <CrRow num={11} label={t('c11_label')} desc={t('c11_desc')}>
              <Select value={s.c11} onValueChange={set('c11')}>
                <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">{t('c11_o1')}</SelectItem>
                  <SelectItem value="0.035">{t('c11_o2')}</SelectItem>
                </SelectContent>
              </Select>
            </CrRow>
          </Group>

        </div>{/* /left */}

        {/* RIGHT — result (sticky on desktop) */}
        <div className="lg:sticky lg:top-24 space-y-3">

          <Group>
            <div className="px-4 py-2 bg-muted/60 border-b border-border">
              <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                {t('result_title')}
              </span>
            </div>

            {/* IGEP value */}
            <div className="px-4 pt-4 pb-4">
              <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-1">
                {t('igep_label')}
              </p>
              <p className="text-5xl font-black tracking-tighter text-foreground leading-none">
                {igep.toFixed(3).replace('.', ',')}
              </p>
            </div>
          </Group>

          <Button
            variant="outline"
            size="sm"
            className="w-full gap-1.5 text-xs"
            onClick={() => setS(DEFAULTS)}
          >
            <RotateCcw className="h-3 w-3" />
            {t('reset')}
          </Button>

        </div>{/* /right */}
      </div>{/* /grid */}
    </div>
  )
}
