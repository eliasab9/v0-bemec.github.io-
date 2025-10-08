"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    src: "/industrial-electric-motor-repair-workshop-with-tec.jpg",
    alt: "Taller de reparación de motores eléctricos industriales",
  },
  {
    src: "/electric-motors-and-pumps-industrial-equipment-sho.jpg",
    alt: "Motores eléctricos y electrobombas industriales",
  },
  {
    src: "/industrial-maintenance-technician-inspecting-large.jpg",
    alt: "Mantenimiento de equipos electromecánicos",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  // Auto-play every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides - Adjusted aspect ratio for mobile (taller) and desktop (wider) */}
      <div className="relative aspect-[16/9] w-full sm:aspect-[16/7] md:aspect-[16/6]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src || "/placeholder.svg"}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Larger touch targets for mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 h-10 w-10 -translate-y-1/2 bg-background/80 hover:bg-background/90 sm:left-4 sm:h-12 sm:w-12"
        onClick={prevSlide}
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 bg-background/80 hover:bg-background/90 sm:right-4 sm:h-12 sm:w-12"
        onClick={nextSlide}
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>

      {/* Dots Navigation - Larger touch targets for mobile */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all sm:h-2 ${
              index === currentSlide ? "w-8 bg-primary sm:w-8" : "w-2.5 bg-white/60 hover:bg-white/80 sm:w-2"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
