import Image from "next/image";
import { Header } from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div id="home-page">
      <Header isHome={true}></Header>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div id="subpanel-1" className="flex flex-row justify-center items-center p-4">
          <div id="img" className="relative w-36 h-36">
            <Image src="/images/FlametailCry.png" alt="flametail-cry" fill className="object-cover"></Image>
          </div>
          <div className="flex flex-col ml-16">
            <h1 className="font-mono text-5xl font-bold">No planned tourneys</h1>
            <div className="m-2"></div>
            <h1 className="font-mono text-5xl font-bold">at the moment.</h1>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
