import { useState } from 'react';
import { Screen } from './types';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import Overview from './screens/Overview';
import Portfolio from './screens/Portfolio';
import Analysis from './screens/Analysis';
import Vault from './screens/Vault';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('overview');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'overview':
        return <Overview />;
      case 'portfolio':
        return <Portfolio />;
      case 'analysis':
        return <Analysis />;
      case 'vault':
        return <Vault />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-[#121416] text-[#e2e2e5] font-body selection:bg-[#004c5f] selection:text-[#65bede]">
      <TopNav />
      <main className="max-w-7xl mx-auto px-6 py-8">
        {renderScreen()}
      </main>
      <BottomNav activeScreen={activeScreen} onScreenChange={setActiveScreen} />
    </div>
  );
}
