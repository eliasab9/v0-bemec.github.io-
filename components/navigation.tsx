"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <Image
            src="/bemec-logo.jpg"
            alt="BEMEC S.A."
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-contain"
            priority
          />
          <span className="font-mono text-xl font-bold">BEMEC S.A.</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          <Link href="/quienes-somos">
            <Button variant={isActive("/quienes-somos") ? "default" : "ghost"} className="text-sm font-medium">
              Quienes somos
            </Button>
          </Link>
          <Link href="/nuestros-servicios">
            <Button variant={isActive("/nuestros-servicios") ? "default" : "ghost"} className="text-sm font-medium">
              Nuestros Servicios
            </Button>
          </Link>
          <Link href="/contacto">
            <Button variant={isActive("/contacto") ? "default" : "ghost"} className="text-sm font-medium">
              Contacto
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
