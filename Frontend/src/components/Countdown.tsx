import { useEffect, useState } from "react";
import { Lock, Hourglass, ArrowRight } from "lucide-react";
import {Discord } from "./icons";
import { Button } from "@/components/ui/button";

const launchTime = new Date("2025-08-05T12:30:00+05:30").getTime(); // IST

export default function CountdownGate({ children }: { children: React.ReactNode }) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeLeft = launchTime - now;

  if (timeLeft <= 0) return <>{children}</>;

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor((timeLeft / 1000 / 60 / 60) % 24);
  const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#8c52ff]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#d07bea]/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 text-center px-6 max-w-2xl text-white">
        <div className="flex justify-center items-center mb-4">
          <Lock className="w-10 h-10 text-[#d07bea]" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight font-display animate-pulse text-[#d07bea]">
          A Portal Awaits...
        </h1>

        <p className="text-lg sm:text-xl mb-6 font-light text-[#e9c9f9] font-sans">
          The countdown has begun. <br />
          Unlocking in <strong>{days}d {hours}h {minutes}m {seconds}s</strong>
        </p>

        <p className="text-sm italic text-white/70 mb-8 max-w-md mx-auto">
          The silence before the storm... Stay close.
        </p>

        <Button 
          variant="outline"
          className="border-[#8c52ff] text-[#d07bea] hover:bg-[#8c52ff]/10 text-lg px-6 py-4 shadow-xl group"
          onClick={() => window.open('https://discord.gg/HuBa9r33kW', '_blank')}
        >
          <Discord className="w-5 h-5 mr-2" />
          Join the Whisper Circle
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        <div className="mt-12">
          <Hourglass className="w-8 h-8 text-[#e9c9f9] animate-spin-slow mx-auto" />
        </div>
      </div>
    </section>
  );
}