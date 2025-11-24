import { LucideIcon } from "lucide-react";

interface DesktopIconProps {
  icon: LucideIcon;
  label: string;
  onClick: (position: { x: number; y: number }) => void;
}

export function DesktopIcon({ icon: Icon, label, onClick }: DesktopIconProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    onClick({ x: centerX, y: centerY });
  };

  return (
    <button
      onClick={handleClick}
      onDoubleClick={handleClick}
      className="flex flex-col items-center gap-2 p-3 hover:bg-black/5 rounded-lg transition-all group w-20"
    >
      <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-gray-200 group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-indigo-600" strokeWidth={1.5} />
      </div>
      <span className="text-gray-800 text-xs text-center drop-shadow-sm leading-tight">
        {label}
      </span>
    </button>
  );
}
