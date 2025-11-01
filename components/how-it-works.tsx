"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Search, MapPin, Briefcase, CheckCircle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Search & Browse",
    description: "Explore thousands of destinations and packages curated just for you",
  },
  {
    icon: MapPin,
    number: "02",
    title: "Choose Your Destination",
    description: "Select from our handpicked locations with detailed information and reviews",
  },
  {
    icon: Briefcase,
    number: "03",
    title: "Book Your Trip",
    description: "Complete your booking with our secure and easy-to-use system",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Start Your Adventure",
    description: "Receive your itinerary and prepare for an unforgettable journey",
  },
]

export function HowItWorks() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const stepsContainerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title on scroll
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Stagger animate steps
      const stepElements = stepsContainerRef.current?.querySelectorAll(".step-item")
      gsap.fromTo(
        stepElements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: stepsContainerRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animate connecting lines
      const lines = stepsContainerRef.current?.querySelectorAll(".step-line")
      gsap.fromTo(
        lines,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: stepsContainerRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-primary font-semibold">OUR PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-balance">How It Works</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Four simple steps to book your dream vacation and create memories that last a lifetime
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsContainerRef} className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="step-item">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block step-line absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-x-1/2 origin-left" />
                )}

                {/* Card */}
                <div className="relative bg-background rounded-lg p-8 border border-border hover:border-primary transition-colors h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 p-4 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
