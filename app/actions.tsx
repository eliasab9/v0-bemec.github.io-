"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  // Extract form data
  const motivo = formData.get("motivo") as string
  const nombre = formData.get("nombre") as string
  const email = formData.get("email") as string
  const consulta = formData.get("consulta") as string

  // Validate required fields
  if (!motivo || !nombre || !email || !consulta) {
    return {
      success: false,
      error: "Por favor, completá todos los campos requeridos.",
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Por favor, ingresá un email válido.",
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

    await resend.emails.send({
      from: "BEMEC Contacto <onboarding@resend.dev>", // Resend verified sender
      to: "eagustin@bemec.ar",
      replyTo: email, // Allow replying directly to the customer
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

    return {
      success: true,
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    return {
      success: false,
      error: "Hubo un error al enviar el mensaje. Por favor, intentá de nuevo.",
    }
  }
}
