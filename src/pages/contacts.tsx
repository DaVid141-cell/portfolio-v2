import { Card, CardContent } from "../components/ui/card"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { PaperPlane } from "../components/ui/paper-plane"
import { FEEDBACK_FORM_URL } from "../lib/api"
import { useState } from "react"

export default function ContactPage () {
    const [ feedback, setFeedback ] = useState("");
    const [ name, setIsName ] = useState("")
    const [ email, setIsEmail ] = useState("")
    const [ loading, setIsloading ] = useState(false);
    const [ success, setIsSuccess ] = useState(false);
    const [ error, setIsError ] = useState("");
    const user = "itsdevsenpai09";
    const domain = "gmail.com";
    const emailAD = `${user}@${domain}`;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsError("");
        setIsSuccess(false)

        if (!feedback.trim() || !name.trim() || !email.trim()) {
            setIsError("Please fill the form first before submitting")
            return;
        }

        setIsloading(true)
        try {
            const response = await fetch(FEEDBACK_FORM_URL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: feedback
                }),
            });
            if (!response.ok) throw new Error("Failed to send the message.");
            setIsSuccess(true)
            setFeedback("");
            setIsName("")
            setIsEmail("")
        } catch (error) {
            setIsError("Failed to send the Message, Please try again.");
        } finally {
            setIsloading(false)
        }
    }
    


    return (
        <div className="my-16 flex flex-row justify-between flex-wrap gap-12 max-w-6xl mx-auto">
            
            <div className="flex flex-col justify-center">
                <h1 className="text-3xl text-white font-bold mb-4">Let's work together</h1>
                <span className="text-sm text-grey-200 mb-4">My inbox is always open, whether you have a question or just want to say hi.</span>
                <p className="text-sm text-grey-200 mb-4">I'll try my best to get back to you!</p>
                
                <div className="flex items-center">
                    
                    <a href={`mailto:${emailAD}`} className="inline-flex items-center gap-2 px-6 py-3 cursor-pointer bg-[#7226FF]/20 hover:bg-[#A026FF]/30 text-[#FFD6F4] rounded-lg transition-all duration-300 border border-[#7226FF]">
                        <PaperPlane/>{emailAD}
                    </a>
                </div>
            </div>

            <div className="w-110">
                <Card className="bg-foreground shadow-xl/60 w-full p-8">
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-6 text-white">
                                <div className="grid gap-2">
                                <Label className="font-bold" htmlFor="name">NAME</Label>
                                <Input
                                    name="name"
                                    value={name}
                                    onChange={(e) => setIsName(e.target.value)}
                                    id="name"
                                    type="text"
                                    placeholder="John Kiddo"
                                    autoComplete="off"
                                    required
                                />
                                </div>
                                <div className="grid gap-2">
                                    <Label className="font-bold" htmlFor="email">EMAIL</Label>
                                    <Input 
                                        name="email"
                                        value={email}
                                        onChange={(e) => setIsEmail(e.target.value)}
                                        id="email" 
                                        type="email"
                                        placeholder="example@gmail.com"
                                        autoComplete="off" 
                                        required 
                                    />
                                </div>

                                <div>
                                    <Label className="font-bold" htmlFor="feedback">MESSAGE</Label>
                                    <Textarea 
                                        id="feedback"
                                        name="feedback"
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                        className="mt-2" 
                                        placeholder="Type your message here..."
                                        autoComplete="off" 
                                        required />
                                </div>
                            </div>
                            {error && (
                                <p>{error}</p>
                            )}
                            {success && (
                                <p>{"Successfully Sent."}</p>
                            )}

                            <Button 
                                type="submit" 
                                className="w-full mt-4 p-6 cursor-pointer"
                                disabled={loading}
                            >
                                {loading ? "loading..." : (
                                    <>
                                        <PaperPlane />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
                <div className="relative bottom-10 right-8 w-18 h-18 bg-[#A026FF] rounded-full blur-2xl"/>
                <div className="relative bottom-120 left-100 w-18 h-18 bg-[#7226FF] rounded-full blur-2xl"/>
            </div>
        </div>

        
    )
}