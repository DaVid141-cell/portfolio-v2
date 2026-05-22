import { GridBox } from "../components/ui/grid-boxes";
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
        <div className="relative w-full min-h-screen ">
            <div className="absolute inset-0 z-10">
                <GridBox />
            </div>

            {/* container of the contents */}
            <motion.div 
                className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20 lg:px-20"
                variants={sectionFade}
                initial="hidden"
                animate="show"
            >
                <div className="w-full grid grid-cols-1 lg:grid-cols-[1.2fr_2.2fr_1.2fr] gap-10 lg:gap-6 items-center">

                    <div className="flex justify-between flex-col min-h-30 lg:min-h-[85vh] text-center lg:text-left">
                        {/* First Name box */}
                        <motion.h1
                                variants={fadeUp}
                                className=" font-display lg:translate-y-15 xl:translate-y-15 leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl whitespace-nowrap w-full"
                            >
                                DAVID JUSTIN
                        </motion.h1>

                        <motion.div variants={fadeUp} className="max-w-md mx-auto lg:mx-0 text-center items-center">
                            <h2 className="text-md sm:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-bold whitespace-nowrap">
                                Aspiring Full Stack Developer
                            </h2>
                            <p className="text-sm sm:text-md lg:text-lg xl:text-xl 2xl:text-3xl font-bold mt-2">
                                Design • Build • Deliver
                            </p>
                        </motion.div>
                    </div>
                    
                    {/* Center image here */}
                    <motion.div variants={fadeUp} className="flex justify-center order-first lg:order-0 translate-y-6 lg:translate-y-99 xl:translate-y-86 2xl:translate-y-66">
                        <img
                            src="/images/me-anime.webp"
                            alt="David Justin"
                            loading="lazy"
                            className="w-[320px] sm:w-125.5 md:w-150 lg:w-212.5 xl:w-120 2xl:w-260 select-none"
                        />
                    </motion.div>

                    <div className="flex flex-col lg:justify-between items-center min-h-62.5 lg:min-h-212.5 lg:items-end text-center lg:text-right">
                        {/*social media box */}
                        <motion.div variants={fadeUp} className="lg:-translate-x-30">
                            <SocialIconFrame/>
                        </motion.div>

                        {/* Last Name box*/}
                        <motion.div variants={fadeUp}>
                            <h1 className="font-display leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl lg:translate-y-8 xl:translate-y-10 2xl:translate-y-40">
                                SERAD
                            </h1>
                        </motion.div>
                    </div>

                    
                </div>
                
            </motion.div>
                
        </div>
    )
}