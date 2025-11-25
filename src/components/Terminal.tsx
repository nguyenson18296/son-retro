import { useState, useEffect } from "react";

type TabType = "clock" | "music" | "typing";

export function Terminal() {
  const [activeTab, setActiveTab] = useState<TabType>("clock");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [angle, setAngle] = useState(2.932);
  const [progress, setProgress] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate changing angle/progress
      setAngle((prev) => (prev + 0.1) % (2 * Math.PI));
      setProgress((prev) => (prev + 1) % 11);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const renderProgressBar = () => {
    return (
      <>
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className={i < progress ? "text-green-700" : "text-gray-500"}
          >
            ●
          </span>
        ))}
      </>
    );
  };

  const angleDegrees = Math.round((angle * 180) / Math.PI);
  const binaryValue = (angleDegrees % 256).toString(2).padStart(8, "0");
  const hexValue = (angleDegrees % 256)
    .toString(16)
    .toUpperCase()
    .padStart(2, "0");
  const timeValue = (28000 + Math.random() * 2000).toFixed(2);

  return (
    <div className="fixed bottom-4 left-4 w-400 z-30 playwrite-us-trad-guides-regular">
      {/* Terminal Window */}
      <div className="bg-[#c9b896] rounded-2xl shadow-2xl overflow-hidden border border-[#b5a586]">
        {/* Header with Tabs */}
        <div className="bg-[#8b7355] px-4 py-2 flex items-center gap-3">
          {/* Window Control */}
          <div className="w-3 h-3 rounded-full bg-[#d4af37]" />

          {/* Tabs */}
          <button
            onClick={() => setActiveTab("clock")}
            className={`px-5 py-2 rounded-lg transition-all ${
              activeTab === "clock"
                ? "bg-[#e8dcc4] text-gray-800"
                : "bg-transparent border border-[#6b5d4f] text-[#6b5d4f] hover:bg-[#6b5d4f]/20"
            }`}
          >
            Clock
          </button>
          <button
            onClick={() => setActiveTab("music")}
            className={`px-5 py-2 rounded-lg transition-all ${
              activeTab === "music"
                ? "bg-[#e8dcc4] text-gray-800"
                : "bg-transparent border border-[#6b5d4f] text-[#6b5d4f] hover:bg-[#6b5d4f]/20"
            }`}
          >
            Music
          </button>
          <button
            onClick={() => setActiveTab("typing")}
            className={`px-5 py-2 rounded-lg transition-all ${
              activeTab === "typing"
                ? "bg-[#e8dcc4] text-gray-800"
                : "bg-transparent border border-[#6b5d4f] text-[#6b5d4f] hover:bg-[#6b5d4f]/20"
            }`}
          >
            Typing
          </button>

          {/* Active indicator dot */}
          {activeTab === "clock" && (
            <div className="w-2 h-2 rounded-full bg-red-600 ml-auto" />
          )}
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm space-y-3 text-[#5a4a3a] bg-[#e8dcc4]">
          {activeTab === "clock" && (
            <>
              <div className="flex items-start gap-2">
                <span className="text-[#8b1a1a]">$</span>
                <span className="text-[#6b5d4f]">[system]:</span>
                <span>logged in as user from HCM, Vietnam</span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#8b1a1a]">$</span>
                <span className="text-[#6b5d4f]">[system]:</span>
                <span>current time is {formatTime(currentTime)}</span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#8b1a1a]">$</span>
                <span className="text-[#6b5d4f]">:</span>
                <div className="flex flex-wrap items-center gap-2 text-green-800">
                  <span>[{renderProgressBar()}]</span>
                  <span>|</span>
                  <span>θ={angle.toFixed(3)}rad</span>
                  <span>|</span>
                  <span>{angleDegrees}°</span>
                  <span>|</span>
                  <span className="text-green-700">0b{binaryValue}</span>
                  <span>|</span>
                  <span className="text-green-700">0x{hexValue}</span>
                  <span>|</span>
                  <span>{timeValue}e+4ms</span>
                </div>
              </div>
            </>
          )}

          {activeTab === "music" && (
            <>
              <div className="flex items-start gap-2">
                <span className="text-[#8b1a1a]">$</span>
                <span className="text-[#6b5d4f]">[music]:</span>
                <span>Now playing: Synthwave Dreams</span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#8b1a1a]">$</span>
                <span className="text-[#6b5d4f]">[music]:</span>
                <span>Volume: 75% | Duration: 3:42</span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#8b1a1a]">$</span>
                <span className="text-[#6b5d4f]">:</span>
                <div className="flex items-center gap-2 text-green-800">
                  <span>[{renderProgressBar()}]</span>
                  <span>▶</span>
                </div>
              </div>
            </>
          )}

          {activeTab === "typing" && (
            <>
              <div className="flex items-start gap-2">
                <span className="text-[#8b1a1a]">$</span>
                <span className="text-[#6b5d4f]">[typing]:</span>
                <span>WPM: 82 | Accuracy: 94%</span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#8b1a1a]">$</span>
                <span className="text-[#6b5d4f]">[typing]:</span>
                <span>Total keystrokes: 15,240</span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#8b1a1a]">$</span>
                <span className="text-[#6b5d4f]">:</span>
                <div className="flex items-center gap-2 text-green-800">
                  <span>Status: Active</span>
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
