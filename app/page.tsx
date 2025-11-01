import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { HowItWorks } from "@/components/how-it-works"
import { TrendingDestinations } from "@/components/trending-destinations"
import { WhyChooseUs } from "@/components/why-choose-us"
import { SuccessStories } from "@/components/success-stories"
import { Packages } from "@/components/packages"
import { ContactUs } from "@/components/contact-us"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <HowItWorks />
      <TrendingDestinations />
      <WhyChooseUs />
      <SuccessStories />
      <Packages />
      <ContactUs />
      <Footer />
    </main>
  )
}
