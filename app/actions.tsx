"use server"

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
    // Here you would typically send the email using a service like:
    // - Resend
    // - SendGrid
    // - Nodemailer
    // - Or save to a database

    // For now, we'll simulate a successful submission
    console.log("Form submission:", { motivo, nombre, email, consulta })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In production, you would send an email like this:
    /*
    await resend.emails.send({
      from: 'contacto@bemec.ar',
      to: 'eagustin@bemec.ar',
      subject: `Nueva consulta: ${motivo}`,
      html: `
        <h2>Nueva consulta desde el sitio web</h2>
        <p><strong>Motivo:</strong> ${motivo}</p>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Consulta:</strong></p>
        <p>${consulta}</p>
      `,
    })
    */

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
