"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import {
    Search, LifeBuoy, FileText, MessageSquare,
    ShieldAlert, ChevronDown, ChevronUp, Send,
    Zap, Globe, Target, Clock, Activity,
    ShieldCheck, Cpu, HardDrive, Network, Phone
} from "lucide-react"
import { useState } from "react"

export default function SupportPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    return (
        <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-primary/30">
            <Header />

            {/* Hero Section */}
            <section className="pt-48 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[180px] opacity-20 -mr-64 -mt-64 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center space-y-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm mb-4">
                        <LifeBuoy className="text-primary" size={18} />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase">BeastMode Nexus Support</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
                        Operational <br /><span className="text-primary italic font-light lowercase">Support</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                        Strategic technical assistance and infrastructure management for your mission-critical deployments.
                    </p>

                    <div className="max-w-2xl mx-auto relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-600/30 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative flex items-center bg-slate-900 border border-slate-800 rounded-2xl p-2 pr-4 shadow-2xl backdrop-blur-xl">
                            <Search className="ml-4 text-slate-500" size={24} />
                            <input
                                type="text"
                                placeholder="Search the tactical knowledge base..."
                                className="w-full bg-transparent border-none outline-none px-6 py-5 text-lg font-medium placeholder:text-slate-600"
                            />
                            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-950/50 rounded-xl border border-slate-800 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                Search
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Channels Grid */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <SupportHubCard
                        icon={FileText}
                        title="Intel Library"
                        desc="Technical manuals, spec sheets, and deployment protocols."
                        link="#"
                        action="Browse Docs"
                    />
                    <SupportHubCard
                        icon={MessageSquare}
                        title="Tactical Comms"
                        desc="Open a priority channel for engineering and security support."
                        link="/contact"
                        action="Start Inquiry"
                    />
                    <SupportHubCard
                        icon={Send}
                        title="Live Status"
                        desc="Real-time ecosystem updates via our secure Telegram node."
                        link="https://t.me/beastmodetech"
                        action="Connect Now"
                    />
                    <SupportHubCard
                        icon={ShieldCheck}
                        title="Mission Assurance"
                        desc="Details on your active warranties and integrity guarantees."
                        link="#"
                        action="View Terms"
                    />
                </div>
            </section>

            {/* System Integrity Dashboard Interstitial */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="p-12 md:p-20 rounded-[3.5rem] bg-slate-950 border border-slate-900 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] opacity-30 -mr-64 -mt-64"></div>

                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1">
                                        {[1, 2, 3].map(i => <div key={i} className="w-1 h-3 rounded-full bg-primary/40"></div>)}
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Live Operations Feed</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Global System <br /> <span className="text-slate-700">Integrity</span></h2>
                                <p className="text-slate-500 text-lg leading-relaxed font-normal">
                                    Our monitoring matrix tracks every node in the BeastMode deployment grid. Operational readiness is currently at peak levels.
                                </p>
                                <div className="grid grid-cols-2 gap-10">
                                    <Metric label="Grid Latency" value="14ms" trend="Optimal" />
                                    <Metric label="Uptime Grade" value="99.99%" trend="Stable" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 relative">
                                <MonitorCard icon={Cpu} label="Core Processing" status="Operational" load={42} />
                                <MonitorCard icon={Network} label="Network Fabric" status="Locked" load={98} />
                                <MonitorCard icon={HardDrive} label="Cloud Matrix" status="Nominal" load={12} />
                                <MonitorCard icon={Target} label="Support Nodes" status="Synced" load={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Protocols (FAQ) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
                <div className="max-w-4xl mx-auto space-y-20">
                    <div className="text-center space-y-6">
                        <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Mission Protocols</h2>
                        <p className="text-slate-500 font-medium text-lg italic uppercase tracking-widest text-sm">Frequently Asked Intelligence</p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-[2rem] border transition-all duration-500 ${openFaq === index ? 'bg-slate-900 border-primary/40' : 'bg-slate-950 border-slate-900 hover:border-slate-800'}`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-10 py-8 flex items-center justify-between text-left group"
                                >
                                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">{faq.q}</span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === index ? 'bg-primary text-white rotate-180' : 'bg-slate-900 text-slate-500'}`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </button>
                                {openFaq === index && (
                                    <div className="px-10 pb-10 text-slate-400 leading-relaxed text-lg font-medium animate-in slide-in-from-top-4 duration-500">
                                        <div className="pl-6 border-l-2 border-primary/30">
                                            {faq.a}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Emergency CTA */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="p-10 md:p-16 rounded-[4rem] bg-primary text-white text-center space-y-8 shadow-2xl shadow-primary/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                    <ShieldAlert size={120} className="mx-auto opacity-20 absolute -top-10 -left-10" />
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter relative z-10">Critical System Failure?</h3>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium relative z-10">
                        Our emergency response team is standing by for tier-1 operational emergencies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                        <a
                            href="tel:+251963375252"
                            className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-3 shadow-xl"
                        >
                            <Phone size={24} />
                            +251 963 375252
                        </a>
                        <a
                            href="/contact"
                            className="bg-primary-foreground/10 border-2 border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-md"
                        >
                            <MessageSquare size={24} />
                            Open Support Ticket
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

function SupportHubCard({ icon: Icon, title, desc, link, action }: any) {
    return (
        <div className="p-10 rounded-[3rem] bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all duration-500 group flex flex-col items-start gap-6">
            <div className="w-16 h-16 rounded-[1.25rem] bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:bg-primary transition-all group-hover:scale-110 shadow-lg">
                <Icon size={32} className="text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <div className="space-y-3">
                <h4 className="text-2xl font-black uppercase tracking-tighter text-white">{title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
            </div>
            <a
                href={link}
                className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-primary hover:underline underline-offset-8"
            >
                {action} &rarr;
            </a>
        </div>
    )
}

function Metric({ label, value, trend }: any) {
    return (
        <div className="space-y-2">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{label}</div>
            <div className="flex items-end gap-3">
                <div className="text-3xl font-black text-white tabular-nums">{value}</div>
                <div className="text-[10px] font-black uppercase text-primary italic pb-1">{trend}</div>
            </div>
        </div>
    )
}

function MonitorCard({ icon: Icon, label, status, load }: any) {
    return (
        <div className="p-6 rounded-[2rem] bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all group">
            <div className="flex items-center justify-between mb-4">
                <Icon size={20} className="text-primary" />
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{label}</div>
            <div className="text-sm font-bold text-white mb-4 uppercase tracking-tight">{status}</div>
            <div className="space-y-2">
                <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-slate-600">
                    <span>Inbound Traffic</span>
                    <span>{load}%</span>
                </div>
                <div className="h-1 bg-slate-950 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary/40 group-hover:bg-primary transition-all duration-700"
                        style={{ width: `${load}%` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

const faqs = [
    {
        q: "How do I request an on-site equipment audit?",
        a: "Audits can be scheduled through our Tactical Comms unit. Our engineers will perform a physical survey of your infrastructure including CCTV placement, network cable integrity, and security hub operations."
    },
    {
        q: "What is the response protocol for hardware failures?",
        a: "Critical failures are handled via our tier-1 extracted response units. Standard response time is between 24 and 48 hours for general deployment issues, with expedited 4-hour windows for enterprise contracts."
    },
    {
        q: "How do I sync my mobile device with the security matrix?",
        a: "Ensure your mobile terminal has the BeastMode Secure Link app installed. Use your provided mission-key to authenticate against your local bridge node for real-time CCTV and alarm integration."
    },
    {
        q: "Are software updates for my CCTV system automated?",
        a: "Yes, our cloud matrix pushes secure firmware over-the-air to all compatible BeastMode hardware. We recommend a full manual system reset every quarter to ensure cache integrity."
    },
    {
        q: "What does the 365-day mission warranty cover?",
        a: "Our warranty covers all hardware manufacturing defects and deployment integration failures. It does not cover external environmental damage or unauthorized tactical modifications to the equipment."
    }
]
