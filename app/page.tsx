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
  title: "Advanced ICT & Security Solutions | BeastMode Technologies",
  description: "Transform your business with BeastMode Technologies. We provide enterprise-grade CCTV installation, networking solutions, and professional ICT support in Ethiopia.",
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
