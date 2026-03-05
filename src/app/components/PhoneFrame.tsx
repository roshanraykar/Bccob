import { ReactNode, useState, useEffect } from "react";
import { Wifi, BatteryFull, Signal } from "lucide-react";

function StatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
      );
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-[44px] bg-[#1534a0] text-white flex items-end justify-between px-6 pb-1 relative z-10">
      <span className="text-sm tracking-tight">{time}</span>
      <div className="flex items-center gap-1.5">
        <Signal size={14} />
        <Wifi size={14} />
        <BatteryFull size={16} />
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="h-[20px] bg-black flex items-center justify-center">
      <div className="w-[134px] h-[5px] bg-white/30 rounded-full" />
    </div>
  );
}

export default function PhoneFrame({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 500);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // On small screens, just show app fullscreen with status bar
  if (isMobile) {
    return (
      <div className="min-h-screen flex flex-col bg-[#1a3fc7]">
        <StatusBar />
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    );
  }

  // On desktop/tablet, show a phone mockup
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-8">
      {/* Phone shell */}
      <div className="relative">
        {/* Outer bezel */}
        <div
          className="relative bg-[#1a1a2e] rounded-[55px] p-[12px] shadow-2xl"
          style={{
            boxShadow:
              "0 0 0 2px #333, 0 25px 80px rgba(0,0,0,0.35), inset 0 0 6px rgba(255,255,255,0.05)",
          }}
        >
          {/* Side buttons - volume */}
          <div className="absolute -left-[2.5px] top-[120px] w-[3px] h-[30px] bg-[#2a2a3e] rounded-l-sm" />
          <div className="absolute -left-[2.5px] top-[165px] w-[3px] h-[55px] bg-[#2a2a3e] rounded-l-sm" />
          <div className="absolute -left-[2.5px] top-[230px] w-[3px] h-[55px] bg-[#2a2a3e] rounded-l-sm" />
          {/* Side button - power */}
          <div className="absolute -right-[2.5px] top-[180px] w-[3px] h-[70px] bg-[#2a2a3e] rounded-r-sm" />

          {/* Screen area */}
          <div
            className="relative w-[375px] h-[812px] bg-black rounded-[43px] overflow-hidden"
          >
            {/* Dynamic Island / Notch */}
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[126px] h-[34px] bg-black rounded-full z-50 flex items-center justify-center">
              <div className="w-[10px] h-[10px] rounded-full bg-[#1a1a2e] mr-2" />
            </div>

            {/* Status bar */}
            <StatusBar />

            {/* App content - scrollable */}
            <div className="h-[calc(100%-64px)] overflow-y-auto overflow-x-hidden">
              {children}
            </div>

            {/* Home indicator */}
            <HomeIndicator />
          </div>
        </div>

        {/* Reflection overlay */}
        <div
          className="absolute inset-0 rounded-[55px] pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%)",
          }}
        />
      </div>
    </div>
  );
}
