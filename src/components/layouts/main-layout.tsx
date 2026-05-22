import { NavBar } from "../navbar";

export function MainLayout ({children} : { children: React.ReactNode }) {
    return (
    
        <div className="flex flex-col">
            {/* Navbar */}
            <NavBar />
            {/* rederding of content sections */}
            {children}
        </div>
    )
}