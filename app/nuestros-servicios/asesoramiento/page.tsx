import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Headphones, CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Asesoramiento Técnico | BEMEC S.A.",
  description: "Asesoramiento especializado para la selección, instalación y optimización de equipos electromecánicos.",
}

export default function AsesoramientoPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-xl border-b border-border px-4 py-16 md:py-20">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/bemec-consulting-laptop.png"
              alt="Asesoramiento técnico profesional"
              fill
              className="object-cover"
              priority
              quality={95}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl">
            <Link
              href="/nuestros-servicios"
              className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a Servicios
            </Link>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Headphones className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight text-white md:text-5xl">
              Asesoramiento Técnico
            </h1>
            <p className="text-balance text-lg text-white/90 md:text-xl">
              Asesoramiento especializado para la selección, instalación y optimización de equipos electromecánicos
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="border-b border-border px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Image
              src="/engineering-consultant-reviewing-technical-bluepri.jpg"
              alt="Asesoramiento técnico especializado"
              width={1200}
              height={500}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Details Section */}
        <section className="border-b border-border px-4 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Servicios de Asesoramiento</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Nuestro equipo de ingenieros especializados está disponible para brindar asesoramiento técnico integral en
              todas las etapas de su proyecto, desde la selección inicial hasta la optimización continua de sus equipos.
            </p>

            <div className="mb-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Selección de Equipos</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Análisis de requerimientos específicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Dimensionamiento correcto de motores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Selección de bombas según aplicación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Evaluación de condiciones ambientales</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Cálculos Técnicos</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Cálculo de potencia requerida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Análisis de curvas de rendimiento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Cálculo de consumo energético</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Estudios de viabilidad técnica</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Optimización Energética</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Auditorías energéticas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Recomendaciones de mejora</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Análisis de retorno de inversión</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Implementación de variadores de frecuencia</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Soporte en Instalación</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Supervisión de instalaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Verificación de conexiones eléctricas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Puesta en marcha asistida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Capacitación del personal</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12 rounded-xl bg-muted/50 p-8">
              <h3 className="mb-6 text-2xl font-bold">Áreas de Especialización</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 font-semibold text-primary">Industria Alimenticia</h4>
                  <p className="text-sm text-muted-foreground">
                    Equipos para procesamiento, bombeo de líquidos viscosos, motores para ambientes húmedos y con lavado
                    frecuente.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3 font-semibold text-primary">Agroindustria</h4>
                  <p className="text-sm text-muted-foreground">
                    Sistemas de riego, bombeo de agua, motores para ambientes polvorientos y condiciones extremas.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3 font-semibold text-primary">Minería y Construcción</h4>
                  <p className="text-sm text-muted-foreground">
                    Equipos de alta potencia, motores a prueba de explosión, sistemas de bombeo para drenaje.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3 font-semibold text-primary">Petróleo y Gas</h4>
                  <p className="text-sm text-muted-foreground">
                    Motores certificados para zonas clasificadas, equipos para ambientes corrosivos y alta temperatura.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3 font-semibold text-primary">Tratamiento de Agua</h4>
                  <p className="text-sm text-muted-foreground">
                    Bombas sumergibles, sistemas de presurización, equipos para aguas residuales y potabilización.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3 font-semibold text-primary">Manufactura General</h4>
                  <p className="text-sm text-muted-foreground">
                    Motores para maquinaria industrial, sistemas de transporte, ventilación y climatización.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 rounded-xl border border-border bg-card p-8">
              <h3 className="mb-4 text-2xl font-bold">Proceso de Asesoramiento</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    1
                  </span>
                  <div>
                    <h4 className="mb-1 font-semibold">Consulta Inicial</h4>
                    <p className="text-sm text-muted-foreground">
                      Reunión para entender sus necesidades y objetivos específicos
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    2
                  </span>
                  <div>
                    <h4 className="mb-1 font-semibold">Análisis Técnico</h4>
                    <p className="text-sm text-muted-foreground">
                      Evaluación detallada de condiciones operativas y requerimientos
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    3
                  </span>
                  <div>
                    <h4 className="mb-1 font-semibold">Propuesta de Solución</h4>
                    <p className="text-sm text-muted-foreground">
                      Presentación de alternativas con análisis técnico-económico
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    4
                  </span>
                  <div>
                    <h4 className="mb-1 font-semibold">Implementación y Seguimiento</h4>
                    <p className="text-sm text-muted-foreground">
                      Acompañamiento durante la implementación y soporte continuo
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-8">
              <h3 className="mb-4 text-2xl font-bold">Soporte Técnico Continuo</h3>
              <p className="mb-4 text-muted-foreground">
                Nuestro compromiso no termina con la venta o instalación. Ofrecemos:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Línea directa con nuestros ingenieros</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Respuesta rápida ante consultas técnicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Visitas técnicas programadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Capacitación continua del personal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Actualización sobre nuevas tecnologías</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 px-4 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">¿Necesitás asesoramiento técnico?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Contactanos para agendar una consulta con nuestros especialistas
            </p>
            <Link href="/contacto">
              <Button size="lg" className="text-base font-semibold">
                Solicitar Asesoramiento
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
