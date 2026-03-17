import { Bell, Wallet } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="bg-[#121416]/60 backdrop-blur-xl sticky top-0 z-50 w-full flex justify-between items-center px-6 py-4 shadow-[0px_24px_48px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-3">
        <Wallet className="text-[#7ad2f3] w-7 h-7" />
        <h1 className="text-xl font-bold tracking-tight text-[#e2e2e5] font-headline">Varlık İstihbaratı</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-[#333537] transition-colors duration-300 active:scale-95">
          <Bell className="text-[#c0c7cd] w-6 h-6" />
        </button>
        <div className="w-8 h-8 rounded-full bg-[#004c5f] flex items-center justify-center text-[10px] font-bold text-[#65bede]">
          AS
        </div>
      </div>
    </header>
  );
}
