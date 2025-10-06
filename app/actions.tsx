"use server"

import { Resend } from "resend"

export async function submitContactForm(formData: FormData) {
  try {
    console.log("[v0] Starting form submission")

    // Extract form data
    const motivo = formData.get("motivo") as string
    const nombre = formData.get("nombre") as string
    const email = formData.get("email") as string
    const consulta = formData.get("consulta") as string

    console.log("[v0] Form data extracted:", { motivo, nombre, email, consultaLength: consulta?.length })

    // Validate required fields
    if (!motivo || !nombre || !email || !consulta) {
      console.log("[v0] Validation failed: missing required fields")
      return {
        success: false,
        error: "Por favor, completá todos los campos requeridos.",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log("[v0] Validation failed: invalid email format")
      return {
        success: false,
        error: "Por favor, ingresá un email válido.",
      }
    }

    // Check API key
    const apiKey = process.env.RESEND_API_KEY
    console.log("[v0] API key exists:", !!apiKey)
    console.log("[v0] API key starts with 're_':", apiKey?.startsWith("re_"))

    if (!apiKey) {
      console.log("[v0] Error: API key not found")
      return {
        success: false,
        error: "El servicio de email no está configurado. Por favor, contactá al administrador.",
      }
    }

    console.log("[v0] Creating Resend instance")
    const resend = new Resend(apiKey)

    const motivoLabels: Record<string, string> = {
      reparacion: "Reparación de motor",
      ensayo: "Ensayo de bombas",
      balanceo: "Balanceo dinámico",
      visita: "Visita técnica in situ",
      otro: "Otro",
    }

    const emailPayload = {
      from: "BEMEC Contacto <contacto@bemecsa.com>",
      to: "eagustin@bemec.ar",
      replyTo: email,
      subject: `Nueva consulta: ${motivoLabels[motivo] || motivo}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1a9b8e; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #1a9b8e; }
              .value { margin-top: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">Nueva consulta desde el sitio web</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Motivo de la consulta:</div>
                  <div class="value">${motivoLabels[motivo] || motivo}</div>
                </div>
                <div class="field">
                  <div class="label">Nombre:</div>
                  <div class="value">${nombre}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Consulta:</div>
                  <div class="value">${consulta.replace(/\n/g, "<br>")}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    console.log("[v0] Email payload prepared:", {
      from: emailPayload.from,
      to: emailPayload.to,
      replyTo: emailPayload.replyTo,
      subject: emailPayload.subject,
    })

    console.log("[v0] Sending email via Resend...")
    const response = await resend.emails.send(emailPayload)

    console.log("[v0] Resend response:", response)

    return {
      success: true,
    }
  } catch (error) {
    console.error("[v0] Error caught:", error)
    console.error("[v0] Error details:", {
      message: error instanceof Error ? error.message : "Unknown error",
      name: error instanceof Error ? error.name : "Unknown",
      stack: error instanceof Error ? error.stack : "No stack trace",
    })

    let errorMessage = "Hubo un error al enviar el mensaje. Por favor, intentá de nuevo."

    if (error instanceof Error) {
      if (error.message.includes("API key") || error.message.includes("api_key")) {
        errorMessage = "Error de configuración del servicio de email. Verificá la API key."
      } else if (error.message.includes("rate limit")) {
        errorMessage = "Se alcanzó el límite de envíos. Por favor, intentá más tarde."
      } else if (error.message.includes("domain")) {
        errorMessage = "Error de configuración de dominio. Contactá al administrador."
      }
    }

    return {
      success: false,
      error: errorMessage,
    }
  }
}
