"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Star, Quote } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const stories = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Adventure Seeker",
    image: "/placeholder.svg?key=s2f8n",
    quote:
      "TravelWay completely transformed my travel experience. The personalized recommendations were spot-on, and the entire booking process was seamless!",
    rating: 5,
    trip: "Southeast Asia Tour",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Family Travel Enthusiast",
    image: "/placeholder.svg?key=k9m3x",
    quote:
      "We were skeptical about booking online, but TravelWay's support team was incredible. They helped us plan the perfect family vacation to Europe.",
    rating: 5,
    trip: "Europe Family Vacation",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Luxury Travel Lover",
    image: "/placeholder.svg?key=d8p2l",
    quote:
      "The luxury packages are absolutely exquisite. Every detail was carefully planned, from accommodation to exclusive experiences. Highly recommended!",
    rating: 5,
    trip: "Maldives Luxury Retreat",
  },
  {
    id: 4,
    name: "James Rodriguez",
    role: "Backpacker",
    image: "/placeholder.svg?key=n4q7w",
    quote:
      "Perfect for budget-conscious travelers! Great deals without compromising on quality. Already planning my next adventure with TravelWay.",
    rating: 4,
    trip: "Thailand Budget Adventure",
  },
]

export function SuccessStories() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const storiesRef = useRef(null)

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

      const storyElements = storiesRef.current?.querySelectorAll(".story-card")
      gsap.fromTo(
        storyElements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          scrollTrigger: {
            trigger: storiesRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="stories" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-primary font-semibold">CLIENT TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-balance">Success Stories</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Hear from travelers who've experienced unforgettable journeys with us
          </p>
        </div>

        {/* Stories Grid */}
        <div ref={storiesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="story-card group">
              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 h-full">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/30 mb-4" />

                {/* Quote */}
                <p className="text-foreground mb-6 text-lg leading-relaxed italic">"{story.quote}"</p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < story.rating ? "fill-primary text-primary" : "text-muted"}`}
                    />
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-border mb-6" />

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{story.name}</h4>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                    <p className="text-xs text-primary font-medium mt-1">Trip: {story.trip}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
