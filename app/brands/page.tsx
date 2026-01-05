"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield, Network, Database, Cpu, Lock, Zap, Eye, Server, Activity, CheckCircle2 } from "lucide-react"

const BRANDS_DETAIL = [
    {
        id: "zkteco",
        name: "ZKTeco",
        logo: "/ZkTeco logo.png",
        description: "A global leader in biometric verification technologies and security software.",
        products: ["Biometric Access Control", "Time & Attendance Systems", "Smart Entrance Control", "Security Inspection"],
        association: "ZKTeco serves as the backbone of our physical security and access management solutions, providing military-grade biometric data for enterprise-level safety.",
        icon: Lock,
        accent: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        id: "cisco",
        name: "Cisco",
        logo: "/cisco logo.png",
        description: "The worldwide leader in networking for the internet and enterprise communication.",
        products: ["Enterprise Switches & Routers", "Cybersecurity Firewalls", "Wireless Networking", "Unified Communications"],
        association: "Cisco hardware powers our ICT infrastructure, ensuring zero-latency connectivity and robust networking for every BeastMode ecosystem.",
        icon: Network,
        accent: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        id: "hikvision",
        name: "Hikvision",
        logo: "/Hikvision logo.png",
        description: "The world's leading provider of innovative security products and solutions.",
        products: ["4K IP Cameras", "Network Video Recorders (NVR)", "Thermal Imaging", "AI Video Analytics"],
        association: "Hikvision provides the 'eyes' of our ecosystem. We integrate their AI-driven surveillance to provide real-time visual intelligence and threat detection.",
        icon: Eye,
        accent: "text-red-500",
        bg: "bg-red-500/10"
    },
    {
        id: "wd",
        name: "Western Digital",
        logo: "/WD logo.png",
        description: "A pioneer in the data storage industry, enabling the storage of the world's data.",
        products: ["Purple Surveillance Drives", "Enterprise Data Center Storage", "High-Performance SSDs", "NAS Solutions"],
        association: "Data integrity is paramount. We use Western Digital's specialized surveillance-grade storage to ensure your video and network data is never lost.",
        icon: Database,
        accent: "text-primary",
        bg: "bg-primary/10"
    },
    {
        id: "nemtek",
        name: "Nemtek",
        logo: "/Nemtek logo.png",
        description: "An innovative leader in the electric fencing and perimeter security industry.",
        products: ["Intelligent Energizers", "Perimeter Monitoring Software", "Electric Fence Hardware", "Agricultural Fencing"],
        association: "Nemtek defines the perimeter of our security solutions. Their intelligent energizers integrate directly into our central monitoring for instant intrusion alerts.",
        icon: Zap,
        accent: "text-green-500",
        bg: "bg-green-500/10"
    }
]

export default function BrandsPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-primary/30">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                    <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-30"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 backdrop-blur-sm mb-4">
                        <Shield className="text-primary" size={18} />
                        <span className="text-xs font-bold tracking-widest uppercase">Authorized Partners</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                        Engineering <br /><span className="text-primary italic font-light lowercase">perfection</span> with the best
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                        We don't settle for mediocre hardware. BeastMode Technologies partners with industry titans to deliver robust, enterprise-grade ecosystems.
                    </p>
                </div>
            </section>

            {/* Partners List */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
                {BRANDS_DETAIL.map((brand, index) => {
                    const Icon = brand.icon
                    return (
                        <div key={brand.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Brand Profile */}
                            <div className="flex-1 space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className={`w-16 h-16 rounded-2xl ${brand.bg} flex items-center justify-center border border-slate-800`}>
                                        <Icon className={brand.accent} size={32} />
                                    </div>
                                    <h2 className="text-5xl font-black uppercase tracking-widest">{brand.name}</h2>
                                </div>
                                <p className="text-2xl text-slate-300 font-light leading-relaxed italic">
                                    "{brand.description}"
                                </p>

                                <div className="grid sm:grid-cols-2 gap-8 pt-4">
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Core Products</h4>
                                        <ul className="space-y-3">
                                            {brand.products.map(p => (
                                                <li key={p} className="flex items-start gap-2 text-slate-300">
                                                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                                                    <span className="font-medium">{p}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Our Association</h4>
                                        <p className="text-sm text-slate-400 leading-relaxed font-mono uppercase tracking-tighter">
                                            {brand.association}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Logo Card */}
                            <div className="flex-1 w-full max-w-lg">
                                <div className="group relative aspect-square rounded-[4rem] bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center p-20 hover:border-primary/50 transition-all duration-500 shadow-2xl">
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                                    <img
                                        src={brand.logo}
                                        alt={`${brand.name} logo`}
                                        className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-8 right-8 text-[10px] font-mono text-slate-700 tracking-[0.5em] uppercase">Status: Official Partner</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>

            {/* Trust Banner */}
            <section className="py-24 bg-primary px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Need a solution with these partners?</h2>
                    <p className="text-xl text-white/80 font-medium">Our engineers are certified by these brands to install and maintain their advanced systems.</p>
                    <div className="pt-6">
                        <button className="bg-slate-950 text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                            Initiate Project Audit
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
