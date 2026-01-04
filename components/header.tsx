"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import Link from "next/link"
import Logo from "@/components/logo"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 py-3" : "bg-transparent py-5"
      }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
                <Logo size={48} />
              </div>
              <span className="text-2xl font-black text-white tracking-widest hidden sm:inline">BEASTMODE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/services" className="text-sm font-bold text-slate-300 hover:text-white transition uppercase tracking-wider">
              Services
            </Link>
            <Link href="/brands" className="text-sm font-bold text-slate-300 hover:text-white transition uppercase tracking-wider">
              Brands
            </Link>
            <Link href="/contact" className="text-sm font-bold text-slate-300 hover:text-white transition uppercase tracking-wider">
              Contact
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/get-started">
              <button className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-primary/90 transition-all font-bold text-sm shadow-xl shadow-primary/20">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-6 p-8">
              <Link href="/services" className="text-xl font-bold text-slate-200 hover:text-primary transition" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="/brands" className="text-xl font-bold text-slate-200 hover:text-primary transition" onClick={() => setIsOpen(false)}>
                Brands
              </Link>
              <Link href="/contact" className="text-xl font-bold text-slate-200 hover:text-primary transition" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link href="/get-started" onClick={() => setIsOpen(false)}>
                <button className="bg-primary text-white px-8 py-4 rounded-xl w-full font-bold text-lg">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
