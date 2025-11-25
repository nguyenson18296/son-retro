import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface OpenWindow {
  id: string;
  isMinimized: boolean;
}

interface DockApp {
  id: string;
  title: string;
  icon: LucideIcon;
  [key: string]: any; // Allow additional properties like 'content'
}

interface DockProps {
  apps: DockApp[];
  openWindows: OpenWindow[];
  onAppClick: (app: DockApp, position: { x: number; y: number }) => void;
  onDockClick: (id: string, position: { x: number; y: number }) => void;
}

export function Dock({
  apps,
  openWindows,
  onAppClick,
  onDockClick,
}: DockProps) {
  const handleClick = (
    app: DockApp,
    isOpen: boolean,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const position = { x: centerX, y: centerY };

    if (isOpen) {
      onDockClick(app.id, position);
    } else {
      onAppClick(app, position);
    }
  };

  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-2xl bg-white/40 border border-white/60 rounded-2xl px-3 py-2 shadow-xl">
        <div className="flex items-end gap-2">
          {apps.map((app) => {
            const Icon = app.icon;
            const isOpen = openWindows.some((w) => w.id === app.id);

            return (
              <motion.button
                key={app.id}
                onClick={(e) => handleClick(app, isOpen, e)}
                className="relative group"
                whileHover={{ y: -12, scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
              >
                <motion.div
                  className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-xl p-3 rounded-xl shadow-md border border-gray-200 origin-bottom"
                  whileHover={{
                    boxShadow:
                      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  }}
                >
                  <Icon className="w-8 h-8 text-indigo-600" strokeWidth={1.5} />
                </motion.div>

                {/* App name tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {app.title}
                </div>

                {/* Running indicator */}
                {isOpen && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-700 rounded-full" />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
