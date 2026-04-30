import { ExternalLink, BookOpen, FileText, GraduationCap } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl"

interface Publication {
  year: string
  title: string
  type: "book" | "article" | "thesis" | "chapter"
  description: string
  language?: string
  coAuthors?: string[]
  url?: string
}

function getTypeIcon(type: Publication["type"]) {
  switch (type) {
    case "book":
      return <BookOpen className="h-5 w-5 text-primary" />
    case "thesis":
      return <GraduationCap className="h-5 w-5 text-primary" />
    default:
      return <FileText className="h-5 w-5 text-primary" />
  }
}

export function Publications() {
  const t = useTranslations('Publications')
  const publications = t.raw('items') as Publication[]
  const books = t.raw('books') as Publication[]

  function getTypeLabel(type: Publication["type"]) {
    switch (type) {
      case "book":
        return t('type_book')
      case "article":
        return t('type_article')
      case "thesis":
        return t('type_thesis')
      case "chapter":
        return t('type_chapter')
      default:
        return type
    }
  }

  return (
    <section id="publicacoes" className="py-20 bg-card/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm uppercase tracking-widest text-primary">
            {t('title')}
          </h2>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              {t('stats_pub')}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {t('stats_read')}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-colors group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    {getTypeIcon(pub.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-xs text-muted-foreground">
                        {pub.year}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {getTypeLabel(pub.type)}
                      </Badge>
                      {pub.language && (
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                          {pub.language}
                        </Badge>
                      )}
                    </div>
                    {pub.url ? (
                      <Link href={pub.url} target="_blank" rel="noopener noreferrer" className="inline-block">
                        <h3 className="text-foreground font-medium group-hover:text-primary transition-colors line-clamp-2 inline-flex items-center">
                          {pub.title}
                          <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="text-foreground font-medium transition-colors line-clamp-2">
                        {pub.title}
                      </h3>
                    )}
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {pub.description}
                    </p>
                    {pub.coAuthors && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        {t('coauthors')}: {pub.coAuthors.slice(0, 2).join(", ")}
                        {pub.coAuthors.length > 2 && ` +${pub.coAuthors.length - 2}`}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-sm uppercase tracking-widest text-primary mb-8">
          {t('title_books')}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-colors group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-muted-foreground">
                        {book.year}
                      </span>
                      {book.language && (
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                          {book.language}
                        </Badge>
                      )}
                    </div>
                    {book.url ? (
                      <Link href={book.url} target="_blank" rel="noopener noreferrer" className="inline-block">
                        <h3 className="text-foreground font-medium group-hover:text-primary transition-colors text-sm line-clamp-2 inline-flex items-center">
                          {book.title}
                          <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="text-foreground font-medium transition-colors text-sm line-clamp-2">
                        {book.title}
                      </h3>
                    )}
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                      {book.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Link
            href="https://www.researchgate.net/profile/Joao-Alberto-Gaspar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            {t('link_researchgate')}
            <ExternalLink className="h-4 w-4" />
          </Link>
          <Link
            href="https://loja.ebbim.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            {t('link_ebbim')}
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
