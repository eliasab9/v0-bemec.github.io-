import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Wrench, Zap, Shield, CheckCircle2, Settings, Package, Headphones, Clock } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Nuestros Servicios | BEMEC S.A.",
  description:
    "Servicios especializados en motores eléctricos y electrobombas: reparación, mantenimiento, venta y asesoramiento técnico.",
}

export default function NuestrosServiciosPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Nuestros Servicios
            </h1>
            <p className="text-balance text-lg text-muted-foreground md:text-xl">
              Soluciones integrales para todas sus necesidades en motores eléctricos y electrobombas
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="border-b border-border px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Servicios Principales</h2>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Reparación */}
              <Link href="/nuestros-servicios/reparacion" className="group">
                <div className="h-full rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Wrench className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">Reparación Especializada</h3>
                  <p className="mb-4 text-muted-foreground">
                    Reparación integral de motores eléctricos y electrobombas de todas las marcas y potencias. Contamos
                    con tecnología de punta y personal altamente capacitado.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Rebobinado de motores eléctricos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Reparación de electrobombas sumergibles y centrífugas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Cambio de rodamientos y componentes mecánicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Balanceo dinámico de rotores</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-primary">Ver más detalles →</p>
                </div>
              </Link>

              {/* Mantenimiento */}
              <Link href="/nuestros-servicios/mantenimiento" className="group">
                <div className="h-full rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">Mantenimiento Preventivo</h3>
                  <p className="mb-4 text-muted-foreground">
                    Planes de mantenimiento preventivo diseñados para maximizar la vida útil de sus equipos y minimizar
                    paradas no programadas.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Inspección periódica de equipos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Análisis de vibraciones y temperatura</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Lubricación y limpieza especializada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Informes técnicos detallados</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-primary">Ver más detalles →</p>
                </div>
              </Link>

              {/* Venta */}
              <Link href="/nuestros-servicios/venta" className="group">
                <div className="h-full rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">Venta de Equipos</h3>
                  <p className="mb-4 text-muted-foreground">
                    Comercialización de motores eléctricos y electrobombas de primeras marcas, con garantía y soporte
                    técnico completo.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Motores eléctricos monofásicos y trifásicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Electrobombas sumergibles y centrífugas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Repuestos y accesorios originales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Garantía de fábrica y posventa</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-primary">Ver más detalles →</p>
                </div>
              </Link>

              {/* Asesoramiento */}
              <Link href="/nuestros-servicios/asesoramiento" className="group">
                <div className="h-full rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Headphones className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">Asesoramiento Técnico</h3>
                  <p className="mb-4 text-muted-foreground">
                    Asesoramiento especializado para la selección, instalación y optimización de equipos
                    electromecánicos.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Selección de equipos según necesidades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Cálculos de potencia y rendimiento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Optimización de consumo energético</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Soporte técnico continuo</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-primary">Ver más detalles →</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="border-b border-border px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Servicios Adicionales</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 font-bold">Instalación</h3>
                <p className="text-sm text-muted-foreground">Instalación profesional de equipos nuevos</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 font-bold">Repuestos</h3>
                <p className="text-sm text-muted-foreground">Stock permanente de repuestos originales</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 font-bold">Urgencias</h3>
                <p className="text-sm text-muted-foreground">Atención de emergencias industriales</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 font-bold">Garantía</h3>
                <p className="text-sm text-muted-foreground">Garantía en todos nuestros trabajos</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 px-4 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">¿Necesitás alguno de estos servicios?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Contactanos para recibir una cotización personalizada sin compromiso
            </p>
            <Link href="/contacto">
              <Button size="lg" className="text-base font-semibold">
                Solicitar Cotización
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
