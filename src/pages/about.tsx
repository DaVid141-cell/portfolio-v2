import { AboutMeSec } from "../components/about-me-sec";
import { SkillSec } from "../components/skills-sec";

export default function AboutPage () {

   
    return (
        <div className="w-full overflow-x-hidden">
            {/*About me content */}
            <div className="w-full min-h-screen bg-[#111111] overflow-hidden">
                
                <AboutMeSec/>
                <div className="flex flex-col items-center justify-center z-20 pb-20 px-4">
                    <div  className=" w-80 h-1 bg-[#A026FF] blur-sm "/>
                    <h1 className="text-6xl font-bold overline shrink-0 w-fit z-10">
                        ABOUT ME
                    </h1>
                </div>
            </div>

            {/* Education section */}
            <div className="w-full min-h-screen bg-[#0d0d0d] overflow-hidden">
                {/* Spot light */}
                <div className="relative ">
                    <div className="absolute w-75 h-20 sm:w-125 sm:h-30 lg:w-212.5 lg:h-35 top-10 left-1/4 -translate-x-1/2 bg-[#7226FF] rounded-r-full rotate-40 blur-3xl opacity-50"/>
                    <div className="absolute w-45 h-12.5 sm:w-87.5 sm:h-20 lg:w-150 lg:h-25 top-16 left-1/4 -translate-x-1/2 bg-[#A026FF] rounded-r-4xl rotate-40 blur-2xl"/>
                </div>
      
                <div className="flex content-center-safe flex-col px-6 py-24 sm:px-10 lg:px-24 xl:px-40 lg:pt-80">
                    <div  className="relative w-32 sm:w-48 lg:w-65 left-3 h-1 bg-[#A026FF] blur-sm"/>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold border-t-4 w-fit z-1">
                        EDUCATION
                    </h1>
                    <div className="w-full max-w-fit">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 uppercase font-bold text-lg sm:text-xl lg:text-2xl py-6 border-b-2 border-cus-grey">
                            <div className="col sm:p-5 lg:p-8">
                                <h3>Now</h3>
                            </div>
                            <div className="col sm:p-5 lg:p-8 md:ml-4">
                                <h1 className="text-lg sm:text-xl lg:text-2xl">Applied Degree in Software Engineering</h1>
                                <p className="font-medium text-[#A026FF]">
                                    Lithan Academy Singapore
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-4 uppercase font-bold text-lg sm:text-xl lg:text-2xl py-6 border-b-2 border-cus-grey">
                            <div className="col sm:p-5 lg:p-8 ">
                                <h3>Now</h3>
                            </div>
                            <div className="col sm:p-5 lg:p-8 md:ml-4">
                                <h1 className="text-lg sm:text-xl lg:text-2xl">Bachelor of science in information technology</h1>
                                <p className="font-medium text-[#A026FF]">
                                    University of Cebu - Banilad
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-4 uppercase font-bold text-lg sm:text-xl lg:text-2xl py-6 border-b-2 border-cus-grey">
                            <div className="col p-1 shrink-0">
                                <h3>2022-2024</h3>
                            </div>
                            <div className="col  sm:p-5 lg:p-8">
                                <h1 className="text-lg sm:text-xl lg:text-2xl">Science, Technology, Engineering, and Mathematics (STEM)</h1>
                                <p className="font-medium text-[#A026FF]">
                                    University of Cebu - Banilad
                                </p>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>

            {/*Skills contents */}
            <div className="min-h-screen w-full">
                <SkillSec/>
            </div>
        </div>
    )
}
