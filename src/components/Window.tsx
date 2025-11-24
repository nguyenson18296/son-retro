import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const [position, setPosition] = useState(calculateOptimalPosition());
  const nodeRef = useRef(null);

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const windowStyle = isMaximized
    ? {
        left: 0,
        top: "28px",
        width: "100%",
        height: "calc(100% - 112px)",
        transform: "none",
      }
    : {};

  // Calculate initial position for animation
  const getInitialPosition = () => {
    if (!originPosition) {
      return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    }
    return originPosition;
  };

  const initialPos = getInitialPosition();

  // Calculate centered position
  const centerLeft = position.x;
  const centerTop = position.y;

  const windowContent = (
    <motion.div
      ref={nodeRef}
      className={`backdrop-blur-2xl bg-white/95 rounded-xl shadow-2xl flex flex-col overflow-hidden ${
        isMaximized ? "" : "w-[650px] max-w-[90vw]"
      }`}
      style={{
        position: "absolute",
        zIndex,
        maxHeight: isMaximized ? undefined : "80vh",
        ...windowStyle,
      }}
      onMouseDown={onFocus}
      drag={!isMaximized}
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={{
        left: 0,
        right: window.innerWidth - 650,
        top: 60,
        bottom: window.innerHeight - 200,
      }}
      onDragEnd={(e, info) => {
        setPosition({
          x: centerLeft + info.offset.x,
          y: centerTop + info.offset.y,
        });
      }}
      initial={{
        opacity: 0,
        scale: 0.3,
        left: initialPos.x,
        top: initialPos.y,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        left: centerLeft,
        top: centerTop,
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.5,
      }}
    >
      {/* Title Bar */}
      <div className="px-4 py-3 flex items-center justify-between cursor-move select-none bg-gradient-to-b from-white/50 to-transparent border-b border-gray-200/50">
        <div className="flex items-center gap-2">
          {/* Traffic Light Buttons */}
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff4137] border border-[#e0443e] transition-colors group relative"
          >
            <span className="absolute inset-0 flex items-center justify-center text-[8px] text-[#8b1a1a] opacity-0 group-hover:opacity-100">
              ×
            </span>
          </button>
          <button
            onClick={onMinimize}
            className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffaa00] border border-[#dea123] transition-colors group relative"
          >
            <span className="absolute inset-0 flex items-center justify-center text-[8px] text-[#8b5a00] opacity-0 group-hover:opacity-100">
              −
            </span>
          </button>
          <button
            onClick={handleMaximize}
            className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#1dad2b] border border-[#23a935] transition-colors group relative"
          >
            <span className="absolute inset-0 flex items-center justify-center text-[8px] text-[#0f5419] opacity-0 group-hover:opacity-100">
              +
            </span>
          </button>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-sm text-gray-700">
          {title}
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto p-6 bg-white/80">{children}</div>
    </motion.div>
  );

  if (isMaximized) {
    return windowContent;
  }

  // For non-maximized windows, return windowContent directly
  // Framer Motion handles the positioning
  return windowContent;
}
