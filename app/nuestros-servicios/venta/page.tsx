import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Venta de Equipos | BEMEC S.A.",
  description: "Venta de motores eléctricos y electrobombas de primeras marcas. Garantía y soporte técnico completo.",
}

export default function VentaPage() {
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
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight md:text-5xl">Venta de Equipos</h1>
            <p className="text-balance text-lg text-muted-foreground md:text-xl">
              Comercialización de motores eléctricos y electrobombas de primeras marcas con garantía y soporte técnico
              completo
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="border-b border-border px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Image
              src="/showroom-display-of-new-electric-motors-and-indust.jpg"
              alt="Venta de motores eléctricos y electrobombas"
              width={1200}
              height={500}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Details Section */}
        <section className="border-b border-border px-4 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Catálogo de Productos</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Ofrecemos una amplia gama de motores eléctricos y electrobombas de las marcas más reconocidas del mercado.
              Todos nuestros productos cuentan con garantía de fábrica y nuestro respaldo técnico.
            </p>

            <div className="mb-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Motores Eléctricos</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Motores monofásicos (0.25 a 5 HP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Motores trifásicos (0.5 a 500 HP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Motores de alta eficiencia (IE3, IE4)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Motores a prueba de explosión</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Motores para ambientes especiales</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Electrobombas</h3>
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
                    <span>Bombas periféricas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Bombas de pozo profundo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Bombas para riego y drenaje</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Repuestos y Accesorios</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Rodamientos de todas las medidas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Capacitores de arranque y marcha</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Ventiladores y tapas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Borneras y cajas de conexión</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Sellos mecánicos y retenes</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">Equipos Complementarios</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Variadores de frecuencia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Arrancadores suaves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Tableros de comando y protección</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Guardamotores y contactores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Sistemas de automatización</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12 rounded-xl bg-muted/50 p-8">
              <h3 className="mb-6 text-2xl font-bold">Marcas que Comercializamos</h3>
              <p className="mb-6 text-muted-foreground">
                Trabajamos con las marcas más reconocidas del mercado nacional e internacional:
              </p>
              <div className="mb-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-border bg-background p-4 text-center font-semibold">WEG</div>
                <div className="rounded-lg border border-border bg-background p-4 text-center font-semibold">
                  Siemens
                </div>
                <div className="rounded-lg border border-border bg-background p-4 text-center font-semibold">TEM</div>
                <div className="rounded-lg border border-border bg-background p-4 text-center font-semibold">MEC</div>
                <div className="rounded-lg border border-border bg-background p-4 text-center font-semibold">
                  Motorarg
                </div>
                <div className="rounded-lg border border-border bg-background p-4 text-center font-semibold">
                  Rotor Pump
                </div>
                <div className="rounded-lg border border-border bg-background p-4 text-center font-semibold">
                  Lentax
                </div>
              </div>

              {/* Brand Logos */}
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-7">
                <div className="flex items-center justify-center rounded-lg border border-border bg-background p-4">
                  <Image
                    src="/weg-electric-motors-logo.jpg"
                    alt="WEG"
                    width={120}
                    height={60}
                    className="h-16 w-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-center rounded-lg border border-border bg-background p-4">
                  <Image
                    src="/siemens-logo.png"
                    alt="Siemens"
                    width={120}
                    height={60}
                    className="h-16 w-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-center rounded-lg border border-border bg-background p-4">
                  <Image
                    src="/tem-electric-motors-logo.jpg"
                    alt="TEM"
                    width={120}
                    height={60}
                    className="h-16 w-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-center rounded-lg border border-border bg-background p-4">
                  <Image
                    src="/mec-motors-logo.jpg"
                    alt="MEC"
                    width={120}
                    height={60}
                    className="h-16 w-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-center rounded-lg border border-border bg-background p-4">
                  <Image
                    src="/motorarg-logo.jpg"
                    alt="Motorarg"
                    width={120}
                    height={60}
                    className="h-16 w-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-center rounded-lg border border-border bg-background p-4">
                  <Image
                    src="/rotor-pump-logo.jpg"
                    alt="Rotor Pump"
                    width={120}
                    height={60}
                    className="h-16 w-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-center rounded-lg border border-border bg-background p-4">
                  <Image
                    src="/lentax-pumps-logo.jpg"
                    alt="Lentax"
                    width={120}
                    height={60}
                    className="h-16 w-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-4 text-2xl font-bold">Garantía y Soporte</h3>
              <p className="mb-4 text-muted-foreground">Todos nuestros productos incluyen:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Garantía de fábrica (12 a 24 meses según producto)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Asesoramiento técnico para la selección del equipo adecuado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Servicio de instalación y puesta en marcha</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Soporte técnico posventa</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Stock permanente de repuestos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Financiación disponible para compras importantes</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 px-4 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">¿Necesitás cotizar un equipo?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Contactanos para recibir asesoramiento personalizado y la mejor cotización
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
