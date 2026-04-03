import Link from "next/link"
import { Linkedin, Mail, BookOpen, GraduationCap } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Name and Title */}
          <div className="lg:sticky lg:top-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              João Gaspar
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-primary font-medium">
              Arquiteto e Urbanista
            </p>
            <p className="mt-2 text-muted-foreground">
              Professor, pesquisador e desenvolvedor de aplicações relacionadas a BIM
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Diretor de Inovação na totalCAD
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Diretor da Empresa Brasileira de BIM - EBBIM
            </p>

            {/* Navigation */}
            <nav className="mt-12 hidden lg:block">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#sobre"
                    className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
                    <span className="text-sm uppercase tracking-widest">Sobre</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#experiencia"
                    className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
                    <span className="text-sm uppercase tracking-widest">Experiência</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#publicacoes"
                    className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
                    <span className="text-sm uppercase tracking-widest">Publicações</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
                    <span className="text-sm uppercase tracking-widest">Contato</span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Social Links */}
            <div className="mt-12 flex items-center gap-6">
              <Link
                href="https://www.linkedin.com/in/joao-motta-gaspar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.researchgate.net/profile/Joao-Alberto-Gaspar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="ResearchGate"
              >
                <GraduationCap className="h-6 w-6" />
              </Link>
              <Link
                href="https://loja.ebbim.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Loja EBBIM"
              >
                <BookOpen className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:contato@joaogaspar.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Right Column - About */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              João Gaspar atua como <span className="text-foreground font-medium">Coordenador da ABNT CEE-134</span>, 
              a Comissão Brasileira responsável pelo desenvolvimento e adoção das normas BIM no Brasil. 
              Atualmente, está concluindo seu doutorado na{" "}
              <span className="text-foreground font-medium">FAU USP</span> , Faculdade de Arquitetura e Urbanismo e de Design da Universidade de São Paulo, 
              pesquisando contratação de projetos em BIM para Habitação de Interesse Social.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Como <span className="text-foreground font-medium">Diretor de Inovação </span> na{" "}
              <span className="text-foreground font-medium">totalCAD</span> e{" "}
              <span className="text-foreground font-medium">Diretor de Operações da EBBIM</span>, 
              lidera iniciativas de transformação digital no setor AECO. É professor de pós-graduação em BIM 
              na <span className="text-foreground font-medium">Universidade Presbiteriana Mackenzie</span>,{" "}
              <span className="text-foreground font-medium">SENAI/ISEP</span> e{" "}
              <span className="text-foreground font-medium">FIA Business School</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com mais de <span className="text-foreground font-medium">33 publicações acadêmicas</span>,{" "}
              <span className="text-foreground font-medium">6.200+ leituras</span> no ResearchGate e 
              autor de diversos livros técnicos sobre SketchUp Pro, Revit, ArchiCAD, entre outros, pela{" "}
              <span className="text-foreground font-medium">ProBooks Editora</span>, dedica sua carreira 
              à educação e disseminação do BIM há mais de 26 anos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
