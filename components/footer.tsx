import { Facebook, Linkedin, Twitter, Send } from "lucide-react"
import Link from "next/link"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Logo size={48} />
                </div>
                <span className="text-2xl font-black text-white tracking-widest italic group-hover:text-primary transition-colors">BEASTMODE</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Pioneering the next generation of ICT and integrated security infrastructure.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl tracking-tight">Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/services/cctv-camera-installation" className="hover:text-primary transition-colors">
                  CCTV Installation
                </Link>
              </li>
              <li>
                <Link href="/services/ict-support" className="hover:text-primary transition-colors">
                  ICT Support
                </Link>
              </li>
              <li>
                <Link href="/services/networking-services" className="hover:text-primary transition-colors">
                  Networking
                </Link>
              </li>
              <li>
                <Link href="/services/alarm-system-intercom" className="hover:text-primary transition-colors">
                  Alarm Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl tracking-tight">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl tracking-tight">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-800 hover:border-primary/50 transition-all group"
              >
                <Facebook size={20} className="text-slate-400 group-hover:text-primary" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-800 hover:border-primary/50 transition-all group"
              >
                <Linkedin size={20} className="text-slate-400 group-hover:text-primary" />
              </a>
              <a
                href="https://t.me/beastmodetech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-800 hover:border-primary/50 transition-all group"
              >
                <Send size={20} className="text-slate-400 group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-medium">
          <p>&copy; 2026 BeastMode Technologies. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
