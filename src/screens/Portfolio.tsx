import { TrendingUp, TrendingDown, Bitcoin, PieChart, FileText, ChevronRight, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';

const allocationData = [
  { name: 'Krpt', value: 32 },
  { name: 'Hss', value: 18 },
  { name: 'Bon', value: 22 },
  { name: 'Fon', value: 12 },
  { name: 'Mev', value: 16 },
];

export default function Portfolio() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-12 pb-24"
    >
      {/* Hero Summary */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[#c0c7cd] text-sm mb-1">Toplam Portföy Değeri</p>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-[#e2e2e5] tracking-tight">
              ₺2.482.150<span className="text-[#c0c7cd] text-2xl font-normal ml-2">,40</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-[#1a1c1e] px-4 py-2 rounded-xl">
            <TrendingUp className="text-[#78dc77] w-5 h-5" />
            <span className="text-[#78dc77] font-semibold">+₺42.150 (1.8%)</span>
            <span className="text-[#c0c7cd] text-xs ml-2">Bugün</span>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <nav className="flex overflow-x-auto no-scrollbar gap-2 mb-10 p-1 bg-[#0c0e10] rounded-2xl w-fit max-w-full">
        {['Tümü', 'Hisse', 'Fon', 'Bono', 'Mevduat', 'Kripto'].map((cat, i) => (
          <button 
            key={cat}
            className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              i === 0 
                ? 'bg-gradient-to-br from-[#7ad2f3] to-[#004c5f] text-[#003544]' 
                : 'text-[#c0c7cd] hover:bg-[#282a2c]'
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Portfolio List */}
      <div className="grid grid-cols-1 gap-4">
        <AssetListItem 
          icon={TrendingUp} 
          symbol="THYAO" 
          name="Türk Hava Yolları" 
          amount="450 Adet" 
          cost="₺264,10" 
          price="₺298,50" 
          profit="+13.02%" 
          value="₺134.325" 
          positive 
        />
        <AssetListItem 
          icon={Bitcoin} 
          symbol="BTC" 
          name="Bitcoin" 
          amount="0.10 BTC" 
          cost="₺1.720.000" 
          price="₺2.104.500" 
          profit="+22.35%" 
          value="₺210.450" 
          positive 
          color="text-[#5ddbc2]"
        />
        <AssetListItem 
          icon={PieChart} 
          symbol="TI2" 
          name="İş Portföy Yabancı Tek." 
          amount="12.500 Pay" 
          cost="₺14,25" 
          price="₺13,80" 
          profit="-3.15%" 
          value="₺172.500" 
          positive={false} 
          color="text-[#78dc77]"
        />
        <AssetListItem 
          icon={FileText} 
          symbol="TRB120224" 
          name="Hazine Bonosu" 
          amount="₺250.000 (Nom)" 
          cost="₺94,20" 
          price="₺98,15" 
          profit="+4.19%" 
          value="₺245.375" 
          positive 
          color="text-[#8a9297]"
        />
      </div>

      {/* Allocation & Suggestion */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-[#1a1c1e] rounded-3xl p-8 relative overflow-hidden">
          <h4 className="font-headline font-bold text-xl mb-6">Varlık Dağılımı</h4>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={allocationData}>
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {allocationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#7ad2f3" fillOpacity={0.2 + (index * 0.15)} />
                  ))}
                </Bar>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#c0c7cd', fontSize: 10 }} />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ backgroundColor: '#333537', border: 'none', borderRadius: '8px', fontSize: '10px' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#004c5f] to-[#1a1c1e] rounded-3xl p-8 flex flex-col justify-between border border-[#7ad2f3]/5">
          <div>
            <Lightbulb className="text-[#7ad2f3] mb-4 w-8 h-8" />
            <h4 className="font-headline font-bold text-xl mb-2">Akıllı Öneri</h4>
            <p className="text-sm text-[#c0c7cd] leading-relaxed">Portföyünüzdeki Kripto ağırlığı risk toleransınızın üzerinde. Hisse senedi tarafında %5 artırım önerilir.</p>
          </div>
          <button className="mt-6 bg-[#7ad2f3] text-[#003544] font-bold py-3 px-6 rounded-xl text-sm scale-95 active:scale-90 transition-transform">
            Optimizasyon Başlat
          </button>
        </div>
      </section>
    </motion.div>
  );
}

function AssetListItem({ icon: Icon, symbol, name, amount, cost, price, profit, value, positive, color = "text-[#7ad2f3]" }: any) {
  return (
    <div className="bg-[#1a1c1e] p-5 md:p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#1e2022] transition-all group cursor-pointer">
      <div className="flex items-center gap-4 flex-1">
        <div className="w-12 h-12 rounded-xl bg-[#282a2c] flex items-center justify-center">
          <Icon className={`${color} w-6 h-6`} />
        </div>
        <div>
          <h3 className="font-headline font-bold text-[#e2e2e5] text-lg">{symbol}</h3>
          <p className="text-xs text-[#c0c7cd] font-medium">{name}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-[2]">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-[#c0c7cd] mb-1">Miktar</span>
          <span className="text-[#e2e2e5] font-semibold">{amount}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-[#c0c7cd] mb-1">Maliyet / Fiyat</span>
          <span className="text-[#e2e2e5] font-semibold">{cost} / <span className="text-[#7ad2f3]">{price}</span></span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-[#c0c7cd] mb-1">Toplam Kar/Zarar</span>
          <div className="flex items-center gap-2">
            <span className={`font-bold ${positive ? 'text-[#78dc77]' : 'text-[#ffb4ab]'}`}>{profit}</span>
            {positive ? <TrendingUp className="text-[#78dc77] w-4 h-4" /> : <TrendingDown className="text-[#ffb4ab] w-4 h-4" />}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between md:justify-end gap-4 md:flex-1 border-t md:border-t-0 border-[#40484c]/10 pt-4 md:pt-0">
        <div className="text-right">
          <p className="text-[10px] text-[#c0c7cd] mb-0.5">Varlık Değeri</p>
          <p className="font-bold text-[#e2e2e5]">{value}</p>
        </div>
        <ChevronRight className="text-[#c0c7cd] group-hover:text-[#7ad2f3] transition-colors w-5 h-5" />
      </div>
    </div>
  );
}
