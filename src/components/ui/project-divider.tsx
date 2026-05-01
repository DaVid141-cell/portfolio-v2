import {motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react"

const segments = [372, 324, 308, 308, 324]
const total = segments.reduce((a, b) => a + b, 0)

function getCircleProgress(index: number) {
    const heightBefore = segments.slice(0, index).reduce((a, b) => a + b, 0)
    return heightBefore / total
}

export function ProjectDivider() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div ref={ref} className="relative flex flex-col items-center mt-28">

            {/* Scroll progress light */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-px origin-top"
                style={{
                    scaleY,
                    height: "100%",
                    background: "linear-gradient(to bottom, #A026FF, #7226FF, transparent)",
                    boxShadow: "0 0 8px #A026FF, 0 0 16px #7226FF",
                }}
            />

            {/* Static divider */}
            <div className="flex flex-col items-center gap-0 z-10">

                {/* Top small circle */}
                <LitCircle size="small" progress={scrollYProgress} threshold={0} />

                {segments.map((height, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="w-px bg-white/10" style={{ minHeight: `${height}px` }} />
                        <LitCircle
                            size="large"
                            progress={scrollYProgress}
                            threshold={getCircleProgress(i + 1)}
                        />
                    </div>
                ))}

            </div>
        </div>
    )
}

function LitCircle({ size, progress, threshold }: { size: "small" | "large"
        progress: any
        threshold: number
    }) {
    const glow = useTransform(progress, [threshold - 0.05, threshold], [0, 1])
    const scale = useTransform(progress, [threshold - 0.05, threshold], [1, 1.4])

    const dim = size === "small" ? "w-3 h-3" : "w-5 h-5"

    return (
        <motion.div
            className={`${dim} rounded-full`}
            style={{
                scale,
                backgroundColor: useTransform(
                    glow,
                    [0, 1],
                    ["rgba(255,255,255,0.3)", "rgba(160,38,255,1)"]
                ),
                boxShadow: useTransform(
                    glow,
                    [0, 1],
                    ["0 0 0px transparent", "0 0 12px #A026FF, 0 0 24px #7226FF"]
                ),
            }}
        />
    )
}