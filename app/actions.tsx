"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  console.log("[v0] Form submission started")
  console.log("[v0] RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY)

  // Extract form data
  const motivo = formData.get("motivo") as string
  const nombre = formData.get("nombre") as string
  const email = formData.get("email") as string
  const consulta = formData.get("consulta") as string

  console.log("[v0] Form data:", { motivo, nombre, email, consultaLength: consulta?.length })

  // Validate required fields
  if (!motivo || !nombre || !email || !consulta) {
    console.log("[v0] Validation failed: missing fields")
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

  if (!process.env.RESEND_API_KEY) {
    console.error("[v0] RESEND_API_KEY is not configured")
    return {
      success: false,
      error: "El servicio de email no está configurado. Por favor, contactá al administrador.",
    }
  }

  try {
    const motivoLabels: Record<string, string> = {
      reparacion: "Reparación de motor",
      ensayo: "Ensayo de bombas",
      balanceo: "Balanceo dinámico",
      visita: "Visita técnica in situ",
      otro: "Otro",
    }

    console.log("[v0] Attempting to send email via Resend")

    const response = await resend.emails.send({
      from: "BEMEC Contacto <onboarding@resend.dev>",
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
    })

    console.log("[v0] Email sent successfully:", response)

    return {
      success: true,
    }
  } catch (error) {
    console.error("[v0] Error submitting form:", error)
    console.error("[v0] Error details:", JSON.stringify(error, null, 2))

    let errorMessage = "Hubo un error al enviar el mensaje. Por favor, intentá de nuevo."

    if (error instanceof Error) {
      console.error("[v0] Error message:", error.message)

      // Check for common Resend errors
      if (error.message.includes("API key")) {
        errorMessage = "Error de configuración del servicio de email. Contactá al administrador."
      } else if (error.message.includes("rate limit")) {
        errorMessage = "Se alcanzó el límite de envíos. Por favor, intentá más tarde."
      }
    }

    return {
      success: false,
      error: errorMessage,
    }
  }
}
