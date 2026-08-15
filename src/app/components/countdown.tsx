"use client"

import { useState, useEffect } from "react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface CountdownProps {
    targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps){

    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        
        if (difference <= 0) {
            setIsExpired(true);
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

    const timeBlocks = [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
    ];

    if(!isMounted){
        return(
            <h1>Loading countdown...</h1>
        )
    }

    if(isExpired){
        return(
            <div className="w-full flex justify-center items-center p-4 text-white text-md lg:text-3xl font-mono font-semibold">
                <h1>Event has begun! 🎉🎉🎉</h1>
            </div> 
        )
    }

    return(
        <div className="w-full flex justify-center items-center p-4 text-white text-lg font-mono font-semibold">
            {
                timeBlocks.map((block, idx) => (
                    <span key={String(idx)} className="m-1">{String(block.value).padStart(2, "0")} {block.label}</span>
                ))
            }
        </div>
    )
}