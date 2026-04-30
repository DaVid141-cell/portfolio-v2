import { GridBox } from "../components/ui/grid-boxes";
import { HeroImageHover } from "../components/ui/hero-image-hover";
import { SocialIconFrame } from "../components/ui/social-icon-frame";
import { motion } from "framer-motion"



export function HeroSection () {

    const sectionFade = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.25,
                
            }
        }
    }
    
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                
            }
        }
    }

    
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-10">
                <GridBox />
            </div>
            {/* container of the contents */}
            <motion.div 
                className="absolute z-10 h-screen flex translate-y-32"
                variants={sectionFade}
                initial="hidden"
                animate="show"
            >
                {/* First Name box */}
                <motion.div variants={fadeUp} className="absolute top-10 left-25 w-125">
                    <h1 className="font-display text-8xl" >DAVID JUSTIN</h1>
                </motion.div>

                {/*social media box */}
                <motion.div variants={fadeUp} className="absolute left-420 top-0">
                    <SocialIconFrame/>
                </motion.div>
                
                {/* Center image here */}
                <motion.div variants={fadeUp} className="absolute top-60 left-115 w-250">
                    <HeroImageHover/>
                </motion.div>

                <motion.div variants={fadeUp} className="absolute top-170 left-28 w-110 h-fit text-center">
                    <span className="text-3xl font-bold">Aspiring Full Stack Developer</span>
                    <br/>
                    <span className="text-xl font-semibold ">Design • Build • Deliver</span>
                    
                </motion.div>

                {/* Last Name box*/}
                <motion.div variants={fadeUp} className="absolute top-160 left-380">
                    <h1 className="font-display text-8xl">SERAD</h1>
                </motion.div>
            </motion.div>
                
        </div>
    )
}