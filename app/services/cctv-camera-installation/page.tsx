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

// Service data for CCTV installation
const service = {
  title: "CCTV Camera Installation",
  subtitle: "Advanced Video Surveillance Systems",
  color: "from-blue-600 to-blue-800",
  accentColor: "text-blue-600",
  image: "/cctv-hero.jpg",
  overview:
    "Enterprise-grade CCTV camera systems designed to protect your assets, monitor operations, and provide comprehensive security coverage.",
  coreFeatures: [
    {
      icon: CameraIcon,
      title: "4K/8K Resolution",
      description: "Ultra-high definition video capture for crystal-clear footage and identification",
    },
    {
      icon: Shield,
      title: "AI-Powered Detection",
      description: "Smart analytics for automatic threat detection and alerts",
    },
    {
      icon: Database,
      title: "Cloud & Local Storage",
      description: "Secure backup with redundant storage options",
    },
    {
      icon: Lock,
      title: "Military-Grade Encryption",
      description: "End-to-end encryption for all video feeds",
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "On-device processing for faster response times",
    },
    {
      icon: Monitor,
      title: "24/7 Monitoring",
      description: "Continuous surveillance with remote access capabilities",
    },
    {
      icon: TrendingUp,
      title: "Scalable Infrastructure",
      description: "Easily expand system capacity as needs grow",
    },
    {
      icon: LineChart,
      title: "Advanced Analytics",
      description: "Real-time insights and behavioral analysis",
    },
  ],
  advancedFeatures: [
    {
      category: "Video Resolution & Quality",
      items: [
        "4K Ultra HD (3840 x 2160) & 8K (7680 x 4320) support",
        "Adaptive bitrate streaming for network optimization",
        "Multi-stream video encoding (H.265, H.264, VP9)",
        "Optical zoom up to 40x with digital enhancement",
        "Wide dynamic range (WDR) for complex lighting",
        "Night vision with IR illumination up to 200m",
      ],
    },
    {
      category: "Intelligent Detection & Analytics",
      items: [
        "AI-powered object detection (humans, vehicles, animals)",
        "Facial recognition with 99.8% accuracy",
        "License plate recognition (LPR) technology",
        "Heat mapping and crowd density analysis",
        "Anomaly detection and behavior profiling",
        "Real-time alerts with customizable rules",
        "Cross-camera tracking and trajectory analysis",
        "Loitering and intrusion detection",
      ],
    },
    {
      category: "Storage & Data Management",
      items: [
        "Distributed cloud storage with redundancy",
        "Local NAS/DAS with RAID configurations",
        "Automatic video compression and cleanup",
        "Encrypted storage with compliance certifications",
        "Quick search and recovery capabilities",
        "Video retention up to 5+ years",
      ],
    },
    {
      category: "Integration & Connectivity",
      items: [
        "ONVIF protocol compliance",
        "RESTful API for third-party integrations",
        "Mobile app support (iOS & Android)",
        "Smart home ecosystem integration",
        "VMS platform compatibility (Hikvision, Axis, etc)",
        "Webhook support for real-time notifications",
      ],
    },
  ],
  specifications: [
    { label: "Maximum Cameras", value: "1000+ per system" },
    { label: "Resolution Support", value: "Up to 8K (7680x4320)" },
    { label: "Frame Rate", value: "25-60 FPS (adjustable)" },
    { label: "IR Range", value: "30m - 200m (model dependent)" },
    { label: "Storage Capacity", value: "50TB - 500TB+" },
    { label: "Uptime SLA", value: "99.9% guaranteed" },
    { label: "Response Time", value: "<100ms for alerts" },
    { label: "Concurrent Users", value: "500+ simultaneous viewers" },
  ],
  keyBenefits: [
    { metric: "73% reduction in incidents", description: "Through proactive monitoring and rapid response" },
    { metric: "95% faster threat response", description: "Via AI detection and instant notifications" },
    { metric: "40% reduction in false alarms", description: "Using advanced filtering and smart detection" },
    { metric: "85% faster investigations", description: "With intelligent search and analytics" },
    { metric: "60% lower operational costs", description: "Through automation and cloud optimization" },
    { metric: "99.9% system availability", description: "Ensuring continuous monitoring 24/7" },
  ],
  implementations: [
    {
      phase: "Phase 1: Site Assessment & Planning",
      duration: "2-3 weeks",
      details: [
        "Comprehensive facility walkthrough and documentation",
        "Coverage mapping and camera placement planning",
        "Network infrastructure assessment",
        "Power supply and cabling routing analysis",
        "Budget and timeline estimation",
      ],
    },
    {
      phase: "Phase 2: Infrastructure Setup",
      duration: "3-4 weeks",
      details: [
        "Network cabling installation (Cat6A)",
        "Power infrastructure and backup systems",
        "Server/NAS installation and configuration",
        "Network switch and router deployment",
        "Redundancy and failover systems setup",
      ],
    },
    {
      phase: "Phase 3: Camera Installation",
      duration: "2-3 weeks",
      details: [
        "Camera mounting and positioning",
        "Network and power connectivity",
        "Initial system testing and verification",
        "Firmware updates and optimization",
        "Integration with management platform",
      ],
    },
    {
      phase: "Phase 4: Software Configuration",
      duration: "1-2 weeks",
      details: [
        "VMS platform setup and configuration",
        "Recording schedules and retention policies",
        "Alert rules and automation setup",
        "User access controls and permissions",
        "Mobile app and remote access configuration",
      ],
    },
    {
      phase: "Phase 5: Testing & Optimization",
      duration: "1-2 weeks",
      details: [
        "Load testing and performance validation",
        "Security penetration testing",
        "Disaster recovery drills",
        "Fine-tuning of detection algorithms",
        "Documentation and baseline establishment",
      ],
    },
    {
      phase: "Phase 6: Training & Handover",
      duration: "1 week",
      details: [
        "Staff training on system operation",
        "Emergency response procedures",
        "Mobile app training",
        "Troubleshooting and maintenance guides",
        "First 30-day monitoring and adjustments",
      ],
    },
  ],
  caseStudies: [
    {
      company: "Retail Group",
      industry: "Retail & Shopping Centers",
      challenge: "High inventory shrinkage (4.2%) costing $2.3M annually across 45 locations",
      solution: "Deployed 2000+ AI-enabled cameras with facial recognition and behavior analytics across all stores",
      result:
        "Reduced shrinkage to 0.8% within 6 months ($2.1M annual savings), increased staff accountability, improved customer service through heat mapping",
    },
    {
      company: "Banking Group",
      industry: "Financial Services",
      challenge: "Multiple security breaches and audit compliance gaps affecting operations",
      solution: "Installed 200 military-grade cameras with military-grade encryption and 5-year archival storage",
      result:
        "Zero security incidents in 2 years, full regulatory compliance, improved audit findings, rapid fraud investigation reduced from days to hours",
    },
    {
      company: "Manufacturing Group",
      industry: "Manufacturing & Production",
      challenge: "Equipment downtime and worker safety incidents costing $5M+ annually",
      solution:
        "Implemented 500+ cameras with AI-powered anomaly detection and real-time alerts for safety violations",
      result:
        "Reduced downtime by 65%, worker incidents by 78%, improved production efficiency by 23%, ROI achieved in 7 months",
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
  technologies: ["Hikvision", "Cisco", "WesternDigital", "Seagate"],
}

export default function CCTVInstallationPage() {
  const [activeTab, setActiveTab] = useState("Video Resolution & Quality")
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
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Security?</h2>
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