"use client"

import React from "react"

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

            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 w-full h-full drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            >
                {/* Face Base */}
                <path
                    d="M20 40C20 25 35 15 50 15C65 15 80 25 80 40V60C80 75 65 85 50 85C35 85 20 75 20 60V40Z"
                    fill="#0F172A"
                    stroke="#1E293B"
                    strokeWidth="2"
                />

                {/* Brow Ridge */}
                <path
                    d="M25 42C25 42 35 35 50 35C65 35 75 42 75 42"
                    stroke="url(#blue-grad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                />

                {/* Eyes (Cybernetic Glow) */}
                <circle cx="35" cy="48" r="4" className="fill-primary animate-pulse" />
                <circle cx="65" cy="48" r="4" className="fill-primary animate-pulse" />

                {/* Muzzle Area */}
                <path
                    d="M35 60C35 60 40 55 50 55C60 55 65 60 65 60V75C65 80 60 82 50 82C40 82 35 80 35 75V60Z"
                    fill="#1E293B"
                    stroke="#334155"
                    strokeWidth="1"
                />

                {/* Nostrils */}
                <path d="M46 72H48" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
                <path d="M52 72H54" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />

                {/* Tech Accents (Circuit lines) */}
                <path d="M15 50H25" stroke="#3B82F6" strokeWidth="0.5" opacity="0.3" />
                <path d="M75 50H85" stroke="#3B82F6" strokeWidth="0.5" opacity="0.3" />
                <path d="M50 10V20" stroke="#3B82F6" strokeWidth="0.5" opacity="0.3" />

                {/* Definitions */}
                <defs>
                    <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="50%" stopColor="#60A5FA" />
                        <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}
