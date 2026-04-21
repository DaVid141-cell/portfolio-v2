import { GridBox } from "../components/ui/grid-boxes";
import { HeroImageHover } from "../components/ui/hero-image-hover";
import { SocialIconFrame } from "../components/ui/social-icon-frame";

export function HeroSection () {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-10">
                <GridBox />
            </div>
            {/* container of the contents */}
            <div className="absolute z-10 h-screen flex translate-y-32">
                {/* First Name box */}
                <div className="absolute top-10 left-25 w-125">
                    <h1 className="font-display text-8xl" >DAVID JUSTIN</h1>
                </div>

                {/*social media box */}
                <div className="absolute left-420 top-0">
                    <SocialIconFrame/>
                </div>
                
                {/* Center image here */}
                <div className="absolute top-60 left-115 w-250">
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
                <div className="absolute top-160 left-380">
                    <h1 className="font-display text-8xl">SERAD</h1>
                </div>
            </div>
                
        </div>
    )
}