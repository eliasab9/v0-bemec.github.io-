"use client"

import { Phone, Mail, MessageCircle, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { ContactCard } from "@/components/contact-card"
import Image from "next/image"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ContactPage() {
  const [open, setOpen] = useState(false)

  return (
    <main className="min-h-screen px-4 py-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <header className="mb-8 md:mb-12">
          <div className="mb-6 flex items-center gap-3 md:gap-4">
            <Image
              src="/bemec-logo.jpg"
              alt="BEMEC S.A. Logo"
              width={56}
              height={56}
              className="h-12 w-12 rounded-xl object-contain md:h-14 md:w-14"
              priority
            />
            <h1 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">BEMEC S.A.</h1>
          </div>

          <div className="space-y-3">
            <h2 className="text-balance text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">Contacto</h2>
            <p className="text-pretty text-base text-muted-foreground md:text-lg lg:text-xl">
              Estamos para ayudarte. Elegí el medio que prefieras y respondemos a la brevedad.
            </p>
          </div>
        </header>

        {/* Contact Methods Grid */}
        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Medios de contacto">
          <ContactCard
            icon={<Phone className="h-5 w-5" />}
            label="Teléfono"
            value="+54 261 513 2147"
            href="tel:+542615132147"
          />
          <ContactCard
            icon={<Mail className="h-5 w-5" />}
            label="Email"
            value="eagustin@bemec.ar"
            href="mailto:eagustin@bemec.ar?subject=Consulta%20BEMEC%20S.A.&body=Hola%20BEMEC%2C%20necesito%20ayuda%20con%3A"
          />
          <ContactCard
            icon={<MessageCircle className="h-5 w-5" />}
            label="WhatsApp"
            value="wa.me/542615132147"
            href="https://wa.me/542615132147"
            external
          />
        </section>

        {/* Address */}
        <div className="mb-8 flex items-start gap-2 text-sm text-muted-foreground md:text-base">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <span>Independencia 48, M5501 Godoy Cruz, Mendoza, Argentina</span>
        </div>

        {/* Form and Map Grid */}
        <section className="grid gap-6 lg:grid-cols-2" aria-label="Formulario y mapa">
          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <h3 className="mb-6 text-xl font-bold md:text-2xl">Envianos tu consulta</h3>
            <ContactForm />
            <p className="mt-6 text-xs text-muted-foreground md:text-sm">
              Horario de atención: 8:00-17:00. Respuesta en el día hábil.
            </p>
          </div>

          {/* Map */}
          <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <h3 className="mb-6 text-xl font-bold md:text-2xl">Dónde estamos</h3>
            <div className="overflow-hidden rounded-xl">
              <iframe
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Independencia%2048,%20M5501%20Godoy%20Cruz,%20Mendoza&output=embed"
                className="h-[300px] w-full border-0 md:h-[400px] lg:h-[450px]"
                title="Ubicación de BEMEC S.A."
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground md:text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} BEMEC S.A. · Venta, reparación y mantenimiento de motores eléctricos y
            electrobombas.
          </p>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant="link"
                className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground md:text-sm"
              >
                Políticas de Privacidad
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[85vh] max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Políticas de Privacidad</DialogTitle>
                <DialogDescription>BEMEC S.A. - Última actualización: {new Date().getFullYear()}</DialogDescription>
              </DialogHeader>
              <ScrollArea className="max-h-[60vh] pr-4">
                <div className="space-y-6 text-sm">
                  <section>
                    <h3 className="mb-2 text-base font-bold">1. Información que recopilamos</h3>
                    <p className="mb-2 text-muted-foreground">Podemos recopilar los siguientes datos personales:</p>
                    <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                      <li>Nombre y apellido</li>
                      <li>Dirección de correo electrónico</li>
                      <li>Número de teléfono</li>
                      <li>Empresa y cargo</li>
                      <li>Información técnica relacionada con el uso de nuestros servicios (opcional)</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="mb-2 text-base font-bold">2. Finalidad del tratamiento</h3>
                    <p className="mb-2 text-muted-foreground">
                      Esta información es proporcionada voluntariamente por usted al completar un formulario, solicitar
                      una cotización o comunicarse con nuestro equipo.
                    </p>
                    <p className="mb-2 text-muted-foreground">
                      Los datos recopilados serán utilizados exclusivamente para:
                    </p>
                    <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                      <li>Responder consultas y solicitudes de cotización.</li>
                      <li>Brindar asesoramiento técnico y comercial.</li>
                      <li>Enviar información relevante sobre productos, servicios y novedades de BEMEC S.A.</li>
                      <li>Cumplir con obligaciones legales o contractuales.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="mb-2 text-base font-bold">3. Consentimiento</h3>
                    <p className="text-muted-foreground">
                      Al proporcionar sus datos personales, usted otorga su consentimiento expreso para que BEMEC S.A.
                      los utilice conforme a lo establecido en esta política.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-base font-bold">4. Protección de datos</h3>
                    <p className="text-muted-foreground">
                      BEMEC S.A. se compromete a proteger la confidencialidad de su información personal mediante
                      medidas de seguridad técnicas y organizativas adecuadas. No compartimos, vendemos ni transferimos
                      sus datos a terceros sin su consentimiento, salvo cuando sea requerido por ley.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-base font-bold">5. Derechos del titular</h3>
                    <p className="mb-2 text-muted-foreground">
                      Usted tiene derecho a acceder, rectificar, actualizar o solicitar la eliminación de sus datos
                      personales en cualquier momento. Para ejercer estos derechos, puede contactarnos a través de:
                    </p>
                    <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
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
                    <h3 className="mb-2 text-base font-bold">6. Uso de cookies</h3>
                    <p className="text-muted-foreground">
                      Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario. Puede configurar
                      su navegador para rechazar cookies, aunque esto podría afectar algunas funcionalidades del sitio.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-base font-bold">7. Modificaciones a esta política</h3>
                    <p className="text-muted-foreground">
                      BEMEC S.A. se reserva el derecho de modificar esta política de privacidad en cualquier momento.
                      Las actualizaciones serán publicadas en nuestro sitio web con la fecha de la última revisión.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-base font-bold">8. Contacto</h3>
                    <p className="text-muted-foreground">
                      Si tiene preguntas o inquietudes sobre esta política de privacidad, puede comunicarse con nosotros
                      a través de:
                    </p>
                    <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
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
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </footer>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "BEMEC S.A.",
            url: "https://bemec.ar",
            address: "Independencia 48, M5501 Godoy Cruz, Mendoza",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: "+54-261-513-2147",
                email: "eagustin@bemec.ar",
                areaServed: "AR",
              },
            ],
          }),
        }}
      />
    </main>
  )
}
