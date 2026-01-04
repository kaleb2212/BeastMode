"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import {
    Shield, Network, Building2, Store, Factory, Home, CheckCircle2,
    ChevronRight, ChevronLeft, Zap, Monitor, Lock, Cpu, Cloud,
    Smartphone, BarChart, Rocket, FastForward, Clock, Target,
    DollarSign, PieChart, Briefcase, TrendingUp
} from "lucide-react"
import Link from "next/link"

const STEPS = [
    {
        id: "environment",
        title: "1. The Setting",
        subtitle: "What is the primary environment for your solution?",
        options: [
            { id: "residential", label: "Residential", icon: Home, desc: "Private estates and luxury apartments." },
            { id: "commercial", label: "Commercial", icon: Building2, desc: "Office hubs and corporate centers." },
            { id: "retail", label: "Retail & Hospitality", icon: Store, desc: "Shops, restaurants, and hotels." },
            { id: "industrial", label: "Industrial", icon: Factory, desc: "Warehouses and logistics plants." },
        ]
    },
    {
        id: "focus",
        title: "2. The Core Focus",
        subtitle: "Which technical domain requires immediate attention?",
        options: [
            { id: "security", label: "Security & Surveillance", icon: Shield, desc: "Tactical protection and AI vision." },
            { id: "ict", label: "ICT & Networking", icon: Network, desc: "Infrastructure and managed support." },
            { id: "access", label: "Access Control", icon: Lock, desc: "Biometrics and restricted zones." },
            { id: "unified", label: "Unified Eco-system", icon: Cpu, desc: "Seamless integration of all systems." },
        ]
    },
    {
        id: "priorities",
        title: "3. Technical Priorities",
        subtitle: "Select the feature that is most critical to your ops.",
        options: [
            { id: "ai", label: "AI Analytics", icon: Activity, desc: "Real-time threat and pattern detection." },
            { id: "cloud", label: "Cloud Redundancy", icon: Cloud, desc: "Off-site archival and remote sync." },
            { id: "mobile", label: "Mobile Access", icon: Smartphone, desc: "Control and monitor from any device." },
            { id: "perf", label: "Raw Performance", icon: BarChart, desc: "High bandwidth and zero latency." },
        ]
    },
    {
        id: "timeline",
        title: "4. Deployment Window",
        subtitle: "When do you need the system to be operational?",
        options: [
            { id: "immediate", label: "Immediate Ops", icon: Rocket, desc: "Critical deployment within 30 days." },
            { id: "strategic", label: "Strategic Phase", icon: Target, desc: "Planned rollout in 3-6 months." },
            { id: "consultative", label: "Discovery Phase", icon: FastForward, desc: "Future planning and architecture." },
            { id: "upgradable", label: "Ongoing Upgrades", icon: Clock, desc: "Step-by-step modernization of legacy systems." },
        ]
    },
    {
        id: "budget",
        title: "5. Budget Framework",
        subtitle: "Where does your investment focus lie?",
        options: [
            { id: "optimized", label: "Efficiency First", icon: DollarSign, desc: "Cost-effective, scale-ready solutions." },
            { id: "enterprise", label: "Enterprise Tier", icon: Briefcase, desc: "Professional grade gear for 24/7 ops." },
            { id: "critical", label: "Critical Protection", icon: Shield, desc: "High-spec, no-compromise redundancy." },
            { id: "modular", label: "Modular / Growth", icon: TrendingUp, desc: "Base install with future expansion routes." },
        ]
    }
]

import { Activity } from "lucide-react"

export default function GetStartedPage() {
    const [currentStep, setCurrentStep] = useState(0)
    const [selections, setSelections] = useState<Record<number, string>>({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSelect = (optionId: string) => {
        setSelections({ ...selections, [currentStep]: optionId })
        if (currentStep < STEPS.length) {
            setTimeout(() => setCurrentStep(currentStep + 1), 400)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
    }

    // Calculate progress: each selection step + the final contact step
    const totalSteps = STEPS.length + 1
    const progress = isSubmitted ? 100 : Math.min(((currentStep) / totalSteps) * 100 + 5, 95)

    return (
        <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-primary/30 overflow-x-hidden">
            <Header />

            <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] opacity-40 animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] opacity-20"></div>
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    {!isSubmitted ? (
                        <div className="space-y-16">
                            {/* Progress Header */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <div className="space-y-1">
                                        <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Solution Wizard</p>
                                        <h2 className="text-sm font-bold text-white uppercase tracking-widest">
                                            {currentStep < STEPS.length ? `Stage: ${STEPS[currentStep].id.replace('-', ' ')}` : 'Optimization Complete'}
                                        </h2>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-3xl font-black text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">{Math.round(progress)}%</span>
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden p-[2px] border border-slate-800/50">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-600 to-primary rounded-full transition-all duration-700 ease-in-out shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            </div>

                            {currentStep < STEPS.length ? (
                                <div key={currentStep} className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                                    <div className="text-center space-y-4">
                                        <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic">
                                            {STEPS[currentStep].title}
                                        </h1>
                                        <p className="text-xl text-slate-400 font-medium">{STEPS[currentStep].subtitle}</p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {STEPS[currentStep].options.map((option) => {
                                            const Icon = option.icon
                                            const isSelected = selections[currentStep] === option.id
                                            return (
                                                <button
                                                    key={option.id}
                                                    onClick={() => handleSelect(option.id)}
                                                    className={`group p-8 rounded-[3rem] border-2 text-center transition-all duration-500 relative flex flex-col items-center ${isSelected
                                                            ? "bg-primary/10 border-primary shadow-[0_0_40px_rgba(59,130,246,0.2)]"
                                                            : "bg-slate-900 border-slate-800/50 hover:border-slate-600 hover:bg-slate-850"
                                                        }`}
                                                >
                                                    <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 ${isSelected ? "bg-primary text-white scale-110 rotate-3" : "bg-slate-950 text-slate-500 group-hover:text-primary group-hover:scale-105"
                                                        }`}>
                                                        <Icon size={32} />
                                                    </div>
                                                    <h3 className="text-xl font-black mb-3 uppercase tracking-tighter transition-colors group-hover:text-white">{option.label}</h3>
                                                    <p className="text-[11px] text-slate-500 leading-relaxed uppercase tracking-widest group-hover:text-slate-400 transition-colors">{option.desc}</p>

                                                    {/* Selection indicator */}
                                                    {isSelected && (
                                                        <div className="absolute top-4 right-4 animate-in zoom-in duration-300">
                                                            <CheckCircle2 size={24} className="text-primary" />
                                                        </div>
                                                    )}
                                                </button>
                                            )
                                        })}
                                    </div>

                                    <div className="flex justify-between items-center pt-8">
                                        <button
                                            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                                            disabled={currentStep === 0}
                                            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors disabled:opacity-0 font-black uppercase tracking-[0.2em] text-xs"
                                        >
                                            <ChevronLeft size={16} />
                                            Prev Stage
                                        </button>
                                        <div className="flex gap-3">
                                            {[...Array(totalSteps)].map((_, i) => (
                                                <div key={i} className={`h-1 transition-all duration-500 ${i === currentStep ? "w-8 bg-primary shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "w-4 bg-slate-800"}`}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-700">
                                    <div className="text-center space-y-4">
                                        <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic">Tactical Briefing</h1>
                                        <p className="text-xl text-slate-400 font-medium">Where should we transmit your customized ICT & Security footprint?</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-slate-900/40 border border-slate-800/50 p-12 rounded-[4rem] backdrop-blur-2xl space-y-8 shadow-2xl">
                                        <div className="grid sm:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Authorized Individual</label>
                                                <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-8 py-5 outline-none focus:border-primary transition-all font-bold" placeholder="Full Name" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Organization</label>
                                                <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-8 py-5 outline-none focus:border-primary transition-all font-bold" placeholder="Company Name" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Strategic Transmission</label>
                                            <input required type="email" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-8 py-5 outline-none focus:border-primary transition-all font-bold" placeholder="Work Email" />
                                        </div>
                                        <div className="pt-4">
                                            <button type="submit" className="group w-full bg-primary text-white py-6 rounded-3xl font-black text-2xl uppercase tracking-tighter hover:bg-primary/90 transition-all flex items-center justify-center gap-4 shadow-2xl shadow-primary/30 active:scale-95">
                                                Deploy Roadmap
                                                <Zap size={28} className="group-hover:animate-pulse" />
                                            </button>
                                        </div>
                                        <p className="text-[10px] text-center text-slate-600 uppercase font-bold tracking-widest">
                                            By clicking deploy, you authorize a technical audit session.
                                        </p>
                                    </form>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-center space-y-12 py-20 animate-in fade-in zoom-in-95 duration-1000">
                            <div className="relative inline-block">
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-ping opacity-20"></div>
                                <div className="relative w-32 h-32 bg-primary/10 rounded-[3rem] border-2 border-primary flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                                    <CheckCircle2 size={64} className="text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">
                                    Ecosystem <br /> <span className="text-primary not-italic">Architected</span>
                                </h1>
                                <p className="text-2xl text-slate-400 max-w-2xl mx-auto font-light">
                                    Requirements locked. Our tactical engineering team has been notified. Your customized solution roadmap is waiting for you in your inbox.
                                </p>
                            </div>

                            <div className="h-1 w-24 bg-primary/30 mx-auto rounded-full"></div>

                            <div className="pt-10 flex flex-col sm:flex-row gap-6 justify-center">
                                <Link href="/" className="group bg-slate-950 border-2 border-slate-800 px-12 py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:border-primary transition-all flex items-center gap-2">
                                    <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                    Home
                                </Link>
                                <Link href="/architecture" className="group bg-primary text-white px-12 py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl shadow-primary/20 flex items-center gap-2">
                                    Visualizer
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Final progress 100% */}
                            <div className="pt-16 max-w-md mx-auto opacity-30">
                                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.5em] mb-4">
                                    <span>Solution Ready</span>
                                    <span>100% Processed</span>
                                </div>
                                <div className="h-1 w-full bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}
