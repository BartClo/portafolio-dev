"use client";

export const AnimatedBackground = () => {
    return (
        <div className="animated-background fixed inset-0 w-screen h-screen overflow-hidden bg-neutral-950 pointer-events-none -z-50">
            <div className="animated-background__orb animated-background__orb--cyan" />
            <div className="animated-background__orb animated-background__orb--blue" />
            <div className="animated-background__orb animated-background__orb--violet" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_68%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/25 to-neutral-950/80" />
        </div>
    );
};

