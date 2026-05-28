import Image from "next/image";

export default function Footer(){
    return(
        <div className="w-screen h-12 bg-secondary position: absolute bottom-0">
            <div id="header-left" className="flex flex-row h-full items-center relative float-left ml-4">
                <div className="relative w-6 h-6">
                    <Image src="copyright.svg" alt="copyright logo" fill className="object-cover"></Image>
                </div>
                <h1 className="ml-2 text-foreground text-lg font-mono tracking-wide">MIT License | Website made by Mutton9558</h1>
            </div>
            <div className="relative flex items-center h-full mr-16 float-end">
                <div id="socials" className="flex flex-row items-center h-full">
                    <a className="cursor-pointer" href="https://www.youtube.com/@LeverBoi" target="_blank" rel="noopener noreferrer">
                        <div className="relative w-8 h-8 ml-2 mr-2">
                            <Image src="/images/youtube.png" alt="copyright logo" fill className="object-cover"></Image>
                        </div>
                    </a>
                    <a className="cursor-pointer" href="https://www.twitch.tv/leverboi" target="_blank" rel="noopener noreferrer">
                        <div className="relative w-8 h-8 ml-2 mr-2">
                            <Image src="/images/twitch.png" alt="copyright logo" fill className="object-cover"></Image>
                        </div>
                    </a>
                    <a className="cursor-pointer" href="https://discord.gg/CzXAuuJ3Z2" target="_blank" rel="noopener noreferrer">
                        <div className="relative w-8 h-8 ml-2 mr-2">
                            <Image src="/images/discord.png" alt="copyright logo" fill className="object-cover"></Image>
                        </div>
                    </a>
                    <a className="cursor-pointer" href="https://x.com/LeverBoi69" target="_blank" rel="noopener noreferrer">
                        <div className="relative w-8 h-8 ml-2 mr-2">
                            <Image src="/images/X.png" alt="copyright logo" fill className="object-cover"></Image>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}