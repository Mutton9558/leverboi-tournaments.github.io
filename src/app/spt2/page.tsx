"use client"

import { useRouter } from "next/navigation";
import Footer from "../components/footer";
import { Header } from "../components/header";
import Countdown from "../components/countdown";
import { YouTubeEmbed } from '@next/third-parties/google'

export default function spt2(){

    const router = useRouter();

    function handleRedirect(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        router.push("https://docs.google.com/forms/d/e/1FAIpQLSfjIhC9eS0VRxmWxsH0Na4QKkbtQf_ddfxoZQdnvpbIi4fpKw/viewform");
    }

    return(
        <div className="min-h-screen relative overflow-x-hidden">
            <Header isHome={false}></Header>
            <div className="fixed inset-0 -z-10 bg-[url('/images/Stronghold-Tournament-2.png')] bg-cover bg-center opacity-40" />
            <main className="relative z-10 max-w-4xl mx-auto py-20 flex justify-center items-center flex-col text-white px-4">
                <div className="w-screen md:w-3/4 p-4 flex items-center font-mono flex-col bg-black/40">
                    <h1 className="text-md lg:text-3xl font-bold">Stronghold Protocol Tournament 2</h1>
                    <p className="flex">Game: <span className="font-bold ml-2">Arknights</span></p>
                    <p>27 August 2026 - Date TBD</p>
                    <p>7AM PST</p>
                </div>

                <div className={`relative w-full max-w-2xl aspect-video mt-16 transition-opacity duration-300`}>
                    <img 
                        src="/images/maxresdefault_live.jpg" 
                        alt="final brackets" 
                        className="absolute inset-0 w-full h-full object-cover rounded-lg" 
                        fetchPriority="high"
                    />
                </div>
                <p className="font-mono text-sm mb-16">Stronghold Protocol Tournament 2</p>

                <div id="rule-sec" className="w-screen bg-black/40 flex flex-col justify-center items-center">
                    <h1 className="font-mono font-semibold text-3xl">General Rules</h1>
                    <div className="font-mono text-xl font-semibold p-4 flex flex-col">
                        <p>1. Each team must have 4 players!</p>
                        <p>2. Every player must show their perspective during the tournament!</p>
                        <div className="pl-4 lg:pl-16">
                            <ul className="list-disc list-outside pl-5 space-y-2">
                                <li><span className="font-normal text-sm">At least 3 players must record or stream it via a private YouTube stream.</span></li>
                                <li><span className="font-normal text-sm">One player must screenshare on Discord.</span></li>
                                <li><span className="font-normal text-sm">Failure to record leads to disqualification.</span></li>
                            </ul>
                        </div>
                        <p>3. Please show the results at the result screen.</p>
                        <p>4. Matches will be played in <span className="font-semibold">Dire Simulation (Hard Difficulty)!</span></p>
                        <p>5. Stages will be rerolled until a specific stage lands.</p>
                        <p>6. Moderators will monitor each round to ensure fair play.</p>
                        <p>7. If a player disconnects and does not reconnect until the game ends, it will count as a death.</p>
                        <p>8. Participants are required to join the discord here: <button onClick={() => router.push("https://discord.com/invite/CzXAuuJ3Z2")} className="underline cursor-pointer text-blue-300">Discord</button>!</p>
                    </div>
                    <span className="h-1 w-full bg-white mt-16"></span>
                </div>

                <div id="score-calculator-sec" className="w-screen bg-black/40 flex flex-col justify-center items-center pt-4 pb-4">
                    <h1 className="font-mono font-semibold text-3xl">Score Calculator</h1>
                    <p className="font-mono p-4">TBA</p>
                    <span className="h-1 w-full bg-white mt-16"></span>
                </div>

                <div id="countdown-sec" className="w-screen bg-black/40 flex flex-col justify-center items-center pt-4 pb-4">
                    <h1 className="font-mono font-semibold text-3xl">Countdown!</h1>
                    <Countdown targetDate="2026-08-27T07:00:00-07:00" />
                    <span className="h-1 w-full bg-white mt-16"></span>
                </div>

                
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-mono font-semibold text-3xl mt-4">Sign Up Now!</h1>
                    <button onClick={handleRedirect} className="p-4 bg-green-200 border-black rounded-2xl mt-4 text-black font-mono cursor-pointer hover:scale-105 transition-all duration-300 ease-out">Register Form</button>
                </div>
                
            </main>
            <Footer></Footer>
        </div>
    )
}