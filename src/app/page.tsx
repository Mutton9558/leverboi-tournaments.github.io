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
    <div id="home-page" className="max-w-full overflow-x-hidden min-h-screen">
      <Header isHome={true}></Header>
      <div className="w-full flex flex-col mt-4">
        <div className="w-full flex justify-center items-center flex-col mt-8 mb-8 lg:mb-24">
          <div className="flex flex-row items-center justify-center">
            <img src="/images/FlametailWow.png" className="w-12 h-12 lg:w-24 lg:h-24 object-cover rounded-lg mr-4"/>
            <h1 className="text-lg lg:text-5xl font-mono font-bold mb-4 underline pointer-events-none">Ongoing Tournaments!</h1>
          </div>
          <p className="font-mono text-white/80 pointer-events-none">No tournaments rn lol &gt;w&lt;</p>
        </div>
        
        <div className="w-full flex justify-center items-center flex-col mb-8 lg:mb-24">
          <div className="flex flex-row items-center justify-center">
            <img src="/images/FlametailYay-4x.png" className="w-12 h-12 lg:w-24 lg:h-24 object-cover rounded-lg mr-4"/>
            <h1 className="text-lg lg:text-5xl font-mono font-bold mb-4 underline pointer-events-none">Upcoming Tournaments!</h1>
          </div>
          <SelectTourney imgPath='Stronghold-Tournament-2.png' title='Stronghold Protocol Tournament 2' date='27 August 2026 - TBD 2PM UTC' path='spt2' />  
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          <div className="flex flex-row items-center justify-center">
            <img src="/images/FlametailBullied-4x.png" className="w-12 h-12 lg:w-24 lg:h-24 object-cover rounded-lg mr-4"/>
            <h1 className="text-lg lg:text-5xl font-mono font-bold mb-4 underline pointer-events-none">Past Tournaments!</h1>
          </div>
          <SelectTourney imgPath='spt1.png' title='Stronghold Protocol Tournament 1' date='22 May 2026 - 25 May 2026 1:30AM - 9:30AM UTC' path='spt1' />  
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
