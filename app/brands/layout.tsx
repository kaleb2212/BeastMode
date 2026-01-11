import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Authorized Partners | Industry-Leading Hardware",
    description: "BeastMode Technologies partners with Hikvision, Cisco, ZKTeco, and Nemtek to deliver military-grade security and networking solutions.",
}

export default function BrandsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
