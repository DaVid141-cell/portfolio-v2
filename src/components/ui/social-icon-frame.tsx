import { Circle } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

const SocialLinks = [
    { icon: faGithub, href: "https://github.com/DaVid141-cell" },
    { icon: faLinkedin, href: "https://www.linkedin.com/in/david-justin-2092ba37a/" },
    { icon: faFacebook, href: "https://www.facebook.com/seraddavidjustin" }
]

export function SocialIconFrame() {
    const dragX = useMotionValue(0)
    const springDragX = useSpring(dragX, {
        stiffness: 20,   // lower = more fluid, less snappy
        damping: 2,      // lower = more oscillation after release
        mass: 2,         // higher = heavier, slower, more satisfying
    })
    const rotate = useTransform(springDragX, [80, -80], [30, -30])

    return (
        <div className="flex flex-col items-center select-none">

            {/* Top small outlined circle */}
            <Circle size={30} fill="none" color="white" />

            {/* This rotates together with the small circle at the bottom*/}
            <motion.div
                className="flex flex-col items-center"
                style={{
                    rotate,
                    originX: "50%",
                    originY: "0%",
                }}
            >
                {SocialLinks.map((social, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-px bg-white" style={{ height: "30px" }} />
                        <a
                            href={social.href}
                            target="_blank"
                            className="w-12.5 h-12.5 rounded-full bg-white flex items-center justify-center text-black text-2xl hover:opacity-80 transition-opacity"
                        >
                            <FontAwesomeIcon icon={social.icon} />
                        </a>
                    </div>
                ))}

                <div className="w-px bg-white" style={{ height: "30px" }} />

                {/* this is a draggable circle */}
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0}
                    style={{ cursor: "grab" }}
                    whileDrag={{ cursor: "grabbing", scale: 1.2 }}
                    onDrag={(_, info) => {
                        dragX.set(-info.offset.x)
                    }}
                    onDragEnd={() => {
                        dragX.set(0)
                    }}
                >
                    <Circle size={20} fill="none" color="white" />
                </motion.div>

            </motion.div>
        </div>
    )
}