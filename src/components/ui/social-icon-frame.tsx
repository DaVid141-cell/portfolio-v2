import { Circle } from "lucide-react"


export function SocialIconFrame () {
    return (
        <div className="flex flex-col items-center">
            
            {/* Top small outlined circle */}
            <Circle size={40} fill="none" color="white" />

            {/* Connector line */}
            <div className="w-px bg-white" style={{ height: "30px" }} />

            {/* Large filled circle */}
            <Circle size={70} fill="white" color="white" />

            {/* Connector line */}
            <div className="w-px bg-white" style={{ height: "30px" }} />

            {/* Large filled circle */}
            <Circle size={70} fill="white" color="white" />

            {/* Connector line */}
            <div className="w-px bg-white" style={{ height: "30px" }} />

            {/* Large filled circle */}
            <Circle size={70} fill="white" color="white" />

            {/* Connector line */}
            <div className="w-px bg-white" style={{ height: "30px" }} />

            {/* Bottom small outlined circle */}
            <Circle size={20} fill="none" color="white" />

        </div>
    )
}