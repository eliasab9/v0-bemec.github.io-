import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Políticas de Privacidad | BEMEC S.A.",
  description:
    "Políticas de privacidad de BEMEC S.A. - Venta, reparación y mantenimiento de motores eléctricos y electrobombas.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen px-4 py-8 md:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-8 md:mb-12">
          <Link href="/" className="mb-6 inline-flex items-center gap-3 md:gap-4 hover:opacity-80 transition-opacity">
            <Image
              src="/bemec-logo.jpg"
              alt="BEMEC S.A. Logo"
              width={56}
              height={56}
              className="h-12 w-12 rounded-xl object-contain md:h-14 md:w-14"
              priority
            />
            <h1 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">BEMEC S.A.</h1>
          </Link>

          <div className="space-y-3">
            <h2 className="text-balance text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Políticas de Privacidad
            </h2>
            <p className="text-pretty text-base text-muted-foreground md:text-lg">
              Última actualización: {new Date().getFullYear()}
            </p>
          </div>
        </header>

        {/* Privacy Policy Content */}
        <article className="prose prose-sm md:prose-base max-w-none">
          <div className="space-y-8">
            <section>
              <h3 className="mb-3 text-xl font-bold md:text-2xl">1. Información que recopilamos</h3>
              <p className="mb-3 text-muted-foreground">Podemos recopilar los siguientes datos personales:</p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Nombre y apellido</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Empresa y cargo</li>
                <li>Información técnica relacionada con el uso de nuestros servicios (opcional)</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold md:text-2xl">2. Finalidad del tratamiento</h3>
              <p className="mb-3 text-muted-foreground">
                Esta información es proporcionada voluntariamente por usted al completar un formulario, solicitar una
                cotización o comunicarse con nuestro equipo.
              </p>
              <p className="mb-3 text-muted-foreground">Los datos recopilados serán utilizados exclusivamente para:</p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Responder consultas y solicitudes de cotización.</li>
                <li>Brindar asesoramiento técnico y comercial.</li>
                <li>Enviar información relevante sobre productos, servicios y novedades de BEMEC S.A.</li>
                <li>Cumplir con obligaciones legales o contractuales.</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold md:text-2xl">3. Consentimiento</h3>
              <p className="text-muted-foreground">
                Al proporcionar sus datos personales, usted otorga su consentimiento expreso para que BEMEC S.A. los
                utilice conforme a lo establecido en esta política.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold md:text-2xl">4. Protección de datos</h3>
              <p className="text-muted-foreground">
                BEMEC S.A. se compromete a proteger la confidencialidad de su información personal mediante medidas de
                seguridad técnicas y organizativas adecuadas. No compartimos, vendemos ni transferimos sus datos a
                terceros sin su consentimiento, salvo cuando sea requerido por ley.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold md:text-2xl">5. Derechos del titular</h3>
              <p className="mb-3 text-muted-foreground">
                Usted tiene derecho a acceder, rectificar, actualizar o solicitar la eliminación de sus datos personales
                en cualquier momento. Para ejercer estos derechos, puede contactarnos a través de:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  Email:{" "}
                  <a href="mailto:eagustin@bemec.ar" className="text-primary hover:underline">
                    eagustin@bemec.ar
                  </a>
                </li>
                <li>
                  Teléfono:{" "}
                  <a href="tel:+542615132147" className="text-primary hover:underline">
                    +54 261 513 2147
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold md:text-2xl">6. Uso de cookies</h3>
              <p className="text-muted-foreground">
                Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario. Puede configurar su
                navegador para rechazar cookies, aunque esto podría afectar algunas funcionalidades del sitio.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold md:text-2xl">7. Modificaciones a esta política</h3>
              <p className="text-muted-foreground">
                BEMEC S.A. se reserva el derecho de modificar esta política de privacidad en cualquier momento. Las
                actualizaciones serán publicadas en nuestro sitio web con la fecha de la última revisión.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold md:text-2xl">8. Contacto</h3>
              <p className="mb-3 text-muted-foreground">
                Si tiene preguntas o inquietudes sobre esta política de privacidad, puede comunicarse con nosotros a
                través de:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  Email:{" "}
                  <a href="mailto:eagustin@bemec.ar" className="text-primary hover:underline">
                    eagustin@bemec.ar
                  </a>
                </li>
                <li>
                  Teléfono:{" "}
                  <a href="tel:+542615132147" className="text-primary hover:underline">
                    +54 261 513 2147
                  </a>
                </li>
                <li>Dirección: Independencia 48, M5501 Godoy Cruz, Mendoza, Argentina</li>
              </ul>
            </section>
          </div>
        </article>

        {/* Back to Home Button */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <Link href="/">
            <Button variant="outline" size="lg">
              Volver al inicio
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-xs text-muted-foreground md:text-sm">
          <p>
            © {new Date().getFullYear()} BEMEC S.A. · Venta, reparación y mantenimiento de motores eléctricos y
            electrobombas.
          </p>
        </footer>
      </div>
    </main>
  )
}
