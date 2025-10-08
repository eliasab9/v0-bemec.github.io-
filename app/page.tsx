import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Wrench, Zap, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/20">
          <HeroCarousel />
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <h1 className="mb-6 text-balance text-center text-4xl font-bold leading-tight lg:text-6xl md:text-4xl">
              Soluciones Electromecánicas de Confianza
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-balance text-center text-lg text-muted-foreground md:text-base">
              Venta, reparación y mantenimiento de motores eléctricos y electrobombas. Más de 30 años de experiencia
              respaldando a la industria argentina.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contacto">
                <Button size="lg" className="text-base font-semibold">
                  Solicitar Cotización
                </Button>
              </Link>
              <Link href="/nuestros-servicios">
                <Button size="lg" variant="outline" className="text-base font-semibold bg-transparent">
                  Ver Servicios
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="border-b border-border px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Nuestros Servicios</h2>
            <p className="mx-auto mb-12 max-w-2xl text-balance text-center text-muted-foreground md:text-lg">
              Ofrecemos soluciones integrales para todas sus necesidades electromecánicas
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Reparación y Mantenimiento</h3>
                <p className="text-sm text-muted-foreground">
                  Reparación especializada y planes de mantenimiento preventivo para maximizar la vida útil de sus
                  equipos.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Venta</h3>
                <p className="text-sm text-muted-foreground">
                  Comercialización de motores eléctricos y electrobombas de primeras marcas.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Servicios Comerciales</h3>
                <p className="text-sm text-muted-foreground">
                  Ensayos eléctricos de máquinas de baja y media tensión (motores, generadores, transformadores, etc.).
                  Traslado e instalación de equipos. Índice de polarización. Salto de tensión. Tangente delta y
                  descargas parciales. Medición de resistencia de bobinados.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Asesoramiento</h3>
                <p className="text-sm text-muted-foreground">
                  Asesoramiento técnico especializado para la selección de equipos adecuados.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/nuestros-servicios">
                <Button variant="outline" size="lg">
                  Ver Todos los Servicios
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Confían en Nosotros</h2>
            <p className="mx-auto mb-12 max-w-2xl text-balance text-center text-muted-foreground md:text-lg">
              Empresas líderes de diversos sectores confían en BEMEC S.A. para sus soluciones electromecánicas
            </p>

            <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              <div className="flex items-center justify-center opacity-0 animate-fade-in-up [animation-delay:100ms]">
                <Image
                  src="/images/design-mode/Molinos%20.png"
                  alt="Molinos"
                  width={140}
                  height={80}
                  className="h-20 w-36 object-contain"
                />
              </div>
              <div className="flex items-center justify-center opacity-0 animate-fade-in-up [animation-delay:200ms]">
                <Image
                  src="/images/design-mode/trivento.png"
                  alt="Trivento"
                  width={140}
                  height={80}
                  className="h-20 w-36 object-contain"
                />
              </div>
              <div className="flex items-center justify-center opacity-0 animate-fade-in-up [animation-delay:300ms]">
                <Image
                  src="/images/design-mode/unilever.png"
                  alt="Unilever"
                  width={140}
                  height={80}
                  className="h-20 w-36 object-contain"
                />
              </div>
              <div className="flex items-center justify-center opacity-0 animate-fade-in-up [animation-delay:400ms]">
                <Image
                  src="/images/design-mode/arcor.png"
                  alt="Arcor"
                  width={140}
                  height={80}
                  className="h-20 w-36 object-contain"
                />
              </div>
              <div className="flex items-center justify-center opacity-0 animate-fade-in-up [animation-delay:500ms]">
                <Image
                  src="/images/design-mode/verallia.png"
                  alt="Verallia"
                  width={140}
                  height={80}
                  className="h-20 w-36 object-contain"
                />
              </div>
              <div className="flex items-center justify-center opacity-0 animate-fade-in-up [animation-delay:600ms]">
                <Image
                  src="/images/design-mode/Logo_de_YPF.svg.png"
                  alt="YPF"
                  width={140}
                  height={80}
                  className="h-20 w-36 object-contain"
                />
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
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
        <section className="border-t border-border bg-muted/30 px-4 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">¿Necesitás una Cotización?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
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
