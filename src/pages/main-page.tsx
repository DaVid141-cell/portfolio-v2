import { MainLayout } from "../components/layouts/main-layout"
import { GridBox } from "../components/ui/grid-boxes"
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
                <div>
                    <h1>DAVID JUSTIN</h1>
                </div>

                {/*social media box */}
                <div>
                    <SocialIconFrame/>
                </div>
                
                {/* Center image here */}
                <div>

                </div>

                {/*Small information */}
                <div>
                    <h3>
                        Text
                    </h3>
                    <p>Samll Text</p>
                </div>

                {/* Last Name box*/}
                <div>
                    <h1>Last Name</h1>
                </div>

            </div>
        </MainLayout>
    )
}