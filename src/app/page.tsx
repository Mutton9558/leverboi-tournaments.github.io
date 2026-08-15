'use client';

// import { useState, useEffect, useRef } from 'react';
import { Header } from "./components/header";
import Footer from "./components/footer";
import SelectTourney from './components/selecttourney';

export default function Home() {

  // const [isLoaded, setIsLoaded] = useState(false);

  // const imgRef = useRef<HTMLImageElement>(null);

  // useEffect(() => {
  //   if (imgRef.current?.complete) {
  //     setIsLoaded(true);
  //   }
  // }, []);

  return (
    <div id="home-page" className="overflow-x-hidden min-h-screen">
      <Header isHome={true}></Header>
      <div className="w-screen flex flex-col mt-32">
        <div className="w-full flex justify-center items-center flex-col mt-8 mb-32">
          <h1 className="text-lg lg:text-5xl font-mono font-bold mb-4 underline pointer-events-none">Ongoing Tournaments!</h1>
          <p className="font-mono text-white/80 pointer-events-none">No tournaments rn lol &gt;w&lt;</p>
        </div>
        
        <div className="w-full flex justify-center items-center flex-col">
          <h1 className="text-lg lg:text-5xl font-mono font-bold mb-4 underline pointer-events-none">Upcoming Tournaments!</h1>
          <SelectTourney imgPath='Stronghold-Tournament-2.png' title='Stronghold Protocol Tournament 2' date='27 August 2026 - TBD 7AM PST' path='spt2' />  
        </div>
        {/* {!isLoaded && (
          <div className='m-4'>
            <h1 className='font-mono text-5xl font-bold'>Loading item...</h1>
          </div>
          
        )} */}
        
        {/* <div id="subpanel-1" className="flex flex-row justify-center items-center p-4">
          <div id="img" className={`relative w-12 h-12 md:w-36 md:h-36 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <img ref={imgRef} src="/images/FlametailCry.png" alt="flametail-cry" className="absolute inset-0 w-full h-full object-cover rounded-lg" onLoad={() => setIsLoaded(true)} fetchPriority="high"/>
          </div>
          <div className={`flex flex-col ml-16 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="font-mono text-3xl lg:text-5xl font-bold">No planned tourneys</h1>
            <div className="m-2"></div>
            <h1 className="font-mono text-3xl lg:text-5xl font-bold">at the moment.</h1>
          </div>
        </div> */}
      </div>
      <Footer></Footer>
    </div>
  );
}
