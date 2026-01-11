import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "System Support & Technical Intelligence",
    description: "Access our system integrity dashboard and technical support hub. 24/7 assistance for your ICT and security infrastructure.",
}

export default function SupportLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
