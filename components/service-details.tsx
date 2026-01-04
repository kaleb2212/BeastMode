"use client"

const serviceDetails = [
  {
    title: "Business Security System",
    description:
      "Protect your cash vault, inventory, and valuables from burglary during off-work hours using the latest commercial intruder alarm system and 360° smart cameras.",
    icon: "🏢",
    link: "#",
  },
  {
    title: "ICT Support & Networking",
    description:
      "Enterprise-grade networking solutions with secure connectivity, optimal performance, and comprehensive IT support for your business operations.",
    icon: "🖥️",
    link: "#",
  },
  {
    title: "24/7 Alarm Monitoring Service",
    description:
      "Your alarm is never ignored. Our professional monitoring team is on guard around the clock to ensure your alarm is always responded to with complete peace of mind.",
    icon: "⏰",
    link: "#",
  },
]

export default function ServiceDetails() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {serviceDetails.map((service, index) => (
            <div key={index} className="space-y-4">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              <a href={service.link} className="inline-block mt-4">
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition font-semibold text-sm">
                  Learn More
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
