import { MainLayout } from "../components/layouts/main-layout"
import { GridBox } from "../components/ui/grid-boxes"
import { HeroImageHover } from "../components/ui/hero-image-hover"
import { SocialIconFrame } from "../components/ui/social-icon-frame"
import AboutPage from "./about"
import { HeroSection } from "./hero-section"

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
        </MainLayout>
    )
}