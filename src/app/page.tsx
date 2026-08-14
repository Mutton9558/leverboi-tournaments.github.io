'use client';

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { Header } from "./components/header";
import Footer from "./components/footer";

export default function Home() {

  const [isLoaded, setIsLoaded] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div id="home-page">
      <Header isHome={true}></Header>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        {!isLoaded && (
          <div className='m-4'>
            <h1 className='font-mono text-5xl font-bold'>Loading item...</h1>
          </div>
          
        )}
        <div id="subpanel-1" className="flex flex-row justify-center items-center p-4">
          <div id="img" className={`relative w-12 h-12 md:w-36 md:h-36 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <img ref={imgRef} src="/images/FlametailCry.png" alt="flametail-cry" className="absolute inset-0 w-full h-full object-cover rounded-lg" onLoad={() => setIsLoaded(true)} fetchPriority="high"/>
          </div>
          <div className={`flex flex-col ml-16 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="font-mono text-3xl lg:text-5xl font-bold">No planned tourneys</h1>
            <div className="m-2"></div>
            <h1 className="font-mono text-3xl lg:text-5xl font-bold">at the moment.</h1>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
