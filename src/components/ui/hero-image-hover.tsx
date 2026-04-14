import { useState } from "react"

export function HeroImageHover () {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Anime image */}
            <img
                src="/src/assets/main-hero-me.webp"
                alt="David Justin"
                className="transition-opacity duration-500"
                style={{ opacity: isHovered ? 0 : 1 }}
            />

            {/* Real photo — fades in on hover */}
            <img
                src="/src/assets/test.jpeg"
                alt="David Justin"
                className="absolute inset-0 transition-opacity duration-500"
                style={{ opacity: isHovered ? 1 : 0 }}
            />
        </div>
    )
}