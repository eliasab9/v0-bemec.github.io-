import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Target, Users, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import { HeroCarousel } from "@/components/hero-carousel"

export const metadata = {
  title: "Quienes Somos | BEMEC S.A.",
  description: "Conocé la historia, misión y valores de BEMEC S.A. - Líderes en soluciones electromecánicas.",
}

export default function QuienesSomosPage() {
  const carouselImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/83809d97-b2d4-4573-870e-b489ff02b6cc-pYMg3IJxoxbbTn6XWbsmTlQ7XDpaWN.jpeg",
      alt: "Instalación de bomba industrial con grúa - BEMEC S.A.",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1902-tAlUfEKdmdcYD5bpEtnfiC8Z8JUhjD.jpeg",
      alt: "Rebobinado de motor eléctrico - BEMEC S.A.",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e0163f0a-6bb0-492a-a400-140aa67b7d15-WLqjNv9apCQSBiJftbvUe2zqcIuf94.jpeg",
      alt: "Reparación de estator de motor industrial - BEMEC S.A.",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Carousel */}
        <HeroCarousel images={carouselImages} />

        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Quienes Somos
            </h1>
            <p className="text-balance text-lg text-muted-foreground md:text-xl">
              Más de 30 años de experiencia brindando soluciones electromecánicas de calidad a la industria argentina
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="border-b border-border px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl text-center">Nuestra Historia</h2>
            <div className="space-y-4 text-muted-foreground md:text-lg">
              <p>
                BEMEC S.A. nace en Mendoza con el objetivo de brindar soluciones integrales en el área electromecánica.
                Desde nuestros inicios, nos hemos especializado en la venta, reparación y mantenimiento de motores
                eléctricos y electrobombas.
              </p>
              <p>
                Con más de tres décadas de trayectoria, hemos consolidado nuestra posición como referentes en el sector,
                atendiendo a empresas de diversos rubros industriales, agrícolas y comerciales en toda la región de Cuyo
                y el país.
              </p>
              <p>
                Nuestro compromiso con la calidad, la rapidez en el servicio y la confiabilidad nos ha permitido
                construir relaciones duraderas con nuestros clientes, quienes confían en nosotros para mantener sus
                operaciones funcionando de manera óptima.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-b border-border px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Nuestros Valores</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">Calidad</h3>
                <p className="px-8 text-sm text-muted-foreground">
                  Trabajamos con los más altos estándares de calidad en cada servicio que brindamos
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">Rapidez</h3>
                <p className="px-8 text-sm text-muted-foreground">
                  Entendemos la importancia del tiempo en la industria y respondemos con agilidad
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">Confiabilidad</h3>
                <p className="px-8 text-sm text-muted-foreground">
                  Nuestros clientes confían en nosotros para mantener sus operaciones en marcha
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">Compromiso</h3>
                <p className="px-8 text-sm text-muted-foreground">
                  Nos comprometemos con el éxito de cada proyecto y la satisfacción del cliente
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-4 text-2xl font-bold">Nuestra Misión</h2>
                <p className="text-muted-foreground">
                  Brindar soluciones electromecánicas integrales de la más alta calidad, garantizando la continuidad
                  operativa de nuestros clientes mediante servicios de venta, reparación y mantenimiento de motores
                  eléctricos y electrobombas, con un equipo técnico altamente capacitado y comprometido con la
                  excelencia.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-4 text-2xl font-bold">Nuestra Visión</h2>
                <p className="text-muted-foreground">
                  Ser la empresa líder en soluciones electromecánicas en la región de Cuyo, reconocida por nuestra
                  excelencia técnica, innovación constante y compromiso con la satisfacción del cliente, expandiendo
                  nuestros servicios para atender las necesidades cambiantes de la industria moderna.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-muted/30 px-4 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">¿Querés trabajar con nosotros?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Contactanos y descubrí cómo podemos ayudarte con tus necesidades electromecánicas
            </p>
            <Link href="/contacto">
              <Button size="lg" className="text-base font-semibold">
                Contactar Ahora
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border px-4 py-8 text-center">
          <p className="mb-2 text-sm text-muted-foreground">
            © {new Date().getFullYear()} BEMEC S.A. · Venta, reparación y mantenimiento de motores eléctricos y
            electrobombas.
          </p>
          <Link href="/privacy-policy">
            <Button variant="link" className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground">
              Políticas de Privacidad
            </Button>
          </Link>
        </footer>
      </main>
    </>
  )
}
