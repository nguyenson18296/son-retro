import { useEffect, useState } from "react";
// import { Apple } from 'lucide-react';
import AppleIcon from "../assets/apple_dark.svg";

interface BootScreenProps {
  onBootComplete: () => void;
}

export function BootScreen({ onBootComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onBootComplete, 500);
          return 100;
        }
        return prev + 3;
      });
    }, 40);

    return () => {
      clearInterval(progressInterval);
    };
  }, [onBootComplete]);

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="text-center space-y-12">
        {/* Apple Logo */}
        <div className="flex justify-center">
          <img src={AppleIcon} alt="Apple Logo" className="w-24 h-24" />
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
