"use client"
import { Shield, Network, Zap, Speaker } from "lucide-react"
import Link from "next/link"

const servicesData = [
  {
    slug: "cctv-camera-installation",
    icon: Shield,
    title: "CCTV Camera Installation",
    description:
      "High-definition surveillance systems with 24/7 monitoring, night vision, and cloud storage capabilities.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    slug: "ict-support",
    icon: Zap,
    title: "ICT Support",
    description: "Comprehensive IT support including system maintenance, troubleshooting, and remote assistance.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    slug: "networking-services",
    icon: Network,
    title: "Networking Services",
    description: "Enterprise-grade networking solutions with secure connectivity and optimal performance.",
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    slug: "alarm-system-intercom",
    icon: Speaker,
    title: "Alarm System & Intercom",
    description: "Advanced alarm systems with smart intercom integration for complete facility communication.",
    color: "bg-indigo-500/10 text-indigo-600",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Solutions</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto text-pretty">
            Integrated ICT and Security platforms engineered for excellence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon
            return (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-10 hover:shadow-2xl hover:border-primary/30 transition-all group cursor-pointer h-full">
                  <div
                    className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <Icon size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">{service.description}</p>
                  <div className="flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform">
                    Explore Details <span>→</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* All-in-One Solution */}
        <div className="mt-20 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-12 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
          <h3 className="text-3xl font-bold text-white mb-4">Unified ICT & Security Eco-system</h3>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto text-pretty mb-8">
            Our systems don't just exist; they collaborate. Experience a seamless integration of protection and connectivity.
          </p>
          <Link href="/architecture">
            <button className="bg-primary text-white px-10 py-4 rounded-xl hover:bg-primary/90 transition-all font-bold text-lg shadow-xl shadow-primary/20">
              View Full Architecture
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
