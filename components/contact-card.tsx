import type React from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface ContactCardProps {
  icon: React.ReactNode
  label: string
  value: string
  href: string
  external?: boolean
}

export function ContactCard({ icon, label, value, href, external }: ContactCardProps) {
  const Component = external ? "a" : Link
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {}

  return (
    <Component
      href={href}
      {...externalProps}
      className="group relative overflow-hidden rounded-xl border border-border bg-surface-elevated p-6 transition-all hover:border-primary/50 hover:bg-surface active:scale-[0.98]"
    >
      <div className="mb-3 flex items-center gap-2 text-muted-foreground">
        <div className="rounded-lg bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary/20">
          {icon}
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <span className="break-all text-base font-medium text-foreground md:text-lg">{value}</span>
        {external && (
          <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
        )}
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </Component>
  )
}
