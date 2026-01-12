import Link from "next/link"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
                Advanced <span className="text-primary italic">ICT & Security</span> Solutions in Addis Ababa
              </h1>
              <p className="text-xl text-slate-300 max-w-lg text-pretty">
                Complete protection and connectivity for your business in Ethiopia. From CCTV surveillance to networking, we provide enterprise-grade tech in Addis Ababa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/consultation">
                <button className="bg-white text-slate-950 px-8 py-3 rounded-lg hover:bg-slate-100 transition font-bold text-lg shadow-lg shadow-white/5 w-full sm:w-auto">
                  Schedule Consultation
                </button>
              </Link>
              <Link href="/services">
                <button className="border-2 border-slate-700 text-white px-8 py-3 rounded-lg hover:bg-white/5 transition font-semibold text-lg w-full sm:w-auto">
                  View Services
                </button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-sm text-slate-400">Satisfied Clients</p>
              </div>
              <div className="w-px h-12 bg-slate-800"></div>
              <div>
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-sm text-slate-400">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-slate-800"></div>
              <div>
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-sm text-slate-400">Support Available</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="/hikvision-hero-camera.png"
              alt="Hikvision Security Solutions"
              className="relative w-full rounded-2xl shadow-2xl border border-slate-800"
            />
            <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-primary/20">
              ✓ Certified & Trusted
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
