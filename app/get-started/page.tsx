"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState, useEffect } from "react"
import {
    Shield, Network, Building2, Store, Factory, Home, CheckCircle2,
    ChevronRight, ChevronLeft, Zap, Monitor, Lock, Cpu, Cloud,
    Smartphone, BarChart, Rocket, FastForward, Clock, Target,
    DollarSign, PieChart, Briefcase, TrendingUp, Layout, Eye,
    HardDrive, Settings2, Download, FileText, Activity, Layers, Map,
    Wifi, Database, PenTool, Radio
} from "lucide-react"
import Link from "next/link"
import { jsPDF } from "jspdf"

const STEPS = [
    {
        id: "environment",
        title: "1. The Setting",
        subtitle: "Where will the security matrix be deployed?",
        type: "select",
        options: [
            { id: "residential", label: "Residential", icon: Home, desc: "Private estates and luxury apartments." },
            { id: "commercial", label: "Commercial", icon: Building2, desc: "Office hubs and corporate centers." },
            { id: "retail", label: "Retail & Hospitality", icon: Store, desc: "Shops, restaurants, and hotels." },
            { id: "industrial", label: "Industrial", icon: Factory, desc: "Warehouses and logistics plants." },
        ]
    },
    {
        id: "design",
        title: "2. Asset Architecture",
        subtitle: "Select the design that best matches your property.",
        type: "select", // Changed to select for now to use existing grid, but will show different options based on step 1
        options: [
            { id: "modern", label: "Modern Estate", icon: Layout, desc: "Open layouts with multiple entry points." },
            { id: "highrise", label: "Vertical Hub", icon: Building2, desc: "Multi-floor complexes with central lobby." },
            { id: "factory", label: "Industrial Plant", icon: Factory, desc: "Large open areas and high-ceiling perimeters." },
            { id: "retail-box", label: "Open Floor Retail", icon: Store, desc: "High-density asset tracking required." },
        ]
    },
    {
        id: "camera-count",
        title: "3. Optical Density",
        subtitle: "How many camera nodes are required for full coverage?",
        type: "number",
        min: 1,
        max: 128,
        unit: "Cameras"
    },
    {
        id: "camera-types",
        title: "4. Tactical Optics",
        subtitle: "Select the specialized hardware types for your mission.",
        type: "multi-select",
        options: [
            { id: "bullet", label: "Bullet Cameras", icon: Target, desc: "Long-range perimeter deterrence." },
            { id: "dome", label: "Dome Cameras", icon: Shield, desc: "Discreet indoor overview." },
            { id: "ptz", label: "PTZ Nodes", icon: Activity, desc: "Active tracking and optical zoom." },
            { id: "turret", label: "Turret Ops", icon: Eye, desc: "Versatile, high-resolution close monitoring." },
        ]
    },
    {
        id: "infrastructure",
        title: "5. Logic Hub",
        subtitle: "Define your storage and connectivity framework.",
        type: "config",
    }
]

export default function GetStartedPage() {
    const [currentStep, setCurrentStep] = useState(0)
    const [selections, setSelections] = useState<any>({
        environment: "",
        design: "",
        cameraCount: 8,
        cameraTypes: [],
        infrastructure: {
            nvr: "4TB (Professional)",
            cable: "Standard Cat6",
            switches: "Managed 8-Port"
        },
        clientInfo: {
            name: "",
            org: "",
            email: ""
        }
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false)

    const handleSelect = (stepId: string, optionId: string) => {
        setSelections((prev: any) => ({ ...prev, [stepId]: optionId }))
        if (currentStep < STEPS.length - 1) {
            setTimeout(() => setCurrentStep(currentStep + 1), 400)
        }
    }

    const handleMultiSelect = (optionId: string) => {
        const currentTypes = [...selections.cameraTypes]
        if (currentTypes.includes(optionId)) {
            setSelections((prev: any) => ({ ...prev, cameraTypes: currentTypes.filter(id => id !== optionId) }))
        } else {
            setSelections((prev: any) => ({ ...prev, cameraTypes: [...currentTypes, optionId] }))
        }
    }

    const handleConfigChange = (key: string, value: string) => {
        setSelections((prev: any) => ({
            ...prev,
            infrastructure: { ...prev.infrastructure, [key]: value }
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
    }

    const generatePDF = () => {
        setIsGeneratingPdf(true)
        const doc = new jsPDF()

        // Background
        doc.setFillColor(15, 23, 42) // Slate-950
        doc.rect(0, 0, 210, 297, "F")

        // Simulated Logo (Tactical Shield)
        doc.setDrawColor(37, 99, 235) // Primary Blue
        doc.setLineWidth(1.5)
        doc.line(105, 15, 120, 20)
        doc.line(120, 20, 120, 35)
        doc.line(120, 35, 105, 45)
        doc.line(105, 45, 90, 35)
        doc.line(90, 35, 90, 20)
        doc.line(90, 20, 105, 15)

        doc.setTextColor(37, 99, 235)
        doc.setFontSize(22)
        doc.setFont("helvetica", "bold")
        doc.text("B", 105, 34, { align: "center" })

        // Header
        doc.setTextColor(255, 255, 255)
        doc.setFontSize(28)
        doc.text("BEASTMODE", 105, 60, { align: "center" })
        doc.setFontSize(10)
        doc.setTextColor(37, 99, 235)
        doc.setFont("helvetica", "normal")
        doc.text("TECHNOLOGIES | ICT & SECURITY SOLUTIONS", 105, 67, { align: "center" })

        doc.setTextColor(255, 255, 255)
        doc.setFontSize(18)
        doc.setFont("helvetica", "bold")
        doc.text("TACTICAL CCTV DESIGN ROADMAP", 105, 85, { align: "center" })

        doc.setDrawColor(37, 99, 235)
        doc.setLineWidth(0.5)
        doc.line(20, 95, 190, 95)

        doc.setFontSize(10)
        doc.setTextColor(150, 150, 150)
        doc.setFont("helvetica", "normal")
        doc.text(`TRANSMISSION DATE: ${new Date().toLocaleDateString()}`, 20, 105)
        doc.text(`AUTHORIZED FOR: ${selections.clientInfo.name || "N/A"}`, 20, 112)
        doc.text(`ORGANIZATION: ${selections.clientInfo.org || "N/A"}`, 20, 119)

        // Operational Overview
        doc.setTextColor(255, 255, 255)
        doc.setFontSize(14)
        doc.setFont("helvetica", "bold")
        doc.text("I. OPERATIONAL OVERVIEW", 20, 135)
        doc.setFontSize(10)
        doc.setFont("helvetica", "normal")
        doc.setTextColor(200, 200, 200)
        doc.text(`ENVIRONMENT: ${selections.environment.toUpperCase()}`, 30, 145)
        doc.text(`PROPERTY DESIGN: ${selections.design.toUpperCase()}`, 30, 152)
        doc.text(`SURVEILLANCE DENSITY: ${selections.cameraCount} NODES`, 30, 159)

        // Technical Hardware Matrix
        doc.setTextColor(255, 255, 255)
        doc.setFontSize(14)
        doc.setFont("helvetica", "bold")
        doc.text("II. TECHNICAL HARDWARE MATRIX", 20, 175)
        doc.setFontSize(10)
        doc.setFont("helvetica", "normal")
        doc.setTextColor(200, 200, 200)
        doc.text(`OPTICAL TYPES: ${selections.cameraTypes.join(", ").toUpperCase()}`, 30, 185)
        doc.text(`STORAGE HUB: ${selections.infrastructure.nvr}`, 30, 192)
        doc.text(`CONNECTIVITY: ${selections.infrastructure.cable}`, 30, 199)
        doc.text(`SWITCHING FABRIC: ${selections.infrastructure.switches}`, 30, 206)

        // Mission Summary
        doc.setFillColor(30, 41, 59) // Slate-800
        doc.rect(20, 215, 170, 35, "F")
        doc.setTextColor(255, 255, 255)
        doc.setFontSize(12)
        doc.setFont("helvetica", "bold")
        doc.text("TACTICAL RECOMMENDATION", 105, 225, { align: "center" })
        doc.setFontSize(9)
        doc.setFont("helvetica", "italic")
        doc.setTextColor(200, 200, 200)
        const recommendation = `Deploying ${selections.cameraCount} nodes in a ${selections.design} environment requires a secure PoE mesh. Recommended cable volume: approx ${selections.cameraCount * 15}m of Cat6. All nodes should be synced to the ${selections.infrastructure.nvr} storage unit.`
        doc.text(doc.splitTextToSize(recommendation, 150), 105, 235, { align: "center" })

        // Footer (Contact Info)
        doc.setDrawColor(37, 99, 235, 0.5)
        doc.line(20, 265, 190, 265)
        doc.setTextColor(150, 150, 150)
        doc.setFontSize(8)
        doc.setFont("helvetica", "normal")
        doc.text("PHONE: +251 963 375252 | EMAIL: info@beastmodetechnologies.et", 105, 275, { align: "center" })
        doc.text("TELEGRAM: @beastmodetech | WEB: beastmodetechnologies.et", 105, 281, { align: "center" })
        doc.text("© 2026 BEASTMODE TECHNOLOGIES. ALL SYSTEMS SECURED.", 105, 287, { align: "center" })

        // Sanitize filename and ensure extension
        let safeName = (selections.clientInfo.name || "System_Design").replace(/[^a-z0-9]/gi, "_").toLowerCase()
        if (!safeName) safeName = "system_design"
        const filename = `BeastMode_CCTV_${safeName}.pdf`

        try {
            // Using direct blob approach for better compatibility
            const pdfBlob = doc.output("blob")
            const url = URL.createObjectURL(pdfBlob)
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", filename)
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            URL.revokeObjectURL(url)
        } catch (err) {
            console.error("PDF Generation Error:", err)
            // Fallback to standard save
            doc.save(filename)
        }
        setIsGeneratingPdf(false)
    }

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
                                        <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">CCTV Design Wizard</p>
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

                                    {/* Step Content */}
                                    {STEPS[currentStep].type === "select" && (
                                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {STEPS[currentStep].options?.map((option: any) => {
                                                const Icon = option.icon
                                                const isSelected = selections[STEPS[currentStep].id] === option.id
                                                return (
                                                    <button
                                                        key={option.id}
                                                        onClick={() => handleSelect(STEPS[currentStep].id, option.id)}
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
                                                        {isSelected && <div className="absolute top-4 right-4 animate-in zoom-in duration-300"><CheckCircle2 size={24} className="text-primary" /></div>}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    )}

                                    {STEPS[currentStep].type === "number" && (
                                        <div className="max-w-2xl mx-auto space-y-12">
                                            <div className="flex flex-col items-center gap-8 p-12 bg-slate-900/50 border border-slate-800 rounded-[3rem]">
                                                <div className="text-8xl font-black text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">{selections.cameraCount}</div>
                                                <div className="w-full space-y-4">
                                                    <input
                                                        type="range"
                                                        min={STEPS[currentStep].min}
                                                        max={STEPS[currentStep].max}
                                                        value={selections.cameraCount}
                                                        onChange={(e) => setSelections((prev: any) => ({ ...prev, cameraCount: parseInt(e.target.value) }))}
                                                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
                                                    />
                                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-600">
                                                        <span>{STEPS[currentStep].min} Node</span>
                                                        <span>{STEPS[currentStep].max} Nodes (Enterprise)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => setCurrentStep(currentStep + 1)}
                                                className="w-full bg-slate-900 hover:bg-primary border border-slate-800 hover:border-primary py-6 rounded-3xl font-black text-xl uppercase tracking-widest transition-all"
                                            >
                                                Confirm Node Count &rarr;
                                            </button>
                                        </div>
                                    )}

                                    {STEPS[currentStep].type === "multi-select" && (
                                        <div className="space-y-12">
                                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                                {STEPS[currentStep].options?.map((option: any) => {
                                                    const Icon = option.icon
                                                    const isSelected = selections.cameraTypes.includes(option.id)
                                                    return (
                                                        <button
                                                            key={option.id}
                                                            onClick={() => handleMultiSelect(option.id)}
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
                                                            {isSelected && <div className="absolute top-4 right-4 animate-in zoom-in duration-300"><CheckCircle2 size={24} className="text-primary" /></div>}
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                            <button
                                                disabled={selections.cameraTypes.length === 0}
                                                onClick={() => setCurrentStep(currentStep + 1)}
                                                className="w-full bg-primary disabled:bg-slate-900 disabled:opacity-50 py-6 rounded-3xl font-black text-xl uppercase tracking-widest transition-all shadow-xl shadow-primary/20"
                                            >
                                                Assign Optics &rarr;
                                            </button>
                                        </div>
                                    )}

                                    {STEPS[currentStep].type === "config" && (
                                        <div className="max-w-4xl mx-auto space-y-12">
                                            <div className="grid md:grid-cols-3 gap-8">
                                                <ConfigCard
                                                    icon={HardDrive}
                                                    label="NVR Storage"
                                                    options={["2TB (Standard)", "4TB (Professional)", "8TB+ (Enterprise)"]}
                                                    value={selections.infrastructure.nvr}
                                                    onChange={(val) => handleConfigChange("nvr", val)}
                                                />
                                                <ConfigCard
                                                    icon={Zap}
                                                    label="Connectivity"
                                                    options={["Standard Cat6", "Shielded Industrial", "Fiber Optic Bridge"]}
                                                    value={selections.infrastructure.cable}
                                                    onChange={(val) => handleConfigChange("cable", val)}
                                                />
                                                <ConfigCard
                                                    icon={Settings2}
                                                    label="PoE Switch"
                                                    options={["Managed 8-Port", "High-Bandwidth 16-Port", "Chassis 24-Port"]}
                                                    value={selections.infrastructure.switches}
                                                    onChange={(val) => handleConfigChange("switches", val)}
                                                />
                                            </div>
                                            <button
                                                onClick={() => setCurrentStep(currentStep + 1)}
                                                className="w-full bg-primary py-6 rounded-[2rem] font-black text-xl uppercase tracking-widest transition-all shadow-2xl shadow-primary/30"
                                            >
                                                Finalize Architecture
                                            </button>
                                        </div>
                                    )}

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
                                        <p className="text-xl text-slate-400 font-medium">Verify your design and lock in your deployment credentials.</p>
                                    </div>

                                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                                        {/* Result Summary */}
                                        <div className="bg-slate-900/40 border border-slate-800/50 p-10 rounded-[4rem] backdrop-blur-2xl space-y-8">
                                            <div className="flex items-center gap-4 text-primary">
                                                <Layers size={32} />
                                                <h3 className="text-2xl font-black uppercase tracking-tighter">Design Schema</h3>
                                            </div>
                                            <div className="space-y-6">
                                                <SummaryItem label="Environment" value={selections.environment} />
                                                <SummaryItem label="Layout" value={selections.design} />
                                                <SummaryItem label="Node Count" value={`${selections.cameraCount} Units`} />
                                                <SummaryItem label="Optics" value={selections.cameraTypes.join(", ")} />
                                                <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                                                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Total Cable Est.</span>
                                                    <span className="text-xl font-black text-white">{selections.cameraCount * 15}m</span>
                                                </div>
                                            </div>
                                        </div>

                                        <form onSubmit={handleSubmit} className="bg-slate-900/40 border border-slate-800/50 p-10 rounded-[4rem] backdrop-blur-2xl space-y-8">
                                            <div className="grid sm:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Authorized Individual</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-8 py-5 outline-none focus:border-primary transition-all font-bold"
                                                        placeholder="Full Name"
                                                        onChange={(e) => setSelections((prev: any) => ({ ...prev, clientInfo: { ...prev.clientInfo, name: e.target.value } }))}
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Organization</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-8 py-5 outline-none focus:border-primary transition-all font-bold"
                                                        placeholder="Company Name"
                                                        onChange={(e) => setSelections((prev: any) => ({ ...prev, clientInfo: { ...prev.clientInfo, org: e.target.value } }))}
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Strategic Transmission</label>
                                                <input
                                                    required
                                                    type="email"
                                                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-8 py-5 outline-none focus:border-primary transition-all font-bold"
                                                    placeholder="Work Email"
                                                    onChange={(e) => setSelections((prev: any) => ({ ...prev, clientInfo: { ...prev.clientInfo, email: e.target.value } }))}
                                                />
                                            </div>
                                            <div className="pt-4">
                                                <button type="submit" className="group w-full bg-primary text-white py-6 rounded-3xl font-black text-2xl uppercase tracking-tighter hover:bg-primary/90 transition-all flex items-center justify-center gap-4 shadow-2xl shadow-primary/30 active:scale-95">
                                                    Deploy Strategy
                                                    <Rocket size={28} className="group-hover:-translate-y-1 transition-transform" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
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
                                    Design <br /> <span className="text-primary not-italic">Authorized</span>
                                </h1>
                                <p className="text-2xl text-slate-400 max-w-2xl mx-auto font-light">
                                    Surveillance architecture for {selections.clientInfo.org} has been calculated. Your tactical design document is ready for extraction.
                                </p>
                            </div>

                            <button
                                onClick={generatePDF}
                                className={`mx-auto bg-white text-slate-950 px-12 py-6 rounded-[2.5rem] font-black uppercase tracking-widest text-lg hover:scale-105 transition-all shadow-2xl flex items-center gap-4 ${isGeneratingPdf ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isGeneratingPdf ? <Activity className="animate-spin" /> : <Download size={28} />}
                                Download Tactical Design (PDF)
                            </button>

                            <div className="h-1 w-24 bg-primary/30 mx-auto rounded-full"></div>

                            <div className="pt-10 flex flex-col sm:flex-row gap-6 justify-center">
                                <Link href="/" className="group bg-slate-950 border-2 border-slate-800 px-12 py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:border-primary transition-all flex items-center gap-2">
                                    <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                    Return to HQ
                                </Link>
                                <Link href="/contact" className="group bg-primary text-white px-12 py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl shadow-primary/20 flex items-center gap-2">
                                    Open Comm Channel
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Final progress 100% */}
                            <div className="pt-16 max-w-md mx-auto opacity-30">
                                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.5em] mb-4">
                                    <span>Deployment Ready</span>
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

function ConfigCard({ icon: Icon, label, options, value, onChange }: any) {
    return (
        <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-[2.5rem] flex flex-col items-center gap-6">
            <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-primary border border-slate-800">
                <Icon size={24} />
            </div>
            <div className="text-center space-y-4 w-full">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{label}</span>
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:border-primary text-xs font-bold uppercase tracking-widest appearance-none text-center cursor-pointer"
                >
                    {options.map((opt: string) => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

function SummaryItem({ label, value }: any) {
    return (
        <div className="flex justify-between items-center">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
            <span className="text-sm font-bold text-white uppercase tracking-tight">{value}</span>
        </div>
    )
}
