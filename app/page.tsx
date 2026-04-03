import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Publications } from "@/components/publications"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="sobre" className="sr-only">
          <h2>Sobre</h2>
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
