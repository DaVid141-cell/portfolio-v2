import { MainLayout } from "../components/layouts/main-layout"
import AboutPage from "./about"
import { HeroSection } from "./hero-section"
import ProjectPage from "./projects"

export default function MainPage() {
    return (
        <MainLayout>

            {/* hero section content */}
            <section id="home" className="relative min-h-screen">
                <HeroSection/>
            </section>

            <section id="about">
                <AboutPage/>
            </section>

            <section id="projects">
                <ProjectPage/>
            </section>
        </MainLayout>
    )
}