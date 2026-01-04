export default function Testimonials() {
  const testimonials = [
    {
      name: "John Kariuki",
      role: "Business Owner",
      text: "After my warehouse was victim of armed robbery, I decided not to rely on security guards alone. I installed BeastMode's warehouse alarm system and I feel much more secure!",
      rating: 5,
    },
    {
      name: "Sarah Okonkwo",
      role: "Retail Manager",
      text: "So far so good. I installed it on my shop and it works exactly as expected. I am also happy about the backup power since there are several power outages in our area.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Facility Manager",
      text: "Friendly and professional staff. They surveyed my office, sent their price quotation the same day, and installed the entire security system the following day.",
      rating: 5,
    },
    {
      name: "Alice Mujtaba",
      role: "Operations Director",
      text: "My home was broken into while we were asleep. Since installing BeastMode, I can sleep peacefully knowing my family and home are protected.",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Success Stories</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Trusted by businesses and homeowners across the region
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-10 space-y-6 hover:border-slate-700 transition-colors">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-200 italic leading-relaxed text-xl">"{testimonial.text}"</p>

              {/* Author */}
              <div className="pt-6 border-t border-slate-800">
                <p className="font-bold text-white text-lg">{testimonial.name}</p>
                <p className="text-primary font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
