import { useEffect, useRef, useState } from "react"

export function GridBox () {
    const glowCursor = useRef<HTMLDivElement>(null)
    

    const [gridSize, setGridSize] = useState({
        cols: 8,
        rows: 5,
    })
    useEffect (() => {
        const updateGrid = () => {
            if (window.innerWidth < 640) {
                setGridSize({cols: 4, rows: 7})
            } else if (window.innerWidth < 1024) {
                setGridSize({cols: 6, rows: 6})
            } else {
                setGridSize({cols: 8, rows: 5})
            }
        }
        updateGrid()
        window.addEventListener("resize", updateGrid)

        return () => window.removeEventListener("resize", updateGrid)
    }, [])

    useEffect (() => {
        const moveGlow = (e: MouseEvent) => {
            if (!glowCursor.current)
                return
            glowCursor.current.style.left = `${e.clientX}px`
            glowCursor.current.style.top = `${e.clientY}px`
            glowCursor.current.style.opacity = "1"
        }

        const hideGlow = () => {
            if (!glowCursor.current)
                return
            glowCursor.current.style.opacity = "0"
        }

        window.addEventListener("mousemove", moveGlow)
        window.addEventListener("mouseleave", hideGlow)

        return () => {
            window.removeEventListener("mousemove", moveGlow)
            window.removeEventListener("mouseleave", hideGlow)
        }
    }, [])

    const {cols, rows} = gridSize

    return (
        <div
            className="absolute inset-0 z-0 overflow-hidden bg-foreground "
        >
            {/* Glow layer */}
            <div
                ref={glowCursor}
                className="pointer-events-none absolute opacity-0 transition-opacity duration-300"
                style={{
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(160,38,255,0.55) 0%, rgba(144,38,255,0.18) 45%, transparent 70%)",
                    transform: "translate(-50%, -50%)",
                    zIndex: 0,
                }}
            />

            {/* Grid layer */}
            <div
                className="relative w-full h-full grid"
                style={{
                    zIndex: 1,
                    gridTemplateColumns: `repeat(${cols}, 1fr)`,
                    gridTemplateRows: `repeat(${rows}, 1fr)`,
                    gap: window.innerWidth < 640 ? "6px" : "10px",
                }}
            >
                {Array.from({ length: cols * rows }).map((_, i) => {
                    const col = i % cols
                    const row = Math.floor(i / cols)

                    const isTop = row === 0
                    const isBottom = row === rows - 1
                    const isLeft = col === 0
                    const isRight = col === cols - 1

                    const radius = [
                        isTop || isLeft ? "0" : "12px",      // top-left corner
                        isTop || isRight ? "0" : "12px",     // top-right corner
                        isBottom || isRight ? "0" : "12px",  // bottom-right corner
                        isBottom || isLeft ? "0" : "12px",   // bottom-left corner
                    ].join(" ")

                    return (
                        <div
                            key={i}
                            className="bg-foreground shadow-xl/60"          // grid boxes styles
                            style={{ borderRadius: radius}}
                        />
                    )
                })}
            </div>
        </div>
    )
}