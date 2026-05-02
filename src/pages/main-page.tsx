import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MainLayout } from "../components/layouts/main-layout"
import AboutPage from "./about"
import ContactPage from "./contacts"
import { HeroSection } from "./hero-section"
import ProjectPage from "./projects"
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const SocialLinks = [
    { icon: faGithub, href: "https://github.com/DaVid141-cell" },
    { icon: faLinkedin, href: "https://www.linkedin.com/in/david-justin-serad-2092ba37a/" },
    { icon: faFacebook, href: "https://www.facebook.com/seraddavidjustin" }
]

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

            <section id="contacts" className="mx-atuo  bg-foreground">
                <div className="flex flex-col  place-items-center m-10 py-12 px-4 gap-6">
                    <div  className="relative w-58 top-5 h-1 bg-[#A026FF] blur-sm"/>
                    <h1 className="text-6xl font-bold border-t-4">Contact</h1>

                    <span className="font-bold text-md">GET IN TOUCH</span>
                </div>

                <ContactPage/>

                <footer className="py-10 border-t border-gray-600 ">
                    <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-sm">
                            <a href="/">
                                <img className="w-10" src="/public/images/claudecode.png"/>
                            </a>
                            <p>© 2026 David Serad. All rights reserved</p>
                        </div>
                        

                        
                            <div  className="flex flex-row items-center gap-6">
                            {SocialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black text-2xl hover:opacity-80 transition-opacity"
                                >
                                    <FontAwesomeIcon icon={social.icon} />
                                </a>
                                ))}
                            </div>
                        
                    </div>
                </footer>
            </section>
        </MainLayout>
    )
}