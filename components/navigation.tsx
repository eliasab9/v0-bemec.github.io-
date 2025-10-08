"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const navLinks = [
    { href: "/quienes-somos", label: "Quienes somos" },
    { href: "/nuestros-servicios", label: "Nuestros Servicios" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80 sm:gap-3">
          <Image
            src="/bemec-logo.jpg"
            alt="BEMEC S.A."
            width={40}
            height={40}
            className="h-8 w-8 rounded-lg object-contain sm:h-10 sm:w-10"
            priority
          />
          <span className="font-mono text-lg font-bold sm:text-xl">BEMEC S.A.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button variant={isActive(link.href) ? "default" : "ghost"} className="text-sm font-medium">
                {link.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={isActive(link.href) ? "default" : "ghost"}
                  className="w-full justify-start text-base font-medium"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
