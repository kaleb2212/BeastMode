import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "System Architecture | Unified ICT Ecosystem",
    description: "Visualize the BeastMode unified ICT and security ecosystem. See how our security edge, neural core, and command center integrate into a seamless infrastructure.",
}

export default function ArchitectureLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
