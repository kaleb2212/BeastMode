"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, Globe } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setFormStatus("submitting")
        setTimeout(() => setFormStatus("success"), 1500)
    }

    return (
        <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-primary/30">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-30 -mr-48 -mt-48"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm mb-4">
                        <MessageSquare className="text-primary" size={18} />
                        <span className="text-xs font-bold tracking-widest uppercase">Contact Support</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
                        Let's Secure Your <br /><span className="text-primary italic font-light lowercase">Future</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Have a question about our ecosystem or need a custom implementation? Our senior engineers are ready to assist.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    {/* Contact Information */}
                    <div className="space-y-12">
                        <div className="grid sm:grid-cols-2 gap-8">
                            <ContactCard
                                icon={Mail}
                                title="Email Us"
                                details="ops@beastmode.tech"
                                sub="24/7 Priority Support"
                            />
                            <ContactCard
                                icon={Phone}
                                title="Call Us"
                                details="+1 (800) BEASTMODE"
                                sub="Mon-Fri, 9am - 6pm"
                            />
                            <ContactCard
                                icon={MapPin}
                                title="Visit HQ"
                                details="Elite Tech Hub, Sector 7"
                                sub="Innovation City, DXB"
                            />
                            <ContactCard
                                icon={Clock}
                                title="Response Time"
                                details="Within 2 Hours"
                                sub="For enterprise inquiries"
                            />
                        </div>

                        <div className="p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 space-y-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 transform translate-x-4 -translate-y-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Globe size={200} className="text-white" />
                            </div>
                            <h3 className="text-3xl font-black uppercase tracking-tighter">Global Presence</h3>
                            <p className="text-slate-400 leading-relaxed font-medium">
                                While headquartered in Innovation City, our certified technicians are deployed across 12 countries, ensuring enterprise-grade support wherever your business operates.
                            </p>
                            <div className="flex gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-800 flex items-center justify-center">
                                            <Globe size={20} className="text-primary/50" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm font-bold text-slate-500 self-center">
                                    Deployments in <span className="text-white">UK, UAE, ZA, & US</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/10 rounded-[4rem] blur-3xl"></div>
                        <div className="relative bg-slate-900 border border-slate-800 p-10 sm:p-16 rounded-[3.5rem] shadow-2xl">
                            {formStatus === "success" ? (
                                <div className="text-center py-20 space-y-8 animate-in fade-in zoom-in-95 duration-500">
                                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto scale-110">
                                        <CheckCircle2 size={48} className="text-primary" />
                                    </div>
                                    <h2 className="text-4xl font-black uppercase tracking-tighter">Transmission <br /> <span className="text-primary">Received</span></h2>
                                    <p className="text-xl text-slate-400">Your inquiry has been encrypted and sent to our tactical response team. Expect a reply shortly.</p>
                                    <button
                                        onClick={() => setFormStatus("idle")}
                                        className="text-primary font-black uppercase tracking-widest text-sm hover:underline"
                                    >
                                        Send another transmission
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="space-y-4">
                                        <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Inquiry Details</label>
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <input required type="text" placeholder="Full Name" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-8 py-5 outline-none focus:border-primary transition-all font-medium" />
                                            <input required type="email" placeholder="Work Email" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-8 py-5 outline-none focus:border-primary transition-all font-medium" />
                                        </div>
                                        <input required type="text" placeholder="Subject" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-8 py-5 outline-none focus:border-primary transition-all font-medium" />
                                        <textarea required placeholder="Briefly describe your requirements..." className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-8 py-5 outline-none focus:border-primary transition-all font-medium min-h-[150px] resize-none"></textarea>
                                    </div>
                                    <button
                                        disabled={formStatus === "submitting"}
                                        className="group w-full bg-primary text-white py-6 rounded-2xl font-black text-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-4 shadow-2xl shadow-primary/20 disabled:opacity-50"
                                    >
                                        {formStatus === "submitting" ? (
                                            "Submitting..."
                                        ) : (
                                            <>
                                                Schedule Call
                                                <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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

function ContactCard({ icon: Icon, title, details, sub }: any) {
    return (
        <div className="p-8 rounded-[2.5rem] bg-slate-900 border border-slate-800 hover:border-primary/30 transition-all group flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:bg-primary transition-all group-hover:scale-110">
                <Icon size={28} className="text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-2">{title}</h4>
            <p className="text-lg font-bold text-white mb-1">{details}</p>
            <p className="text-xs text-slate-600 font-medium uppercase">{sub}</p>
        </div>
    )
}
