import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free Strategy Session | Book a Consultation",
    description: "Schedule a personalized ICT and security audit with our senior engineers. Future-proof your infrastructure with a tactical design roadmap.",
}

export default function ConsultationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
