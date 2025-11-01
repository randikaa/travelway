"use client"

import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselSlides = [
  {
    id: 1,
    title: "Discover Paradise",
    subtitle: "Explore the most beautiful destinations in the world",
    videoUrl: "https://videos.pexels.com/video-files/5841369/5841369-hd_1920_1080_30fps.mp4",
    color: "from-orange-500 to-rose-500",
  },
  {
    id: 2,
    title: "Adventure Awaits",
    subtitle: "Experience thrilling journeys and unforgettable moments",
    videoUrl: "https://videos.pexels.com/video-files/6282347/6282347-hd_1080_1920_24fps.mp4",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 3,
    title: "Cultural Immersion",
    subtitle: "Connect with vibrant cultures and local traditions",
    videoUrl: "https://videos.pexels.com/video-files/1093594/1093594-hd_1920_1080_24fps.mp4",
    color: "from-teal-500 to-blue-500",
  },
  {
    id: 4,
    title: "Luxury Getaway",
    subtitle: "Indulge in world-class resorts and exclusive experiences",
    videoUrl: "https://videos.pexels.com/video-files/1826382/1826382-hd_1920_1080_24fps.mp4",
    color: "from-purple-500 to-pink-500",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [autoPlay])

  useEffect(() => {
    animateContent()
  }, [currentSlide])

  const animateContent = () => {
    const tl = gsap.timeline()

    // Fade out previous content
    tl.to(
      [titleRef.current, subtitleRef.current, buttonsRef.current],
      {
        opacity: 0,
        y: -20,
        duration: 0.3,
      },
      0,
    )

    // Fade in new content with stagger
    tl.to(
      titleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      0.3,
    )

    tl.to(
      subtitleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      0.4,
    )

    tl.to(
      buttonsRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      0.5,
    )
  }

  const handleNext = () => {
    setAutoPlay(false)
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    setAutoPlay(true)
  }

  const handlePrev = () => {
    setAutoPlay(false)
    setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1))
    setAutoPlay(true)
  }

  const slide = carouselSlides[currentSlide]

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        key={`video-${slide.id}`}
        className="absolute inset-0 w-full h-full object-cover"
        onCanPlay={() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0
          }
        }}
      >
        <source src={slide.videoUrl} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          {/* Title */}
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 text-balance opacity-0">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p ref={subtitleRef} className="text-xl md:text-2xl mb-8 text-white/90 opacity-0">
            {slide.subtitle}
          </p>

          {/* Buttons */}
          <div ref={buttonsRef} className="flex gap-4 justify-center opacity-0 flex-wrap">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoPlay(false)
              setCurrentSlide(index)
              setAutoPlay(true)
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
