import React from "react"
import Image from "next/image"

interface LogoProps {
    size?: number
    className?: string
}

export default function Logo({ size = 48, className = "" }: LogoProps) {
    return (
        <div
            className={`relative flex items-center justify-center ${className}`}
            style={{ width: size, height: size }}
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>

            <div className="relative z-10 w-full h-full">
                <Image
                    src="/beastmode-ape.png"
                    alt="BeastMode Logo"
                    width={size}
                    height={size}
                    className="object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                    priority
                />
            </div>
        </div>
    )
}
