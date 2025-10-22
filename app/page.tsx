import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Wrench, Zap, Shield } from "lucide-react"
import Link from "next/link"
import { HeroCarousel } from "@/components/hero-carousel"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative border-b border-border">
          <div className="absolute inset-0 z-0">
            <HeroCarousel
              images={[
                {
                  src: "/bemec-workshop-grinding.jpg",
                  alt: "Técnico de BEMEC realizando trabajo de amolado con chispas",
                },
                {
                  src: "/bemec-workshop-tools.jpg",
                  alt: "Técnico de BEMEC seleccionando herramientas en taller organizado",
                },
                {
                  src: "/bemec-workshop-motor.jpg",
                  alt: "Técnico de BEMEC inspeccionando motor eléctrico con componentes calientes",
                },
              ]}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:py-32 md:py-40">
            <h1 className="mb-4 text-balance text-center text-3xl font-bold leading-tight text-white sm:mb-6 sm:text-4xl lg:text-7xl">
              Soluciones Electromecánicas de Confianza
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-balance text-center text-base leading-snug text-white/90 sm:mb-8 sm:text-lg md:text-lg">
              Venta, reparación y mantenimiento de motores eléctricos, electrobombas y reductores de velocidad. Más de
              30 años de experiencia respaldando a la industria argentina.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="border-b border-border px-4 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-3 text-center text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">Nuestros Servicios</h2>
            <p className="mx-auto mb-8 max-w-2xl text-balance text-center text-sm text-muted-foreground sm:mb-12 sm:text-base md:text-lg">
              Ofrecemos soluciones integrales para todas sus necesidades electromecánicas
            </p>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Link href="/nuestros-servicios" className="block">
                <div className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Reparación y Mantenimiento</h3>
                  <p className="text-sm text-muted-foreground">
                    Reparación especializada y planes de mantenimiento preventivo para maximizar la vida útil de sus
                    equipos.
                  </p>
                </div>
              </Link>

              <Link href="/nuestros-servicios" className="block">
                <div className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Venta</h3>
                  <p className="text-sm text-muted-foreground">
                    Comercialización de motores eléctricos y electrobombas de primeras marcas.
                  </p>
                </div>
              </Link>

              <Link href="/nuestros-servicios" className="block">
                <div className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Servicios Comerciales</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensayos eléctricos de máquinas de baja y media tensión. Traslado e instalación de equipos. Medición
                    de resistencia de bobinados.
                  </p>
                </div>
              </Link>

              <Link href="/nuestros-servicios" className="block">
                <div className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Asesoramiento</h3>
                  <p className="text-sm text-muted-foreground">
                    Asesoramiento técnico especializado para la selección de equipos adecuados.
                  </p>
                </div>
              </Link>
            </div>

            <div className="mt-6 text-center sm:mt-8">
              <Link href="/nuestros-servicios">
                <Button variant="outline" size="lg">
                  Ver Todos los Servicios
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="px-4 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-3 text-center text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">Confían en Nosotros</h2>
            <p className="mx-auto mb-8 max-w-2xl text-balance text-sm text-muted-foreground sm:mb-12 sm:text-base md:text-lg text-center">
              Empresas líderes de diversos sectores confían en BEMEC S.A. para sus soluciones electromecánicas
            </p>

            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <div className="mb-4 text-4xl font-bold text-primary">500+</div>
                <h3 className="mb-2 text-lg font-semibold">Clientes Satisfechos</h3>
                <p className="text-sm text-muted-foreground">
                  Empresas de toda Argentina confían en nuestros servicios
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <div className="mb-4 text-4xl font-bold text-primary">30+</div>
                <h3 className="mb-2 text-lg font-semibold">Años de Experiencia</h3>
                <p className="text-sm text-muted-foreground">Trayectoria consolidada en el sector electromecánico</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <div className="mb-4 text-4xl font-bold text-primary">24/7</div>
                <h3 className="mb-2 text-lg font-semibold">Atención Rápida</h3>
                <p className="text-sm text-muted-foreground">Respuesta inmediata para emergencias industriales</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden rounded-xl border-t border-border px-4 py-12 sm:py-16">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/bemec-consulting-laptop.png"
              alt="Consultoría profesional BEMEC"
              fill
              className="object-cover"
              quality={95}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl">
              ¿Necesitás una Cotización?
            </h2>
            <p className="mb-6 text-base text-white/90 sm:mb-8 sm:text-lg">
              Contactanos hoy y recibí asesoramiento personalizado para tu proyecto
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
