import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
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
      <head>
        <Script
          id="linkedin-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "9125585";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `,
          }}
        />
        <Script
          id="linkedin-insight"
          src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
          strategy="afterInteractive"
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=9125585&fmt=gif"
          />
        </noscript>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
