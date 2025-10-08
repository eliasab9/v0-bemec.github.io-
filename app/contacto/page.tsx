"use client"

import { Phone, Mail, MessageCircle, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { ContactCard } from "@/components/contact-card"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactoPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen px-4 py-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          {/* Header Section */}
          <header className="mb-8 md:mb-12">
            <div className="space-y-3">
              <h1 className="text-balance text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">Contacto</h1>
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
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="mb-6 text-xl font-bold md:text-2xl">Envianos tu consulta</h2>
              <ContactForm />
              <p className="mt-6 text-xs text-muted-foreground md:text-sm">
                Horario de atención: 8:00-17:00. Respuesta en el día hábil.
              </p>
            </div>

            {/* Map */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="mb-6 text-xl font-bold md:text-2xl">Dónde estamos</h2>
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

            <Link href="/privacy-policy">
              <Button
                variant="link"
                className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground md:text-sm"
              >
                Políticas de Privacidad
              </Button>
            </Link>
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
    </>
  )
}
