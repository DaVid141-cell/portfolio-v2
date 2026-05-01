import { useState } from "react";
import { ProjectDivider } from "../components/ui/project-divider";

type project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveURL: string | null;
    githubURL: string;
}

const Projects: project[] = [
    {
        title: "Budo Training Program",
        description: "An immersive martial arts website built from the ground up using pure HTML, CSS, and JavaScript — exploring the fundamentals of UI/UX design through real-world application.",
        image: "/src/assets/images/budo.png",
        tags: ["HTML", "CSS", "JavaScript"],
        liveURL: null,
        githubURL: "https://github.com/DaVid141-cell/Web-development",
    },
    {
        title: "Enomy Finance",
        description: "Enomy-Finances system is a web-based financial platform designed to support both staff and clients by providing secure, user-friendly tools for financial planning, savings, investments, and currency exchange.",
        image: "/src/assets/images/enomy-finance.png",
        tags: ["Java", "HTML", "CSS", "JavaScript", "MySQL", "SpringBoot", "SpringMVC"],
        liveURL: null,
        githubURL: "https://github.com/DaVid141-cell/JavaSpringWeb",
    },
    {
        title: "Meals on Wheels",
        description: "Meals on Wheels is a charity-based food delivery platform for adults that are unable to cook, offering location-based menus serving HOT or COLD meals based on a 10 meter distance, rider-assigned deliveries, donor support via PayPal, and full admin oversight.",
        image: "/src/assets/images/meals-on-wheels.png",
        tags: ["Laravel", "PHP", "React", "TypeScript", "MySQL"],
        liveURL: null,
        githubURL: "https://github.com/DaVid141-cell/meals-on-wheels",
    },
    {
        title: "AI Product Description Generator",
        description: "Using the Google Gemini API with a Flask backend and React+Vite frontend to auto-generate SEO-friendly product descriptions, improving efficiency, consistency, and customer engagement across stores and online.",
        image: "/src/assets/images/jumpstart-fashion.png",
        tags: ["React", "Python", "Flask", "Geminai API", "Rest API"],
        liveURL: null,
        githubURL: "https://github.com/DaVid141-cell/ai-product-description",
    },
    {
        title: "Hand Gesture Tracker",
        description: "A real-time hand gesture recognition system that uses a webcam, computer vision, and machine learning to detect and classify hand gestures. Built with MediaPipe for hand landmark detection and a KNN classifier for gesture prediction, the system features a full end-to-end pipeline from custom data collection to model training and live recognition demonstrating practical human-computer interaction through gesture control.",
        image: "/src/assets/images/",
        tags: ["Python", "OpenCV", "MediaPipe", "Scikit-learn", "Pandas"],
        liveURL: null,
        githubURL: "https://github.com/DaVid141-cell/Computer-vision_Hand_Gesture-system",
    },
    {
        title: "Truth-Table Calculator",
        description: "A full-stack web application that allows users to input and evaluate propositional logic formulas through an interactive interface. The system handles logical expressions using operators such as AND, OR, NOT, and IMPLIES, making it a practical tool for discrete mathematics, logic education, and formal reasoning tasks.",
        image: "/src/assets/images/truth-table.png",
        tags: ["Python", "Fast API", "React", "TypeScript", "Vercel"],
        liveURL: "https://truthtable-analyzer.vercel.app/",
        githubURL: "https://github.com/DaVid141-cell/propositional-logic-system",
    }
]

export default function ProjectPage () {
    const leftProjects = Projects.filter((_, i) => i % 2 === 0);
    const rightProjects = Projects.filter((_, i) => i % 2 !== 0);

    

    return (
        <div className="bg-[#111111] text-black">
            <div className="flex flex-col  place-items-center m-10 py-12 px-4 gap-6">
                <div  className="relative w-68 top-5 h-1 bg-[#A026FF] blur-sm"/>
                    <h1 className="text-6xl text-white font-bold border-t-4">PROJECT</h1>
            </div>
            
            <div className="grid gap-12 p-24 justify-items-center"
                style={{ gridTemplateColumns: "1fr 80px 1fr" }}
            >
                {/* LEFT COLUMN */}
                <div className="flex flex-col gap-24">
                    {leftProjects.map((project, i) => (
                        <ProjectCard key={i} {...project} />
                    ))}
                </div>

                {/* CENTER DIVIDER */}
                <div className="flex flex-col items-center top-0 h-screen py-24">
                    <ProjectDivider />
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col gap-24 mt-80">
                    {rightProjects.map((project, i) => (
                        <ProjectCard key={i} {...project} />
                    ))}
                </div>

            </div>
        </div>
    )
}

function ProjectCard ({title, description, image, tags, liveURL, githubURL } : project) {
    const [showPopup, setShowPopup] = useState(false);

    return (

        <div className="w-full max-w-150 flex flex-col rounded-2xl overflow-hidden bg-[#1a1a1a] relative shadow-lg">

            {/* Image at top */}
            <div className="w-full h-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 p-6">

                {/* Title and description */}
                <div>
                    <h1 className="font-bold text-2xl mb-1 text-white">{title}</h1>
                    <p className="text-md text-gray-400 leading-relaxed">
                       {description}
                    </p>
                </div>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-3">
                    {tags.map((tag, i) => (
                        <span key={i} className="bg-background text-black px-3 py-1 rounded-full text-sm">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-2 relative">
                    
                    {/* Live Demo button */}
                    {liveURL ? (
                        <a href={liveURL} target="_blank"
                            className="bg-violet-700 hover:bg-violet-600 transition-colors text-white px-5 py-2 rounded-full text-sm font-medium cursor-pointer">
                            Live Demo
                        </a>
                    ) : (
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setShowPopup(true)
                                    setTimeout(() => setShowPopup(false), 2500)
                                }}
                                className="bg-[#2a2a2a] text-gray-500 px-5 py-2 rounded-full text-sm font-medium cursor-pointer"
                            >
                                Live Demo
                            </button>

                            {/* Popup */}
                            {showPopup && (
                                <div className="absolute bottom-full left-0 mb-2 bg-accent-foreground border border-white/10 text-white text-xs px-4 py-2 rounded-xl whitespace-nowrap shadow-lg">
                                    🚫 No live demo available
                                </div>
                            )}
                        </div>
                    )}
                    <a
                    
                        href={githubURL}
                        target="_blank"
                        className="bg-accent-foreground hover:bg-[#3a3a3a] transition-colors text-white px-5 py-2 rounded-full text-sm font-medium cursor-pointer"
                    >
                        GitHub
                    </a>
                </div>

            </div>
        </div>
    )
}