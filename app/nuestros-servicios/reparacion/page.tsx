import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Wrench, CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Reparación Especializada | BEMEC S.A.",
  description:
    "Servicio de reparación integral de motores eléctricos y electrobombas. Rebobinado, cambio de rodamientos y balanceo dinámico.",
}

export default function ReparacionPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/nuestros-servicios"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a Servicios
            </Link>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Wrench className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight md:text-5xl">Reparación Especializada</h1>
            <p className="text-balance text-lg text-muted-foreground md:text-xl">
              Reparación integral de motores eléctricos y electrobombas con tecnología de punta y personal altamente
              capacitado
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="border-b border-border px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Image
              src="/electric-motor-repair-workshop-with-technician-rew.jpg"
              alt="Taller de reparación de motores eléctricos"
              width={1200}
              height={500}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Details Section */}
        <section className="border-b border-border px-4 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Servicios de Reparación</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              En BEMEC S.A. contamos con más de 30 años de experiencia en la reparación de motores eléctricos y
              electrobombas. Nuestro equipo técnico especializado utiliza tecnología de última generación para
              garantizar reparaciones de la más alta calidad.
            </p>

            <div className="mb-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Rebobinado de Motores</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Rebobinado de motores de baja y media tensión</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Motores monofásicos y trifásicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Todas las potencias y marcas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Garantía en todos los trabajos</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Reparación de Electrobombas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Electrobombas sumergibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Electrobombas centrífugas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Cambio de impulsores y sellos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Pruebas de funcionamiento</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Servicios Mecánicos</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Cambio de rodamientos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Rectificación de ejes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Balanceo dinámico de rotores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Alineación de acoplamientos</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Control de Calidad</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Pruebas eléctricas completas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Medición de resistencia de aislación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Verificación de consumo y rendimiento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Informe técnico detallado</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-muted/50 p-8">
              <h3 className="mb-4 text-2xl font-bold">Proceso de Reparación</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    1
                  </span>
                  <div>
                    <h4 className="mb-1 font-semibold">Diagnóstico Inicial</h4>
                    <p className="text-sm text-muted-foreground">
                      Evaluación completa del equipo para determinar el alcance de la reparación
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    2
                  </span>
                  <div>
                    <h4 className="mb-1 font-semibold">Presupuesto</h4>
                    <p className="text-sm text-muted-foreground">
                      Cotización detallada con tiempos de entrega estimados
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    3
                  </span>
                  <div>
                    <h4 className="mb-1 font-semibold">Reparación</h4>
                    <p className="text-sm text-muted-foreground">
                      Ejecución del trabajo con repuestos originales y mano de obra especializada
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    4
                  </span>
                  <div>
                    <h4 className="mb-1 font-semibold">Pruebas y Control</h4>
                    <p className="text-sm text-muted-foreground">
                      Verificación completa del funcionamiento y entrega de informe técnico
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 px-4 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">¿Necesitás reparar un equipo?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Contactanos para recibir un diagnóstico y presupuesto sin compromiso
            </p>
            <Link href="/contacto">
              <Button size="lg" className="text-base font-semibold">
                Solicitar Presupuesto
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
