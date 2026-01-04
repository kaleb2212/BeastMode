"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: {
    title: string
    fullDescription: string
    features: string[]
    benefits: string[]
    technologies: string[]
  } | null
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen || !service) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary to-primary/80 text-white p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold">{service.title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Main Description */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Overview</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">{service.fullDescription}</p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Business Benefits</h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Technologies We Use</h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, idx) => (
                <span key={idx} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition font-semibold text-lg">
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  )
}
