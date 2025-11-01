"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCurrency } from "@/lib/currency-context"

gsap.registerPlugin(ScrollTrigger)

const packages = [
  {
    id: 1,
    name: "Explorer",
    price: 899,
    duration: "5 Days",
    description: "Perfect for first-time travelers",
    features: [
      "3-star accommodations",
      "Daily breakfast",
      "Local guided tours",
      "Airport transfers",
      "Travel insurance",
    ],
    highlighted: false,
  },
  {
    id: 2,
    name: "Adventurer",
    price: 1499,
    duration: "7 Days",
    description: "For the thrill-seekers",
    features: [
      "4-star accommodations",
      "All meals included",
      "Extreme adventure activities",
      "Private transportation",
      "Professional photographer",
      "Travel insurance",
    ],
    highlighted: true,
  },
  {
    id: 3,
    name: "Luxury",
    price: 2499,
    duration: "10 Days",
    description: "Ultimate indulgence",
    features: [
      "5-star resorts",
      "Gourmet dining",
      "Exclusive experiences",
      "Private jet transfers",
      "Personal concierge",
      "Premium insurance",
    ],
    highlighted: false,
  },
]

export function Packages() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const packagesRef = useRef(null)
  const { convertPrice, currency } = useCurrency()

  const currencySymbol: Record<string, string> = {
    USD: "$",
    GBP: "£",
    LKR: "Rs",
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      const packageElements = packagesRef.current?.querySelectorAll(".package-card")
      gsap.fromTo(
        packageElements,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: {
            trigger: packagesRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="packages" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-primary font-semibold">OUR OFFERINGS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-balance">Travel Packages</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Choose the perfect package that suits your travel style and budget
          </p>
        </div>

        {/* Packages Grid */}
        <div ref={packagesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`package-card relative rounded-lg overflow-hidden transition-all duration-300 ${
                pkg.highlighted ? "md:scale-105" : ""
              }`}
            >
              {/* Badge */}
              {pkg.highlighted && (
                <div className="absolute -top-2 -right-2 z-10">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold transform rotate-45 origin-top-right">
                    POPULAR
                  </div>
                </div>
              )}

              <div
                className={`p-8 h-full flex flex-col ${
                  pkg.highlighted
                    ? "bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary"
                    : "bg-background border border-border"
                }`}
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">
                      {currencySymbol[currency]}
                      {convertPrice(pkg.price)}
                    </span>
                    <span className="text-muted-foreground">/ {pkg.duration}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border mb-6" />

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-semibold ${
                    pkg.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
