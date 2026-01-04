import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield, Zap, Network, Speaker } from "lucide-react"
import Link from "next/link"

const services = [
  {
    slug: "cctv-camera-installation",
    title: "CCTV Camera Installation",
    icon: Shield,
    image: "/cctv-hero.jpg",
    color: "from-blue-600 to-blue-800",
  },
  {
    slug: "ict-support",
    title: "ICT Support",
    icon: Zap,
    image: "/ict-hero.jpg",
    color: "from-purple-600 to-purple-800",
  },
  {
    slug: "networking-services",
    title: "Networking Services",
    icon: Network,
    image: "/network-hero.jpg",
    color: "from-cyan-600 to-cyan-800",
  },
  {
    slug: "alarm-system-intercom",
    title: "Alarm System & Intercom",
    icon: Speaker,
    image: "/alarm-hero.jpg",
    color: "from-indigo-600 to-indigo-800",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <div className="pt-20">
        {/* Services Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with strong overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950 z-10" />
            <img
              src="/network-hero.jpg"
              alt="Services Background"
              className="w-full h-full object-cover opacity-60"
            />
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-20 px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Our <span className="text-primary italic">Expertise</span>
            </h1>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto text-pretty font-light leading-relaxed">
              We specialize in delivering mission-critical ICT and professional security infrastructure that powers modern organizations.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Link key={service.slug} href={`/services/${service.slug}`}>
                    <div className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 h-full cursor-pointer relative">
                      <div className="relative h-64 bg-slate-800 overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                        <Icon
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
                          size={120}
                        />
                      </div>
                      <div className="p-12">
                        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
                          Professional implementation and support for scale-ready {service.title.toLowerCase()} systems.
                        </p>
                        <div className="flex items-center gap-3 text-primary font-bold text-lg group-hover:translate-x-2 transition-transform">
                          View Solution <span>→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
