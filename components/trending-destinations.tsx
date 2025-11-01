"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Star, MapPin } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    category: "Beach Paradise",
    image: "/bali-beach-tropical-resort.jpg",
    rating: 4.8,
    price: 1299,
  },
  {
    id: 2,
    name: "Paris, France",
    category: "Romance & Culture",
    image: "/paris-eiffel-tower-city.jpg",
    rating: 4.9,
    price: 1599,
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    category: "Urban Adventure",
    image: "/tokyo-street-neon-city.jpg",
    rating: 4.7,
    price: 1399,
  },
  {
    id: 4,
    name: "New York, USA",
    category: "City Experience",
    image: "/new-york-skyline-manhattan.jpg",
    rating: 4.6,
    price: 1199,
  },
  {
    id: 5,
    name: "Maldives",
    category: "Luxury Escape",
    image: "/maldives-overwater-bungalow.jpg",
    rating: 4.9,
    price: 2299,
  },
  {
    id: 6,
    name: "Greece, Santorini",
    category: "Mediterranean Charm",
    image: "/santorini-white-buildings-sunset.jpg",
    rating: 4.8,
    price: 1499,
  },
]

export function TrendingDestinations() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

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

      const cardElements = cardsRef.current?.querySelectorAll(".destination-card")
      gsap.fromTo(
        cardElements,
        { opacity: 0, y: 40, rotateY: 10 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.7,
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="destinations" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-primary font-semibold">EXPLORE THE WORLD</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-balance">Trending Destinations</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Discover the most sought-after travel destinations that our guests love
          </p>
        </div>

        {/* Destination Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 h-64">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  From ${destination.price}
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-primary text-sm font-semibold mb-1">{destination.category}</p>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {destination.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(destination.rating) ? "fill-primary text-primary" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({destination.rating})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
