import { NavBar } from "../navbar";

export function MainLayout ({children} : { children: React.ReactNode }) {
    return (
        <div className="relative w-full">
            <div className="absolute inset-0 z-0">
                {children}
            </div>
            <div className="relative z-10">
                <NavBar />
            </div>
        </div>
    )
}