import { LayoutDashboard, PieChart, TrendingUp, Lock } from 'lucide-react';
import { Screen } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BottomNavProps {
  activeScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

export default function BottomNav({ activeScreen, onScreenChange }: BottomNavProps) {
  const navItems = [
    { id: 'overview' as Screen, label: 'Genel Bakış', icon: LayoutDashboard },
    { id: 'portfolio' as Screen, label: 'Portföy', icon: PieChart },
    { id: 'analysis' as Screen, label: 'Analizler', icon: TrendingUp },
    { id: 'vault' as Screen, label: 'Kasa', icon: Lock },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-6 md:pb-8 pointer-events-none">
      <div className="bg-[#1a1c1e]/80 backdrop-blur-lg rounded-3xl shadow-2xl flex justify-around items-center h-20 w-[90%] md:w-[480px] px-2 mx-auto border border-white/5 pointer-events-auto">
        {navItems.map((item) => {
          const isActive = activeScreen === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onScreenChange(item.id)}
              className={cn(
                "flex flex-col items-center justify-center px-4 py-2 transition-all active:scale-90 rounded-2xl",
                isActive 
                  ? "bg-gradient-to-br from-[#7ad2f3] to-[#004c5f] text-[#003544]" 
                  : "text-[#c0c7cd] hover:text-[#7ad2f3]"
              )}
            >
              <Icon className={cn("w-6 h-6", isActive && "fill-current")} />
              <span className="text-[11px] font-medium tracking-wide mt-1">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
