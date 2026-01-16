"use client";

import React from "react";

export default function AuroraBackground() {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            {/* Dark Base Background */}
            <div className="absolute inset-0 bg-neutral-950" />

            {/* Orb 1: Cyan/Blue - Top Left moving */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-500/30 rounded-full blur-[100px] animate-blob mix-blend-screen"
            />

            {/* Orb 2: Purple/Blue - Bottom Right moving */}
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"
            />

            {/* Orb 3: Accent - Center/Moving */}
            <div
                className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-cyan-400/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"
            />

            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-neutral-950/40" />
        </div>
    );
}
