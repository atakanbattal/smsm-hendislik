import { Link } from 'react-router-dom'
import { Button, ServiceCard, Badge } from '../components/ui/Components'

const services = [
    // ADR ve Tehlikeli Madde Hizmetleri
    { icon: 'local_shipping', title: 'ADR Yetkili Muayene', description: 'TSE ve Bakanlık onaylı ADR muayene merkezi. T9, ara, periyodik ve istisnai muayeneler.', tag: 'TSE Onaylı', category: 'adr' },
    { icon: 'build', title: 'Tamirat & Tadilat', description: 'ADR onaylı araç tamiratları, üst yapı onarımları ve yönetmeliğe uygun modifikasyonlar.', tag: 'ADR Onaylı', category: 'adr' },
    { icon: 'shield', title: 'Güvenlik Danışmanlığı', description: 'ADR/RID tehlikeli madde taşımacılık danışmanlığı ve mevzuat uyum hizmetleri.', tag: 'TMGD', category: 'adr' },
    { icon: 'factory', title: 'Tank İmalatı', description: 'ADR\'li ve ADR\'siz tank/treyler üretimi, araç üstü tank sistemleri.', tag: 'İmalat', category: 'adr' },
    // Mühendislik ve Kaynak Hizmetleri
    { icon: 'precision_manufacturing', title: 'Kaynak Mühendisliği', description: 'WPS/PQR hazırlama, kaynakçı sertifikasyonu ve çelik/alüminyum kaynak imalatı.', tag: 'EN 15085', category: 'engineering' },
    { icon: 'train', title: 'EN 15085 Demiryolu', description: 'Demiryolu araçları için kaynaklı imalat danışmanlığı ve CL1-CL4 sertifikasyonu.', tag: 'CL1-CL4', category: 'engineering' },
    { icon: 'gavel', title: '13094 Danışmanlığı', description: 'İş ekipmanları periyodik kontrol danışmanlığı. Basınçlı kaplar, kaldırma ekipmanları.', tag: '6331 Kanun', category: 'engineering' },
    // Muayene ve Test Hizmetleri
    { icon: 'calendar_month', title: 'Periyodik Muayene', description: 'Kaldırma ekipmanları, basınçlı kaplar ve iş makineleri periyodik kontrolleri.', tag: 'ISO 17020', category: 'inspection' },
    { icon: 'verified', title: 'Kalite Kontrol', description: 'NDT ve tahribatlı muayene hizmetleri. VT, UT, MT, RT, PT testleri.', tag: 'ISO 9712', category: 'inspection' },
    { icon: 'policy', title: 'Denetim & Gözetim', description: 'Ürüne özel denetimler, sipariş takibi ve tedarikçi kalite güvence denetimleri.', tag: 'Inspection', category: 'inspection' },
    { icon: 'tune', title: 'Kalibrasyon', description: 'Kaynak makinası, ölçü aletleri, manometre ve debimetre kalibrasyonu.', tag: 'TÜRKAK', category: 'inspection' },
    { icon: 'view_in_ar', title: 'Gelişmiş NDT', description: 'PAUT, TOFD, Dijital Radyografi ve Girdap Akımı Testi ile hassas analiz.', tag: 'ISO 13588', category: 'inspection' },
]


const stats = [
    { value: '10+', label: 'Yıllık Tecrübe' },
    { value: '250+', label: 'Tamamlanan Proje' },
    { value: '20+', label: 'Akredite Sertifika' },
    { value: '%100', label: 'Müşteri Memnuniyeti' },
]

const certifications = [
    { name: 'ISO', sub: '9001:2015' },
    { name: 'EN', sub: '1090-2' },
    { name: 'ISO', sub: '3834-2' },
    { name: 'TS', sub: 'EN 15085' },
    { name: 'ADR', sub: 'CERTIFIED' },
]

// Uzmanlık alanları - PRD'den güncellenmiş
const expertiseAreas = [
    {
        id: 'adr-merkez',
        title: 'ADR Yetkili Muayene Merkezi',
        subtitle: 'TSE & Bakanlık Onaylı',
        description: 'Ulaştırma ve Altyapı Bakanlığı ile TSE Tehlikeli Madde Taşımacılık Müdürlüğü onaylı merkezimizde akaryakıt, asfalt ve kimyasal madde taşıyan tanklar için tüm muayene hizmetlerini sunuyoruz.',
        icon: 'local_shipping',
        badge: 'ADR 2023',
        badgeText: 'Resmi Yetkili Merkez',
        features: [
            { icon: 'verified', title: 'T9 & Periyodik Muayeneler', desc: 'Yıllık, 3 yıllık ve 6 yıllık zorunlu kontroller' },
            { icon: 'build', title: 'Tamirat & Tadilat Merkezi', desc: 'ADR onaylı araç onarım ve modifikasyon' },
        ],
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    },
    {
        id: 'tank-imalat',
        title: 'Tank ve Basınçlı Kap Üretimi',
        subtitle: 'Endüstriyel İmalat',
        description: 'ADR\'li ve ADR\'siz tank/treyler üretimi, araç üstü tank sistemleri ve özel tasarım projeler. Standartlara uygun, güvenli ve dayanıklı tank sistemleri üretiyoruz.',
        icon: 'factory',
        badge: 'İMALAT',
        badgeText: 'Üretici Garantili',
        features: [
            { icon: 'verified', title: 'ADR\'li Tank İmalatı', desc: 'Tehlikeli madde taşımacılığı için onaylı tanklar' },
            { icon: 'engineering', title: 'Kaynaklı İmalat', desc: 'Çelik ve alüminyum profesyonel kaynak' },
        ],
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    },
    {
        id: 'danismanlik',
        title: 'Güvenlik Danışmanlığı',
        subtitle: 'TMGD Belgeli Uzmanlar',
        description: 'ADR/RID uluslararası sözleşmelerine uygun tehlikeli madde taşımacılık danışmanlığı. Nakliye firmalarına araç muayene takibi, dosya yönetimi ve mevzuat uyum hizmetleri.',
        icon: 'shield',
        badge: 'TMGD',
        badgeText: 'Uzman Kadro',
        features: [
            { icon: 'verified', title: 'Mevzuat Danışmanlığı', desc: 'ADR/RID uyum ve dokümantasyon' },
            { icon: 'engineering', title: '13094 Periyodik Kontrol', desc: 'İş ekipmanları yasal zorunluluk takibi' },
        ],
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    },
    {
        id: 'kalite',
        title: 'Kalite Kontrol & Kalibrasyon',
        subtitle: 'Akreditasyonlu Laboratuvar',
        description: 'NDT ve tahribatlı muayene hizmetleri ile akreditasyonlu kalibrasyon laboratuvarımızda tüm ölçüm cihazlarınızın hassasiyetini garanti altına alıyoruz.',
        icon: 'tune',
        badge: 'TÜRKAK',
        badgeText: 'Akredite Kuruluş',
        features: [
            { icon: 'verified', title: 'NDT Testleri', desc: 'VT, UT, MT, RT, PT, PAUT, TOFD' },
            { icon: 'engineering', title: 'Kalibrasyon Hizmetleri', desc: 'Kaynak makinası, manometre, debimetre' },
        ],
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    },
]


// Uzmanlık Alanı Bileşeni
function ExpertiseCard({ area, reverse = false }) {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`flex flex-col gap-6 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex items-center gap-2">
                    <span className="h-px w-10 bg-primary"></span>
                    <span className="text-primary font-bold uppercase tracking-widest text-sm">Uzmanlık Alanı</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    {area.title} <br />
                    <span className="text-gray-400 font-light text-2xl md:text-3xl">{area.subtitle}</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    {area.description}
                </p>
                <div className="flex flex-col gap-4 mt-2">
                    {area.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-background-dark/50 border border-[#333] rounded-lg">
                            <span className="material-symbols-outlined text-primary mt-1">{feature.icon}</span>
                            <div>
                                <h4 className="text-white font-bold">{feature.title}</h4>
                                <p className="text-sm text-gray-400">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pt-4">
                    <Button to="/hizmetler" variant="outline">
                        <span>Detaylı Bilgi</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Button>
                </div>
            </div>
            <div className={`relative group ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"></div>
                <div className="relative overflow-hidden rounded-xl border border-[#333]">
                    <img
                        alt={area.title}
                        className="w-full h-auto aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700 filter grayscale hover:grayscale-0"
                        src={area.image}
                    />
                    <div className="absolute bottom-6 left-6 bg-background-dark/90 backdrop-blur-md border border-[#333] p-4 rounded shadow-lg">
                        <div className="text-primary font-bold text-2xl">{area.badge}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">{area.badgeText}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative min-h-[600px] w-full flex items-center bg-background-dark">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10"></div>
                    <div
                        className="h-full w-full bg-cover bg-center opacity-60"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80")' }}
                    ></div>
                </div>
                <div className="relative z-20 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-3xl flex flex-col gap-6">
                        <Badge>
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            ISO 9001 Sertifikalı Mükemmellik
                        </Badge>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight">
                            Kalite &amp; Güvenlik İçin <br />
                            <span className="font-bold text-primary">Mühendislik Hassasiyeti</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-xl font-light leading-relaxed">
                            Kaynaklı İmalat, ADR Tankerleri, Basınçlı Kaplar ve Demiryolu Sistemlerinde sertifikalı uzmanlık. Endüstriyel kalite kontrol çözümleri sunuyoruz.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button to="/hizmetler" size="lg">
                                <span>Hizmetlerimiz</span>
                                <span className="material-symbols-outlined text-[20px]">expand_more</span>
                            </Button>
                            <Button to="/iletisim" variant="secondary" size="lg">
                                <span>Mühendisle Görüşün</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Dashboard Section */}
            <section className="py-20 bg-background-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-surface-dark to-transparent opacity-30 pointer-events-none"></div>
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Hizmet Portföyümüz</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Kapsamlı Mühendislik Çözümleri</h3>
                            <p className="mt-4 text-gray-400">ADR muayene ve tamirat, tank imalatı, güvenlik danışmanlığı, kalibrasyon ve kalite kontrol hizmetleri tek çatı altında.</p>
                        </div>
                        <Link to="/hizmetler" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors group">
                            <span className="font-medium">12 hizmetin tamamını görüntüle</span>
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>

                    {/* Dashboard Category Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* ADR Hizmetleri */}
                        <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-orange-400 text-2xl">local_shipping</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">ADR Hizmetleri</h4>
                                    <p className="text-orange-400 text-sm font-medium">4 Hizmet</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-center gap-2"><span className="text-orange-400">●</span> Yetkili Muayene Merkezi</li>
                                <li className="flex items-center gap-2"><span className="text-orange-400">●</span> Tamirat & Tadilat</li>
                                <li className="flex items-center gap-2"><span className="text-orange-400">●</span> Güvenlik Danışmanlığı</li>
                                <li className="flex items-center gap-2"><span className="text-orange-400">●</span> Tank İmalatı</li>
                            </ul>
                        </div>

                        {/* Mühendislik Hizmetleri */}
                        <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-blue-400 text-2xl">engineering</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Mühendislik</h4>
                                    <p className="text-blue-400 text-sm font-medium">3 Hizmet</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-center gap-2"><span className="text-blue-400">●</span> Kaynak Mühendisliği</li>
                                <li className="flex items-center gap-2"><span className="text-blue-400">●</span> EN 15085 Demiryolu</li>
                                <li className="flex items-center gap-2"><span className="text-blue-400">●</span> 13094 Danışmanlığı</li>
                            </ul>
                        </div>

                        {/* Muayene & Test */}
                        <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/30 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-emerald-400 text-2xl">science</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Muayene & Test</h4>
                                    <p className="text-emerald-400 text-sm font-medium">5 Hizmet</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-center gap-2"><span className="text-emerald-400">●</span> Periyodik Muayene</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-400">●</span> Kalite Kontrol & NDT</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-400">●</span> Denetim & Gözetim</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-400">●</span> Kalibrasyon</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-400">●</span> Gelişmiş NDT</li>
                            </ul>
                        </div>
                    </div>

                    {/* All Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>

                    <div className="md:hidden mt-8 text-center">
                        <Link to="/hizmetler" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors">
                            <span className="font-medium">Tüm hizmetleri görüntüle</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>


            {/* Expertise Areas - 4 Sections */}
            {expertiseAreas.map((area, index) => (
                <section key={area.id} className={`py-20 ${index % 2 === 0 ? 'bg-[#1a1a1a]' : 'bg-surface-dark'} border-y border-[#333]`}>
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                        <ExpertiseCard area={area} reverse={index % 2 === 1} />
                    </div>
                </section>
            ))}

            {/* Stats Section */}
            <section className="py-16 bg-slate-metallic border-y border-[#333]">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#444]/50">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center px-4">
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-xs md:text-sm uppercase tracking-wider text-gray-400 font-semibold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-12 bg-background-dark">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between border-b border-[#333] pb-8 mb-8">
                        <h3 className="text-xl text-white font-medium mb-4 md:mb-0">Uluslararası Standartlar &amp; Sertifikalar</h3>
                        <p className="text-sm text-gray-500">Küresel kalite ve güvenlik protokollerine bağlılık</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
                        {certifications.map((cert, index) => (
                            <div key={index} className="group flex flex-col items-center gap-1 cursor-default hover:opacity-100 transition-opacity">
                                <div className="text-2xl font-black text-gray-500 group-hover:text-white transition-colors border-2 border-gray-600 group-hover:border-primary p-2 px-4 rounded">
                                    {cert.name}
                                </div>
                                <span className="text-xs text-gray-500 group-hover:text-primary font-bold">{cert.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-metallic border-t border-primary/20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Proje standartlarınızı yükseltmeye hazır mısınız?</h2>
                    <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
                        Mühendislik ekibimiz, endüstriyel operasyonlarınız için NDT testleri, belgelendirme ve kalite yönetimi konularında yardıma hazırdır.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button to="/iletisim" size="lg" className="shadow-lg shadow-primary/20 transform hover:-translate-y-1">
                            Teklif Al
                        </Button>
                        <Button to="/referanslar" variant="secondary" size="lg">
                            Referansları İncele
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
