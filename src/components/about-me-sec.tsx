import { Code, Heart, Lightbulb, Users } from "lucide-react";

const info = [
    { label: "Age", value: "20" },
    { label: "Country", value: "Cebu City, Philippines" },
    { label: "Degree", value: "Software Engineering" },
    { label: "Gmail", value: "chaosdudeserad@gmail.com"}
]

export function AboutMeSec() {
    return (
        <div className="relative flex justify-center items-center w-full min-h-screen px-10 pt-16 overflow-hidden">

            {/* Spotlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7226FF] blur-[120px] opacity-30 rounded-full pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#A026FF] blur-[80px] opacity-50 rounded-full pointer-events-none" />

            {/* Main card */}
            <div className="relative w-full max-w-4xl overflow-hidden shadow-2xl bg-foreground m-20">
                <div className="grid gap-2 p-4 bg-background"
                    style={{
                        gridTemplateColumns: "1fr 1fr 0.8fr",
                        gridTemplateRows: "auto auto auto auto",
                    }}>
                    
                    {/* MaskedCursor container */}
                    
                        
                    
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