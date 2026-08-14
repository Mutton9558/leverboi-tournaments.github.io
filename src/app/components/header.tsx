"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";

interface HeaderProp{
    isHome: boolean;
};

export const Header = ({isHome}: HeaderProp) => {

    const router = useRouter();
    const [toggleDropdown, setToggleDropdown] = useState(false);

    function handleRedirect(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        router.push(isHome ? '/spt1' : '/');
    }

    return(
        <div className="w-screen h-28 bg-secondary position: absolute">
            <div id="header-left" className="flex flex-row h-full items-center relative float-left ml-4">
                <div className="relative md:w-24 md:h-24 w-8 h-8">
                    <img src="/images/LeverThink.png" alt="LeverTournamentsLogo" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                </div>
                <h1 className="ml-4 text-foreground text-sm md:text-3xl font-bold font-mono tracking-wide">LeverBoi Tournaments</h1>
            </div>
            <div className="relative flex items-center h-full mr-16 float-end">
                <div className="group">
                    <button className="relative font-mono text-foreground lg:text-2xl cursor-pointer hidden lg:flex" onClick={handleRedirect}>
                        {isHome ? "Previous Tournaments" : "Upcoming and Ongoing Tournaments"}
                        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </button>


                    <div className='lg:hidden flex'>
                        <button>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" className='cursor-pointer' onClick={() => {setToggleDropdown(!toggleDropdown)}}>
                                <path d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`relative grid transition-all duration-300 ease-in-out overflow-hidden w-full bg-gray-600 z-20 group ${
                    toggleDropdown
                    ? "grid-rows-[1fr] opacity-100 py-16"
                    : "grid-rows-[0fr] opacity-0 py-0"
                }`}
            >
                <div className="overflow-hidden flex justify-center items-center">
                    <button
                    className="relative font-mono text-foreground text-xl cursor-pointer"
                    onClick={handleRedirect}
                    >
                    {isHome ? "Previous Tournaments" : "Upcoming and Ongoing Tournaments"}
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}