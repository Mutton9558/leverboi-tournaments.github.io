'use client'

import Image from "next/image";
import Footer from "../components/footer";
import {Header} from "../components/header";
import { YouTubeEmbed } from '@next/third-parties/google'
import { useState, useEffect, useRef } from "react";

export default function spt_one(){

    const [isLoaded, setIsLoaded] = useState(false);

    const bracketRef = useRef<HTMLImageElement>(null);
    const winnerRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (bracketRef.current?.complete && winnerRef.current?.complete) {
        setIsLoaded(true);
        }
    }, []);

    return(
        <div className="min-h-screen relative overflow-x-hidden">
            <div className="fixed inset-0 -z-10 bg-[url('/images/spt1.png')] bg-cover bg-center opacity-40" />
            <Header isHome = {false}></Header>
            <main className="relative z-10 max-w-4xl mx-auto py-20 mt-20 flex justify-center items-center flex-col text-white px-4">
                
                <div className="w-screen md:w-3/4 p-4 flex items-center font-mono mb-16 flex-col bg-black/40">
                    <h1 className="text-md lg:text-3xl font-semibold">Stronghold Protocol Tournament</h1>
                    <p className="flex">Game: <span className="font-bold ml-2">Arknights</span></p>
                    <p>22 May 2026 - 25 May 2026</p>
                    <p>1:30 AM - 9:30 AM UTC</p>
                </div>
                
                <div className="w-full max-w-2xl aspect-video shrink-0">
                    <YouTubeEmbed 
                        videoid="wf92laIdkEg" 
                        height={400} 
                        params="controls=1&loop=1&start=321" 
                    />
                </div>
                <p className="font-mono text-sm">Stronghold Protocol Tournament Finale: The Gang vs IS Central</p>

                {!isLoaded && (
                    <h1>Loading brackets and winners...</h1>
                )}

                <div className={`relative w-full max-w-2xl aspect-square mt-16 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <img 
                        ref={bracketRef}
                        src="/images/Finals_Bracket.png" 
                        alt="final brackets" 
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        onLoad={() => setIsLoaded(true)} 
                        fetchPriority="high"
                    />
                </div>
                <p className="font-mono text-sm">Tournament Brackets</p>

                <div className={`relative w-full max-w-2xl aspect-square mt-8 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <img 
                        ref={winnerRef}
                        src="/images/Winners.png" 
                        alt="winners" 
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        onLoad={() => setIsLoaded(true)} 
                        fetchPriority="high"
                    />
                </div> 
                <p className="font-mono text-sm flex">Winners: <span className="font-bold ml-2">IS CENTRAL</span></p>
            </main>
            <Footer></Footer>
        </div>
    )
}