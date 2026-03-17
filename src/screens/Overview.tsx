import { useState, useEffect } from 'react';
import { TrendingUp, PieChart, ReceiptText, Landmark, Bitcoin, MoreHorizontal, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, AreaChart, Area } from 'recharts';

const data = [
  { name: '01 Eki', value: 1300000 },
  { name: '05 Eki', value: 1400000 },
  { name: '10 Eki', value: 1350000 },
  { name: '15 Eki', value: 1500000 },
  { name: '20 Eki', value: 1450000 },
  { name: '25 Eki', value: 1600000 },
  { name: '01 Kas', value: 1800000 },
];

export default function Overview() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-10 pb-24"
    >
      {/* Hero Section */}
      <section>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium uppercase tracking-widest text-[#c0c7cd]">Toplam Bakiye</span>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#005112]/30 border border-[#78dc77]/20">
            <div className="w-1.5 h-1.5 rounded-full bg-[#78dc77] animate-pulse"></div>
            <span className="text-[10px] font-semibold text-[#78dc77] tracking-tight">Google Sheets Bağlı</span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-5xl font-headline font-extrabold tracking-tight text-[#e2e2e5]">
            ₺2.482.150,40
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center text-[#78dc77] font-bold text-sm">
              <TrendingUp className="w-4 h-4 mr-0.5" />
              +1.2%
            </div>
            <span className="text-[#c0c7cd] text-sm">bugün</span>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section>
        <div className="bg-[#1a1c1e] rounded-3xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="text-[#c0c7cd] text-xs font-semibold uppercase tracking-wider mb-1">Performans</h3>
              <div className="text-xl font-headline font-bold text-[#e2e2e5]">Portföy Büyümesi</div>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded bg-[#1e2022] text-xs text-[#c0c7cd] hover:text-[#7ad2f3] transition-colors">1H</button>
              <button className="px-3 py-1 rounded bg-[#004c5f] text-xs text-[#7ad2f3] font-bold">1A</button>
              <button className="px-3 py-1 rounded bg-[#1e2022] text-xs text-[#c0c7cd] hover:text-[#7ad2f3] transition-colors">1Y</button>
            </div>
          </div>

          <div className="w-full min-h-[200px]">
            {mounted ? (
              <ResponsiveContainer width="100%" aspect={2.5} minWidth={0}>
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7ad2f3" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#7ad2f3" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#7ad2f3" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="w-full h-full bg-[#1e2022]/20 animate-pulse rounded-xl" />
            )}
          </div>
          
          <div className="flex justify-between mt-4 text-[10px] text-[#c0c7cd]/60 uppercase tracking-widest">
            <span>01 Eki</span>
            <span>12 Eki</span>
            <span>24 Eki</span>
            <span>01 Kas</span>
          </div>
        </div>
      </section>

      {/* Assets Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#c0c7cd]">Varlık Dağılımı</h2>
          <MoreHorizontal className="text-[#c0c7cd] w-5 h-5 cursor-pointer" />
        </div>
        <div className="flex flex-col gap-3">
          <AssetCard icon={TrendingUp} color="text-[#7ad2f3]" title="Hisse Senetleri" desc="Sheets 'Toplam Değer' sütunu toplamından hesaplanmıştır" value="₺1.240.000" />
          <AssetCard icon={PieChart} color="text-[#5ddbc2]" title="Yatırım Fonları" desc="Sheets 'Fon Portföyü' sayfasındaki toplam değerden çekilmektedir" value="₺480.000" />
          <AssetCard icon={ReceiptText} color="text-[#78dc77]" title="Tahvil & Bono" desc="Sheets 'Sabit Getiri' verilerine göre anlık güncellenmektedir" value="₺310.000" />
          <AssetCard icon={Landmark} color="text-[#7ad2f3]" title="Mevduat" desc="Sheets 'Nakit & Mevduat' tablosu toplamından çekilmektedir" value="₺152.150" />
          <AssetCard icon={Bitcoin} color="text-[#5ddbc2]" title="Kripto Varlıklar" desc="Sheets 'Kripto' sayfasındaki api entegrasyonu ile hesaplanmaktadır" value="₺300.000" />
        </div>
      </section>

      {/* Sync Status */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0c0e10] rounded-full border border-[#40484c]/10">
          <RefreshCw className="w-3.5 h-3.5 text-[#c0c7cd]" />
          <span className="text-[10px] font-medium text-[#c0c7cd] uppercase tracking-widest">Google Sheets'ten son güncelleme: Şimdi</span>
        </div>
      </div>
    </motion.div>
  );
}

function AssetCard({ icon: Icon, color, title, desc, value }: any) {
  return (
    <div className="group flex items-center justify-between p-5 bg-[#1a1c1e] rounded-2xl hover:bg-[#1e2022] transition-all duration-300 cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#1e2022] flex items-center justify-center">
          <Icon className={`${color} w-6 h-6`} />
        </div>
        <div>
          <div className="text-[#e2e2e5] font-headline font-bold text-base">{title}</div>
          <div className="text-[#c0c7cd] text-[10px] leading-tight max-w-[140px]">{desc}</div>
        </div>
      </div>
      <div className="text-right flex flex-col items-end gap-1">
        <div className="text-[#e2e2e5] font-headline font-bold text-base">{value}</div>
        <div className="w-16 h-4 opacity-80">
          <svg className="w-full h-full" viewBox="0 0 60 20">
            <path d="M0,15 L10,12 L20,18 L30,5 L40,8 L50,2 L60,5" fill="none" stroke="currentColor" className={color} strokeLinecap="round" strokeWidth="2"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
