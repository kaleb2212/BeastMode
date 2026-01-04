"use client"

const brands = [
  { name: "ZKTeco", logo: "ZK" },
  { name: "Cisco", logo: "CI" },
  { name: "Nemtek", logo: "NM" },
  { name: "Aluha", logo: "AL" },
  { name: "Hikvision", logo: "HK" },
  { name: "Western Digital", logo: "WD" },
  { name: "Seagate", logo: "SG" },
]

export default function Brands() {
  return (
    <section id="brands" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest">Authorized Partners</h2>
          <p className="text-lg text-slate-400">Deployed with components from the world's most trusted brands</p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex items-center justify-center hover:bg-slate-750 transition-all group aspect-square"
            >
              <div className="flex flex-col items-center gap-3 group-hover:scale-110 transition duration-300 w-full">
                <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center font-bold text-blue-500 text-lg border border-blue-500/20 shadow-inner shadow-blue-500/5">
                  {brand.logo}
                </div>
                <span className="text-xs font-bold text-center text-slate-300">{brand.name}</span>
              </div>
            </div>
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
