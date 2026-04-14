import { MainLayout } from "../components/layouts/main-layout"
import { GridBox } from "../components/ui/grid-boxes"
import { HeroImageHover } from "../components/ui/hero-image-hover"
import { SocialIconFrame } from "../components/ui/social-icon-frame"

export default function MainPage() {
    return (
        <MainLayout>
            {/* Grid as background */}
            <div className="absolute inset-0 z-0">
                <GridBox />
            </div>

            {/* Your actual content on top */}
            <div className="relative">

                {/* First Name box */}
                <div className="absolute top-10 left-25">
                    <h1 className="font-display text-8xl" >DAVID JUSTIN</h1>
                </div>

                {/*social media box */}
                <div className="absolute left-390">
                    <SocialIconFrame/>
                </div>
                
                {/* Center image here */}
                <div className="absolute top-20 left-170 w-120">
                    <HeroImageHover/>
                </div>

                {/*Small information */}
                <div className="absolute top-60 left-28 w-100 ">
                    <article>
                        <h2 className="text-3xl font-bold mb-2">
                        I'm a Full Stack Developer
                        </h2>
                        <p className="text-lg text-justify">A software engineer passionate about turning ideas into real, functional products on the web. I craft digital experiences that are both functional and visually intentional  and always open to new things and new opportunities. Let's build something great together.</p>
                    </article>
                    
                </div>

                {/* Last Name box*/}
                <div className="absolute top-140 left-330">
                    <h1 className="font-display text-8xl">SERAD</h1>
                </div>

            </div>
        </MainLayout>
    )
}