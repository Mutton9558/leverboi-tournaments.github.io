"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface HeaderProp {
    isHome: boolean;
};

export const Header = ({ isHome }: HeaderProp) => {
    const router = useRouter();
    const [toggleDropdown, setToggleDropdown] = useState(false);

    function handleRedirect(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        router.push('/');
    }

    return (
        <div className="relative w-full h-28 bg-secondary">
            <div className="flex justify-between items-center h-full px-4 md:px-8">
                <div id="header-left" className="flex flex-row items-center">
                    <div className="relative md:w-24 md:h-24 w-12 h-12">
                        <img 
                            onClick={() => router.push("/")} 
                            src="/images/LeverThink.png" 
                            alt="LeverTournamentsLogo" 
                            className="w-full h-full object-cover rounded-lg cursor-pointer" 
                        />
                    </div>
                    <h1 className="ml-4 text-foreground text-md md:text-3xl font-bold font-mono tracking-wide">
                        LeverBoi Tournaments
                    </h1>
                </div>

                {!isHome && (
                    <div>
                        <button className="relative font-mono text-foreground lg:text-2xl cursor-pointer hidden lg:flex group" onClick={handleRedirect}>
                            Back to Home
                            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                        </button>

                        <button className="lg:hidden flex text-foreground cursor-pointer" onClick={() => setToggleDropdown(!toggleDropdown)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"></path>
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            <div
                className={`absolute top-28 left-0 w-full bg-gray-600 z-50 transition-all duration-300 ease-in-out overflow-hidden ${
                    toggleDropdown ? "max-h-40 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
                }`}
            >
                <div className="flex justify-center items-center">
                    <button
                        className="font-mono text-foreground text-xl cursor-pointer"
                        onClick={handleRedirect}
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};