"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    src: "/bemec-copper-windings-closeup.jpeg",
    alt: "Vista detallada de bobinado de motor eléctrico con alambre de cobre",
  },
  {
    src: "/bemec-stator-green-yellow.jpeg",
    alt: "Estator de motor industrial con bobinado verde y estructura amarilla",
  },
  {
    src: "/bemec-stator-rewinding.jpeg",
    alt: "Proceso de rebobinado de estator de motor eléctrico",
  },
]

export function RepairCarousel() {
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

  // Auto-play every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      {/* Slides - Changed to aspect-square and object-cover to eliminate gray bars */}
      <div className="relative aspect-square w-full bg-background">
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
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 h-10 w-10 -translate-y-1/2 bg-background/80 hover:bg-background/90"
        onClick={prevSlide}
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 bg-background/80 hover:bg-background/90"
        onClick={nextSlide}
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dots Navigation */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
