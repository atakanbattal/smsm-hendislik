import { Link } from 'react-router-dom'
import { Button, ServiceCard, Badge } from '../components/ui/Components'

const services = [
    { icon: 'calendar_month', title: 'Periyodik Muayene', description: 'Endüstriyel kaldırma ekipmanları, basınçlı kaplar ve makineler için kapsamlı güvenlik kontrolleri ve raporlama.', tag: 'ISO 17020' },
    { icon: 'visibility', title: 'Tahribatsız Muayene', description: 'Malzeme hasarı olmaksızın kusur tespiti için standart Tahribatsız Muayene (UT, MT, PT, RT).', tag: 'ISO 9712' },
    { icon: 'view_in_ar', title: 'Gelişmiş NDT', description: 'Kritik yapısal analizler için TOFD, Phased Array ve Dijital Radyografi dahil yüksek teknoloji yöntemler.', tag: 'ISO 13588' },
    { icon: 'science', title: 'Tahribatlı Muayene', description: 'Çekme mukavemeti, darbe, sertlik ve bükme test hizmetleri ile malzeme özelliklerinin doğrulanması.', tag: 'EN ISO 148' },
    { icon: 'precision_manufacturing', title: 'Mühendislik Hizmetleri', description: 'Kaynak mühendisliği danışmanlığı, teknik şartname hazırlama ve proje yönetimi hizmetleri.', tag: 'EN 15085' },
    { icon: 'badge', title: 'Personel Belgelendirme', description: 'NDT personeli ve teknik elemanlar için uluslararası standartlara uygun akredite belgelendirme hizmetleri.', tag: 'ISO 9712' },
    { icon: 'verified_user', title: 'Kaynakçı Sertifikalandırma', description: 'EN 9606 standardına uygun olarak kaynakçıların teorik ve pratik sınavlarla sertifikalandırılması.', tag: 'EN 9606' },
    { icon: 'local_shipping', title: 'ADR Tank Muayeneleri', description: 'Tehlikeli madde taşıma tankları ve emniyet valfleri için sertifikalı mevzuat muayeneleri.', tag: 'ADR 2023' },
    { icon: 'gavel', title: '13094 Danışmanlığı', description: 'İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği kapsamında periyodik kontrol danışmanlığı.', tag: '13094 Tebliği' },
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

// Uzmanlık alanları
const expertiseAreas = [
    {
        id: 'kaynak',
        title: 'Kaynaklı İmalat',
        subtitle: 'Mühendislik Çözümleri',
        description: 'EN 15085 ve ISO 3834 standartlarına uygun kaynaklı imalat danışmanlığı. WPS/WPQR hazırlama, kaynakçı sertifikalandırma ve kalite kontrol hizmetleri.',
        icon: 'precision_manufacturing',
        badge: 'EN 15085',
        badgeText: 'CL1-CL4 Sertifikalı',
        features: [
            { icon: 'verified', title: 'WPS/WPQR Hazırlama', desc: 'Kaynak prosedür şartnameleri ve onay raporları' },
            { icon: 'engineering', title: 'Kaynakçı Sertifikasyonu', desc: 'EN 9606 standardına uygun belgelendirme' },
        ],
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    },
    {
        id: 'adr',
        title: 'ADR Tank Muayeneleri',
        subtitle: 'Tehlikeli Madde Taşımacılığı',
        description: 'ADR mevzuatı kapsamında tehlikeli madde taşıma tankları için zorunlu periyodik muayeneler. Emniyet valfi testleri ve hidrostatik kontroller.',
        icon: 'local_shipping',
        badge: 'ADR 2023',
        badgeText: 'Uluslararası Sertifikalı',
        features: [
            { icon: 'verified', title: 'Tank Periyodik Kontrol', desc: 'Taşıma tankları yıllık muayenesi' },
            { icon: 'engineering', title: 'Emniyet Valfi Testleri', desc: 'Basınç tahliye cihazları sertifikasyonu' },
        ],
        image: '/images/adr-inspection.jpg',
    },
    {
        id: 'basinc',
        title: 'Basınçlı Kap Kontrolleri',
        subtitle: 'Endüstriyel Güvenlik',
        description: 'Kazanlar, kompresörler, LPG tankları ve basınçlı sistemler için PED direktifine uygun periyodik muayene ve sertifikalandırma hizmetleri.',
        icon: 'oil_barrel',
        badge: 'PED 2014/68/EU',
        badgeText: 'Akredite Kuruluş',
        features: [
            { icon: 'verified', title: 'Hidrostatik Test', desc: 'Basınçlı kap bütünlük testleri' },
            { icon: 'engineering', title: 'Periyodik Muayene', desc: 'Yasal zorunluluk kontrolleri' },
        ],
        image: '/images/pressure-vessel.jpg',
    },
    {
        id: 'demiryolu',
        title: 'Demiryolu Sistemleri',
        subtitle: 'EN 15085 Sertifikasyonu',
        description: 'Demiryolu araçları imalatı ve bakımı için Avrupa standartlarına uygun kaynak kalite yönetimi ve personel yetkilendirme hizmetleri.',
        icon: 'train',
        badge: 'EN 15085',
        badgeText: 'Demiryolu Sertifikalı',
        features: [
            { icon: 'verified', title: 'İmalat Denetimi', desc: 'Kaynaklı yapı imalat süreç kontrolü' },
            { icon: 'engineering', title: 'Personel Yetkilendirme', desc: 'Demiryolu kaynak personeli sertifikasyonu' },
        ],
        image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80',
    },
    // YENİ: Tamirat ve Tadilat Merkezi
    {
        id: 'tamirat',
        title: 'Tamirat & Tadilat',
        subtitle: 'ADR Onaylı Merkez',
        description: 'Ulaştırma ve Altyapı Bakanlığı ile TSE onaylı merkezimizde ADR\'li araç ve araç üst yapı tamiratları güncel yönetmeliklere uygun şekilde gerçekleştirilmektedir.',
        icon: 'build',
        badge: 'TSE & Bakanlık',
        badgeText: 'Onaylı Merkez',
        features: [
            { icon: 'verified', title: 'ADR\'li Araç Tamiratları', desc: 'Tehlikeli madde araçları için uzman onarım' },
            { icon: 'engineering', title: 'Üst Yapı Onarımları', desc: 'Tank ve treyler tadilat işlemleri' },
        ],
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    },
    // YENİ: Güvenlik Danışmanlığı
    {
        id: 'guvenlik',
        title: 'Güvenlik Danışmanlığı',
        subtitle: 'ADR/RID Uzman Desteği',
        description: 'Tehlikeli madde taşımacılığı konusunda uzman kadromuzla kapsamlı danışmanlık hizmetleri. Nakliye firmaları ve petrol sektörüne özel çözümler.',
        icon: 'shield',
        badge: 'TMGD',
        badgeText: 'Belgeli Uzman',
        features: [
            { icon: 'verified', title: 'ADR/RID Danışmanlığı', desc: 'Uluslararası mevzuat uyum desteği' },
            { icon: 'engineering', title: 'Muayene Takibi', desc: 'Araç muayene süreç yönetimi' },
        ],
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    },
    // YENİ: Tank ve Basınçlı Kap İmalatı
    {
        id: 'tank-imalat',
        title: 'Tank İmalatı',
        subtitle: 'ADR Uyumlu Üretim',
        description: 'Standartlara uygun, güvenli ve dayanıklı tank sistemleri üretiyoruz. ADR\'li ve ADR\'siz tüm tank ve treyler ihtiyaçlarınız için yanınızdayız.',
        icon: 'factory',
        badge: 'ADR Uyumlu',
        badgeText: 'Üretici Garantili',
        features: [
            { icon: 'verified', title: 'ADR\'li Tank/Treyler', desc: 'Tehlikeli madde taşımacılığı için onaylı' },
            { icon: 'engineering', title: 'Özel Tasarım', desc: 'Müşteri ihtiyaçlarına özel projeler' },
        ],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    },
    // YENİ: Denetim ve Gözetim
    {
        id: 'denetim',
        title: 'Denetim & Gözetim',
        subtitle: 'Inspection Hizmetleri',
        description: 'Siparişleriniz ve projeleriniz için özelleştirilmiş denetim ve gözetim çözümleri. Tedarik zinciri kalite güvencesi sağlıyoruz.',
        icon: 'policy',
        badge: 'Inspection',
        badgeText: 'Detaylı Raporlama',
        features: [
            { icon: 'verified', title: 'Ürüne Özel Denetim', desc: 'Her türlü ürün için kalite kontrolü' },
            { icon: 'engineering', title: 'Tedarikçi Denetimi', desc: 'Tedarik zinciri kalite güvencesi' },
        ],
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
    },
    // YENİ: Kalibrasyon Hizmetleri
    {
        id: 'kalibrasyon',
        title: 'Kalibrasyon',
        subtitle: 'Akreditasyonlu Laboratuvar',
        description: '"Her şeyinizi kalibre ederiz" - Kaynak makinaları, ölçü aletleri, manometreler ve debimetreler için hassas kalibrasyon hizmetleri.',
        icon: 'tune',
        badge: 'TÜRKAK',
        badgeText: 'Akreditasyonlu',
        features: [
            { icon: 'verified', title: 'Kaynak Makinası', desc: 'Kaynak ekipmanları hassas kalibrasyonu' },
            { icon: 'engineering', title: 'Ölçü Aletleri', desc: 'Kumpas, metre, manometre kalibrasyonu' },
        ],
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
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

            {/* Services Section */}
            <section className="py-20 bg-background-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-surface-dark to-transparent opacity-30 pointer-events-none"></div>
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Hizmetlerimiz</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Özel Mühendislik Hizmetleri</h3>
                            <p className="mt-4 text-gray-400">Ağır sanayi için özel olarak tasarlanmış mühendislik hizmetleriyle hassasiyet, uyumluluk ve güvenlik sunuyoruz.</p>
                        </div>
                        <Link to="/hizmetler" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors group">
                            <span className="font-medium">Tüm hizmetleri görüntüle</span>
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.slice(0, 9).map((service, index) => (
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
