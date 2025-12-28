import { Badge, Button } from '../components/ui/Components'

// Detaylı hizmet verisi
const detailedServices = [
    // 1. ADR Yetkili Muayene Merkezi (Güncellenmiş)
    {
        id: 'adr',
        icon: 'local_shipping',
        badge: 'ADR Hizmetleri',
        badgeIcon: 'warning',
        title: 'ADR Yetkili Muayene Merkezi',
        description: 'Ulaştırma ve Altyapı Bakanlığı ile TSE Tehlikeli Madde Taşımacılık Müdürlüğü onaylı ADR\'li yetkili muayene merkezimizde, akaryakıt, asfalt, kimyasal ve benzeri tehlikeli madde taşıyan tanklar için tüm muayene hizmetlerini sunuyoruz.',
        features: [
            { title: 'Yıllık ADR T9 Muayeneleri', desc: 'Zorunlu periyodik kontroller' },
            { title: 'Ara Muayeneler (Sızdırmazlık)', desc: '3 yılda bir yapılan sızdırmazlık kontrolleri' },
            { title: 'Periyodik Muayeneler (Hidrostatik)', desc: '6 yılda bir yapılan detaylı basınç testleri' },
            { title: 'İstisnai Muayeneler', desc: 'Tamir/tadilat sonrası zorunlu kontroller' },
        ],
        specs: [
            { label: 'Onay', value: 'TSE & Bakanlık' },
            { label: 'Kapsam', value: 'ADR 2023' },
            { label: 'Geçerlilik', value: 'Tüm Tesisler' },
            { label: 'Belgelendirme', value: 'Resmi' },
        ]
    },
    // 2. Tamirat ve Tadilat Merkezi (YENİ)
    {
        id: 'tamirat',
        icon: 'build',
        badge: 'Tamirat & Tadilat',
        badgeIcon: 'construction',
        title: 'ADR Onaylı Tamirat & Tadilat Merkezi',
        description: 'Ulaştırma ve Altyapı Bakanlığı ile TSE Tehlikeli Madde Müdürlüğü onaylı merkezimizde, ADR\'li araç ve araç üst yapı tamiratları güncel yönetmeliklere uygun şekilde gerçekleştirilmektedir.',
        features: [
            { title: 'ADR\'li Araç Tamiratları', desc: 'Tehlikeli madde taşıma araçları için uzman onarım' },
            { title: 'Araç Üst Yapı Onarımları', desc: 'Tank ve treyler üst yapı tadilat işlemleri' },
            { title: 'Yönetmeliğe Uygun Modifikasyonlar', desc: 'Mevzuata uygun araç modifikasyonu' },
            { title: 'Periyodik Bakım ve Onarım', desc: 'Düzenli bakım ve koruyucu onarım hizmetleri' },
        ],
        specs: [
            { label: 'Onay', value: 'TSE & Bakanlık' },
            { label: 'Kapsam', value: 'ADR Araçları' },
            { label: 'Yönetmelik', value: 'Güncel ADR' },
            { label: 'Süre', value: 'Hızlı Teslimat' },
        ]
    },
    // 3. Tehlikeli Madde Güvenlik Danışmanlığı (YENİ)
    {
        id: 'guvenlik-danismanligi',
        icon: 'shield',
        badge: 'Güvenlik Danışmanlığı',
        badgeIcon: 'security',
        title: 'ADR Güvenlik Danışmanlık Hizmetleri',
        description: 'Uzman kadromuzla tehlikeli madde taşımacılığı konusunda kapsamlı danışmanlık hizmetleri sunuyoruz.',
        features: [
            { title: 'ADR/RID Danışmanlığı', desc: 'Uluslararası sözleşmelere uygun taşımacılık danışmanlığı' },
            { title: 'ADR\'li Araç Muayene Takibi', desc: 'Nakliye firmalarına muayene süreç yönetimi' },
            { title: 'Dosya ve Mevzuat Yönetimi', desc: 'Dokümantasyon ve mevzuat uyum danışmanlığı' },
            { title: 'Petrol Sektörü ADR Danışmanlığı', desc: 'Akaryakıt firmaları için özel ADR çözümleri' },
        ],
        specs: [
            { label: 'Kapsam', value: 'ADR/RID' },
            { label: 'Sektör', value: 'Tüm Sektörler' },
            { label: 'Hizmet', value: 'Tam Destek' },
            { label: 'Uzman', value: 'TMGD Belgeli' },
        ]
    },
    // 4. Tank ve Basınçlı Kap İmalatı (YENİ)
    {
        id: 'tank-imalat',
        icon: 'factory',
        badge: 'İmalat',
        badgeIcon: 'precision_manufacturing',
        title: 'ADR\'li Tank ve Basınçlı Kap Üretimi',
        description: 'Standartlara uygun, güvenli ve dayanıklı tank sistemleri üretiyoruz. ADR\'li ve ADR\'siz tüm tank ihtiyaçlarınız için yanınızdayız.',
        features: [
            { title: 'ADR\'li Tank/Treyler İmalatı', desc: 'Tehlikeli madde taşımacılığı için onaylı tanklar' },
            { title: 'ADR\'siz Tank ve Treyler', desc: 'Standart yük taşımacılığı için tank üretimi' },
            { title: 'Araç Üstü Tank Sistemleri', desc: 'Kamyon ve araç üstü özel tank çözümleri' },
            { title: 'Özel Tasarım Projeler', desc: 'Müşteri ihtiyaçlarına özel tank tasarımları' },
        ],
        specs: [
            { label: 'Kapasite', value: 'Çeşitli Boyut' },
            { label: 'Malzeme', value: 'Çelik/Alüminyum' },
            { label: 'Standart', value: 'ADR Uyumlu' },
            { label: 'Garanti', value: 'Üretici Garantili' },
        ]
    },
    // 5. Kaynak Mühendisliği (Mevcut + Kaynak Belgelendirme)
    {
        id: 'kaynak',
        icon: 'precision_manufacturing',
        badge: 'Kaynak Mühendisliği',
        badgeIcon: 'engineering',
        title: 'Kaynak Mühendisliği ve İmalat Hizmetleri',
        description: 'Kaynak prosedürlerinin hazırlanması, denetimi ve personel sertifikalandırma hizmetleri ile profesyonel kaynaklı imalat çözümleri sunuyoruz.',
        features: [
            { title: 'WPS/PQR Hazırlama', desc: 'Kaynak Prosedür Şartnamesi ve Kalifikasyon Kaydı' },
            { title: 'Kaynakçı Sertifikasyonu (WQT)', desc: 'EN 9606 standardına uygun yetkinlik belgelendirmesi' },
            { title: 'Çelik & Alüminyum Kaynak İmalatı', desc: 'Profesyonel kaynaklı yapı ve malzeme imalatı' },
            { title: 'Kaynak Koordinasyonu (RWC)', desc: 'Dış kaynaklı Sorumlu Kaynak Koordinatörü hizmeti' },
        ],
        specs: [
            { label: 'Standart', value: 'EN 15085' },
            { label: 'Sertifikasyon', value: 'EN 9606' },
            { label: 'Dokümantasyon', value: 'WPS/WPQR' },
            { label: 'Akreditasyon', value: 'Uluslararası' },
        ]
    },
    // 6. 13094 Danışmanlığı (Mevcut)
    {
        id: '13094',
        icon: 'gavel',
        badge: 'Danışmanlık',
        badgeIcon: 'support_agent',
        title: '13094 Danışmanlığı',
        description: 'İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği kapsamında zorunlu periyodik kontrol hizmetleri sunuyoruz.',
        features: [
            { title: 'Basınçlı Kaplar', desc: 'Kazanlar, kompresörler, LPG tankları, otoklav cihazları' },
            { title: 'Kaldırma-İletme Ekipmanları', desc: 'Vinçler, forkliftler, asansörler, yük asansörleri' },
            { title: 'Tezgahlar ve Makineler', desc: 'CNC tezgahlar, presler, kesme makineleri' },
            { title: 'Elektriksel Güvenlik', desc: 'Topraklama testleri, izolasyon ölçümleri, paratoner kontrolleri' },
        ],
        specs: [
            { label: 'Yasal Zorunluluk', value: '6331 Sayılı Kanun' },
            { label: 'Tebliğ No', value: '13094' },
            { label: 'Kontrol Periyodu', value: 'Yıllık / 3-5 Yıl' },
            { label: 'Akreditasyon', value: 'TÜRKAK' },
        ]
    },
    // 7. EN 15085 Demiryolu / ISO Belgelendirme (Mevcut)
    {
        id: 'demiryolu',
        icon: 'train',
        badge: 'ISO Belgelendirme',
        badgeIcon: 'verified',
        title: 'EN 15085 Demiryolu Sertifikasyonu',
        description: 'Demiryolu araçları imalatı ve bakımı için Avrupa standartlarına uygun uzman teknik hizmetler.',
        features: [
            { title: 'EN 15085 Belgelendirme', desc: 'Demiryolu araçları kaynaklı imalat danışmanlığı' },
            { title: 'Kaynak Kalite Yönetimi', desc: 'CL1-CL4 seviyelerinde kalite kontrol sistemleri' },
            { title: 'Personel Yetkilendirme', desc: 'Demiryolu kaynak personeli sertifikalandırması' },
            { title: 'Teknik Denetim', desc: 'İmalat süreçlerinin standartlara uygunluk denetimi' },
        ],
        specs: [
            { label: 'Standart', value: 'EN 15085' },
            { label: 'Sertifika Sınıfı', value: 'CL1-CL4' },
            { label: 'Kapsam', value: 'İmalat & Bakım' },
            { label: 'Geçerlilik', value: '3 Yıl' },
        ]
    },
    // 8. Periyodik Muayene (Mevcut)
    {
        id: 'periyodik',
        icon: 'calendar_month',
        badge: 'Periyodik Kontrol',
        badgeIcon: 'schedule',
        title: 'Periyodik Muayene Hizmetleri',
        description: 'Endüstriyel ekipmanların güvenli çalışması için zorunlu periyodik kontrol ve raporlama hizmetleri.',
        features: [
            { title: 'Kaldırma Ekipmanları', desc: 'Vinçler, forkliftler, platform asansörleri kontrolleri' },
            { title: 'Basınçlı Kaplar', desc: 'Kazanlar, kompresörler, tanklar periyodik muayenesi' },
            { title: 'İş Makineleri', desc: 'Tezgahlar, presler, kesme makineleri denetimleri' },
            { title: 'Elektrik Tesisatı', desc: 'Topraklama, izolasyon, paratoner kontrolleri' },
        ],
        specs: [
            { label: 'Standart', value: 'ISO 17020' },
            { label: 'Mevzuat', value: '6331 Sayılı Kanun' },
            { label: 'Periyot', value: 'Yıllık' },
            { label: 'Akreditasyon', value: 'TÜRKAK' },
        ]
    },
    // 9. Kalite Kontrol ve Belgelendirme (NDT + Tahribatlı Birleşik)
    {
        id: 'kalite-kontrol',
        icon: 'verified',
        badge: 'Kalite Kontrol',
        badgeIcon: 'workspace_premium',
        title: 'Kalite Kontrol ve Belgelendirme Hizmetleri',
        description: 'Ulusal ve uluslararası normlar ile standartlar kapsamında kapsamlı muayene ve belgelendirme hizmetleri sunuyoruz.',
        features: [
            { title: 'Tahribatsız Muayene (NDT)', desc: 'VT, UT, MT, RT, PT testleri ile kusur tespiti' },
            { title: 'Tahribatlı Muayene', desc: 'Çekme, darbe, sertlik ve metalografik incelemeler' },
            { title: 'Ürün Belgelendirme', desc: 'Ürünlerin standartlara uygunluk belgelendirilmesi' },
            { title: 'Personel/Firma Belgelendirme', desc: 'ISO ve kalite yönetim sistemleri sertifikasyonu' },
        ],
        specs: [
            { label: 'NDT Standart', value: 'ISO 9712' },
            { label: 'Lab Akreditasyon', value: 'ISO 17025' },
            { label: 'Personel', value: 'Level II & III' },
            { label: 'Akreditasyon', value: 'TÜRKAK' },
        ]
    },
    // 10. Denetim ve Gözetim Hizmetleri (YENİ - Inspection)
    {
        id: 'denetim',
        icon: 'policy',
        badge: 'Inspection',
        badgeIcon: 'verified_user',
        title: 'Özel Denetim ve Gözetim Hizmetleri',
        description: 'Siparişleriniz ve projeleriniz için özelleştirilmiş denetim ve gözetim çözümleri sunuyoruz.',
        features: [
            { title: 'Ürüne Özel Denetim', desc: 'Her türlü ürün için özel kalite kontrol hizmetleri' },
            { title: 'Firmaya Özel Gözetim', desc: 'Özelleştirilmiş gözetim programları' },
            { title: 'Sipariş Takibi', desc: 'Üretim süreçlerinin anlık izlenmesi ve raporlanması' },
            { title: 'Tedarikçi Denetimleri', desc: 'Tedarik zinciri kalite güvence denetimleri' },
        ],
        specs: [
            { label: 'Kapsam', value: 'Tüm Sektörler' },
            { label: 'Hizmet', value: 'Özelleştirilebilir' },
            { label: 'Raporlama', value: 'Detaylı' },
            { label: 'Takip', value: 'Anlık' },
        ]
    },
    // 11. Kalibrasyon Hizmetleri (YENİ)
    {
        id: 'kalibrasyon',
        icon: 'tune',
        badge: 'Kalibrasyon',
        badgeIcon: 'straighten',
        title: 'Akreditasyonlu Kalibrasyon Laboratuvarı',
        description: 'Endüstriyel ölçüm cihazlarınızın doğruluğunu ve güvenilirliğini uluslararası standartlara uygun kalibrasyon hizmetlerimizle garanti altına alıyoruz.',
        features: [
            { title: 'Kaynak Makinası Kalibrasyonu', desc: 'Kaynak ekipmanlarının hassas kalibrasyonu' },
            { title: 'Ölçü Aletleri', desc: 'Kumpas, metre ve uzunluk ölçüm cihazları' },
            { title: 'Basınç Ölçerler (Manometre)', desc: 'Basınç ölçüm cihazlarının kalibrasyonu' },
            { title: 'Akış Ölçerler (Debimetre)', desc: 'Akış ve debi ölçüm sistemleri kalibrasyonu' },
        ],
        specs: [
            { label: 'Akreditasyon', value: 'TÜRKAK' },
            { label: 'Standart', value: 'Uluslararası' },
            { label: 'Sertifika', value: 'Kalibrasyon' },
            { label: 'Takip', value: 'Periyodik' },
        ]
    },
    // 12. Gelişmiş NDT (Mevcut)
    {
        id: 'gelismis-ndt',
        icon: 'view_in_ar',
        badge: 'İleri Teknoloji',
        badgeIcon: 'auto_awesome',
        title: 'Gelişmiş NDT Teknikleri',
        description: 'Kritik yapısal analizler için yüksek teknoloji yöntemlerle hassas kusur tespiti ve değerlendirme hizmetleri.',
        features: [
            { title: 'Phased Array (PAUT)', desc: 'Çoklu elemanlı prob ile gelişmiş ultrasonik görüntüleme' },
            { title: 'TOFD (Kırınım Zamanı)', desc: 'Yüksek doğruluklu boyutlandırma ve kusur karakterizasyonu' },
            { title: 'Dijital Radyografi (DR)', desc: 'Anlık görüntüleme ile hızlı ve hassas analiz' },
            { title: 'Girdap Akımı Testi (ET)', desc: 'İletken malzemelerde yüzey ve yüzeye yakın kusur tespiti' },
        ],
        specs: [
            { label: 'Standart', value: 'ISO 13588' },
            { label: 'Teknoloji', value: 'Dijital' },
            { label: 'Hassasiyet', value: 'Yüksek' },
            { label: 'Raporlama', value: 'Anlık' },
        ]
    },
]


// Hizmet Detay Kartı Bileşeni
function ServiceDetailCard({ service, reverse = false }) {
    return (
        <section className={`py-16 ${reverse ? 'bg-background-dark' : 'bg-surface-dark'} border-b border-[#333]`}>
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={reverse ? 'lg:order-2' : ''}>
                        <Badge className="mb-4">
                            <span className="material-symbols-outlined text-sm">{service.badgeIcon}</span>
                            {service.badge}
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {service.title}
                        </h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            {service.description}
                        </p>
                        <div className="space-y-4 mb-8">
                            {service.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                    <div>
                                        <h4 className="text-white font-bold">{feature.title}</h4>
                                        <p className="text-gray-400 text-sm">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button to="/iletisim" size="lg">
                            <span>Detaylı Bilgi Al</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Button>
                    </div>
                    <div className={`relative ${reverse ? 'lg:order-1' : ''}`}>
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-transparent rounded-xl blur-xl"></div>
                        <div className="relative bg-slate-metallic p-8 rounded-xl border border-primary/30">
                            <div className="text-center mb-6">
                                <span className="material-symbols-outlined text-6xl text-primary">{service.icon}</span>
                            </div>
                            <div className="space-y-4">
                                {service.specs.map((spec, index) => (
                                    <div
                                        key={index}
                                        className={`flex justify-between items-center ${index < service.specs.length - 1 ? 'pb-4 border-b border-[#333]' : ''}`}
                                    >
                                        <span className="text-gray-400">{spec.label}</span>
                                        <span className="text-primary font-bold">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function Services() {
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
                    <Badge className="mb-4">Uzmanlık Alanlarımız</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Hizmetlerimiz</h1>
                    <p className="text-lg text-gray-300 max-w-2xl">
                        Endüstriyel mühendislik, kalite kontrol ve sertifikasyon alanında kapsamlı hizmetler sunuyoruz.
                    </p>
                </div>
            </section>

            {/* All Services with Detailed Cards */}
            {detailedServices.map((service, index) => (
                <ServiceDetailCard
                    key={service.id}
                    service={service}
                    reverse={index % 2 === 1}
                />
            ))}

            {/* CTA */}
            <section className="py-20 bg-slate-metallic border-t border-primary/20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">İhtiyacınıza Uygun Hizmeti Birlikte Belirleyelim</h2>
                    <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
                        Uzman mühendis kadromuz, projeleriniz için en uygun çözümü sunmak üzere sizinle iletişime geçmeye hazır.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button to="/iletisim" size="lg" className="shadow-lg shadow-primary/20">
                            Teklif Talep Et
                        </Button>
                        <Button href="tel:+905538860606" variant="secondary" size="lg">
                            <span className="material-symbols-outlined">call</span>
                            Hemen Arayın
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
