import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Target, Users, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import { HeroCarousel } from "@/components/hero-carousel"
import Image from "next/image"

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

        <section className="relative border-b border-border px-4 py-24 md:py-32">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/bemec-team-photo.jpg"
              alt="Equipo BEMEC S.A."
              fill
              className="object-cover"
              priority
              quality={95}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto flex min-h-[400px] max-w-4xl items-end pb-8 text-center md:min-h-[500px] md:pb-12">
            <div className="w-full">
              <h1 className="mb-6 text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Quienes Somos
              </h1>
              <p className="text-balance text-lg text-white/90 md:text-xl">
                Más de 30 años de experiencia brindando soluciones electromecánicas de calidad a la industria argentina
              </p>
            </div>
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

            <div className="mt-16">
              <h3 className="mb-10 text-center text-2xl font-bold md:text-3xl">Nuestro Equipo Directivo</h3>
              <div className="grid gap-8 md:grid-cols-3">
                {/* President */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20">
                    <Image
                      src="/bemec-president.jpg"
                      alt="Presidente y Co-fundadora de BEMEC"
                      width={160}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h4 className="mb-1 text-lg font-semibold">Presidente y Co-fundadora</h4>
                  <p className="text-sm text-muted-foreground">BEMEC S.A.</p>
                </div>

                {/* Production Manager */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20">
                    <Image
                      src="/bemec-production-manager.jpg"
                      alt="Gerente de Producción y Ventas de BEMEC"
                      width={160}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h4 className="mb-1 text-lg font-semibold">Vicepresidente y Co-fundador</h4>
                  <p className="text-sm text-muted-foreground">BEMEC S.A.</p>
                </div>

                {/* Vice President */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20">
                    <Image
                      src="/bemec-vice-president.jpg"
                      alt="Vicepresidente y Co-fundador de BEMEC"
                      width={160}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h4 className="mb-1 text-lg font-semibold">Gerente de Producción y Ventas</h4>
                  <p className="text-sm text-muted-foreground">BEMEC S.A.</p>
                </div>
              </div>
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
        <section className="relative overflow-hidden rounded-xl border-t border-border px-4 py-16">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image src="/bemec-consulting-laptop.png" alt="Contacto BEMEC" fill className="object-cover" quality={95} />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              ¿Buscás un socio confiable para tus proyectos?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Contactanos y descubrí cómo podemos ayudarte con las operaciones de tu empresa
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
