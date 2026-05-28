import Image from "next/image";

export default function ComingSoon(){
    return(
        <div className="h-screen w-screen flex flex-row justify-center items-center">
            <div id="img" className="relative w-36 h-36">
                <Image src="/images/FlametailWow.png" alt="flametail-wow" fill className="object-cover"></Image>
            </div>
            <div id="text-sect" className="flex flex-col ml-16 items-start">
                <h1 className="font-mono font-bold text-foreground text-5xl ">Coming Soon!</h1>
                <p className="font-mono text-foreground text-lg ml-2 mt-2">I swear it'll be done soon - Mutton</p>
            </div>
        </div>
    )
}