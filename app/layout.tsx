import type React from "react"
import type { Metadata } from "next"
import { Changa } from "next/font/google"
import "./globals.css"

const changa = Changa({
  variable: "--font-changa",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "BEMEC S.A. | Soluciones Electromecánicas",
  description:
    "Venta, reparación y mantenimiento de motores eléctricos y electrobombas. Más de 30 años de experiencia en Mendoza, Argentina.",
  openGraph: {
    title: "BEMEC S.A. | Soluciones Electromecánicas",
    description: "Calidad, rapidez y confiabilidad en soluciones electromecánicas.",
    type: "website",
    locale: "es_AR",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={changa.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
