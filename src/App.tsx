import { useState } from "react";
import { Briefcase, User, FileText, HelpCircle, Mail } from "lucide-react";

import { DesktopIcon } from "./components/DesktopIcon";
import { Window } from "./components/Window";
import { AboutContent } from "./components/AboutContent";
import { WorkContent } from "./components/WorkContent";
import { ResumeContent } from "./components/ResumeContent";
import { FAQContent } from "./components/FAQContent";
import { ContactContent } from "./components/ContactContent";
import { Dock } from "./components/Dock";
import { MenuBar } from "./components/MenuBar";
import { BootScreen } from "./components/BootScreen";
import { Terminal } from "./components/Terminal";

interface OpenWindow {
  id: string;
  title: string;
  content: React.ReactNode;
  isMinimized: boolean;
  zIndex: number;
  originPosition?: { x: number; y: number };
  cascadeOffset: number;
}

export default function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);
  const [nextZIndex, setNextZIndex] = useState(1);
  const [hasInitialized, setHasInitialized] = useState(false);

  const desktopApps = [
    { id: "about", title: "About", icon: User, content: <AboutContent /> },
    { id: "work", title: "Work", icon: Briefcase, content: <WorkContent /> },
    {
      id: "resume",
      title: "Resume",
      icon: FileText,
      content: <ResumeContent />,
    },
    { id: "faq", title: "FAQ", icon: HelpCircle, content: <FAQContent /> },
    {
      id: "contact",
      title: "Contact",
      icon: Mail,
      content: <ContactContent />,
    },
  ];

  // Open About window by default after boot
  const handleBootComplete = () => {
    setIsBooting(false);
    if (!hasInitialized) {
      setHasInitialized(true);
      // Open About window after a short delay
      setTimeout(() => {
        const aboutApp = desktopApps[0];
        setOpenWindows([
          {
            id: aboutApp.id,
            title: aboutApp.title,
            content: aboutApp.content,
            isMinimized: false,
            zIndex: 1,
            cascadeOffset: 0,
          },
        ]);
        setNextZIndex(2);
      }, 300);
    }
  };

  const handleIconClick = (
    app: (typeof desktopApps)[0],
    position: { x: number; y: number }
  ) => {
    const existingWindow = openWindows.find((w) => w.id === app.id);

    if (existingWindow) {
      if (existingWindow.isMinimized) {
        // Restore minimized window with origin position
        setOpenWindows(
          openWindows.map((w: OpenWindow) =>
            w.id === app.id
              ? {
                  ...w,
                  isMinimized: false,
                  zIndex: nextZIndex,
                  originPosition: position,
                }
              : w
          )
        );
        setNextZIndex(nextZIndex + 1);
      } else {
        // Bring to front
        bringToFront(app.id);
      }
    } else {
      // Open new window with cascade offset
      const cascadeOffset = openWindows.length % 5; // Reset after 5 windows to avoid going off-screen
      setOpenWindows([
        ...openWindows,
        {
          id: app.id,
          title: app.title,
          content: app.content,
          isMinimized: false,
          zIndex: nextZIndex,
          originPosition: position,
          cascadeOffset,
        },
      ]);
      setNextZIndex(nextZIndex + 1);
    }
  };

  const handleCloseWindow = (id: string) => {
    setOpenWindows(openWindows.filter((w) => w.id !== id));
  };

  const handleMinimizeWindow = (id: string) => {
    setOpenWindows(
      openWindows.map((w: OpenWindow) =>
        w.id === id ? { ...w, isMinimized: true } : w
      )
    );
  };

  const bringToFront = (id: string) => {
    setOpenWindows(
      openWindows.map((w: OpenWindow) =>
        w.id === id ? { ...w, zIndex: nextZIndex } : w
      )
    );
    setNextZIndex(nextZIndex + 1);
  };

  const handleDockClick = (id: string, position: { x: number; y: number }) => {
    const window = openWindows.find((w) => w.id === id);
    if (window?.isMinimized) {
      setOpenWindows(
        openWindows.map((w: OpenWindow) =>
          w.id === id
            ? {
                ...w,
                isMinimized: false,
                zIndex: nextZIndex,
                originPosition: position,
              }
            : w
        )
      );
      setNextZIndex(nextZIndex + 1);
    } else {
      bringToFront(id);
    }
  };

  if (isBooting) {
    return <BootScreen onBootComplete={handleBootComplete} />;
  }

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-[#e1d7c2]">
      {/* Desktop Background */}
      <div className="absolute inset-0" />

      {/* Menu Bar */}
      <MenuBar />

      {/* Desktop Icons */}
      <div className="absolute top-20 right-8 grid gap-4">
        {desktopApps.map((app) => (
          <DesktopIcon
            key={app.id}
            icon={app.icon}
            label={app.title}
            onClick={(position) => handleIconClick(app, position)}
          />
        ))}
      </div>

      {/* Windows */}
      {openWindows.map(
        (window) =>
          !window.isMinimized && (
            <Window
              key={window.id}
              title={window.title}
              onClose={() => handleCloseWindow(window.id)}
              onMinimize={() => handleMinimizeWindow(window.id)}
              onFocus={() => bringToFront(window.id)}
              zIndex={window.zIndex}
              originPosition={window.originPosition}
              cascadeOffset={window.cascadeOffset}
            >
              {window.content}
            </Window>
          )
      )}

      {/* Dock */}
      <Dock
        apps={desktopApps}
        openWindows={openWindows}
        onAppClick={handleIconClick}
        onDockClick={handleDockClick}
      />

      <Terminal />
    </div>
  );
}
