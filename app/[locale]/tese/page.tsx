import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Tese() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col overflow-hidden pt-16">
        <iframe
          src="/ferramenta-ecd-bim/index.html"
          title="Ferramenta de Comparação ECD-BIM — Tese de Doutorado"
          className="flex-1 w-full border-0"
          allowFullScreen
        />
      </main>
      <Footer />
    </div>
  )
}
