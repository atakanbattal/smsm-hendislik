import { Badge, Button } from '../components/ui/Components'

const values = [
    { icon: 'school', title: 'Sürekli Gelişim', desc: 'Çalışanlarımızın mesleki gelişimini destekliyor, uluslararası standartlarda eğitim ve sertifikasyon imkanları sunuyoruz.' },
    { icon: 'hub', title: 'İnovasyon ve Teknoloji', desc: 'Endüstriyel muayene ve mühendislikte en son teknolojileri kullanarak sektöre yön veriyoruz.' },
    { icon: 'diversity_3', title: 'Takım Ruhu', desc: 'Farklı uzmanlıklara sahip, birbirini destekleyen ve ortak hedeflere koşan dinamik bir ekibiz.' },
    { icon: 'health_and_safety', title: 'Önce Güvenlik', desc: 'İş sağlığı ve güvenliği kültürümüzün temelidir. Güvenli çalışma ortamı en büyük önceliğimizdir.' },
]

const positions = [
    { title: 'NDT Uzmanı (Seviye II/III)', type: 'Tam Zamanlı', location: 'İstanbul / Saha', experience: '3+ Yıl', desc: 'RT, UT, MT, PT yöntemlerinde sertifikalı, saha deneyimi olan, raporlama konusunda titiz çalışma arkadaşları arıyoruz.' },
    { title: 'Kaynak Mühendisi (IWE/EWE)', type: 'Tam Zamanlı', location: 'Kocaeli', experience: '5+ Yıl', desc: 'EN 1090 ve ISO 3834 standartlarına hakim, WPS/PQR süreçlerini yönetebilecek, İngilizce bilen kaynak mühendisi.' },
    { title: 'Kalite Kontrol Teknikeri', type: 'Tam Zamanlı', location: 'İstanbul / Atölye', experience: '2+ Yıl', desc: 'İmalat süreçlerinde ölçüsel kontrol ve görsel muayene yapabilecek, teknik resim okuyabilen takım arkadaşı.' },
]

export default function Career() {
    return (
        <div className="animate-fade-in">
            {/* Hero */}
            <section className="relative min-h-[600px] w-full flex items-center bg-background-dark">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10"></div>
                    <div
                        className="h-full w-full bg-cover bg-center opacity-60"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoWr5A-Tk3CJUkoh_mbbT4QeVOFhqlmkaqnbNF215_-TpC3-08Tz3Dk-j95kL4xC3NK4PvVehHJSuknbgem2Ta235Tt_G3Qh48Hmb3AwiXkZvvYidZeqh1pkpGOTY07-Ux-NuyPtYioEHjgmzGCwPZGhR0TEYtRyMWrWkP-36JN76I-fcqdNwjdFcLBJy00k00NRSexgStn0RfBLbwS7jEDTJXtbWxIIWltgF5dwEWHZG94m6zqAXmqC5Ebi87iGnHciB9XI7twdo0")' }}
                    ></div>
                </div>
                <div className="relative z-20 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-3xl flex flex-col gap-6">
                        <Badge>
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Kariyer Fırsatları
                        </Badge>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight">
                            Geleceğin <span className="font-bold text-primary">Mühendisliğini</span><br />
                            Birlikte Tasarlayalım
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-xl font-light leading-relaxed">
                            SMS İnovasyon olarak, yeteneğe, tutkuya ve sürekli gelişime inanıyoruz. Kalite ve güvenliğin ön planda olduğu projelerde bizimle çalışmak ister misiniz?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
                                size="lg"
                            >
                                <span>Açık Pozisyonlar</span>
                                <span className="material-symbols-outlined text-[20px]">expand_more</span>
                            </Button>
                            <Button variant="secondary" size="lg">
                                <span>Şirket Kültürü</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-background-dark relative overflow-hidden border-b border-[#333]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Değerlerimiz</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Neden SMS İnovasyon?</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="group p-6 rounded-lg bg-slate-metallic border border-[#333] hover:border-primary transition-colors text-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                                    <span className="material-symbols-outlined text-primary text-3xl">{value.icon}</span>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work Environment */}
            <section className="py-20 bg-[#1a1a1a] border-y border-[#333]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1 flex flex-col gap-6">
                            <div className="flex items-center gap-2">
                                <span className="h-px w-10 bg-primary"></span>
                                <span className="text-primary font-bold uppercase tracking-widest text-sm">Çalışma Ortamımız</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                Sahada ve Ofiste <br />
                                <span className="text-gray-400 font-light">Profesyonel Deneyim</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                SMS İnovasyon'da her gün yeni bir mühendislik meydan okumasıyla karşılaşacaksınız. Demir yolu projelerinden basınçlı kaplara, endüstriyel tesis denetimlerinden ileri NDT uygulamalarına kadar geniş bir yelpazede tecrübe kazanma fırsatı sunuyoruz.
                            </p>
                            <ul className="space-y-4 mt-4 text-gray-400">
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Uluslararası projelerde yer alma fırsatı</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Modern ekipmanlar ve yazılımlar</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Mentorluk sistemi ve kariyer koçluğu</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"></div>
                            <div className="relative overflow-hidden rounded-xl border border-[#333]">
                                <img
                                    alt="Welding and engineering work environment"
                                    className="w-full h-auto aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700 filter grayscale hover:grayscale-0"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSHDYVgbJcSqUAGQqQuuTuo4dlL43mdrkkGSPmVmoUZDy_2YhpqDT8AFZrYfkv0k9-8Xy4_uvs1nC0fohBtoWlkcjzHNitaSH7jGbl3kq_OEMhZLvsYa84f01V5peLhie-xCmf3xPT1Yixvw-LiC4ePjQ7neQJUL9Xr1KI25zJ-fkQH49yuj0yBlgLzIv-89OZjPpjZIZh1UfHzNBdHUBP2cdu3xV7GcIbWvz9xy-_GZ1yH0u8o4LkIUkAyAtuugai9Mss32MDhv5"
                                />
                                <div className="absolute bottom-6 right-6 bg-background-dark/90 backdrop-blur-md border border-[#333] p-4 rounded shadow-lg text-right">
                                    <div className="text-primary font-bold text-2xl">Mükemmellik</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider">Standartlarımız</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20 bg-background-dark relative" id="positions">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-[#333] pb-8">
                        <div>
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Kariyer Fırsatları</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Açık Pozisyonlar</h3>
                        </div>
                        <p className="text-gray-400 max-w-md text-right md:text-left">
                            Ekibimize katılmak için aşağıdaki pozisyonları inceleyebilir veya genel başvuru yapabilirsiniz.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        {positions.map((pos, index) => (
                            <div key={index} className="bg-slate-metallic rounded-lg p-8 border border-[#333] hover:border-primary transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{pos.title}</h4>
                                        <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-bold rounded uppercase">{pos.type}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4 max-w-2xl">{pos.desc}</p>
                                    <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-mono">
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">location_on</span> {pos.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">schedule</span> Tecrübe: {pos.experience}
                                        </span>
                                    </div>
                                </div>
                                <Button to={`/iletisim?pozisyon=${encodeURIComponent(pos.title)}`} variant="outline" className="shrink-0">
                                    <span>Başvur</span>
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form CTA */}
            <section className="py-20 bg-slate-metallic border-t border-primary/20">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-[#1a1a1a] rounded-xl p-8 md:p-12 border border-[#333] shadow-2xl">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Genel Başvuru Formu</h2>
                            <p className="text-gray-400">Aradığınız pozisyonu listede bulamadınız mı? Bize CV'nizi gönderin, uygun pozisyonlarda değerlendirelim.</p>
                        </div>
                        <div className="text-center">
                            <Button to="/iletisim" size="lg">
                                Başvuru Yapmak İçin İletişime Geçin
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
