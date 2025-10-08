"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export function PrivacyPolicyDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="h-auto p-0 text-xs text-muted-foreground hover:text-primary md:text-sm"
          data-version="2.0"
        >
          Políticas de Privacidad
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Políticas de Privacidad</DialogTitle>
          <DialogDescription>BEMEC S.A. - Última actualización: {new Date().getFullYear()}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6 text-sm leading-relaxed">
            <section>
              <h3 className="mb-2 text-base font-bold">1. Información que recopilamos</h3>
              <p className="mb-2">Podemos recopilar los siguientes datos personales:</p>
              <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                <li>Nombre y apellido</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Empresa y cargo</li>
                <li>Información técnica relacionada con el uso de nuestros servicios (opcional)</li>
              </ul>
              <p className="mt-2 text-muted-foreground">
                Esta información es proporcionada voluntariamente por usted al completar un formulario, solicitar una
                cotización o comunicarse con nuestro equipo.
              </p>
            </section>

            <section>
              <h3 className="mb-2 text-base font-bold">2. Finalidad del tratamiento</h3>
              <p className="mb-2">Los datos recopilados serán utilizados exclusivamente para:</p>
              <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                <li>Responder consultas y solicitudes de cotización.</li>
                <li>Brindar asesoramiento técnico y comercial.</li>
                <li>Enviar información relevante sobre productos, servicios y novedades de BEMEC S.A.</li>
                <li>Cumplir con obligaciones legales o contractuales.</li>
              </ul>
              <p className="mt-2 text-muted-foreground">
                No utilizamos la información personal con fines distintos a los mencionados sin su consentimiento
                previo.
              </p>
            </section>

            <section>
              <h3 className="mb-2 text-base font-bold">3. Conservación de los datos</h3>
              <p className="text-muted-foreground">
                Los datos personales se conservarán únicamente durante el tiempo necesario para cumplir con los fines
                establecidos o mientras exista una relación comercial activa.
              </p>
            </section>

            <section>
              <h3 className="mb-2 text-base font-bold">4. Compartición de datos</h3>
              <p className="text-muted-foreground">
                BEMEC S.A. no vende, alquila ni comparte los datos personales con terceros, salvo que sea necesario para
                cumplir con obligaciones legales o para prestar servicios mediante proveedores de confianza que actúan
                bajo acuerdos de confidencialidad.
              </p>
            </section>

            <section>
              <h3 className="mb-2 text-base font-bold">5. Derechos del titular de los datos</h3>
              <p className="mb-2 text-muted-foreground">
                Usted puede ejercer sus derechos de acceso, rectificación, actualización y supresión de sus datos
                personales enviando un correo electrónico a:
              </p>
              <p className="mb-1">
                📩{" "}
                <a href="mailto:eagustin@bemec.ar" className="text-primary hover:underline">
                  eagustin@bemec.ar
                </a>
              </p>
              <p className="text-muted-foreground">
                o comunicándose al{" "}
                <a href="tel:+542615132147" className="text-primary hover:underline">
                  📞 2615132147
                </a>
                .
              </p>
            </section>

            <section>
              <h3 className="mb-2 text-base font-bold">6. Seguridad de la información</h3>
              <p className="text-muted-foreground">
                Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos frente a accesos no
                autorizados, pérdida o alteración. Sin embargo, ningún sistema es completamente seguro, por lo que no
                podemos garantizar la seguridad absoluta de la información.
              </p>
            </section>

            <section>
              <h3 className="mb-2 text-base font-bold">7. Cambios en la Política de Privacidad</h3>
              <p className="text-muted-foreground">
                BEMEC S.A. se reserva el derecho de modificar esta política en cualquier momento. Las actualizaciones
                serán publicadas en este mismo sitio web con la fecha de última revisión.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
