import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import ServiceCards from "@/components/service-cards"
import Testimonials from "@/components/testimonials"
import Brands from "@/components/brands"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import { Shield, Zap, Network, Speaker } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "CCTV Installation & ICT Support in Addis Ababa | BeastMode Technologies",
  description: "BeastMode Technologies provides enterprise-grade CCTV installation, professional ICT support, and networking solutions in Addis Ababa, Ethiopia. Secure your business today.",
}

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
