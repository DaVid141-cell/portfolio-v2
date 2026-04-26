import { Code, Heart, Lightbulb, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"

const info = [
    { label: "Age", value: "20" },
    { label: "Country", value: "Cebu City, Philippines" },
    { label: "Degree", value: "Software Engineering" },
    { label: "Gmail", value: "chaosdudeserad@gmail.com"}
]

export function AboutMeSec() {

    const [mousePointer, setMousePointer] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const setFormEvent = (e: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                    setMousePointer({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                    });
                }
            };
        window.addEventListener("mousemove", setFormEvent);

        return () => window.removeEventListener("mousemove", setFormEvent);
    }, []);

    const size = isHovered ? 150 : 30;
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="relative flex justify-center items-center w-full min-h-screen px-10 pt-16">
            <div className="absolute -rotate-90 left-75">
                <h1 className="text-6xl font-bold overline">ABOUT ME</h1>
            </div>

            {/* Spotlight */}
            <div className="absolute -top-200 left-1/2 -translate-x-1/2 w-300 h-300 bg-[#7226FF] rotate-40 blur-3xl opacity-40 rounded-full overflow-hidden "/>
            <div className="absolute -top-100 left-1/2 -translate-x-1/2 w-150 h-150 bg-[#A026FF] rotate-40 blur-3xl opacity-80 rounded-full overflow-hidden "/>

             {/* Main card */}
            <div className="relative w-full max-w-4xl overflow-hidden shadow-2xl bg-foreground m-20">
                <div className="grid gap-2 p-4 bg-background"
                    style={{
                        gridTemplateColumns: "1fr 1fr 0.8fr",
                        gridTemplateRows: "auto auto auto auto",
                    }}>

                   {/* Row 1 — Image + Name with mask hover effect */}
                    <div ref={containerRef} className="relative h-58 col-span-3 overflow-hidden flex">

                        {/* Normal layer — always visible */}
                        <div className="flex w-full h-full">
                            {/* Left — image placeholder */}
                            <div className="bg-background h-full manga-box-1 shadow-2xl border-2"
                                style={{ width: "33%" }}
                            >
                                {/* Image here */}
                                <img className="w-60 flex relative bottom-15" src="/src/assets/fixed-me.webp"/>
                            </div>

                            {/* Right — normal text */}
                            <div className="bg-[#1a1a1a] flex-1 flex items-center justify-center px-10 manga-box-2">
                                <h1 className="text-white text-6xl font-black tracking-tight">I'M DAVID</h1>
                            </div>
                        </div>

                        {/* Mask layer — revealed on hover */}
                        <motion.div
                            className="absolute inset-0 flex"
                            animate={{
                                webkitMaskPosition: `${mousePointer.x - size / 2}px ${mousePointer.y - size / 2}px`,
                                webkitMaskSize: `${size}px`,
                            }}
                            transition={{ ease: "backOut", duration: 0.4 }}
                            style={{
                                WebkitMaskImage: "url('/src/assets/mask.webp')",
                                WebkitMaskRepeat: "no-repeat",
                            }}
                        >
                            {/* Left — revealed image */}
                            <div
                                className="bg-background h-full flex items-center justify-center manga-box-1"
                                style={{ width: "33%" }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {/* Different image or color revealed here */}
                                <img className="w-200" src="/src/assets/aizen-fix.webp"/>
                            </div>

                            {/* Right — revealed text */}
                            <div
                                className="bg-[#A026FF] flex-1 flex items-center justify-center px-10 manga-box-2"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <h1 className="text-white text-6xl font-black tracking-tight cursor-default ml-10">
                                    I'M FULL STACK DEVELOPER
                                </h1>
                            </div>
                        </motion.div>

                    </div>

                    {/* Row 2 trait 1 */}
                    <div className=" p-6 flex flex-col gap-3 border-2 shadow-lg">
                        <div className="bg-black rounded-xl p-2 w-fit">
                            <Code className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="font-bold text-lg text-black">Clean Code</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">Well-structured, maintainable, reusable code.</p>
                    </div>

                    {/* Row 2 trait 2 */}
                    <div className=" p-6 flex flex-col gap-3 border-2 shadow-lg">
                        <div className="bg-black rounded-xl p-2 w-fit">
                            <Lightbulb className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="font-bold text-lg text-black">Continuous Learning</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">Constantly exploring new technologies and approaches to solve complex problems.</p>
                    </div>

                    {/* Info panel — right column spans rows 2 & 3 */}
                    <div className=" p-6 row-span-2 flex flex-col justify-center gap-4 border-2 shadow-lg">
                        {info.map((item, i) => (
                            <div key={i} className="border-b border-black/10 pb-3 last:border-0">
                                <p className="text-xs text-black font-bold uppercase tracking-widest mb-1">{item.label}</p>
                                <p className="text-muted-foreground font-medium">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Row 3 trait 3 */}
                    <div className=" p-6 flex flex-col gap-3 border-2 shadow-lg">
                        <div className="bg-black rounded-xl p-2 w-fit">
                            <Heart className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="font-bold text-lg text-black">Passion</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">Deeply committed to crafting exceptional softwares.</p>
                    </div>

                    {/* Row 3 trait 4 */}
                    <div className=" p-6 flex flex-col gap-3 border-2 shadow-lg">
                        <div className="bg-black rounded-xl p-2 w-fit">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="font-bold text-lg text-black">Collaboration</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">Believing in the power of teamwork and open communication to achieve greatness.</p>
                    </div>

                    {/* Row 4 — Bio spans all 3 columns */}
                    <div className=" col-span-3 p-8 border-2 shadow-lg">
                        <p className="text-black leading-relaxed text-sm max-w-3xl">
                            I'm a Software Engineering student specializing in building fast, scalable, and SEO-friendly 
                            web applications. I turn complex ideas into clean, functional digital solutions using modern 
                            technologies from responsive front-end design to secure back-end systems. 
                            <br/>
                            I'm Motivated to build meaningful projects, gain hands-on experience, and continuously grow as a developer. 
                            Dedicated to applying creativity, persistence, and problem-solving skills to deliver quality results.
                            And I'm also exploring 
                            Data Science, Machine Learning, and Game Development.To constantly refine my skills with every project I make.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}