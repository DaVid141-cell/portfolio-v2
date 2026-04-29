
const languages = [
    {img: "/src/assets/images/html5.svg", text: "HTML", alt: "html"},
    {img: "/src/assets/images/css3-original.svg", text: "CSS", alt: "css" },
    {img: "/src/assets/images/javascript.svg", text: "JavaScript", alt: "javascript"},
    {img: "/src/assets/images/python.svg", text: "Python", alt: "python"},
    {img: "/src/assets/images/java.svg", text: "Java", alt: "java"},
    {img: "/src/assets/images/mysql.svg", text: "MySQL", alt: "mysql"},
    {img: "/src/assets/images/typescript.svg", text: "TypeScript", alt: "typescript"},
]

const frameworks = [
    {img: "/src/assets/images/react.svg", text: "React", alt: "react"},
    {img: "/src/assets/images/vite.svg", text: "Vite", alt: "vite"},
    {img: "/src/assets/images/laravel.svg", text: "Laravel", alt: "laravel"},
    {img: "/src/assets/images/tailwindcss.svg", text: "TailwindCSS", alt: "tailwindcss"},
    {img: "/src/assets/images/spring-boot.svg", text: "SpringBoot", alt: "springboot"},
    {img: "/src/assets/images/flask.svg", text: "Flask", alt: "flask"},
    {img: "/src/assets/images/opencv.svg", text: "OpenCV", alt: "opencv"},
    {img: "/src/assets/images/mediapipe.png", text: "MediaPipe", alt: "mediapipe"},
]

const tools = [
    {img: "/src/assets/images/git.svg", text: "Git", alt: "git"},
    {img: "/src/assets/images/github.svg", text: "GitHub", alt: "github"},
    {img: "/src/assets/images/shadcn.svg", text: "Shadcn", alt: "Shadcn"},
    {img: "/src/assets/images/framer.svg", text: "Framer Motion", alt: "framerMotion"},
    {img: "/src/assets/images/figma.svg", text: "Figma", alt: "figma"},
    {img: "/src/assets/images/chatgpt.svg", text: "ChatGPT", alt: "chatgpt"},
    {img: "/src/assets/images/claude.png", text: "ClaudeCode", alt: "claudecode"}
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
    return (
        <div className="">
           <div>
             {/*left spot light */}
            <div className="w-190 h-30 relative top-20 right-60 bg-[#7226FF] rounded-r-full blur-3xl opacity-60  rotate-40 overflow-hidden -z-1"/>
            <div className="bg-[#A026FF] relative w-120 h-15 top-0 right-22 rounded-r-4xl rotate-40 blur-xl -z-1 opacity-90"/>

            {/*right spot light */}

            <div className="w-190 h-30 relative bottom-25 left-350 bg-[#7226FF] rounded-r-full blur-3xl opacity-60  rotate-140 overflow-hidden -z-1"/>
            <div className="bg-[#A026FF] relative w-120 h-15 bottom-50 left-387 rounded-r-4xl rotate-140 blur-xl -z-1 opacity-90"/>
           </div>

            <div className="flex justify-center relative bottom-50 ">
                <h1 className="text-4xl font-bold">SKILLS</h1>
            </div>

            {/* Grid Boxes */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-24">

                <SkillCard title="Languages" data={languages} />
                <SkillCard title="Frameworks" data={frameworks} />

                <div className="md:col-span-2 flex justify-center">
                    <div className="w-full md:w-1/2">
                        <SkillCard title="Tools" data={tools} />
                    </div>
                </div>

            </div>
        </div>
    )
}