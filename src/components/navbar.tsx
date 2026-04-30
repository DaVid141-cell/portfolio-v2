import { useEffect, useState } from "react";
import { Play } from "lucide-react";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true)
        }, 300) 

        return () => clearTimeout(timer)
    }, [])

    const NavItems = [
        { href: "/", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Project" },
        { href: "#contacts", label: "Contact" }
    ];
    
    return (
        <nav className="fixed w-fit bg-accent-foreground my-8 rounded-r-4xl z-100">
        
            <div className="flex items-center gap-8 px-6 py-4">
                {/* Nav Items */}
                <div 
                    className="flex mr-4 items-center gap-8 overflow-hidden transition-all duration-500 ease-in-out" 
                    style={{ maxWidth: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0 }}> 
                    
                    {NavItems.map((item) => (
                        <a
                            href={item.href}
                            key={item.href}
                            className="text-lg font-bold whitespace-nowrap"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Toggle button for opening the NavBar*/}
                <button onClick={() => setIsOpen(!isOpen)} className="absolute top-1/2 -translate-y-1/2 left-full -translate-x-6 cursor-pointer">
                    <Play
                        size={42}
                        color="white"
                        fill="white"
                        className={`transition-transform duration-600 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    />
                </button>
            </div>

        </nav>
    )
}