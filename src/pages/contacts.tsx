
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { PaperPlane } from "../components/ui/paper-plane"

export default function ContactPage () {

    


    return (
        <div className="my-16 flex flex-row justify-between flex-wrap gap-12 max-w-6xl mx-auto">
            
            <div className="flex flex-col justify-center">
                <h1 className="text-3xl text-white font-bold mb-4">Let's work together</h1>
                <span className="text-sm text-grey-200 mb-4">My inbox is always open, whether you have a question or just want to say hi.</span>
                <p className="text-sm text-grey-200 mb-4">I'll try my best to get back to you!</p>
                
                <div className="flex items-center">
                    
                    <a href="" className="inline-flex items-center gap-2 px-6 py-3 cursor-pointer bg-[#7226FF]/20 hover:bg-[#A026FF]/30 text-[#FFD6F4] rounded-lg transition-all duration-300 border border-[#7226FF]">
                        <PaperPlane/>itsdevsenpai09@gmail.com
                    </a>
                </div>
            </div>

            <div className="w-110">
                <Card className="bg-foreground shadow-xl/60 w-full p-8">
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6 text-white">
                                <div className="grid gap-2">
                                <Label className="font-bold" htmlFor="name">NAME</Label>
                                <Input
                                    
                                    id="name"
                                    type="name"
                                    placeholder="John Kiddo"
                                    required
                                />
                                </div>
                                <div className="grid gap-2">
                                    <Label className="font-bold" htmlFor="password">EMAIL</Label>
                                    <Input 
                                        id="email" 
                                        type="email"
                                        placeholder="example@gmail.com" 
                                        required 
                                    />
                                </div>

                                <div>
                                    <Label className="font-bold" htmlFor="message">MESSAGE</Label>
                                    <Textarea className="mt-2" placeholder="Type your message here..." required />
                                </div>
                            </div>

                            <Button type="submit" className="w-full mt-4 p-6 cursor-pointer">
                                <PaperPlane/>Send Message
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