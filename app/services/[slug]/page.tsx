"use client"

import Header from "@/components/header"
import Image from "next/image" // Import Image component
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
import { useState, use } from "react"

// Original serviceDetails object - kept for reference but not used by the updated logic
const serviceDetails = {
  "cctv-camera-installation": {
    title: "CCTV Camera Installation",
    subtitle: "Advanced Video Surveillance & Monitoring Systems",
    icon: Shield,
    color: "from-blue-600 to-blue-800",
    accentColor: "text-blue-600",
    image: "/cctv-hero.jpg",
    overview:
      "Our comprehensive CCTV camera installation services provide state-of-the-art surveillance solutions designed to protect your premises around the clock. We integrate the latest in video surveillance technology with intelligent monitoring systems that can be accessed remotely from anywhere in the world.",

    mainFeatures: [
      {
        icon: Eye,
        title: "4K & 8MP Ultra-HD Resolution",
        description:
          "Crystal-clear video capture with up to 8 megapixels for detailed facial recognition and incident investigation. Provides 4x the resolution of standard HD cameras.",
      },
      {
        icon: Lightbulb,
        title: "Advanced Night Vision & Infrared",
        description:
          "State-of-the-art infrared technology enables 24/7 surveillance even in complete darkness with up to 100m night vision range.",
      },
      {
        icon: AlertCircle,
        title: "AI-Powered Motion Detection",
        description:
          "Intelligent algorithms that distinguish between genuine threats and false alarms, reducing alert fatigue by up to 90%.",
      },
      {
        icon: Cloud,
        title: "Cloud & On-Premise Storage",
        description:
          "Flexible storage options with redundant backup systems ensuring your footage is never lost. 30-365 day retention options.",
      },
      {
        icon: Smartphone,
        title: "Remote Monitoring Anywhere",
        description:
          "Access live feeds and recordings from any device, anywhere in the world through our secure mobile app and web portal.",
      },
      {
        icon: Lock,
        title: "Weather-Resistant & Vandal-Proof",
        description:
          "Rugged equipment designed for harsh environments with IP67 rating and military-grade construction.",
      },
      {
        icon: BarChart3,
        title: "Multi-Camera Dashboard",
        description:
          "Unified management interface to control and monitor up to 256+ cameras from a single location with real-time alerts.",
      },
      {
        icon: TrendingUp,
        title: "Video Analytics & Reporting",
        description:
          "Behavioral detection, heat mapping, people counting, and comprehensive incident reports for forensic analysis.",
      },
    ],

    detailedFeatures: {
      "Resolution & Image Quality": [
        "8MP (3840x2160) and 4K resolution options for maximum detail",
        "40x optical zoom with HD clarity at any distance",
        "Wide Dynamic Range (WDR) for high-contrast environments",
        "3D Digital Noise Reduction for crystal-clear footage",
        "Adaptive Image Processing for varying lighting conditions",
        "RAW video format support for forensic analysis",
        "200fps high-speed recording capability",
        "Smart Codec Technology reducing bandwidth by 50%",
      ],
      "Intelligent Detection": [
        "AI-powered object detection (persons, vehicles, animals)",
        "Facial recognition with 99.8% accuracy rate",
        "Behavior recognition for abnormal activity",
        "Intrusion detection across defined zones",
        "Cross-line detection (people/vehicle direction)",
        "Crowd density detection and heat mapping",
        "Loitering detection with customizable timeframes",
        "Sound classification for additional alerts",
      ],
      "Storage & Archival": [
        "Edge storage for on-camera recording capacity",
        "NAS integration for centralized storage",
        "Cloud backup with 256-bit AES encryption",
        "Tiered storage strategy (hot/warm/cold)",
        "Automatic deletion policies with audit trails",
        "RAID protection against drive failures",
        "Geographic redundancy across multiple data centers",
        "Legal hold capabilities for compliance",
      ],
      "Integration & Connectivity": [
        "IP-based POE (Power Over Ethernet) technology",
        "4G/5G backup connectivity options",
        "ONVIF standard compliance for universal compatibility",
        "Integration with access control systems",
        "Alarm system integration and triggering",
        "VMS (Video Management Software) compatibility",
        "MQTT protocol support for IoT ecosystems",
        "REST API for custom integration development",
      ],
    },

    benefits: [
      {
        icon: TrendingUp,
        title: "Loss Prevention",
        benefit:
          "Deter criminal activity with visible surveillance presence. Documented deterrent effect reduces theft by up to 85%.",
      },
      {
        icon: Target,
        title: "Insurance Savings",
        benefit: "Reduce insurance premiums up to 15-20% with documented continuous monitoring and incident reports.",
      },
      {
        icon: BarChart3,
        title: "Forensic Investigation",
        benefit:
          "Investigate incidents with comprehensive video footage, timestamps, and facial recognition data for law enforcement.",
      },
      {
        icon: Eye,
        title: "Operational Monitoring",
        benefit:
          "Monitor multiple locations simultaneously from centralized control room. Track staff performance and customer flow.",
      },
      {
        icon: Lock,
        title: "Cost Efficiency",
        benefit: "Lower operational costs by 40% through automated monitoring and reduced security personnel needs.",
      },
      {
        icon: Smartphone,
        title: "24/7 Coverage",
        benefit:
          "Ensure staff and customer safety with visible security measures and round-the-clock surveillance capability.",
      },
      {
        icon: AlertCircle,
        title: "Compliance & Legal",
        benefit: "Ensure compliance with industry regulations, GDPR, and legal requirements with proper documentation.",
      },
      {
        icon: TrendingUp,
        title: "Business Intelligence",
        benefit:
          "Gain valuable business intelligence through customer behavior analysis, heat mapping, and traffic patterns.",
      },
    ],

    cameraTypes: [
      {
        type: "Dome Cameras",
        description: "Discreet and elegant, ideal for retail, offices, and public spaces",
        specs: "2MP-8MP, 30m IR range, 2.7-13.5mm lens, IP67",
      },
      {
        type: "Turret Cameras",
        description: "Flexible positioning for outdoor and indoor installations",
        specs: "4MP-8MP, 50m IR range, motorized lens, IP67/IP68",
      },
      {
        type: "Bullet Cameras",
        description: "Professional outdoor surveillance with long-range coverage",
        specs: "2MP-8MP, 80m IR range, motorized zoom, IP66/IP67",
      },
      {
        type: "PTZ (Pan-Tilt-Zoom)",
        description: "Active tracking for large areas requiring wide coverage",
        specs: "4MP-5MP, 150m IR range, 30x optical zoom, IP66",
      },
      {
        type: "Thermal Cameras",
        description: "Heat signature detection for perimeter security",
        specs: "640x480-1280x1024 resolution, 500m+ range, all-weather",
      },
      {
        type: "360° Panoramic",
        description: "Complete area coverage with single installation point",
        specs: "8MP total, 360° field of view, 30m IR range, IP66",
      },
    ],

    applications: [
      {
        industry: "Retail & Shopping Malls",
        use: "Loss prevention, customer behavior analysis, crowd management, checkout monitoring",
      },
      {
        industry: "Banking & Financial Services",
        use: "Vault monitoring, ATM surveillance, customer identification, forensic evidence",
      },
      {
        industry: "Manufacturing & Warehouses",
        use: "Inventory tracking, safety compliance, equipment monitoring, access control",
      },
      {
        industry: "Hospitality & Tourism",
        use: "Guest safety, property protection, parking area surveillance, common areas",
      },
      {
        industry: "Education & Schools",
        use: "Campus safety, student protection, facility monitoring, incident investigation",
      },
      {
        industry: "Healthcare Facilities",
        use: "Patient safety, medication security, pharmacy monitoring, emergency protocols",
      },
      {
        industry: "Government & Public Services",
        use: "Border security, facility protection, public safety, critical infrastructure",
      },
      {
        industry: "Transportation & Logistics",
        use: "Fleet tracking, cargo monitoring, terminal security, driver behavior",
      },
    ],

    technologies: ["Hikvision", "ZKTeco", "Cisco", "WesternDigital", "Seagate"],

    process: [
      {
        step: 1,
        title: "Site Assessment & Analysis",
        description:
          "Thorough analysis of your facility to determine optimal camera placement, coverage angles, lighting conditions, and network infrastructure requirements.",
        details: [
          "Facility walkthrough",
          "Coverage mapping",
          "Lighting analysis",
          "Network assessment",
          "Security risk evaluation",
          "Budget planning",
        ],
      },
      {
        step: 2,
        title: "Custom System Design",
        description:
          "Expert design of tailored surveillance system matching your specific security needs, coverage requirements, and budget parameters.",
        details: [
          "Camera selection",
          "Storage calculation",
          "Network design",
          "Integration planning",
          "Compliance review",
          "Documentation",
        ],
      },
      {
        step: 3,
        title: "Professional Installation",
        description:
          "Expert installation with minimal disruption to your operations. Includes cabling, mounting, network setup, and system configuration.",
        details: [
          "Equipment procurement",
          "Installation scheduling",
          "System setup",
          "Cable management",
          "POE configuration",
          "Network integration",
        ],
      },
      {
        step: 4,
        title: "Testing & Optimization",
        description:
          "Comprehensive testing to ensure all components function properly with optimized settings for your specific environment.",
        details: [
          "Image quality testing",
          "Night vision verification",
          "Network performance",
          "Alert testing",
          "Recording verification",
          "Backup testing",
        ],
      },
      {
        step: 5,
        title: "Staff Training & Documentation",
        description:
          "Complete training for your team on system operation, maintenance, and troubleshooting with comprehensive documentation.",
        details: [
          "User training",
          "Admin training",
          "Mobile app setup",
          "Alert configuration",
          "Report generation",
          "Troubleshooting guide",
        ],
      },
      {
        step: 6,
        title: "24/7 Support & Optimization",
        description:
          "Ongoing technical support, system optimization, software updates, and preventive maintenance to ensure peak performance.",
        details: [
          "Technical support",
          "System monitoring",
          "Software updates",
          "Maintenance scheduling",
          "Performance tuning",
          "Upgrade planning",
        ],
      },
    ],

    specifications: {
      Resolution: "2MP to 8MP (Ultra HD & 4K)",
      "Frame Rate": "Up to 200fps for high-speed recording",
      "Night Vision": "IR range up to 150m with WDR technology",
      Zoom: "8x optical, 30x motorized (PTZ models)",
      Storage: "Up to 2TB edge storage, unlimited cloud",
      Bandwidth: "8Mbps to 80Mbps (H.264/H.265 codec)",
      Connectivity: "PoE, ONVIF, 4G/5G backup",
      Certifications: "CE, FCC, IP66, IP67, IP68 rated",
    },

    roi: [
      { metric: "Loss Prevention", value: "Up to 85% reduction in theft" },
      { metric: "Insurance Savings", value: "15-20% premium reduction" },
      { metric: "Labor Reduction", value: "40% fewer security personnel needed" },
      { metric: "Response Time", value: "90% faster incident response" },
      { metric: "Investigation Efficiency", value: "75% faster forensic analysis" },
      { metric: "System Uptime", value: "99.9% availability guarantee" },
    ],

    caseStudies: [
      {
        title: "Retail Chain Security Overhaul",
        description: "Multi-location retail implementation with 150+ cameras across 12 locations",
        result: "Reduced inventory shrinkage by 82%, improved checkout accuracy by 45%",
      },
      {
        title: "Smart City Integration",
        description: "Public safety surveillance system for downtown area covering 25 intersections",
        result: "Crime rate reduced by 38%, average response time improved from 8 to 2 minutes",
      },
      {
        title: "Manufacturing Facility Protection",
        description: "Comprehensive surveillance for warehouse and production areas",
        result: "Equipment theft eliminated, safety compliance verified, productivity up 15%",
      },
    ],
  },

  "ict-support": {
    title: "ICT Support",
    subtitle: "Comprehensive IT Solutions & Technical Assistance",
    icon: Zap,
    color: "from-purple-600 to-purple-800",
    accentColor: "text-purple-600",
    image: "/ict-hero.jpg",
    overview:
      "Our ICT support services ensure your organization's technology infrastructure runs smoothly and efficiently.",
    mainFeatures: [],
    benefits: [],
    technologies: ["Cisco", "ZKTeco"],
    process: [],
  },

  "networking-services": {
    title: "Networking Services",
    subtitle: "Enterprise-Grade Network Infrastructure & Connectivity",
    icon: Network,
    color: "from-cyan-600 to-cyan-800",
    accentColor: "text-cyan-600",
    image: "/network-hero.jpg",
    overview: "We design, implement, and maintain robust networking infrastructure.",
    mainFeatures: [],
    benefits: [],
    technologies: ["Cisco", "ZKTeco", "Nemtek"],
    process: [],
  },

  "alarm-system-intercom": {
    title: "Alarm System & Intercom",
    subtitle: "Integrated Security & Communication Solutions",
    icon: Speaker,
    color: "from-indigo-600 to-indigo-800",
    accentColor: "text-indigo-600",
    image: "/alarm-hero.jpg",
    overview: "Protect your facility with our integrated alarm and intercom systems.",
    mainFeatures: [],
    benefits: [],
    technologies: ["ZKTeco", "Nemtek", "Aluha"],
    process: [],
  },
}

// Merged data structure and service data from updates
interface ServiceData {
  title: string
  subtitle: string
  color: string
  accentColor: string
  image: string // Added from updates
  overview: string
  coreFeatures: {
    icon: typeof CameraIcon // Updated icon type
    title: string
    description: string
  }[]
  advancedFeatures: {
    category: string
    items: string[]
  }[]
  specifications: {
    label: string
    value: string
  }[]
  keyBenefits: {
    metric: string
    description: string
  }[]
  useCases: {
    title: string
    description: string
    roi: string
  }[]
  implementations: {
    phase: string
    duration: string
    details: string[]
  }[]
  caseStudies: {
    company: string
    industry: string
    challenge: string
    solution: string
    result: string
  }[]
  certifications: string[]
  technologies: string[] // Added from updates
}

const servicesData: Record<string, ServiceData> = {
  "cctv-camera-installation": {
    title: "CCTV Camera Installation",
    subtitle: "Advanced Video Surveillance Systems",
    color: "from-blue-600 to-blue-800",
    accentColor: "text-blue-600",
    image: "/cctv-hero.jpg", // This image will be used for the banner
    overview:
      "Enterprise-grade CCTV camera systems designed to protect your assets, monitor operations, and provide comprehensive security coverage.",
    coreFeatures: [
      {
        icon: CameraIcon, // Updated to use the renamed icon
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
    useCases: [
      {
        title: "Retail & Shopping Centers",
        description: "Monitor customer behavior, prevent theft, track inventory movements",
        roi: "ROI in 6-8 months",
      },
      {
        title: "Banking & Financial",
        description: "Secure vaults, teller areas, ATMs with facial recognition",
        roi: "ROI in 4-6 months",
      },
      {
        title: "Manufacturing Plants",
        description: "Monitor production floors, warehouse, and personnel safety",
        roi: "ROI in 8-12 months",
      },
      {
        title: "Healthcare Facilities",
        description: "Secure patient areas, medication storage, and facility monitoring",
        roi: "ROI in 6-9 months",
      },
      {
        title: "Government & Education",
        description: "Campus security, perimeter monitoring, and incident documentation",
        roi: "ROI in 10-14 months",
      },
      {
        title: "Transportation Hubs",
        description: "Airport, railway, and bus terminal surveillance",
        roi: "ROI in 12-18 months",
      },
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
          "Maintenance and troubleshooting guides",
          "24/7 support contact information",
          "First 30-day monitoring and adjustments",
        ],
      },
    ],
    caseStudies: [
      {
        company: "Elite Retail Group",
        industry: "Retail & Shopping Centers",
        challenge: "High inventory shrinkage (4.2%) costing $2.3M annually across 45 locations",
        solution: "Deployed 2000+ AI-enabled cameras with facial recognition and behavior analytics across all stores",
        result:
          "Reduced shrinkage to 0.8% within 6 months ($2.1M annual savings), increased staff accountability, improved customer service through heat mapping",
      },
      {
        company: "National Bank Corporation",
        industry: "Financial Services",
        challenge: "Multiple security breaches and audit compliance gaps affecting operations",
        solution: "Installed 200 military-grade cameras with military-grade encryption and 5-year archival storage",
        result:
          "Zero security incidents in 2 years, full regulatory compliance, improved audit findings, rapid fraud investigation reduced from days to hours",
      },
      {
        company: "Premier Manufacturing Ltd",
        industry: "Manufacturing & Production",
        challenge: "Equipment downtime and worker safety incidents costing $5M+ annually",
        solution:
          "Implemented 500+ cameras with AI-powered anomaly detection and real-time alerts for safety violations",
        result:
          "Reduced downtime by 65%, worker incidents by 78%, improved production efficiency by 23%, ROI achieved in 7 months",
      },
    ],
    certifications: [
      "ISO 27001 (Information Security)",
      "ISO 9001 (Quality Management)",
      "SOC 2 Type II Compliance",
      "GDPR Compliant",
      "HIPAA Compatible",
      "PCI DSS Certified",
    ],
    technologies: ["Hikvision", "Cisco", "WesternDigital", "Seagate"],
  },

  "ict-support": {
    title: "ICT Support & Management",
    subtitle: "Managed IT Services & Technical Support",
    color: "from-purple-600 to-purple-800",
    accentColor: "text-purple-600",
    image: "/ict-hero.jpg", // This image will be used for the banner
    overview:
      "Comprehensive IT support services delivering 24/7 managed solutions to keep your business running smoothly and securely.",
    coreFeatures: [
      {
        icon: Headphones,
        title: "24/7 Help Desk Support",
        description: "Round-the-clock technical support via phone, email, and ticketing system",
      },
      {
        icon: Activity,
        title: "Proactive Monitoring",
        description: "Continuous system health monitoring with automated alerts",
      },
      {
        icon: Shield,
        title: "Security Management",
        description: "Comprehensive cybersecurity solutions and threat detection",
      },
      {
        icon: Database,
        title: "Data Protection",
        description: "Backup, disaster recovery, and business continuity planning",
      },
      {
        icon: Users,
        title: "User Management",
        description: "Account provisioning, access control, and identity management",
      },
      {
        icon: Cpu,
        title: "Infrastructure Management",
        description: "Server, network, and storage management",
      },
      {
        icon: TrendingUp,
        title: "Performance Optimization",
        description: "System tuning and capacity planning",
      },
      {
        icon: FileText,
        title: "Compliance & Reporting",
        description: "Regular audits, compliance checks, and detailed reporting",
      },
    ],
    advancedFeatures: [
      {
        category: "Help Desk & Support Services",
        items: [
          "Multi-channel support (Phone, Email, Chat, Portal)",
          "SLA-based response times (15min Critical, 1hr High, 4hr Medium)",
          "Knowledge base with 5000+ solutions",
          "Remote support via TeamViewer and AnyDesk",
          "On-site support for hardware issues",
          "Quarterly business reviews with management",
          "Service improvement recommendations",
          "Annual satisfaction surveys and feedback loop",
        ],
      },
      {
        category: "Proactive Monitoring & Management",
        items: [
          "24/7 NOC (Network Operations Center) monitoring",
          "Real-time system health dashboards",
          "Automated alerting with escalation procedures",
          "Log aggregation and centralized analysis",
          "Performance trending and capacity planning",
          "Patch management and update deployment",
          "Configuration management and change tracking",
          "Disaster recovery drills (quarterly)",
        ],
      },
      {
        category: "Security & Compliance",
        items: [
          "Security audit and vulnerability assessment",
          "Penetration testing (annual)",
          "Antivirus and malware protection",
          "Firewall and intrusion detection",
          "Data encryption (in transit and at rest)",
          "MFA and password policy enforcement",
          "GDPR, HIPAA, PCI-DSS compliance support",
          "Security training and awareness programs",
        ],
      },
      {
        category: "Business Continuity & Disaster Recovery",
        items: [
          "Backup automation with incremental/daily schedules",
          "Geo-redundant storage locations",
          "RTO (Recovery Time Objective) < 1 hour",
          "RPO (Recovery Point Objective) < 15 minutes",
          "Documented disaster recovery plans",
          "Annual DR testing and validation",
          "Hot-standby systems for critical services",
          "Business continuity documentation",
        ],
      },
    ],
    specifications: [
      { label: "Response Time (Critical)", value: "15 minutes" },
      { label: "Response Time (High)", value: "1 hour" },
      { label: "Uptime SLA", value: "99.95%" },
      { label: "Support Coverage", value: "24/7/365" },
      { label: "Backup Frequency", value: "Daily/Hourly (configurable)" },
      { label: "Recovery Time Objective", value: "< 1 hour" },
      { label: "Recovery Point Objective", value: "< 15 minutes" },
      { label: "Supported Platforms", value: "Windows, Linux, macOS, Cloud" },
    ],
    keyBenefits: [
      { metric: "95% reduction in downtime", description: "Through proactive monitoring and rapid response" },
      { metric: "78% faster issue resolution", description: "Via knowledge base and automated solutions" },
      { metric: "$3.2M annual savings", description: "Reducing operational costs and lost productivity" },
      { metric: "99.95% system availability", description: "Ensuring business continuity" },
      { metric: "45% fewer security incidents", description: "Through proactive threat detection" },
      { metric: "100% data recovery capability", description: "With comprehensive backup solutions" },
    ],
    useCases: [
      {
        title: "Enterprise Corporations",
        description: "Multi-location IT support with centralized management and reporting",
        roi: "ROI in 4-6 months",
      },
      {
        title: "Financial Institutions",
        description: "High-security compliance with audit trails and disaster recovery",
        roi: "ROI in 2-4 months",
      },
      {
        title: "Healthcare Providers",
        description: "HIPAA-compliant systems with critical uptime requirements",
        roi: "ROI in 5-7 months",
      },
      {
        title: "Educational Institutions",
        description: "Multi-campus support with student and faculty account management",
        roi: "ROI in 6-9 months",
      },
      {
        title: "Government Agencies",
        description: "Secure, classified systems with stringent compliance requirements",
        roi: "ROI in 8-12 months",
      },
      {
        title: "Rapidly Growing Startups",
        description: "Scalable IT infrastructure without dedicated IT staff",
        roi: "ROI in 3-5 months",
      },
    ],
    implementations: [
      {
        phase: "Phase 1: IT Audit & Assessment",
        duration: "3-4 weeks",
        details: [
          "Complete IT infrastructure audit",
          "Vulnerability and security assessment",
          "Current system documentation and inventory",
          "Performance baseline establishment",
          "Gap analysis and recommendations",
        ],
      },
      {
        phase: "Phase 2: Planning & Strategy",
        duration: "2-3 weeks",
        details: [
          "Develop IT roadmap and strategy",
          "Define SLAs and support levels",
          "Establish monitoring and alerting rules",
          "Create incident response procedures",
          "Plan migration and implementation timeline",
        ],
      },
      {
        phase: "Phase 3: Tool Deployment & Integration",
        duration: "2-3 weeks",
        details: [
          "Deploy monitoring and management tools",
          "Configure automated backups",
          "Setup security solutions and policies",
          "Integrate with existing systems",
          "Test all automation workflows",
        ],
      },
      {
        phase: "Phase 4: Staff Training & Documentation",
        duration: "1-2 weeks",
        details: [
          "Train IT staff on new tools and procedures",
          "Develop standard operating procedures",
          "Create troubleshooting guides",
          "Establish escalation procedures",
          "Complete documentation handover",
        ],
      },
      {
        phase: "Phase 5: Transition to 24/7 Support",
        duration: "1-2 weeks",
        details: [
          "Establish help desk operations",
          "Configure ticketing system",
          "Setup monitoring dashboards",
          "Begin proactive monitoring",
          "Establish on-call rotation",
        ],
      },
      {
        phase: "Phase 6: Optimization & Continuous Improvement",
        duration: "Ongoing",
        details: [
          "Weekly team meetings and performance reviews",
          "Monthly trend analysis and reporting",
          "Quarterly business reviews",
          "Annual strategy refreshes",
          "Continuous security and compliance updates",
        ],
      },
    ],
    caseStudies: [
      {
        company: "Global Financial Services Inc",
        industry: "Financial Services",
        challenge:
          "Multiple IT incidents causing 200+ hours of downtime annually, affecting operations and client satisfaction",
        solution: "Implemented 24/7 proactive monitoring, automated backup, and incident response procedures",
        result:
          "Reduced downtime to < 8 hours annually (96% improvement), achieved 99.95% uptime, improved client confidence, saved $1.8M in recovery costs",
      },
      {
        company: "Metropolitan Healthcare System",
        industry: "Healthcare",
        challenge: "HIPAA compliance gaps and lack of disaster recovery planning creating audit risks",
        solution: "Deployed compliant backup systems, encryption, and comprehensive disaster recovery planning",
        result:
          "Achieved 100% HIPAA compliance, passed all audits, recovered from ransomware attack in 45 minutes, gained ISO 27001 certification",
      },
      {
        company: "Tech Growth Startup Corp",
        industry: "Software Development",
        challenge: "Rapid growth outpacing IT staff capability, causing productivity losses",
        solution: "Transitioned to managed ICT support with automated provisioning and proactive monitoring",
        result:
          "Eliminated IT bottlenecks, 40% faster onboarding, reduced IT staff stress by 60%, reallocated IT resources to strategic projects",
      },
    ],
    certifications: [
      "ISO 27001 (Information Security)",
      "ISO 20000 (IT Service Management)",
      "ITIL Certified",
      "SOC 2 Type II",
      "GDPR Compliant",
      "HIPAA Compliant",
    ],
    technologies: ["Cisco", "ZKTeco"],
  },

  "networking-services": {
    title: "Networking Services",
    subtitle: "Enterprise Network Infrastructure & Solutions",
    color: "from-emerald-600 to-emerald-800", // Updated color
    accentColor: "text-emerald-600", // Updated accent color
    image: "/network-hero.jpg", // This image will be used for the banner
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
    useCases: [
      {
        title: "Multi-Location Enterprises",
        description: "Unified networks connecting multiple offices with secure hub-and-spoke architecture",
        roi: "ROI in 9-12 months",
      },
      {
        title: "Data Centers & Cloud",
        description: "High-performance infrastructure supporting massive data throughput",
        roi: "ROI in 6-9 months",
      },
      {
        title: "Educational Institutions",
        description: "Campus-wide network supporting thousands of students and staff",
        roi: "ROI in 12-18 months",
      },
      {
        title: "Manufacturing & Industrial",
        description: "Industrial IoT networks with real-time performance requirements",
        roi: "ROI in 8-12 months",
      },
      {
        title: "Healthcare Networks",
        description: "HIPAA-compliant networks supporting telemedicine and patient systems",
        roi: "ROI in 10-15 months",
      },
      {
        title: "Hospitality & Retail",
        description: "Customer-facing networks with guest WiFi and business operations",
        roi: "ROI in 7-10 months",
      },
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
        company: "Fortune 500 Tech Corporation",
        industry: "Technology & Software",
        challenge: "Outdated network infrastructure causing latency and productivity losses across 50 global offices",
        solution: "Deployed modern switching fabric with SD-WAN, cloud optimization, and 24/7 monitoring",
        result:
          "Reduced latency by 85%, improved employee productivity by 23%, cut WAN costs by 40%, achieved 99.99% uptime",
      },
      {
        company: "National University System",
        industry: "Education",
        challenge: "WiFi coverage issues affecting 40,000 students and staff across 8 campuses",
        solution: "Campus-wide WiFi 6E deployment with mesh networking and unified management",
        result:
          "Achieved 99%+ coverage, supported 25,000 concurrent connections, improved student experience scores by 67%",
      },
      {
        company: "Regional Healthcare Network",
        industry: "Healthcare",
        challenge: "Network bottlenecks impacting patient care systems and telemedicine capabilities",
        solution: "Implemented multi-gigabit core network with cloud connectivity and HIPAA-compliant security",
        result:
          "Doubled telemedicine capacity, reduced patient data transfer time by 70%, maintained HIPAA compliance, achieved ISO 27001 certification",
      },
    ],
    certifications: [
      "ISO 27001 (Information Security)",
      "ISO 9001 (Quality Management)",
      "SOC 2 Type II Compliance",
      "GDPR Compliant",
      "HIPAA Compatible",
      "NIST 800-171 Aligned",
    ],
    technologies: ["Cisco", "ZKTeco", "Nemtek"],
  },

  "alarm-system-intercom": {
    title: "Alarm System & Intercom",
    subtitle: "Integrated Security & Communication Solutions",
    color: "from-red-600 to-red-800", // Updated color
    accentColor: "text-red-600", // Updated accent color
    image: "/alarm-hero.jpg", // This image will be used for the banner
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
    useCases: [
      {
        title: "Corporate Office Buildings",
        description: "Multi-floor office with visitor management and emergency communication",
        roi: "ROI in 18-24 months",
      },
      {
        title: "Government & Secure Facilities",
        description: "High-security installations with advanced access control",
        roi: "ROI in 12-18 months",
      },
      {
        title: "Retail & Shopping Centers",
        description: "Multiple stores with coordinated emergency response",
        roi: "ROI in 15-20 months",
      },
      {
        title: "Educational Campuses",
        description: "Campus-wide emergency notification and lock-down systems",
        roi: "ROI in 20-24 months",
      },
      {
        title: "Healthcare Facilities",
        description: "Hospital security with patient privacy and staff safety features",
        roi: "ROI in 18-24 months",
      },
      {
        title: "Industrial Facilities",
        description: "Manufacturing plants with hazardous area monitoring",
        roi: "ROI in 16-22 months",
      },
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
          " 24/7 monitoring center support",
          "Monthly system testing",
          "Quarterly security reviews",
          "Annual certifications and audits",
          "Continuous system optimization",
        ],
      },
    ],
    caseStudies: [
      {
        company: "Liberty Corporate Park",
        industry: "Commercial Real Estate",
        challenge: "Multiple break-ins costing $800K annually with poor emergency communication protocols",
        solution: "Installed integrated alarm system with CCTV integration and HD intercom emergency communication",
        result:
          "Zero break-ins in 3 years, 100% emergency communication coverage, improved tenant satisfaction by 45%, ROI in 14 months",
      },
      {
        company: "Northeast Medical Center",
        industry: "Healthcare",
        challenge: "Inadequate staff communication during emergencies, high violence incidents against staff",
        solution:
          "Deployed integrated alarm system with emergency call stations and two-way intercom throughout facility",
        result:
          "Reduced violent incidents by 72%, improved staff response time by 85%, achieved JC compliance for emergency procedures",
      },
      {
        company: "Midwest University System",
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
      "UL (Underwriters Laboratories) Certified",
      "ISO 27001 (Information Security)",
      "SOC 2 Type II Compliant",
      "NFPA 72 (Fire Alarm Code) Compliant",
      "GDPR Compatible",
      "HIPAA Compatible",
      "FERPA Aligned",
    ],
    technologies: ["ZKTeco", "Nemtek", "Aluha"],
  },
}

// const Camera = Shield // This was a duplicate, removed in favor of the one from updates

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const slug = resolvedParams.slug
  const [activeTab, setActiveTab] = useState("Video Resolution & Quality")
  const [expandedApplication, setExpandedApplication] = useState<string | null>(null)
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null)

  // Get the service data based on the slug
  let service = servicesData[slug as keyof typeof servicesData]

  // Handle 'cctv' alias for 'cctv-camera-installation'
  if (!service && slug === "cctv") {
    service = servicesData["cctv-camera-installation"]
  }

  // Logic for handling cases where the service is not found
  // if (!service || !service.mainFeatures || service.mainFeatures.length === 0) { // Original logic
  //   return (
  //     <main className="min-h-screen bg-background">
  //       <Header />
  //       <div className="pt-24 flex items-center justify-center h-screen">
  //         <div className="text-center">
  //           <h1 className="text-4xl font-bold mb-4">Service Page Coming Soon</h1>
  //           <Link href="/services" className="text-primary hover:underline">
  //             Back to Services
  //           </Link>
  //         </div>
  //       </div>
  //       <Footer />
  //     </main>
  //   )
  // }

  // Updated logic for service not found
  if (!service) {
    return <div className="text-center py-20">Service not found</div>
  }

  // const Icon = service.icon // Original logic

  return (
    // Updated main tag with new background from updates
    // <main className="min-h-screen bg-white">
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950">
      <Header /> {/* Keep header */}
      <div className="pt-24">
        {/* Hero Section */}
        {/* <section
          className={`bg-gradient-to-r ${service.color} text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-12 mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Icon size={48} />
                  </div>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{service.title}</h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl">{service.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-white/90 transition font-semibold flex items-center gap-2">
                    Get Consultation <ArrowRight size={20} />
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="hidden lg:block flex-1 relative">
                <div className="relative w-full h-80 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Updated Hero Section from updates */}
        <section className="relative mt-20 h-96 overflow-hidden">
          <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" priority />
          <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-60`} /> {/* Increased opacity */}
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
        {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <p className="text-xl text-foreground leading-relaxed mb-8">{service.overview}</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Years Experience", value: "20+" },
                { label: "Systems Installed", value: "2000+" },
                { label: "Uptime Guarantee", value: "99.9%" },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                  <div className={`text-4xl font-bold ${service.accentColor} mb-2`}>{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        {/* Updated Overview Section from updates */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <p className="text-lg text-slate-200">{service.overview}</p>
          </div>
        </section>

        {/* Main Features Grid */}
        {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Core Features & Capabilities</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive surveillance solutions built with cutting-edge technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.mainFeatures.map((feature, index) => {
                const FeatureIcon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition group"
                  >
                    <div className={`p-3 rounded-lg bg-blue-50 w-fit mb-4 group-hover:bg-blue-100 transition`}>
                      <FeatureIcon className={`${service.accentColor}`} size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section> */}
        {/* Updated Core Features Section from updates */}
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

        {/* Detailed Features Section */}
        {/* {service.detailedFeatures && (
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features & Specifications</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(service.detailedFeatures).map(([category, features]) => (
                  <div key={category} className="bg-white p-8 rounded-xl border border-gray-200">
                    <h3 className={`text-2xl font-bold mb-6 ${service.accentColor}`}>{category}</h3>
                    <ul className="space-y-3">
                      {(features as string[]).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className={`${service.accentColor} mt-1 flex-shrink-0`} size={20} />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )} */}
        {/* Updated Advanced Features Section from updates */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white mb-8">Advanced Features</h2>
          <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-700">
            {service.advancedFeatures.map((feature) => (
              <button
                key={feature.category}
                onClick={() => setActiveTab(feature.category)}
                className={`px-6 py-3 font-semibold transition-colors ${activeTab === feature.category
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

        {/* Camera Types / Products */}
        {/* {service.cameraTypes && (
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Available Camera Solutions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.cameraTypes.map((camera, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 hover:shadow-lg transition"
                  >
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{camera.type}</h3>
                    <p className="text-blue-800 mb-4">{camera.description}</p>
                    <div className="pt-4 border-t border-blue-200">
                      <p className="text-sm text-blue-700 font-mono">{camera.specs}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )} */}

        {/* Applications / Industries */}
        {/* {service.applications && (
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Industry Solutions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.applications.map((app, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-xl border border-gray-200 cursor-pointer hover:border-blue-400 hover:shadow-lg transition"
                    onClick={() => setExpandedApplication(expandedApplication === app.industry ? null : app.industry)}
                  >
                    <h3 className={`text-xl font-bold mb-3 ${service.accentColor}`}>{app.industry}</h3>
                    <p className="text-foreground text-sm leading-relaxed">{app.use}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )} */}

        {/* Benefits */}
        {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Business Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.benefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
                  >
                    <div className={`p-3 rounded-lg bg-blue-50 w-fit mb-4`}>
                      <BenefitIcon className={`${service.accentColor}`} size={24} />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.benefit}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section> */}
        {/* Updated Key Benefits Section from updates */}
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

        {/* ROI Section */}
        {/* {service.roi && (
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Return on Investment</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {service.roi.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center"
                  >
                    <p className="text-lg font-semibold mb-2">{item.metric}</p>
                    <p className="text-3xl font-bold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )} */}

        {/* Implementation Process */}
        {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Implementation Process</h2>
            <div className="space-y-6">
              {service.process.map((item) => (
                <div
                  key={item.step}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-6 p-8">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} text-white flex items-center justify-center text-2xl font-bold flex-shrink-0`}
                    >
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {item.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <Check className={`${service.accentColor}`} size={16} />
                            <span className="text-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        {/* Updated Implementation Process Section from updates */}
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
                      <p className="text-slate-400">{impl.duration}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${expandedPhase === idx ? "rotate-180" : ""
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

        {/* Technical Specifications */}
        {/* {service.specifications && (
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Technical Specifications</h2>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {Object.entries(service.specifications).map(([key, value]) => (
                  <div key={key} className="bg-white p-6 rounded-lg border border-gray-200">
                    <dt className={`text-sm font-semibold ${service.accentColor} uppercase tracking-wide mb-2`}>
                      {key}
                    </dt>
                    <dd className="text-lg font-bold text-foreground">{value}</dd>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )} */}
        {/* Updated Specifications Section from updates */}
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

        {/* Case Studies */}
        {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Success Stories & Case Studies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {service.caseStudies.map((study, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition"
                >
                  <h3 className={`text-xl font-bold ${service.accentColor} mb-3`}>{study.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{study.description}</p>
                  <div className={`pt-4 border-t border-gray-200`}>
                    <p className="text-sm font-semibold text-foreground">
                      <span className={service.accentColor}>Result:</span> {study.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        {/* Updated Case Studies Section from updates */}
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

        {/* Technologies Used */}
        {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Technology Partners</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {service.technologies.map((tech) => (
                <div
                  key={tech}
                  className="bg-white px-8 py-4 rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition font-semibold text-foreground flex items-center gap-2"
                >
                  <Check className="text-blue-600" size={20} />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section> */}
        {/* Updated Certifications & Technologies Section from updates */}
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

        {/* Final CTA */}
        {/* <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Security?</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Our expert team is ready to design and implement the perfect surveillance solution for your organization.
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-white/90 transition font-bold text-lg flex items-center justify-center gap-2">
                Get Free Consultation <ArrowRight size={24} />
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white/10 transition font-bold text-lg">
                View Pricing
              </button>
            </div>
          </div>
        </section> */}
        {/* Updated CTA Section from updates */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className={`bg-gradient-to-r ${service.color} rounded-lg p-12 text-white`}>
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Security?</h2>
            <p className="text-lg opacity-90 mb-8">
              Contact our experts today to discuss how {service.title} can benefit your organization.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Get in Touch
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
      {/* Footer spacing added from updates */}
      <div className="h-16" />
    </div>
  )
}
