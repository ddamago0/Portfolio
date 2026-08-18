"use client";

import * as React from "react";

export const CyberHudBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#06070b]">
      {/* Fine Matrix HUD Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 240, 255, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Moving CRT Scanline Bar */}
      <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00F0FF]/30 to-transparent animate-scanline pointer-events-none" />

      {/* Top Cyber Yellow Glow Accent */}
      <div className="absolute top-[-15%] left-[50%] -translate-x-[50%] w-[1200px] h-[550px] rounded-full bg-[#FCEE0A]/5 blur-[160px]" />

      {/* Bottom Cyber Cyan Glow Accent */}
      <div className="absolute bottom-[-15%] right-[-10%] w-[800px] h-[500px] rounded-full bg-[#00F0FF]/5 blur-[180px]" />

      {/* Corner Tactical HUD Overlay Marks */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-[#00F0FF]/40 tracking-widest uppercase select-none hidden sm:block">
        [ + ] LAT 10.9685° N // LONG 74.7813° W
      </div>
      <div className="absolute top-4 right-4 font-mono text-[10px] text-[#FCEE0A]/40 tracking-widest uppercase select-none hidden sm:block">
        SYS_STATUS // ONLINE // ENCRYPTED_CHANNEL
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-[#00F0FF]/30 tracking-widest uppercase select-none hidden sm:block">
        NETRUNNER_OS v4.02 // BUFFER_CLEAR
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-[#FF003C]/40 tracking-widest uppercase select-none hidden sm:block">
        FIREWALL // ACTIVE
      </div>
    </div>
  );
};
