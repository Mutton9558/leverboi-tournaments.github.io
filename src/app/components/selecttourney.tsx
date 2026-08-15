import { useRouter } from "next/navigation";

interface SelectTourneyProps{
    imgPath: string;
    title: string;
    date: string;
    path: string;
}

export default function SelectTourney({imgPath, title, date, path}: SelectTourneyProps){

    const router = useRouter();

    function handleSelect(){
        router.push(`/${path}`);
    }

    return(
        <div className="w-screen m-0 p-0 flex flex-col cursor-pointer" onClick={handleSelect}>
            <div id="tourney-content" className="flex flex-row items-center p-8 w-full">
                <img src={`images/${imgPath}`} className="w-12 h-12 lg:w-32 lg:h-32 cursor-pointer" alt={`${title}`} fetchPriority="high" />
                <div className="flex flex-col h-full justify-center ml-16">
                    <h1 className="font-mono font-semibold text-md lg:text-5xl text-white">{title}</h1>
                    <p className="font-mono text-sm lg:text-lg text-white">{date}</p>
                </div>
                <p className="absolute right-16 hidden text-5xl lg:flex">&gt;</p>
            </div>
            <span className="w-full h-1 bg-white"></span>
        </div>
    )
}