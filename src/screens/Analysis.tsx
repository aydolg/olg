import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Lightbulb, Shield, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts';

const allocationData = [
  { name: 'Hisse Senetleri', value: 50, color: '#7ad2f3' },
  { name: 'Yatırım Fonları', value: 19, color: '#5ddbc2' },
  { name: 'Tahvil & Bono', value: 13, color: '#78dc77' },
  { name: 'Mevduat', value: 6, color: '#ffb4ab' },
  { name: 'Kripto Varlıklar', value: 12, color: '#333537' },
];

const incomeData = [
  { name: 'Haz', value: 40 },
  { name: 'Tem', value: 65 },
  { name: 'Ağu', value: 55 },
  { name: 'Eyl', value: 85 },
  { name: 'Eki', value: 45 },
  { name: 'Kas', value: 60 },
];

export default function Analysis() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12 pb-24"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold font-headline text-[#e2e2e5] tracking-tight mb-2">Analizler</h2>
          <p className="text-[#c0c7cd] max-w-md">Portföyünüzün performansını ve varlık dağılımını derinlemesine inceleyin.</p>
        </div>
        <div className="flex bg-[#1a1c1e] p-1 rounded-xl">
          {['1H', '1A', 'YTD', '1Y'].map((t, i) => (
            <button 
              key={t}
              className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                i === 2 ? 'bg-[#7ad2f3] text-[#003544]' : 'text-[#c0c7cd] hover:text-[#7ad2f3]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Donut Chart */}
        <div className="md:col-span-8 bg-[#1a1c1e] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-10">
          <div className="relative w-64 flex-shrink-0 min-h-[256px]">
            {mounted ? (
              <ResponsiveContainer width="100%" aspect={1} minWidth={0}>
                <PieChart>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {allocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="w-full h-full bg-[#1e2022]/20 animate-pulse rounded-full" />
            )}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[#c0c7cd] text-xs font-medium uppercase tracking-widest">Toplam</span>
              <span className="text-[#e2e2e5] text-2xl font-bold font-headline">₺2.4M</span>
            </div>
          </div>
          <div className="flex-grow w-full">
            <h3 className="text-lg font-bold font-headline mb-6">Varlık Dağılımı</h3>
            <div className="space-y-3">
              {allocationData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }}></div>
                    <span className="text-[#c0c7cd] text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="text-[#e2e2e5] font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Score */}
        <div className="md:col-span-4 bg-[#1a1c1e] rounded-3xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Shield className="w-24 h-24" />
          </div>
          <h3 className="text-lg font-bold font-headline mb-2">Risk Skoru</h3>
          <p className="text-[#c0c7cd] text-xs mb-8">Dinamik Büyüme Profili</p>
          
          <div className="relative w-40 h-24 mb-4 flex items-end justify-center">
            <svg className="w-full h-full" viewBox="0 0 100 50">
              <path d="M10 45 A 40 40 0 0 1 90 45" fill="none" stroke="#333537" strokeLinecap="round" strokeWidth="8"></path>
              <path d="M10 45 A 40 40 0 0 1 78 22" fill="none" stroke="url(#riskGradient)" strokeLinecap="round" strokeWidth="8"></path>
              <defs>
                <linearGradient id="riskGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#78dc77"></stop>
                  <stop offset="50%" stopColor="#7ad2f3"></stop>
                  <stop offset="100%" stopColor="#ffb4ab"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <span className="text-3xl font-extrabold font-headline text-[#e2e2e5]">6.8</span>
            </div>
          </div>
          <div className="bg-[#333537] px-3 py-1 rounded-full text-[10px] font-bold text-[#e2e2e5] tracking-wider uppercase">Orta-Yüksek Risk</div>
        </div>

        {/* Performance Metrics */}
        <div className="md:col-span-6 grid grid-cols-2 gap-4">
          <MetricCard 
            icon={TrendingUp} 
            color="text-[#78dc77]" 
            bgColor="bg-[#78dc77]/10" 
            label="En Çok Kazandıran" 
            title="THYAO.IS" 
            value="+18.2%" 
            subValue="Son 30 Gün" 
          />
          <MetricCard 
            icon={TrendingDown} 
            color="text-[#ffb4ab]" 
            bgColor="bg-[#ffb4ab]/10" 
            label="En Çok Kaybettiren" 
            title="EREGL.IS" 
            value="-3.1%" 
            subValue="Son 30 Gün" 
          />
        </div>

        {/* Estimated Income */}
        <div className="md:col-span-6 bg-[#1a1c1e] rounded-3xl p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-lg font-bold font-headline text-[#e2e2e5]">Tahmini Gelir</h3>
              <p className="text-[#c0c7cd] text-xs">Temettü ve Faiz Ödemeleri</p>
            </div>
            <div className="text-right">
              <span className="text-[#e2e2e5] font-bold">₺24,150</span>
              <p className="text-[#c0c7cd] text-[10px]">Aylık Ort.</p>
            </div>
          </div>
          <div className="w-full min-h-[128px]">
            {mounted ? (
              <ResponsiveContainer width="100%" aspect={2} minWidth={0}>
                <BarChart data={incomeData}>
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {incomeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 3 ? '#7ad2f3' : '#333537'} />
                    ))}
                  </Bar>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#c0c7cd', fontSize: 10 }} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="w-full h-full bg-[#1e2022]/20 animate-pulse rounded-xl" />
            )}
          </div>
        </div>
      </div>

      {/* Strategy Recommendation */}
      <section className="mt-12 bg-gradient-to-br from-[#004c5f]/20 to-transparent p-8 rounded-3xl border border-[#40484c]/10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-16 h-16 bg-[#004c5f] text-[#7ad2f3] rounded-2xl flex items-center justify-center">
            <Lightbulb className="w-8 h-8" />
          </div>
          <div className="flex-grow">
            <h4 className="text-xl font-bold font-headline mb-2 text-[#7ad2f3]">Stratejik Öneri</h4>
            <p className="text-[#c0c7cd] leading-relaxed">Portföyünüzdeki BIST 100 ağırlığı hedeflenenin %5 üzerine çıkmış durumda. Kar realizasyonu yaparak mevduat oranınızı %11 seviyesine çekmeniz, olası piyasa düzeltmelerine karşı defansif bir pozisyon almanızı sağlayacaktır.</p>
          </div>
          <button className="bg-[#7ad2f3] text-[#003544] px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap hover:opacity-90 active:scale-95 transition-all">
            Stratejiyi Uygula
          </button>
        </div>
      </section>
    </motion.div>
  );
}

function MetricCard({ icon: Icon, color, bgColor, label, title, value, subValue }: any) {
  return (
    <div className="bg-[#1a1c1e] rounded-3xl p-6 flex flex-col justify-between">
      <div>
        <div className={`${bgColor} ${color} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}>
          <Icon className="w-5 h-5" />
        </div>
        <p className="text-[#c0c7cd] text-xs font-medium uppercase tracking-tight mb-1">{label}</p>
        <h4 className="text-[#e2e2e5] font-bold text-lg">{title}</h4>
      </div>
      <div className="mt-4">
        <span className={`${color} text-2xl font-bold font-headline`}>{value}</span>
        <p className="text-[#c0c7cd] text-[10px]">{subValue}</p>
      </div>
    </div>
  );
}
