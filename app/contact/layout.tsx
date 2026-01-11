import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us | Strategic Security Partnership",
    description: "Get in touch with BeastMode Technologies. Contact our tactical operations center for ICT support, system maintenance, and new security projects in Ethiopia.",
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
