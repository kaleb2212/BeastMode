import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import ServiceCards from "@/components/service-cards"
import Testimonials from "@/components/testimonials"
import Brands from "@/components/brands"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServiceCards />
      <Testimonials />
      <Services />
      <Brands />
      <CTA />
      <Footer />
    </main>
  )
}
