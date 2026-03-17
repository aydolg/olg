import { Fingerprint, Folder, FileText, History, Landmark, Headset, ShieldCheck, Network, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Vault() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12 pb-24"
    >
      {/* Secure Status Hero */}
      <section className="flex flex-col items-center justify-center space-y-6 py-12">
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#7ad2f3]/20 rounded-full blur-2xl group-hover:bg-[#7ad2f3]/30 transition-all duration-700"></div>
          <div className="relative w-32 h-32 flex items-center justify-center bg-gradient-to-br from-[#282a2c] to-[#1a1c1e] rounded-full border border-[#7ad2f3]/20 shadow-2xl transition-transform duration-500 active:scale-95">
            <Fingerprint className="text-[#7ad2f3] w-16 h-16" />
          </div>
        </div>
        <div className="text-center space-y-2">
          <h2 className="font-headline text-3xl font-extrabold text-[#e2e2e5]">Kasa Kilitli</h2>
          <p className="font-body text-[#c0c7cd] text-sm">Güvenli erişim için biyometrik doğrulama bekleniyor</p>
          <button className="mt-4 px-8 py-3 bg-gradient-to-br from-[#7ad2f3] to-[#004c5f] text-[#003544] font-semibold rounded-xl active:scale-95 transition-all shadow-lg">
            Kilidi Aç
          </button>
        </div>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 space-y-6">
          <h3 className="font-headline text-xl font-bold text-[#e2e2e5] flex items-center gap-2">
            <Folder className="text-[#7ad2f3] w-6 h-6" />
            Dijital Evrak Çantası
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <CategoryCard icon={FileText} title="Poliçeler" count="12 Aktif Belge" color="text-[#7ad2f3]" />
            <CategoryCard icon={History} title="Sözleşmeler" count="4 Kritik Belge" color="text-[#5ddbc2]" />
            <CategoryCard icon={Landmark} title="Banka Hesapları" count="8 Tanımlı Kurum" color="text-[#78dc77]" />
          </div>

          {/* Advisor Card */}
          <div className="relative overflow-hidden bg-[#1a1c1e] rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-[#7ad2f3]/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7ad2f3]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="flex items-center gap-6 z-10">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#7ad2f3]/20">
                <img 
                  src="https://picsum.photos/seed/advisor/200/200" 
                  alt="Advisor" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-headline font-bold text-lg text-[#e2e2e5]">Özel Varlık Danışmanı</h4>
                <p className="text-[#c0c7cd] text-sm">Murat Yıldız — 7/24 Kesintisiz Destek</p>
              </div>
            </div>
            <button className="z-10 bg-[#7ad2f3] text-[#003544] px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-[#b9eaff] transition-colors active:scale-95">
              <Headset className="w-5 h-5" />
              Şimdi Bağlan
            </button>
          </div>
        </div>

        {/* Security Layers */}
        <aside className="md:col-span-4 space-y-6">
          <h3 className="font-headline text-xl font-bold text-[#e2e2e5] flex items-center gap-2">
            <ShieldCheck className="text-[#5ddbc2] w-6 h-6" />
            Güvenlik Katmanları
          </h3>
          <div className="bg-[#1a1c1e] rounded-3xl p-6 space-y-8">
            <SecurityToggle icon={ShieldCheck} title="2FA Doğrulama" desc="SMS & Authenticator" active color="text-[#5ddbc2]" />
            <SecurityToggle icon={Network} title="IP Beyaz Liste" desc="Sadece güvenli ağlar" active={false} color="text-[#7ad2f3]" />

            <div className="pt-4 border-t border-[#40484c]/20">
              <h4 className="text-xs font-bold text-[#c0c7cd] uppercase tracking-widest mb-4">Son Güvenlik Aktiviteleri</h4>
              <div className="space-y-4">
                <ActivityItem color="bg-[#78dc77]" title="Başarılı Giriş" desc="iPhone 15 Pro • İstanbul • 10:45" />
                <ActivityItem color="bg-[#7ad2f3]" title="Yeni Belge Yüklendi" desc="Kira Sözleşmesi_2024.pdf" />
                <ActivityItem color="bg-[#5ddbc2]" title="2FA Ayarları Güncellendi" desc="09:12 • Güvenlik onaylandı" />
              </div>
              <button className="w-full mt-6 py-2 text-xs font-bold text-[#7ad2f3] hover:bg-[#7ad2f3]/5 rounded-lg transition-colors">
                Tüm Kayıtları Görüntüle
              </button>
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}

function CategoryCard({ icon: Icon, title, count, color }: any) {
  return (
    <div className="bg-[#1a1c1e] p-6 rounded-3xl hover:bg-[#1e2022] transition-colors duration-300 group cursor-pointer">
      <Icon className={`${color} mb-4 w-6 h-6`} />
      <h4 className="font-headline font-bold text-[#e2e2e5] text-lg">{title}</h4>
      <p className="text-xs text-[#c0c7cd] mt-1">{count}</p>
      <div className="mt-6 flex justify-end">
        <ChevronRight className="text-[#c0c7cd] group-hover:text-[#7ad2f3] transition-colors w-5 h-5" />
      </div>
    </div>
  );
}

function SecurityToggle({ icon: Icon, title, desc, active, color }: any) {
  return (
    <div className="flex items-center justify-between group">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[#282a2c] rounded-xl flex items-center justify-center">
          <Icon className={`${color} w-5 h-5`} />
        </div>
        <div>
          <p className="font-bold text-[#e2e2e5] text-sm">{title}</p>
          <p className="text-xs text-[#c0c7cd]">{desc}</p>
        </div>
      </div>
      <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${active ? 'bg-[#5ddbc2]' : 'bg-[#333537]'}`}>
        <div className={`w-4 h-4 rounded-full transition-transform ${active ? 'bg-[#00382f] translate-x-6' : 'bg-[#8a9297] translate-x-0'}`}></div>
      </div>
    </div>
  );
}

function ActivityItem({ color, title, desc }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className={`w-2 h-2 rounded-full ${color} mt-1.5`}></div>
      <div className="text-xs">
        <p className="text-[#e2e2e5] font-medium">{title}</p>
        <p className="text-[#c0c7cd]">{desc}</p>
      </div>
    </div>
  );
}
