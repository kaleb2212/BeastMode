import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "CCTV Solution Wizard | Custom Security Matrix",
    description: "Design your custom CCTV security matrix in minutes. Get a tactical hardware roadmap and professional design for your residential or commercial property.",
}

export default function GetStartedLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
