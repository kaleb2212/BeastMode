"use client"

import { useState } from "react"
import ServiceModal from "./service-modal"

const servicesData = [
  {
    title: "CCTV Camera Installation",
    image: "/security-camera-installation-cctv.jpg",
    shortDesc: "HD surveillance with 24/7 monitoring",
    fullDescription:
      "Our comprehensive CCTV camera installation services provide state-of-the-art surveillance solutions designed to protect your premises around the clock. We integrate the latest in video surveillance technology with intelligent monitoring systems.",
    features: [
      "4K and 8MP ultra-high-definition cameras",
      "Advanced night vision and infrared technology",
      "AI-powered motion detection and intelligent alerts",
      "Cloud and on-premise storage options",
      "24/7 remote monitoring capabilities",
      "Weather-resistant and vandal-proof installations",
      "Multi-camera management from single dashboard",
      "Video analytics for behavior detection",
    ],
    benefits: [
      "Deter criminal activity with visible surveillance presence",
      "Reduce insurance premiums with documented monitoring",
      "Investigate incidents with comprehensive video footage",
      "Monitor multiple locations simultaneously",
      "Lower operational costs through automated monitoring",
      "Improve employee and customer safety",
    ],
    technologies: ["Hikvision", "ZKTeco", "Cisco", "WesternDigital", "Seagate"],
  },
  {
    title: "Smart Camera & Monitoring",
    image: "/smart-camera-system-monitoring.jpg",
    shortDesc: "Intelligent 360° surveillance system",
    fullDescription:
      "Experience next-generation smart camera technology with 360-degree coverage and AI-powered analytics. Our systems provide real-time alerts and intelligent monitoring.",
    features: [
      "360-degree panoramic coverage",
      "AI-powered object detection",
      "Real-time mobile notifications",
      "Cloud backup and storage",
      "Facial recognition capabilities",
      "Low-light and night vision",
      "Zoom and pan capabilities",
      "Integration with alarm systems",
    ],
    benefits: [
      "Comprehensive area coverage with fewer cameras",
      "Instant alerts for suspicious activity",
      "Identify specific individuals",
      "Access footage anytime, anywhere",
      "Reduce false alarms significantly",
      "Enhanced workplace security",
    ],
    technologies: ["Hikvision", "ZKTeco"],
  },
  {
    title: "Alarm System & Intercom",
    image: "/alarm-security-system-intercom.jpg",
    shortDesc: "Advanced alarm with smart intercom",
    fullDescription:
      "Protect your facility with our integrated alarm and intercom systems. These intelligent solutions provide real-time alerts, two-way communication, and centralized control.",
    features: [
      "Smart motion and intrusion detection",
      "24/7 alarm monitoring and rapid response",
      "Two-way intercom system integration",
      "Door access control and management",
      "Emergency panic buttons and alerts",
      "Mobile app notifications and control",
      "Integration with surveillance systems",
      "Fire and environmental sensors",
    ],
    benefits: [
      "Immediate notification of security breaches",
      "Enhanced communication between areas",
      "Controlled access to restricted areas",
      "Emergency response coordination",
      "Reduced response time to incidents",
      "Improved staff and visitor safety",
    ],
    technologies: ["ZKTeco", "Nemtek", "Aluha"],
  },
]

export default function ServiceCards() {
  const [selectedService, setSelectedService] = useState<(typeof servicesData)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLearnMore = (service: (typeof servicesData)[0]) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Popular Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
              Choose from our selection of high-performance security and communication solutions
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Image */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.shortDesc}</p>
                  <button
                    onClick={() => handleLearnMore(service)}
                    className="group/btn inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors"
                  >
                    Learn More
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={
          selectedService
            ? {
              title: selectedService.title,
              fullDescription: selectedService.fullDescription,
              features: selectedService.features,
              benefits: selectedService.benefits,
              technologies: selectedService.technologies,
            }
            : null
        }
      />
    </>
  )
}
