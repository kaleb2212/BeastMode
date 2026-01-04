export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-blue-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-slate-950/20"></div>
      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-balance leading-tight">
            Control Your Security <span className="opacity-75 tracking-tight font-light">From Your Pocket</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-pretty">
            Real-time monitoring, instant alerts, and remote access. Our mobile app puts your entire security ecosystem in your hands.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
          <button className="bg-white text-primary px-10 py-5 rounded-2xl hover:bg-slate-100 transition-all font-bold text-xl shadow-2xl shadow-primary/20">
            Schedule Free Consultation
          </button>
          <button className="border-2 border-white/40 text-white px-10 py-5 rounded-2xl hover:bg-white/10 transition-all font-bold text-xl backdrop-blur-sm">
            Call Live Support
          </button>
        </div>

        <div className="pt-12 border-t border-white/10 space-y-6">
          <div className="grid md:grid-cols-2 gap-10 text-left text-white/90">
            <div className="space-y-4 bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/5">
              <p className="font-bold text-2xl text-white mb-2">Our Standards</p>
              <ul className="space-y-3 font-medium">
                <li className="flex gap-2"><span>✓</span> 24/7 Professional SLA Monitoring</li>
                <li className="flex gap-2"><span>✓</span> Rapid Deployment Engineering</li>
                <li className="flex gap-2"><span>✓</span> Multi-layered System Redundancy</li>
                <li className="flex gap-2"><span>✓</span> Fully Encrypted Communications</li>
                <li className="flex gap-2"><span>✓</span> Lifetime Technical Support</li>
              </ul>
            </div>
            <div className="space-y-6 p-8">
              <p className="font-bold text-2xl text-white">Emergency Support</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xl">
                  <span className="text-3xl">📞</span>
                  <span>+1 (800) BEASTMODE</span>
                </div>
                <div className="flex items-center gap-4 text-xl">
                  <span className="text-3xl">✉️</span>
                  <span>support@beastmode.tech</span>
                </div>
              </div>
              <p className="text-sm opacity-60 font-mono italic mt-4">// OPERATING 24/7/365 HUB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
