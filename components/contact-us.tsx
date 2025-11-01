"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

export function ContactUs() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const formRef = useRef(null)
  const contactInfoRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travelers: "",
    message: "",
  })

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

      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        },
      )

      const infoElements = contactInfoRef.current?.querySelectorAll(".info-card")
      gsap.fromTo(
        infoElements,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: contactInfoRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      travelDate: "",
      travelers: "",
      message: "",
    })
  }

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-primary font-semibold">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-balance">Contact Us</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Have questions? Our team is ready to help you plan your perfect trip
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Preferred Destination</label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a destination</option>
                <option value="bali">Bali, Indonesia</option>
                <option value="paris">Paris, France</option>
                <option value="tokyo">Tokyo, Japan</option>
                <option value="maldives">Maldives</option>
                <option value="santorini">Santorini, Greece</option>
                <option value="newyork">New York, USA</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Preferred Travel Date</label>
              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Number of Travelers</label>
              <input
                type="number"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                placeholder="How many people?"
                min="1"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your travel plans..."
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Send Message
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>

          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-6">
            <div className="info-card bg-card p-8 rounded-lg border border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">support@travelway.com</p>
                  <p className="text-muted-foreground">booking@travelway.com</p>
                </div>
              </div>
            </div>

            <div className="info-card bg-card p-8 rounded-lg border border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (800) 123-4567</p>
                  <p className="text-muted-foreground">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>

            <div className="info-card bg-card p-8 rounded-lg border border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Office</h3>
                  <p className="text-muted-foreground">
                    123 Travel Street
                    <br />
                    Adventure City, AC 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg border border-border">
              <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-sm mt-4 text-primary font-medium">24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
