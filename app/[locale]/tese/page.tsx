import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Tese() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Container principal cresce para preencher a tela, usando flex-1 e uma altura mínima segura */}
      <main className="flex-1 w-full" style={{ minHeight: 'calc(100vh - 140px)' }}>
        <iframe 
          src="/ferramenta-ecd-bim/index.html" 
          title="Ferramenta de Comparação ECD-BIM — Tese de Doutorado"
          className="w-full h-full border-0 block"
          style={{ minHeight: 'calc(100vh - 140px)' }}
          allowFullScreen
        />
      </main>
      <Footer />
    </div>
  )
}
