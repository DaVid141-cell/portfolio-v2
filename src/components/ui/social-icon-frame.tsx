import { Circle } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SocialLinks = [
    { icon: faGithub, href: "https://github.com/DaVid141-cell" },
    { icon: faLinkedin, href: "https://www.linkedin.com/in/david-justin-2092ba37a/" },
    { icon: faFacebook, href: "https://www.facebook.com/seraddavidjustin" }
]


export function SocialIconFrame () {
    return (
       <div className="flex flex-col items-center">

            {/* Top small outlined circle */}
            <Circle size={30} fill="none" color="white" />

            {SocialLinks.map((social, index) => (
                <div key={index} className="flex flex-col items-center">
                    {/* Connector line */}
                    <div className="w-px bg-white" style={{ height: "30px" }} />

                    {/* social icon circle */}
                    <a
                        href={social.href}
                        target="_blank"
                        className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center text-black text-2xl hover:opacity-80 transition-opacity"
                    >
                        <FontAwesomeIcon icon={social.icon} />
                    </a>
                </div>
            ))}

            {/* Connector line */}
            <div className="w-px bg-white" style={{ height: "30px" }} />

            {/* Bottom small outlined circle */}
            <Circle className="cursor-grab" size={20} fill="none" color="white" />

        </div>
    )
}