"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, Clock, MapPin, Phone, Mail, Send, CheckCircle2, Shield, Zap, Network } from "lucide-react"
import { useState } from "react"

export default function ConsultationPage() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setFormStatus("submitting")

        const form = e.target as HTMLFormElement
        const formData = new FormData(form)

        try {
            const response = await fetch("https://formsubmit.co/support@beastmodetechnologies.et", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                setFormStatus("success")
            } else {
                alert("There was an issue submitting your consultation request. Please try again or contact us directly.")
                setFormStatus("idle")
            }
        } catch (error) {
            alert("There was an issue submitting your consultation request. Please try again or contact us directly.")
            setFormStatus("idle")
        }
    }

    return (
        <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-primary/30">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50"></div>
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] opacity-30"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm mb-4">
                        <Calendar className="text-primary" size={18} />
                        <span className="text-sm font-bold tracking-wider uppercase">Free Strategy Session</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                        Design Your <span className="text-primary italic">Digital Fortress</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto text-pretty">
                        Schedule a personalized consultation with our senior engineers. We'll analyze your infrastructure and design a unified ICT & security ecosystem tailored to your business.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Info & Benefits */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">What to expect</h2>
                            <div className="space-y-6">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800">
                                        <Shield className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Security Audit</h3>
                                        <p className="text-slate-400">A comprehensive review of your current physical and digital security blind spots.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800">
                                        <Zap className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Performance Analysis</h3>
                                        <p className="text-slate-400">Evaluation of your network throughput and ICT efficiency to ensure maximum uptime.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800">
                                        <Network className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Scalability Roadmap</h3>
                                        <p className="text-slate-400">Future-proofing your infrastructure to grow seamlessly with your business ambitions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm space-y-6">
                            <h3 className="text-xl font-bold">Contact Details</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Phone size={18} className="text-primary" />
                                    <span>+251 963 375252</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Mail size={18} className="text-primary" />
                                    <span>support@beastmodetechnologies.et</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <MapPin size={18} className="text-primary" />
                                    <span>Addis Ababa, Ethiopia</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-[40px] blur-2xl opacity-50"></div>
                        <div className="relative bg-slate-900 border border-slate-800 p-8 sm:p-12 rounded-[32px] shadow-2xl overflow-hidden focus-within:border-primary/50 transition-colors">
                            {formStatus === "success" ? (
                                <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-500">
                                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="text-primary" size={40} />
                                    </div>
                                    <h2 className="text-3xl font-bold">Consultation Secured</h2>
                                    <p className="text-slate-400">Our senior engineer will contact you within 24 hours to finalize your strategy session.</p>
                                    <button
                                        onClick={() => setFormStatus("idle")}
                                        className="text-primary font-bold hover:underline"
                                    >
                                        Schedule another session
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* FormSubmit Configuration */}
                                    <input type="hidden" name="_subject" value="New Consultation Request - BeastMode Technologies" />
                                    <input type="hidden" name="_template" value="table" />
                                    <input type="hidden" name="_captcha" value="false" />

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors text-white"
                                        />
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Work Email</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="john@company.com"
                                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors text-white"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Phone</label>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                placeholder="+251 912 345678"
                                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors text-white"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Inquiry Type</label>
                                        <select name="inquiry_type" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors text-white appearance-none cursor-pointer">
                                            <option>Complete Ecosystem Design</option>
                                            <option>CCTV & Surveillance Audit</option>
                                            <option>ICT Infrastructure Upgrade</option>
                                            <option>Networking & Connectivity</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Project Details</label>
                                        <textarea
                                            name="message"
                                            placeholder="Tell us about your security and ICT challenges..."
                                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors text-white min-h-[120px] resize-none"
                                        ></textarea>
                                    </div>
                                    <button
                                        disabled={formStatus === "submitting"}
                                        className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-primary/20"
                                    >
                                        {formStatus === "submitting" ? (
                                            <>Processing...</>
                                        ) : (
                                            <>
                                                Book Strategy Session
                                                <Send size={20} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
