import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Zap, CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Mantenimiento Preventivo | BEMEC S.A.",
  description:
    "Planes de mantenimiento preventivo para motores eléctricos y electrobombas. Maximizá la vida útil de tus equipos.",
}

export default function MantenimientoPage() {
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
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight md:text-5xl">Mantenimiento Preventivo</h1>
            {/* Brief description of preventive maintenance */}
            <h2 className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              A través de inspecciones programadas, análisis predictivos y ajustes especializados, identificamos y
              corregimos problemas potenciales antes de que se conviertan en fallas costosas.
            </h2>
          </div>
        </section>

        {/* Image Section */}

        {/* Details Section */}
        <section className="border-b border-border px-4 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            {/* Beneficios Section */}
            <div className="mb-12 rounded-xl bg-muted/50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-center text-center">
                Beneficios
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <h4 className="mb-2 font-semibold text-primary">Reducción de Costos</h4>
                  <p className="text-sm text-muted-foreground">
                    Evitá reparaciones costosas y paradas imprevistas de producción
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-primary">Mayor Vida Útil</h4>
                  <p className="text-sm text-muted-foreground">
                    Prolongá significativamente la duración de tus equipos
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-primary">Eficiencia Energética</h4>
                  <p className="text-sm text-muted-foreground">
                    Optimizá el consumo eléctrico y reducí costos operativos
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-primary">Seguridad</h4>
                  <p className="text-sm text-muted-foreground">Minimizá riesgos de accidentes y fallas peligrosas</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-primary">Planificación</h4>
                  <p className="text-sm text-muted-foreground">Programá intervenciones en momentos convenientes</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-primary">Documentación</h4>
                  <p className="text-sm text-muted-foreground">Mantené un historial completo de cada equipo</p>
                </div>
              </div>
            </div>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Planes de Mantenimiento</h2>

            {/* Planes Grid */}
            <div className="mb-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Inspección Periódica</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Revisión visual completa del equipo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Verificación de conexiones eléctricas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Control de estado de rodamientos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Detección temprana de anomalías</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Análisis Predictivo</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Análisis de vibraciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Termografía infrarroja</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Medición de consumo eléctrico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Análisis de tendencias</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Lubricación Especializada</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Lubricación de rodamientos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Uso de lubricantes de alta calidad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Cronograma de lubricación personalizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Registro de actividades</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Limpieza y Ajustes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Limpieza profunda de componentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Ajuste de conexiones y terminales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Verificación de alineación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Ajuste de tensión de correas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Informes Técnicos Detallados */}
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-4 text-2xl font-bold">Informes Técnicos Detallados</h3>
              <p className="mb-4 text-muted-foreground">
                Cada visita de mantenimiento incluye un informe técnico completo que documenta:
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Evaluación completa del estado general del equipo, junto con todas las mediciones eléctricas y mecánicas realizadas durante la inspección. Documentamos los trabajos realizados, proporcionando recomendaciones específicas para las próximas intervenciones preventivas.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 px-4 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">¿Querés implementar un plan de mantenimiento?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Contactanos para diseñar un plan personalizado según tus necesidades
            </p>
            <Link href="/contacto">
              <Button size="lg" className="text-base font-semibold">
                Solicitar Plan Personalizado
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
