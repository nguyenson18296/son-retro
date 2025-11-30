import { useState, useEffect, useRef } from "react";
import { XIcon, Minus, Maximize2 } from "lucide-react";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";

interface WindowProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  zIndex: number;
  originPosition?: { x: number; y: number };
  cascadeOffset?: number;
}

export function Window({
  title,
  children,
  onClose,
  onMinimize,
  onFocus,
  zIndex,
  originPosition,
  cascadeOffset = 0,
}: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false);

  const calculateOptimalPosition = () => {
    const windowWidth = 650;
    const maxWindowHeight = window.innerHeight * 0.8;
    const offsetAmount = 30;

    // Apply cascade offset
    const cascadeX = cascadeOffset * offsetAmount;
    const cascadeY = cascadeOffset * offsetAmount;

    // Determine if click came from desktop icons (right side) or dock (bottom)
    let baseX: number;
    let baseY: number;

    if (originPosition) {
      const isFromRightSide = originPosition.x > window.innerWidth * 0.7;
      const isFromBottom = originPosition.y > window.innerHeight * 0.8;

      if (isFromRightSide) {
        // Desktop icon on right - position window to the left of center but aligned rightward
        baseX = window.innerWidth * 0.55 - windowWidth / 2;
      } else if (isFromBottom) {
        // Dock at bottom - center the window
        baseX = (window.innerWidth - windowWidth) / 2;
      } else {
        // Default center
        baseX = (window.innerWidth - windowWidth) / 2;
      }

      // Vertical positioning
      baseY = (window.innerHeight - maxWindowHeight) / 2;
    } else {
      // No origin position - center by default
      baseX = (window.innerWidth - windowWidth) / 2;
      baseY = (window.innerHeight - maxWindowHeight) / 2;
    }

    // Apply cascade offset and ensure window stays on screen
    const finalX = Math.max(
      20, // Min left margin
      Math.min(
        baseX + cascadeX,
        window.innerWidth - windowWidth - 20 // Max right margin
      )
    );

    const finalY = Math.max(
      60, // Menu bar clearance
      Math.min(
        baseY + cascadeY,
        window.innerHeight - 200 // Bottom margin
      )
    );

    return { x: finalX, y: finalY };
  };

  const targetPosition = calculateOptimalPosition();
  const initialPos = originPosition || {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

  // Store the position before maximizing to restore later
  const preMaximizePosition = useRef({ x: targetPosition.x, y: targetPosition.y });

  // Motion values for drag - start at initial position
  const x = useMotionValue(initialPos.x);
  const y = useMotionValue(initialPos.y);
  const scale = useMotionValue(0.3);
  const opacity = useMotionValue(0);
  const width = useMotionValue(650);
  const height = useMotionValue(window.innerHeight * 0.8);
  const borderRadius = useMotionValue(12);

  const springConfig = {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
    mass: 0.8,
  };

  // Animate to target position on mount
  useEffect(() => {
    animate(x, targetPosition.x, springConfig);
    animate(y, targetPosition.y, springConfig);
    animate(scale, 1, springConfig);
    animate(opacity, 1, springConfig);
  }, []);

  const handleMaximize = () => {
    const menuBarHeight = 28;
    const dockHeight = 84;
    const fullWidth = window.innerWidth;
    const fullHeight = window.innerHeight - menuBarHeight - dockHeight;

    if (!isMaximized) {
      // Save current position before maximizing
      preMaximizePosition.current = { x: x.get(), y: y.get() };

      // Animate to fullscreen
      animate(x, 0, springConfig);
      animate(y, menuBarHeight, springConfig);
      animate(width, fullWidth, springConfig);
      animate(height, fullHeight, springConfig);
      animate(borderRadius, 0, springConfig);
    } else {
      // Restore to previous position
      animate(x, preMaximizePosition.current.x, springConfig);
      animate(y, preMaximizePosition.current.y, springConfig);
      animate(width, 650, springConfig);
      animate(height, window.innerHeight * 0.8, springConfig);
      animate(borderRadius, 12, springConfig);
    }

    setIsMaximized(!isMaximized);
  };

  const windowContent = (
    <motion.div
      className="backdrop-blur-2xl bg-white/95 shadow-2xl flex flex-col overflow-hidden max-w-[100vw]"
      style={{
        position: "absolute",
        zIndex,
        x,
        y,
        width,
        height,
        scale,
        opacity,
        borderRadius,
      }}
      onMouseDown={onFocus}
      drag={!isMaximized}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={{
        left: 0,
        right: window.innerWidth - 650,
        top: 60,
        bottom: window.innerHeight - 200,
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
      }}
    >
      {/* Title Bar */}
      <motion.div
        className="px-4 py-3 flex items-center justify-between cursor-move select-none bg-gradient-to-b from-white/50 to-transparent border-b border-gray-200/50"
        onDoubleClick={(e) => {
          // Prevent double-click on buttons from triggering maximize
          const target = e.target as HTMLElement;
          if (target.closest("button")) {
            return;
          }
          handleMaximize();
        }}
        onPointerDown={(e) => {
          if (!isMaximized) {
            // Prevent drag from starting on buttons
            const target = e.target as HTMLElement;
            if (target.closest("button")) {
              return;
            }
            e.preventDefault();
          }
        }}
        onPan={(e, info) => {
          if (!isMaximized) {
            x.set(x.get() + info.delta.x);
            y.set(y.get() + info.delta.y);
          }
        }}
      >
        <div className="flex items-center gap-2">
          {/* Traffic Light Buttons */}
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff4137] border border-[#e0443e] transition-colors group relative"
          >
            <span className="absolute inset-0 flex items-center justify-center text-[8px] text-[#8b1a1a] opacity-0 group-hover:opacity-100">
              <XIcon />
            </span>
          </button>
          <button
            onClick={onMinimize}
            className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffaa00] border border-[#dea123] transition-colors group relative"
          >
            <span className="absolute inset-0 flex items-center justify-center text-[8px] text-[#8b5a00] opacity-0 group-hover:opacity-100">
              <Minus />
            </span>
          </button>
          <button
            onClick={handleMaximize}
            className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#1dad2b] border border-[#23a935] transition-colors group relative"
          >
            <span className="absolute inset-0 flex items-center justify-center text-[8px] text-[#0f5419] opacity-0 group-hover:opacity-100">
              <Maximize2 />
            </span>
          </button>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-sm text-gray-700">
          {title}
        </div>
      </motion.div>

      {/* Window Content */}
      <div
        className={`flex-1 overflow-auto p-6 bg-white/80 ${
          isMaximized ? "flex flex-col items-center" : ""
        }`}
      >
        <div className={isMaximized ? "w-full max-w-[650px]" : "w-full"}>
          {children}
        </div>
      </div>
    </motion.div>
  );

  return windowContent;
}
