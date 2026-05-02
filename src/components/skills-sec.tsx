import {  useInView, motion, useAnimation, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

const languages = [
    {img: "/public/images/html5.svg", text: "HTML", alt: "html"},
    {img: "/public/images/css3-original.svg", text: "CSS", alt: "css" },
    {img: "/public/images/javascript.svg", text: "JavaScript", alt: "javascript"},
    {img: "/public/images/python.svg", text: "Python", alt: "python"},
    {img: "/public/images/java.svg", text: "Java", alt: "java"},
    {img: "/public/images/mysql.svg", text: "MySQL", alt: "mysql"},
    {img: "/public/images/typescript.svg", text: "TypeScript", alt: "typescript"},
]

const frameworks = [
    {img: "/public/images/react.svg", text: "React", alt: "react"},
    {img: "/public/images/vite.svg", text: "Vite", alt: "vite"},
    {img: "/public/images/laravel.svg", text: "Laravel", alt: "laravel"},
    {img: "/public/images/tailwindcss.svg", text: "TailwindCSS", alt: "tailwindcss"},
    {img: "/public/images/spring-boot.svg", text: "SpringBoot", alt: "springboot"},
    {img: "/public/images/flask.svg", text: "Flask", alt: "flask"},
    {img: "/public/images/opencv.svg", text: "OpenCV", alt: "opencv"},
    {img: "/public/images/mediapipe.png", text: "MediaPipe", alt: "mediapipe"},
]

const tools = [
    {img: "/public/images/git.svg", text: "Git", alt: "git"},
    {img: "/public/images/github.svg", text: "GitHub", alt: "github"},
    {img: "/public/images/shadcn.svg", text: "Shadcn", alt: "Shadcn"},
    {img: "/public/images/framer.svg", text: "Framer Motion", alt: "framerMotion"},
    {img: "/public/images/figma.svg", text: "Figma", alt: "figma"},
    {img: "/public/images/chatgpt.svg", text: "ChatGPT", alt: "chatgpt"},
    {img: "/public/images/claude.png", text: "ClaudeCode", alt: "claudecode"}
]

type SkillItem = {
    img: string
    text: string
    alt: string
}

type SkillCardProps = {
    title: string
    data: SkillItem[]
}

function SkillCard({title, data}: SkillCardProps) {

    return (
        <div className="flex flex-col items-center">
            <div className="m-8">
                <h1 className="text-xl font-bold">{title}</h1>
            </div>
                        
            <div className="grid grid-cols-3 grid-rows-2 ">
                    {data.map((items, i) => (    
                    <div key={i} className="flex flex-wrap bg-foreground shadow-xl/60 items-center justify-center rounded-lg m-6 p-4 gap-4">
                        <div>
                            <img className="w-10" src={items.img} alt={items.alt}/>
                        </div>
                        <span>{items.text}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}




export function SkillSec () {
    const containerRef = useRef(null)

    const isInView = useInView(containerRef, {once: true})
    const mainControls = useAnimation()

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 20%"]
    })

    const skillOneBox = useTransform(
        scrollYProgress,
        [0, 1],
        ["-100", "0%"]
    )

    const skillTwoBox = useTransform(
        scrollYProgress,
        [0, 1],
        ["100%", "0%"]
    )

    const skillThreeBox = useTransform(
        scrollYProgress,
        [0, 1],
        ["100%", "0%"]
    )
    const skillOpacity = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0, 0.5, 1]
    )

    useEffect (() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <div className="relative overflow-hidden">
            
            {/* Left spotlight */}
            <div className="absolute top-0 left-0 pointer-events-none -translate-x-1/4 -translate-y-1/4">
                <div className="w-190 h-30 bg-[#7226FF] rounded-r-full blur-3xl opacity-60 rotate-40 -translate-x-1/4 translate-y-10"/>
                <div className="w-120 h-15 bg-[#A026FF] rounded-r-4xl rotate-40 blur-xl opacity-90"/>
            </div>

            {/* Right spotlight */}
            <div className="absolute top-0 right-0 pointer-events-none translate-x-100 -translate-y-1/4">
                <div className="w-190 h-30 bg-[#7226FF] rounded-r-full blur-3xl opacity-60 -rotate-40 -translate-x-20  translate-y-10"/>
                <div className="w-120 h-15 bg-[#A026FF] rounded-r-4xl -rotate-40 blur-xl opacity-90"/>
            </div>
            
            
            <div className="flex flex-col place-items-center pt-28 py-12 px-4 gap-6" ref={containerRef} >
                <div  className="relative w-28 top-5 h-1 bg-[#A026FF] blur-sm"/>
                <motion.h1 
                    className="text-4xl font-bold border-t-4"
                    animate={mainControls}
                    initial="hidden"
                    variants={{
                        hidden: { opacity: 0, y: 75},
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                    transition={{ delay: 0.5}}
                >
                    SKILLS
                </motion.h1>
                
            </div>

            
            {/* Grid Boxes */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-24">
                <motion.div style={{x: skillOneBox, opacity: skillOpacity}} >
                    <SkillCard title="Languages" data={languages} />
                </motion.div>
                
                <motion.div style={{x: skillTwoBox, opacity: skillOpacity}}>
                    <SkillCard title="Frameworks" data={frameworks} />
                </motion.div>
                

                <motion.div 
                    className="md:col-span-2 flex justify-center"
                    style={{y: skillThreeBox, opacity: skillOpacity}}
                    
                >
                    <div className="w-full md:w-1/2">
                        <SkillCard title="Tools" data={tools} />
                    </div>
                </motion.div>

            </div>
        </div>
    )
}