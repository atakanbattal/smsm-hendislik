import { Badge, Button } from '../components/ui/Components'

const team = [
    { name: 'Dr. Ahmet Yılmaz', role: 'Genel Müdür', desc: '20 yıllık metalürji mühendisliği ve endüstriyel yönetim deneyimi ile firmamıza liderlik etmektedir.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0M6cNyZafri-YxDTk-kYYoVXIQCK67qtrpk7BwhqiqZYzkX4iV3Eg2fzg9ZnGC3iLrS9hGnBVlPXO1lmcxig1alUOQQu6nEfn-3iBgDuFVyOFznSMXJ_jtN6Dt-db8lca0rpQjvf1ia_qjDKjH_h--07HNhPaYe_G1PvtmHRnT5RQzECjfVXRmvTT28mtKDHpqxB8pk0-fBQLNSEOzq3fLvBnQCH5uP9gMllifOWwCk0DTW80BnE1IPLGMv0BKPUzrLOrLBA8GSVx' },
    { name: 'Zeynep Demir', role: 'Teknik Müdür', desc: 'Seviye 3 NDT uzmanı ve kaynak mühendisliği koordinatörü. Teknik süreçlerin baş mimarı.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMdnXxybLl-h8HbfuGL_5su2AxEmVEY5bJieUbe2HFXTs-ayBU-TmZlkQxgPWaZ7yQuRupgwMZhA3lxumdlhjAXk3JI91WYJbnpGZXSzPzlJhwcnDZ5qN8KAJw1U-jcNCLHoylHpmvUoMLbSGfWvBiWOwAxPqiEr4e6Cc7sTT9EFCZ_yMRACmV3XzM5KnwYxjOUlLCsyHOB4pG9eZwEMIml9uLYcvBA9ljMe8ru4gU03a6ynB_J0fIvZlQCXf7abpLTtvXaGusyNGa' },
    { name: 'Mehmet Kaya', role: 'Operasyon Direktörü', desc: 'Saha operasyonlarının güvenli, zamanında ve verimli yürütülmesinden sorumlu.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuusIS6cKRyQ3BHk4T_lzePlvcusccvh809wXJg-PmI4z_i9aDcUKBiAf1CTJjMR0nO28Dl9qcWeBu5Zr3hCZpRfA3mC9WPn0m-xOQYL0NEETcuJfSktR7QgRkUPbrW0lCjeOhWWOuc82TjkGTcD3axzBlDLMh1DUT386t_Ts09a5720eBnHo78hbjxvAP_qy6vcY-2jaCe77RRSw9kfZEYdzXm16UNoqp_M04-Ud7pfXow_4JN3SS4QOgzZhKGbZ6MiTcvCjHkenh' },
    { name: 'Elif Şahin', role: 'Kalite Yöneticisi', desc: 'ISO 9001 ve uluslararası akreditasyon süreçlerinin titizlikle yönetimini sağlamaktadır.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvyLlRCm54jheaKO1QhawazOouFLoe_oG3mUeiBFDhykcL0WspKQ83ycneYREXl_PqdC-qRONPzCMvAfxNXHaDiEgvRUtFx9cxAp123o7ENoSp0cvPGOCYJinhmj_vhC3Jxty2XfXWs_s9EQFTRaWHurBRFuXt196imwM2ga9sLhv56-myWCB7C0o--d1ekjc2YlvHrmixkWNFdcx7j7TG6UmG3mVqiRdBTGra2euUuEbUnrek9JrX05CaO-VSX5njPREwjzTcrJXb' },
]

const projects = [
    { icon: 'train', title: 'Ulusal Hızlı Tren Projesi', desc: 'Gövde kaynaklarının EN 15085 standartlarına göre denetimi, ultrasonik ve manyetik parçacık testleri uzman ekibimiz tarafından başarıyla tamamlandı.', tag: 'Demiryolu Sistemleri' },
    { icon: 'factory', title: 'Petrokimya Tesisi Revizyonu', desc: 'Yüksek basınçlı reaktör ve depolama tanklarının periyodik kontrolleri, korozyon haritalandırma çalışmaları ve kalan ömür analizleri.', tag: 'Endüstriyel Tesisler' },
]

export default function About() {
    return (
        <div className="animate-fade-in">
            {/* Hero */}
            <section className="relative h-[400px] w-full flex items-center justify-center bg-background-dark overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent z-10"></div>
                    <div
                        className="h-full w-full bg-cover bg-center opacity-40 grayscale"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoWr5A-Tk3CJUkoh_mbbT4QeVOFhqlmkaqnbNF215_-TpC3-08Tz3Dk-j95kL4xC3NK4PvVehHJSuknbgem2Ta235Tt_G3Qh48Hmb3AwiXkZvvYidZeqh1pkpGOTY07-Ux-NuyPtYioEHjgmzGCwPZGhR0TEYtRyMWrWkP-36JN76I-fcqdNwjdFcLBJy00k00NRSexgStn0RfBLbwS7jEDTJXtbWxIIWltgF5dwEWHZG94m6zqAXmqC5Ebi87iGnHciB9XI7twdo0")' }}
                    ></div>
                </div>
                <div className="relative z-20 text-center max-w-4xl px-4 flex flex-col items-center">
                    <Badge className="mb-4">Kurumsal</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Hakkımızda</h1>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400 font-medium">
                        <span>Anasayfa</span>
                        <span className="text-primary text-xs">/</span>
                        <span className="text-white">Hakkımızda</span>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-20 bg-background-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-surface-dark to-transparent opacity-30 pointer-events-none"></div>
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="h-px w-10 bg-primary"></span>
                                <span className="text-primary font-bold uppercase tracking-widest text-sm">BİZ KİMİZ?</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                Mühendislikte <span className="text-primary">Mükemmellik</span> ve Güvenilir Çözüm Ortaklığı
                            </h2>
                            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
                                <p>
                                    SMS İNOVASYON MÜHENDİSLİK, endüstriyel kalite kontrol ve ileri mühendislik danışmanlığı alanında sektörün öncü firmalarından biri olarak faaliyet göstermektedir.
                                </p>
                                <p>
                                    Kurulduğumuz günden bu yana, NDT (Tahribatsız Muayene), ADR tanker muayeneleri, kaynak mühendisliği ve demiryolu sistemleri sertifikasyonu konularında uluslararası standartlara uygun, güvenilir ve sürdürülebilir çözümler sunmaktayız.
                                </p>
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-[#333]">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary text-3xl mt-1">verified_user</span>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Sertifikalı Uzmanlık</h4>
                                        <p className="text-xs text-gray-500 mt-1">ISO 9712 & EN 15085 Sertifikalı personel ve ekipman.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary text-3xl mt-1">globe_uk</span>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Global Standartlar</h4>
                                        <p className="text-xs text-gray-500 mt-1">Avrupa Normlarına tam uygunluk ve danışmanlık.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl blur-xl"></div>
                            <img
                                alt="Mühendislik çalışması"
                                className="relative rounded-lg shadow-2xl border border-[#333] grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[4/3]"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSHDYVgbJcSqUAGQqQuuTuo4dlL43mdrkkGSPmVmoUZDy_2YhpqDT8AFZrYfkv0k9-8Xy4_uvs1nC0fohBtoWlkcjzHNitaSH7jGbl3kq_OEMhZLvsYa84f01V5peLhie-xCmf3xPT1Yixvw-LiC4ePjQ7neQJUL9Xr1KI25zJ-fkQH49yuj0yBlgLzIv-89OZjPpjZIZh1UfHzNBdHUBP2cdu3xV7GcIbWvz9xy-_GZ1yH0u8o4LkIUkAyAtuugai9Mss32MDhv5"
                            />
                            <div className="absolute bottom-6 -left-6 bg-slate-metallic p-6 rounded shadow-xl border border-[#444] hidden md:block max-w-xs">
                                <p className="text-primary font-serif text-4xl leading-none">"</p>
                                <p className="text-gray-300 text-sm italic mb-2 -mt-4 pl-4">Güvenlik bir seçenek değil, mühendisliğin temelidir.</p>
                                <p className="text-white text-xs font-bold pl-4 text-right">- Kurucu Mesajı</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-24 bg-background-dark">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Değerlerimiz ve Hedeflerimiz</h2>
                        <p className="text-gray-400 text-lg">Mühendislik etiğine bağlı, inovasyona dayalı ve insan odaklı yaklaşımımızla geleceği inşa ediyoruz.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-slate-metallic to-surface-dark p-8 rounded-xl border border-[#333] hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 shadow-lg">
                            <div className="w-16 h-16 bg-background-dark rounded-lg flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all shadow-inner">
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-background-dark">target</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Misyonumuz</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Endüstriyel tesislerin ve projelerin güvenlik standartlarını en üst seviyeye çıkararak, hata payını sıfıra indiren mühendislik çözümleri sunmak ve sürdürülebilir üretime katkıda bulunmak.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-slate-metallic to-surface-dark p-8 rounded-xl border border-[#333] hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 shadow-lg">
                            <div className="w-16 h-16 bg-background-dark rounded-lg flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all shadow-inner">
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-background-dark">visibility</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Vizyonumuz</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Türkiye'de ve uluslararası arenada, ileri NDT teknolojileri ve mühendislik danışmanlığı denildiğinde akla gelen ilk, en güvenilir ve en yenilikçi çözüm ortağı olmak.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-slate-metallic to-surface-dark p-8 rounded-xl border border-[#333] hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 shadow-lg">
                            <div className="w-16 h-16 bg-background-dark rounded-lg flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all shadow-inner">
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-background-dark">diamond</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Değerlerimiz</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Bağımsızlık, tarafsızlık, sürekli gelişim, şeffaflık ve iş güvenliği. Mühendislik etiğinden ödün vermeden, bilimsel veriler ışığında hareket ederiz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-[#151515] relative overflow-hidden border-t border-[#222]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">YÖNETİM KADROSU</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Uzman Ekibimizle Tanışın</h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-lg bg-slate-metallic border border-[#333]">
                                <div className="aspect-[3/4] overflow-hidden bg-gray-800">
                                    <img
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                        src={member.image}
                                    />
                                </div>
                                <div className="p-5 bg-slate-metallic relative border-t border-[#333]">
                                    <h4 className="text-white font-bold text-lg">{member.name}</h4>
                                    <p className="text-primary text-xs uppercase font-semibold mb-3 tracking-wider">{member.role}</p>
                                    <p className="text-gray-400 text-xs leading-relaxed">{member.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 bg-background-dark border-t border-[#333]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold text-white">Başarı Hikayelerimiz</h2>
                        <p className="text-gray-400 mt-2 md:mt-0">Sektöre değer katan önemli projelerimizden bazıları</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="flex flex-col sm:flex-row gap-6 items-start bg-surface-dark p-8 rounded-lg border border-[#333] hover:border-primary/40 transition-colors">
                                <div className="w-16 h-16 flex-shrink-0 bg-slate-metallic rounded-lg flex items-center justify-center border border-[#444] text-primary">
                                    <span className="material-symbols-outlined text-3xl">{project.icon}</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-xl mb-2">{project.title}</h4>
                                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">{project.desc}</p>
                                    <span className="text-[10px] font-bold text-primary border border-primary/30 px-3 py-1 rounded bg-primary/5 uppercase tracking-wide">{project.tag}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-metallic border-t border-primary/20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Proje standartlarınızı yükseltmeye hazır mısınız?</h2>
                    <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">Mühendislik ekibimiz, endüstriyel operasyonlarınız için NDT testleri, sertifikasyon ve kalite yönetimi konularında yardıma hazır.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button to="/iletisim" size="lg" className="shadow-lg shadow-primary/20 transform hover:-translate-y-1">
                            İletişime Geçin
                        </Button>
                        <Button to="/referanslar" variant="secondary" size="lg">
                            Ofislerimizi Ziyaret Edin
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
