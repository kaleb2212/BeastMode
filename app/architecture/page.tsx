"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield, Zap, Network, Radio, Cpu, Database, Server, Smartphone, Monitor, Lock, Eye, Activity } from "lucide-react"

export default function ArchitecturePage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden selection:bg-primary/30">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] opacity-30 -mr-48 -mt-48"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm mb-4">
                        <Radio className="text-primary animate-pulse" size={18} />
                        <span className="text-sm font-bold tracking-wider uppercase">System Architecture</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight uppercase">
                        The <span className="text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Eco-system</span> <br />
                        <span className="italic font-light opacity-50">Visualized</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                        Discover how our Unified ICT and Security infrastructure creates a seamless, self-correcting environment for your enterprise operations.
                    </p>
                </div>
            </section>

            {/* Architecture Diagram Area */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="relative group">
                    {/* Abstract Connection Lines (CSS Generated) */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent blur-sm"></div>
                        <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent blur-sm"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative z-10">
                        {/* Tier 1: Security Edge */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-l-4 border-primary pl-6 py-2">
                                <Shield size={32} className="text-primary" />
                                <h3 className="text-2xl font-bold uppercase tracking-widest">Security Edge</h3>
                            </div>
                            <div className="space-y-4">
                                <ArchItem icon={Eye} title="AI Surveillance" desc="4K visual intelligence feeds" />
                                <ArchItem icon={Lock} title="Access Control" desc="Biometric edge authentication" />
                                <ArchItem icon={Radio} title="Intrusion Sockets" desc="Real-time perimeter sensors" />
                            </div>
                        </div>

                        {/* Tier 2: The Neural Core (Central) */}
                        <div className="relative">
                            <div className="absolute -inset-8 bg-primary/10 rounded-[4rem] blur-3xl group-hover:bg-primary/20 transition-all duration-1000"></div>
                            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-12 rounded-[3.5rem] flex flex-col items-center text-center space-y-8 shadow-2xl">
                                <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.5)] animate-bounce duration-[3s]">
                                    <Cpu size={48} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black mb-4">NEURAL CORE</h3>
                                    <p className="text-slate-400 text-sm font-mono leading-relaxed uppercase tracking-tighter">
                                        Centralized OS handling 10Gbps data throughput and real-time incident processing.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 w-full pt-4">
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex flex-col items-center">
                                        <Database size={20} className="text-blue-400 mb-2" />
                                        <span className="text-[10px] uppercase font-bold text-slate-500">Storage</span>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex flex-col items-center">
                                        <Zap size={20} className="text-yellow-400 mb-2" />
                                        <span className="text-[10px] uppercase font-bold text-slate-500">Compute</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tier 3: Output Hub */}
                        <div className="space-y-8 md:text-right">
                            <div className="flex items-center md:flex-row-reverse gap-4 border-r-4 border-blue-500 pr-6 py-2">
                                <Activity size={32} className="text-blue-500" />
                                <h3 className="text-2xl font-bold uppercase tracking-widest">Unified Output</h3>
                            </div>
                            <div className="space-y-4">
                                <ArchItem icon={Monitor} title="Command Center" desc="Video wall & incident ops" reverse />
                                <ArchItem icon={Smartphone} title="Mobile Portal" desc="Remote control anywhere" />
                                <ArchItem icon={Server} title="Cloud Relay" desc="Encrypted off-site archival" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-slate-900/50 border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold">The Three Pillars <br /><span className="text-primary italic font-light lowercase">of our architecture</span></h2>
                        <div className="space-y-8">
                            <Pillar number="01" title="Interoperability" desc="Every sensor speaks the same language as the server, ensuring zero communication lag." />
                            <Pillar number="02" title="Redundancy" desc="Triple-site backup protocols ensure that even a total local system failure won't compromise your data." />
                            <Pillar number="03" title="Encryption" desc="Military-grade AES-256 wrapping for every packet of data that moves through our ecosystem." />
                        </div>
                    </div>
                    <div className="relative rounded-[4rem] overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10"></div>
                        <img
                            src="/network-hero.jpg"
                            alt="Architecture Hub"
                            className="w-full aspect-square object-cover transform scale-110 group-hover:scale-100 transition-transform duration-[2s]"
                        />
                        <div className="absolute bottom-12 left-12 right-12 bg-slate-950/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 z-20">
                            <p className="text-sm font-mono text-primary mb-2">// SYSTEM STATUS</p>
                            <h4 className="text-2xl font-bold uppercase tracking-tighter">Fully Functional</h4>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

function ArchItem({ icon: Icon, title, desc, reverse = false }: any) {
    return (
        <div className={`flex gap-6 p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all group ${reverse ? "flex-row-reverse text-right" : ""}`}>
            <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center shrink-0 border border-slate-800 group-hover:bg-primary transition-colors">
                <Icon size={24} className="group-hover:text-white transition-colors" />
            </div>
            <div className="space-y-1">
                <h4 className="font-bold uppercase tracking-wider text-sm">{title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed uppercase">{desc}</p>
            </div>
        </div>
    )
}

function Pillar({ number, title, desc }: any) {
    return (
        <div className="flex gap-8 group">
            <span className="text-6xl font-black text-slate-800 group-hover:text-primary/20 transition-colors leading-none">{number}</span>
            <div className="space-y-2">
                <h4 className="text-xl font-bold uppercase tracking-widest">{title}</h4>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{desc}</p>
            </div>
        </div>
    )
}
