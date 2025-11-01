"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Award, Users, Zap, Shield, Globe, Headphones } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized globally for excellence in travel planning and customer satisfaction",
  },
  {
    icon: Users,
    title: "Expert Travel Consultants",
    description: "Our team has decades of combined experience in curating perfect trips",
  },
  {
    icon: Zap,
    title: "Fast & Easy Booking",
    description: "Book your dream vacation in just minutes with our intuitive platform",
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "Your data and payments are protected with industry-leading security",
  },
  {
    icon: Globe,
    title: "500+ Destinations",
    description: "Access to thousands of handpicked experiences worldwide",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your travel needs",
  },
]

export function WhyChooseUs() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const featuresRef = useRef(null)
  const imageRef = useRef(null)

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

      const featureElements = featuresRef.current?.querySelectorAll(".feature-item")
      gsap.fromTo(
        featureElements,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="why-us" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-primary font-semibold">WHY CHOOSE US</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-balance">Experience Travel Like Never Before</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            We're committed to making every journey exceptional with personalized service and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="feature-item group">
                  <div className="relative bg-background rounded-lg p-6 border border-border hover:border-primary transition-all duration-300 h-full">
                    {/* Animated background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="p-3 w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2 text-lg">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative h-96 rounded-lg overflow-hidden">
            <img src="/happy-family-traveling-together.jpg" alt="Happy travelers" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />

            {/* Stats Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-bold">50K+</p>
                  <p className="text-sm text-white/80">Happy Travelers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm text-white/80">Destinations</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">10M+</p>
                  <p className="text-sm text-white/80">Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
