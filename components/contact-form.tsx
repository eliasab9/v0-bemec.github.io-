"use client"

import { useState } from "react"
import { Send, CheckCircle2, AlertCircle, Info } from "lucide-react"
import { submitContactForm } from "@/app/actions"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    console.log("[v0] Form submission started")
    console.log("[v0] Form data:", {
      motivo: formData.get("motivo"),
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      consulta: formData.get("consulta"),
    })

    setStatus("loading")
    setMessage("")

    try {
      const result = await submitContactForm(formData)
      console.log("[v0] Server action result:", result)

      if (result.success) {
        setStatus("success")
        setMessage("¡Mensaje enviado! Te responderemos pronto.")
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()

        // Reset status after 5 seconds
        setTimeout(() => {
          setStatus("idle")
          setMessage("")
        }, 5000)
      } else {
        setStatus("error")
        setMessage(result.error || "Hubo un error. Por favor, intentá de nuevo.")
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setStatus("error")
      setMessage("Hubo un error. Por favor, intentá de nuevo.")
    }
  }

  return (
    <form id="contact-form" action={handleSubmit} className="space-y-5">
      {/* Reason Select */}
      <div className="space-y-2">
        <label htmlFor="motivo" className="text-sm font-medium text-muted-foreground">
          Motivo de la consulta
        </label>
        <select
          id="motivo"
          name="motivo"
          required
          autoComplete="off"
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="">Elegí una opción</option>
          <option value="reparacion">Reparación de motor</option>
          <option value="ensayo">Ensayo de bombas</option>
          <option value="balanceo">Balanceo dinámico</option>
          <option value="visita">Visita técnica in situ</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      {/* Name and Email Row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="nombre" className="text-sm font-medium text-muted-foreground">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@email.com"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Message Textarea */}
      <div className="space-y-2">
        <label htmlFor="consulta" className="text-sm font-medium text-muted-foreground">
          Consulta
        </label>
        <textarea
          id="consulta"
          name="consulta"
          required
          rows={5}
          autoComplete="off"
          placeholder="Contanos en qué te podemos ayudar"
          className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Status Message */}
      {message && (
        <div
          className={`flex items-center gap-2 rounded-lg p-4 text-sm ${
            status === "success" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
          }`}
        >
          {status === "success" ? (
            <CheckCircle2 className="h-5 w-5 shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 shrink-0" />
          )}
          <span>{message}</span>
        </div>
      )}

      {/* Submit Button */}
      <div className="space-y-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-accent active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading" ? (
            <>
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Enviar
            </>
          )}
        </button>
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <Info className="h-4 w-4 shrink-0 mt-0.5" />
          <p>Por favor, revisar la casilla de spam con nuestra respuesta</p>
        </div>
      </div>
    </form>
  )
}
