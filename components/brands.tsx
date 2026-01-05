"use client"

const brands = [
  { name: "ZKTeco", logo: "/ZkTeco logo.png" },
  { name: "Cisco", logo: "/cisco logo.png" },
  { name: "Nemtek", logo: "/Nemtek logo.png" },
  { name: "Hikvision", logo: "/Hikvision logo.png" },
  { name: "Western Digital", logo: "/WD logo.png" },
]

import Link from "next/link"

export default function Brands() {
  return (
    <section id="brands" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <Link href="/brands" className="inline-block group">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest group-hover:text-primary transition-colors">Authorized Partners</h2>
            <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mx-auto mt-2"></div>
          </Link>
          <p className="text-lg text-slate-400">Deployed with components from the world's most trusted brands</p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <Link href="/brands" key={index}>
              <div
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex items-center justify-center hover:bg-slate-750 transition-all group aspect-square"
              >
                <div className="flex flex-col items-center gap-6 group-hover:scale-105 transition duration-500 w-full h-full">
                  <div className="flex-1 flex items-center justify-center w-full min-h-0">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain brightness-0 invert opacity-50 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-500"
                    />
                  </div>
                  <span className="text-xs font-bold text-center text-slate-500 group-hover:text-slate-300 uppercase tracking-widest">{brand.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-400 italic">
            "We believe in quality without compromise, using only enterprise-grade hardware."
          </p>
        </div>
      </div>
    </section>
  )
}
