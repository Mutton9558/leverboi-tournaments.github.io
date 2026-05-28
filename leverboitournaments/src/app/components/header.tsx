"use client";

import { useRouter } from 'next/navigation';
import Image from "next/image";

interface HeaderProp{
    isHome: boolean;
};

export const Header = ({isHome}: HeaderProp) => {

    const router = useRouter();

    function handleRedirect(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        router.push(isHome ? '/spt_one' : '/');
    }

    return(
        <div className="w-screen h-28 bg-secondary position: absolute">
            <div id="header-left" className="flex flex-row h-full items-center relative float-left ml-4">
                <div className="relative w-24 h-24">
                    <Image src="/images/LeverThink.png" alt="LeverTournamentsLogo" fill className="object-cover"></Image>
                </div>
                <h1 className="ml-4 text-foreground text-3xl font-bold font-mono tracking-wide">LeverBoi Tournaments</h1>
            </div>
            <div className="relative flex items-center h-full mr-16 float-end">
                <div className="group">
                    <button className="relative font-mono text-foreground text-2xl cursor-pointer" onClick={handleRedirect}>
                    {isHome ? "Past Tournaments" : "Current Tournaments"}
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}