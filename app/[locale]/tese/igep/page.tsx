import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { IgepCalculator } from './IgepCalculator'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Igep' })
  return {
    title: `${t('heading')} — João Gaspar`,
    description: t('meta_desc'),
  }
}

export default function IgepPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-16">
        <IgepCalculator />
      </main>
      <Footer />
    </div>
  )
}
