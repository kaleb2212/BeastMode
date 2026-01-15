"use client"

import Header from "@/components/header"
import Image from "next/image"
import {
  Shield,
  Zap,
  Network,
  Speaker,
  ArrowRight,
  Lightbulb,
  Target,
  TrendingUp,
  Lock,
  Eye,
  AlertCircle,
  Smartphone,
  BarChart3,
  Cloud,
  Users,
  Cpu,
  Monitor,
  Server,
  Database,
  LineChart,
  Award,
  Gauge,
  MessageCircle,
  Headphones,
  Activity,
  Wifi,
  FileText,
  Phone,
  CheckCircle2,
  ChevronDown,
  CameraIcon,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Service data for Alarm System & Intercom
const service = {
  title: "Alarm System & Intercom",
  subtitle: "Integrated Security & Communication Solutions",
  color: "from-red-600 to-red-800",
  accentColor: "text-red-600",
  image: "/alarm-hero.jpg",
  overview:
    "Advanced alarm systems and intercom solutions providing comprehensive security monitoring and seamless internal communication.",
  coreFeatures: [
    {
      icon: Speaker,
      title: "Smart Intercom Systems",
      description: "Advanced intercom with IP-based audio and video communication",
    },
    {
      icon: Shield,
      title: "Multi-Zone Alarm System",
      description: "Flexible zoning supporting different alert levels and responses",
    },
    {
      icon: Lock,
      title: "Access Control Integration",
      description: "Unified access control with alarm system coordination",
    },
    {
      icon: MessageCircle,
      title: "Emergency Communication",
      description: "Two-way emergency notification system for rapid response",
    },
    {
      icon: Gauge,
      title: "Real-Time Monitoring",
      description: "24/7 monitoring center integration with instant alerts",
    },
    {
      icon: Users,
      title: "Multi-User Management",
      description: "Role-based access and user privilege management",
    },
    {
      icon: TrendingUp,
      title: "Scalable Platform",
      description: "Easily expandable system supporting growth and new locations",
    },
    {
      icon: Cpu,
      title: "Smart Integration",
      description: "Integration with CCTV, access control, and IoT systems",
    },
  ],
  advancedFeatures: [
    {
      category: "Alarm Detection & Monitoring",
      items: [
        "Multi-sensor detection (motion, door/window, glass break, vibration)",
        "Advanced filter algorithms reducing false alarms by 80%",
        "Customizable alarm zones with different sensitivity levels",
        "Silent and audible alarm modes",
        "Time-based automation and scheduled arming",
        "24/7 UL-listed monitoring center integration",
        "SMS and email notifications",
        "Emergency service auto-dispatch",
      ],
    },
    {
      category: "Intercom & Communication",
      items: [
        "HD video intercom for visual identification",
        "Two-way audio with noise cancellation",
        "Mobile app integration for remote communication",
        "Mass notification and public address system",
        "Pre-recorded emergency announcements",
        "Direct routing to specific departments",
        "Call queuing and management",
        "Integration with VoIP and phone systems",
      ],
    },
    {
      category: "Access Control Integration",
      items: [
        "Biometric access (fingerprint, facial recognition)",
        "Card and PIN-based access control",
        "Electronic lock control and management",
        "Visitor management and check-in systems",
        "Automatic lock-down on alarm trigger",
        "Audit trail and access logs",
        "Multi-factor authentication support",
        "Time and attendance tracking",
      ],
    },
    {
      category: "Advanced Features & Integration",
      items: [
        "AI-powered threat detection and classification",
        "Integration with CCTV for event correlation",
        "IoT device integration (smart locks, lights, etc)",
        "Weather-responsive automation (lockdown on severe weather)",
        "Elevator recall and stairwell pressurization",
        "HVAC integration for controlled shutdown",
        "Generator and power system management",
        "Firmware updates and remote management",
      ],
    },
  ],
  specifications: [
    { label: "Maximum Zones", value: "Up to 999 zones per panel" },
    { label: "Monitoring Center", value: "UL-Listed 24/7 facility" },
    { label: "Response Time", value: "< 30 seconds" },
    { label: "Backup Power", value: "48+ hours battery backup" },
    { label: "Communication", value: "Dual-path (cellular + broadband)" },
    { label: "Video Intercom", value: "1080p HD quality" },
    { label: "Max Users", value: "500+ accounts" },
    { label: "System Uptime SLA", value: "99.9% guaranteed" },
  ],
  keyBenefits: [
    { metric: "89% reduction in false alarms", description: "Through advanced filtering and AI detection" },
    { metric: "$450K annual loss prevention", description: "Documented through incident prevention" },
    { metric: "92% faster emergency response", description: "Via integrated monitoring center" },
    { metric: "100% facility emergency communication", description: "Reaching all areas simultaneously" },
    { metric: "60% reduction in security staffing", description: "Through intelligent automation" },
    { metric: "99.9% system availability", description: "With redundant communication paths" },
  ],
  implementations: [
    {
      phase: "Phase 1: Security Assessment & Design",
      duration: "3-4 weeks",
      details: [
        "Comprehensive security needs assessment",
        "Threat and risk analysis",
        "Facility layout and zone mapping",
        "Access points and critical areas identification",
        "System design and specifications",
      ],
    },
    {
      phase: "Phase 2: Equipment & Monitoring Setup",
      duration: "2-3 weeks",
      details: [
        "Equipment procurement and testing",
        "Monitoring center account establishment",
        "Control panel programming",
        "System configuration and testing",
        "Backup power system installation",
      ],
    },
    {
      phase: "Phase 3: Installation & Integration",
      duration: "3-4 weeks",
      details: [
        "Wiring and sensor installation",
        "Access control system setup",
        "Intercom device installation",
        "Integration with CCTV systems",
        "Connection to monitoring center",
      ],
    },
    {
      phase: "Phase 4: Testing & Commissioning",
      duration: "2 weeks",
      details: [
        "System functional testing",
        "Alarm signal verification",
        "Emergency communication testing",
        "Failover and redundancy testing",
        "Documentation and as-built drawings",
      ],
    },
    {
      phase: "Phase 5: Staff Training & Procedures",
      duration: "1-2 weeks",
      details: [
        "Staff training on system operation",
        "Emergency response procedures",
        "Access control and management",
        "Mobile app training",
        "Troubleshooting and maintenance",
      ],
    },
    {
      phase: "Phase 6: Ongoing Support & Monitoring",
      duration: "Ongoing",
      details: [
        "24/7 monitoring center support",
        "Monthly system testing",
        "Quarterly security reviews",
        "Annual certifications and audits",
        "Continuous system optimization",
      ],
    },
  ],
  caseStudies: [
    {
      company: "Corporate Park",
      industry: "Commercial Real Estate",
      challenge: "Multiple break-ins costing $800K annually with poor emergency communication protocols",
      solution: "Installed integrated alarm system with CCTV integration and HD intercom emergency communication",
      result:
        "Zero break-ins in 3 years, 100% emergency communication coverage, improved tenant satisfaction by 45%, ROI in 14 months",
    },
    {
      company: "Medical Center",
      industry: "Healthcare",
      challenge: "Inadequate staff communication during emergencies, high violence incidents against staff",
      solution:
        "Deployed integrated alarm system with emergency call stations and two-way intercom throughout facility",
      result:
        "Reduced violent incidents by 72%, improved staff response time by 85%, achieved JC compliance for emergency procedures",
    },
    {
      company: "University System",
      industry: "Education",
      challenge:
        "Campus-wide emergency communication gaps, inability to reach all students and staff during incidents",
      solution:
        "Implemented campus-wide emergency notification system with integrated alarm zones and mass notification",
      result:
        "Achieved 98% notification delivery within 60 seconds, improved emergency preparedness scores by 88%, gained FERPA compliance",
    },
  ],
  certifications: [
    "Hikvision Associate",
    "Hikvision Professional",
    "CCNP",
    "Cybersecurity",
    "SOC",
    "Hardware Maintenance",
  ],
  technologies: ["ZKTeco", "Nemtek", "Aluha"],
}

export default function AlarmSystemIntercomPage() {
  const [activeTab, setActiveTab] = useState("Alarm Detection & Monitoring")
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950">
      <Header />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative mt-20 h-96 overflow-hidden">
          <Image src={service.image} alt={service.title} fill className="object-cover" priority />
          <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-60`} />
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <Link href="/services" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 mb-6">
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to Services
              </Link>
              <h1 className="text-5xl font-bold text-white mb-4">{service.title}</h1>
              <p className="text-xl text-slate-300">{service.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <p className="text-lg text-slate-200">{service.overview}</p>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.coreFeatures.map((feature, idx) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={idx}
                  className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors group"
                >
                  <IconComponent
                    className={`w-10 h-10 ${service.accentColor} mb-4 group-hover:scale-110 transition-transform`}
                  />
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Advanced Features Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white mb-8">Advanced Features</h2>
          <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-700">
            {service.advancedFeatures.map((feature) => (
              <button
                key={feature.category}
                onClick={() => setActiveTab(feature.category)}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === feature.category
                    ? `${service.accentColor} border-b-2 border-current`
                    : "text-slate-400 hover:text-slate-300"
                }`}
              >
                {feature.category}
              </button>
            ))}
          </div>
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            {service.advancedFeatures
              .find((f) => f.category === activeTab)
              ?.items.map((item, idx) => (
                <div key={idx} className="flex gap-4 mb-4 last:mb-0">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white mb-12">Key Business Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.keyBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700"
              >
                <div className={`text-3xl font-bold ${service.accentColor} mb-2`}>{benefit.metric}</div>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white mb-12">Implementation Process</h2>
          <div className="space-y-4">
            {service.implementations.map((impl, idx) => (
              <div key={idx} className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                <button
                  onClick={() => setExpandedPhase(expandedPhase === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full ${service.color} bg-gradient-to-br flex items-center justify-center font-bold text-white`}
                    >
                      {idx + 1}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-white">{impl.phase}</h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      expandedPhase === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedPhase === idx && (
                  <div className="px-6 pb-6 border-t border-slate-700 pt-4">
                    <ul className="space-y-2">
                      {impl.details.map((detail, didx) => (
                        <li key={didx} className="flex gap-3 text-slate-300">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white mb-8">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.specifications.map((spec, idx) => (
              <div
                key={idx}
                className="bg-slate-800 rounded-lg p-4 border border-slate-700 flex justify-between items-center"
              >
                <span className="text-slate-300 font-semibold">{spec.label}</span>
                <span className={`font-bold ${service.accentColor}`}>{spec.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white mb-12">Case Studies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {service.caseStudies.map((study, idx) => (
              <div key={idx} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white">{study.company}</h3>
                  <p className={`text-sm font-semibold ${service.accentColor}`}>{study.industry}</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 mb-1">Challenge</h4>
                    <p className="text-slate-300 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 mb-1">Solution</h4>
                    <p className="text-slate-300 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 mb-1">Result</h4>
                    <p className="text-slate-300 text-sm font-semibold text-green-400">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Technologies Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
              <div className="space-y-3">
                {service.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700"
                  >
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-slate-200">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Technologies & Brands</h2>
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className={`bg-gradient-to-r ${service.color} rounded-lg p-12 text-white`}>
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Facility?</h2>
            <p className="text-lg opacity-90 mb-8">
              Contact our experts today to discuss how {service.title} can benefit your organization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Get in Touch
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="h-16" />
    </div>
  )
}