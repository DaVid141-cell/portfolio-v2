import { NavBar } from "../navbar";

export function MainLayout ({children} : { children: React.ReactNode }) {
    return (
        <div className="relative w-full min-h-screen">
            {/* Navbar */}
                <NavBar />
            {/* Page content */}
            <div className="">
                {children}
            </div>
        </div>
    )
}