import { useTranslations } from 'next-intl';
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Publications } from "@/components/publications"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  const t = useTranslations('Home');
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* 
          Aqui eu estou substituindo a palavra "Sobre" fixa pela função de tradução.
          Sempre que vir esse padrão t('chave'), significa que o texto está vindo 
          do arquivo pt.json e as traduções estão sendo geradas!
        */}
        <section id="sobre" className="sr-only">
          <h2>{t('sobre')}</h2>
        </section>
        <Experience />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
