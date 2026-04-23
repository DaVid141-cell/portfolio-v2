export default function AboutPage () {
    return (
        <div className="w-full">
            {/*About me content */}
            <div className="w-full h-100 relative bg-[#111111] z-1">
                <h1>mee</h1>
            </div>



            {/* Education section */}
            <div className="w-full relative min-h-screen bg-[#0d0d0d]">
                {/* Spot light */}
                <div className="w-210 h-30 absolute top-20 left-70 bg-[#7226FF] rounded-r-full rotate-40 blur-3xl opacity-50"/>
                <div className="bg-[#A026FF] absolute w-150 h-15 top-20 left-91 rounded-r-4xl rotate-40 blur-xl"/>
            

                <div className="w-90 absolute left-260 top-100 select-none z-2">
                    <img src="/src/assets/about-img.webp" alt="about-img" loading="lazy"/>
                </div>

                <div className="pt-55 pl-30">
                    <h1 className="text-3xl font-bold">
                        EDUCATION
                    </h1>
                    <div className="w-full max-w-300">
                        <div className="flex row uppercase items-center font-bold text-lg mt-4 mb-4 border-b-2 border-cus-grey">
                            <div className="col p-8 ">
                                <h3>Now</h3>
                            </div>
                            <div className="col p-8 ml-4">
                                <h1 className="text-2xl">Applied Degree in Software Engineering</h1>
                                <p className="font-medium text-[#A026FF]">
                                    Lithan Academy Singapore
                                </p>
                            </div>
                        </div>
                        <div className="flex row uppercase items-center font-bold text-lg mt-4 mb-4 border-b-2 border-cus-grey">
                            <div className="col p-8 ">
                                <h3>Now</h3>
                            </div>
                            <div className="col p-8 ml-4">
                                <h1 className="text-2xl">Bachelor of science in information technology</h1>
                                <p className="font-medium text-[#A026FF]">
                                    University of Cebu - Banilad
                                </p>
                            </div>
                        </div>
                        <div className="flex row uppercase items-center font-bold text-lg mt-4 mb-4 border-b-2 border-cus-grey">
                            <div className="col p-3 shrink-0">
                                <h3>2022-2024</h3>
                            </div>
                            <div className="col p-8">
                                <h1 className="text-2xl">Science, Technology, Engineering, and Mathematics (STEM)</h1>
                                <p className="font-medium text-[#A026FF]">
                                    University of Cebu - Banilad
                                </p>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>

            {/*Skills contents */}

        </div>
    )
}


