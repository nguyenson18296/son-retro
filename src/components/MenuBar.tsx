import { useState } from 'react';
import { Apple, Wifi, Battery, Search } from 'lucide-react';

export function MenuBar() {
  const [time, setTime] = useState(new Date());

  // Update time every minute
  useState(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  });

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="absolute top-0 left-0 right-0 h-7 backdrop-blur-2xl bg-white/40 border-b border-gray-300/50 flex items-center justify-between px-4 text-gray-800 text-sm z-40">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <button className="hover:bg-black/5 px-2 py-1 rounded transition-colors">
          <Apple className="w-4 h-4" fill="currentColor" />
        </button>
        <button className="hover:bg-black/5 px-2 py-1 rounded transition-colors">
          Portfolio
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <button className="hover:bg-black/5 p-1 rounded transition-colors">
          <Search className="w-4 h-4" />
        </button>
        <button className="hover:bg-black/5 p-1 rounded transition-colors">
          <Wifi className="w-4 h-4" />
        </button>
        <button className="hover:bg-black/5 p-1 rounded transition-colors">
          <Battery className="w-4 h-4" />
        </button>
        <span className="text-xs">
          {formatTime(time)}
        </span>
      </div>
    </div>
  );
}