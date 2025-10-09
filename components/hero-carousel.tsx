"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

interface HeroCarouselProps {
  images?: Array<{
    src: string
    alt: string
  }>
}

export function HeroCarousel({ images }: HeroCarouselProps) {
  const defaultSlides = [
    {
      src: "/bemec-field-motor-testing.jpg",
      alt: "Técnico de BEMEC realizando pruebas de motor en campo con equipo especializado",
    },
    {
      src: "/bemec-motor-rotor-detail.jpg",
      alt: "Detalle interno de rotor de motor eléctrico con bobinados y rodamientos",
    },
    {
      src: "/bemec-pump-installation-crane.jpg",
      alt: "Instalación de bomba industrial con grúa en sitio de trabajo",
    },
  ]

  const slides = images || defaultSlides
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="group relative w-full overflow-hidden rounded-lg bg-muted/20">
      {/* Carousel Container */}
      

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 opacity-0 shadow-lg transition-opacity hover:bg-background group-hover:opacity-100 sm:left-4 sm:p-3"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 opacity-0 shadow-lg transition-opacity hover:bg-background group-hover:opacity-100 sm:right-4 sm:p-3"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-4 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all sm:h-2.5 sm:w-2.5 ${
              index === currentSlide ? "w-6 bg-primary sm:w-8" : "bg-background/60 hover:bg-background/80"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
