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

// Service data for Networking Services
const service = {
  title: "Networking Services",
  subtitle: "Enterprise Network Infrastructure & Solutions",
  color: "from-emerald-600 to-emerald-800",
  accentColor: "text-emerald-600",
  image: "/network-hero.jpg",
  overview:
    "Professional networking solutions designed to optimize connectivity, performance, and security across your entire organization.",
  coreFeatures: [
    {
      icon: Wifi,
      title: "Enterprise WiFi 6E",
      description: "Latest WiFi 6E technology with multi-gigabit speeds and reduced latency",
    },
    {
      icon: Server,
      title: "Data Center Solutions",
      description: "Secure, redundant data center architecture with failover capabilities",
    },
    {
      icon: Lock,
      title: "Network Security",
      description: "Next-generation firewalls and intrusion prevention systems",
    },
    {
      icon: Gauge,
      title: "Performance Management",
      description: "QoS and traffic management for optimal network performance",
    },
    {
      icon: Database,
      title: "Cloud Connectivity",
      description: "Seamless integration with AWS, Azure, and Google Cloud",
    },
    {
      icon: Monitor,
      title: "Network Monitoring",
      description: "24/7 real-time network performance monitoring and analytics",
    },
    {
      icon: TrendingUp,
      title: "Scalable Architecture",
      description: "Future-proof design that grows with your business",
    },
    {
      icon: Cpu,
      title: "SD-WAN Solutions",
      description: "Software-defined networking for flexibility and cost optimization",
    },
  ],
  advancedFeatures: [
    {
      category: "Network Infrastructure",
      items: [
        "Multi-gigabit core switching (100Gbps+)",
        "Enterprise-grade routing protocols (BGP, OSPF)",
        "VLAN segmentation and network isolation",
        "Load balancing and traffic optimization",
        "Network redundancy with active-active configurations",
        "Fiber optic backbone installation",
        "PoE (Power over Ethernet) infrastructure",
        "Managed network services with SLA guarantees",
      ],
    },
    {
      category: "Wireless Networking",
      items: [
        "WiFi 6E deployment with tri-band coverage",
        "Mesh networking for complete facility coverage",
        "Guest network isolation and captive portals",
        "RF site survey and optimization",
        "Automatic load balancing and failover",
        "Seamless roaming (802.11k/v/w support)",
        "Guest portal with analytics and engagement",
        "Mobile device management integration",
      ],
    },
    {
      category: "Security & Access Control",
      items: [
        "Next-gen firewalls with AI threat detection",
        "Intrusion detection and prevention (IDS/IPS)",
        "DDoS mitigation and scrubbing",
        "Zero-trust network architecture",
        "VPN and secure remote access",
        "Network segmentation with microsegmentation",
        "SSL/TLS inspection and decryption",
        "Web filtering and content control",
      ],
    },
    {
      category: "Cloud & Hybrid Connectivity",
      items: [
        "Direct cloud connections (ExpressRoute, Direct Connect)",
        "Multi-cloud networking and orchestration",
        "Hybrid cloud architecture design",
        "WAN optimization and acceleration",
        "SD-WAN for flexible connectivity",
        "MPLS and VPN connectivity",
        "Cloud workload visibility and control",
        "Cost optimization and bandwidth management",
      ],
    },
  ],
  specifications: [
    { label: "Core Bandwidth", value: "100Gbps - 400Gbps" },
    { label: "WiFi Coverage", value: "99%+ building coverage" },
    { label: "Latency", value: "< 1ms within network" },
    { label: "Uptime SLA", value: "99.99% guaranteed" },
    { label: "Connection Types", value: "Fiber, Copper, Wireless, Leased Lines" },
    { label: "Failover Time", value: "Sub-second" },
    { label: "Max Concurrent Users", value: "10,000+" },
    { label: "Security Certifications", value: "ISO 27001, SOC 2 Type II" },
  ],
  keyBenefits: [
    { metric: "85% improvement in throughput", description: "With modern switching and routing architecture" },
    { metric: "99.99% network availability", description: "Ensuring business continuity" },
    { metric: "40% reduction in connectivity costs", description: "Through SD-WAN and cloud optimization" },
    { metric: "90% faster data transfers", description: "With optimized network paths" },
    { metric: "75% fewer network incidents", description: "Via proactive monitoring and maintenance" },
    { metric: "100% cloud integration", description: "Seamless hybrid and multi-cloud connectivity" },
  ],
  implementations: [
    {
      phase: "Phase 1: Network Design & Planning",
      duration: "4-6 weeks",
      details: [
        "Current network assessment and documentation",
        "Load and traffic analysis",
        "Future growth projections and capacity planning",
        "Design architecture (core, distribution, access)",
        "RF site survey (for wireless)",
      ],
    },
    {
      phase: "Phase 2: Equipment Procurement",
      duration: "2-4 weeks",
      details: [
        "RFQ and vendor selection",
        "Equipment ordering and delivery",
        "Pre-configuration and testing in lab",
        "Documentation and labeling",
        "Schedule coordination with business units",
      ],
    },
    {
      phase: "Phase 3: Installation & Cabling",
      duration: "4-8 weeks",
      details: [
        "Fiber optic and copper cabling installation",
        "Cable testing and certification",
        "Switch and router rack installation",
        "PoE infrastructure setup",
        "Network port provisioning",
      ],
    },
    {
      phase: "Phase 4: Configuration & Testing",
      duration: "2-4 weeks",
      details: [
        "Device configuration (VLAN, routing, etc)",
        "Security policies and firewall rules",
        "WiFi deployment and optimization",
        "Load testing and performance validation",
        "Failover and redundancy testing",
      ],
    },
    {
      phase: "Phase 5: Migration & Cutover",
      duration: "1-2 weeks",
      details: [
        "Phased migration from old to new network",
        "DNS and DHCP cutover",
        "VoIP and application migration",
        "End-user device connectivity",
        "Monitor for issues during transition",
      ],
    },
    {
      phase: "Phase 6: Monitoring & Support",
      duration: "Ongoing",
      details: [
        "Deploy monitoring and analytics tools",
        "Establish baseline performance metrics",
        "Begin proactive monitoring",
        "Staff training on new network",
        "Quarterly performance reviews and optimization",
      ],
    },
  ],
  caseStudies: [
    {
      company: "Technology Corporation",
      industry: "Technology & Software",
      challenge: "Outdated network infrastructure causing latency and productivity losses across 50 global offices",
      solution: "Deployed modern switching fabric with SD-WAN, cloud optimization, and 24/7 monitoring",
      result:
        "Reduced latency by 85%, improved employee productivity by 23%, cut WAN costs by 40%, achieved 99.99% uptime",
    },
    {
      company: "University System",
      industry: "Education",
      challenge: "WiFi coverage issues affecting 40,000 students and staff across 8 campuses",
      solution: "Campus-wide WiFi 6E deployment with mesh networking and unified management",
      result:
        "Achieved 99%+ coverage, supported 25,000 concurrent connections, improved student experience scores by 67%",
    },
    {
      company: "Healthcare Network",
      industry: "Healthcare",
      challenge: "Network bottlenecks impacting patient care systems and telemedicine capabilities",
      solution: "Implemented multi-gigabit core network with cloud connectivity and HIPAA-compliant security",
      result:
        "Doubled telemedicine capacity, reduced patient data transfer time by 70%, maintained HIPAA compliance, achieved ISO 27001 certification",
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
  technologies: ["Cisco", "ZKTeco", "Nemtek"],
}

export default function NetworkingServicesPage() {
  const [activeTab, setActiveTab] = useState("Network Infrastructure")
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
            <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your Network?</h2>
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