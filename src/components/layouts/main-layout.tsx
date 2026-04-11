import { NavBar } from "../navbar";

export function MainLayout ({children} : { children: React.ReactNode }) {
    return (
        <div className="relative w-full min-h-screen">
            {/* Navbar */}
            <div className="relative z-20">
                <NavBar />
            </div>
            {/* Page content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}