import Image from "next/image";
import Footer from "../components/footer";
import {Header} from "../components/header";
import ComingSoon from "../components/comingsoon";

export default function spt_one(){
    return(
        <div>
            <Header isHome = {false}></Header>
            <ComingSoon></ComingSoon>
            <Footer></Footer>
        </div>
    )
}