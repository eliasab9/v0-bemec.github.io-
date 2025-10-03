"use server"

import { Resend } from "resend"

export async function submitContactForm(formData: FormData) {
  try {
    console.log("[v0] === FORM SUBMISSION STARTED ===")
    console.log("[v0] Environment check - RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY)
    console.log("[v0] Environment check - RESEND_API_KEY length:", process.env.RESEND_API_KEY?.length || 0)

    // Extract form data
    const motivo = formData.get("motivo") as string
    const nombre = formData.get("nombre") as string
    const email = formData.get("email") as string
    const consulta = formData.get("consulta") as string

    console.log("[v0] Form data extracted:", {
      motivo,
      nombre,
      email,
      consultaLength: consulta?.length,
    })

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
    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] ERROR: RESEND_API_KEY is not configured in environment variables")
      return {
        success: false,
        error: "El servicio de email no está configurado. Por favor, contactá al administrador.",
      }
    }

    console.log("[v0] Creating Resend client...")
    const resend = new Resend(process.env.RESEND_API_KEY)
    console.log("[v0] Resend client created successfully")

    const motivoLabels: Record<string, string> = {
      reparacion: "Reparación de motor",
      ensayo: "Ensayo de bombas",
      balanceo: "Balanceo dinámico",
      visita: "Visita técnica in situ",
      otro: "Otro",
    }

    console.log("[v0] Preparing email payload...")
    const emailPayload = {
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
    }

    console.log("[v0] Email payload prepared. Sending email...")
    console.log("[v0] To:", emailPayload.to)
    console.log("[v0] From:", emailPayload.from)
    console.log("[v0] Subject:", emailPayload.subject)

    const response = await resend.emails.send(emailPayload)

    console.log("[v0] Email API response:", JSON.stringify(response, null, 2))
    console.log("[v0] === EMAIL SENT SUCCESSFULLY ===")

    return {
      success: true,
    }
  } catch (error) {
    console.error("[v0] === ERROR OCCURRED ===")
    console.error("[v0] Error type:", error?.constructor?.name)
    console.error("[v0] Error object:", error)

    if (error instanceof Error) {
      console.error("[v0] Error message:", error.message)
      console.error("[v0] Error stack:", error.stack)
    }

    // Try to stringify the error for more details
    try {
      console.error("[v0] Error JSON:", JSON.stringify(error, Object.getOwnPropertyNames(error), 2))
    } catch (e) {
      console.error("[v0] Could not stringify error")
    }

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
