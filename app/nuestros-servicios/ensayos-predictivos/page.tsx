import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Activity, CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Ensayos Predictivos | BEMEC S.A.",
  description:
    "Ensayos y mediciones especializadas para diagnóstico preventivo y análisis del estado de equipos eléctricos.",
}

export default function EnsayosPredictivosPage() {
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
              <Activity className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight md:text-5xl">Ensayos Predictivos</h1>
            <p className="text-balance text-lg text-muted-foreground md:text-xl">
              En BEMEC S.A. realizamos ensayos y mediciones, en instalaciones propias o in situ, especializadas para el diagnóstico preventivo y análisis del estado de equipos eléctricos. Nuestros servicios permiten detectar fallas potenciales antes de que ocurran, maximizando la disponibilidad y vida útil de sus equipos.
            </p>
          </div>
        </section>

        {/* Details Section */}
        <section className="border-b border-border px-4 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            {/* Services Grid */}
            <div className="space-y-8">
              {/* De Aislamiento */}
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="mb-6 text-2xl font-bold">De Aislamiento en Motores / Generadores / Transformadores</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Resistencia de aislación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Tangente Delta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Descargas parciales por fase resuelta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Surge Test</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Tensión aplicada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Saltos de tensión</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Índice de polarización (IP)</span>
                  </li>
                </ul>
              </div>

              {/* Ensayos On Line */}
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="mb-6 text-2xl font-bold">Ensayos On Line de Motores</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Análisis de vibraciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>
                      Análisis de estado eléctrico de motores de baja tensión utilizando técnica MCSA con Explorer de
                      Baker Instruments (SKF) - Verificación de la fuente de energía, el motor eléctrico y datos de
                      estado de carga del motor eléctrico a distancia (CCM), sin detener el servicio del equipo a
                      verificar.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Mediciones */}
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="mb-6 text-2xl font-bold">Mediciones</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Resistencia de contacto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Resistencia de bobinado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Puestas a tierra</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 px-4 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">¿Necesitás realizar alguno de estos ensayos?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Contactanos para recibir más información y programar los ensayos de tus equipos
            </p>
            <Link href="/contacto">
              <Button size="lg" className="text-base font-semibold">
                Solicitar Información
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
