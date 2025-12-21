import { Badge, Button } from '../components/ui/Components'

// Detaylı hizmet verisi
const detailedServices = [
    // 1. ADR Tank Muayeneleri (Öne alındı)
    {
        id: 'adr',
        icon: 'local_shipping',
        badge: 'ADR Hizmetleri',
        badgeIcon: 'warning',
        title: 'ADR Tank Muayeneleri',
        description: 'Tehlikeli madde taşımacılığında kullanılan tanklar ve ekipmanlar için zorunlu mevzuat muayeneleri.',
        features: [
            { title: 'Tank Periyodik Kontrol', desc: 'ADR kapsamında taşıma tankları yıllık muayenesi' },
            { title: 'Emniyet Valfi Testleri', desc: 'Basınç tahliye cihazlarının test ve sertifikalandırması' },
            { title: 'Hidrostatik Testler', desc: 'Tank bütünlüğü için basınç testleri' },
            { title: 'Sızdırmazlık Kontrolleri', desc: 'Gas ve sıvı sızdırmazlık doğrulama testleri' },
        ],
        specs: [
            { label: 'Mevzuat', value: 'ADR 2023' },
            { label: 'Kontrol Periyodu', value: 'Yıllık' },
            { label: 'Test Türü', value: 'Hidrostatik' },
            { label: 'Belgelendirme', value: 'Uluslararası' },
        ]
    },
    // 2. Kaynak Mühendisliği (Kaynaklı İmalat)
    {
        id: 'kaynak',
        icon: 'precision_manufacturing',
        badge: 'Kaynak Mühendisliği',
        badgeIcon: 'engineering',
        title: 'Kaynak Mühendisliği Hizmetleri',
        description: 'Kaynak prosedürlerinin hazırlanması, denetimi ve personel sertifikalandırma hizmetleri sunuyoruz.',
        features: [
            { title: 'WPS Hazırlama', desc: 'EN 15609 standardına uygun Kaynak Prosedür Şartnameleri' },
            { title: 'WPQR Oluşturma', desc: 'EN 15614 standardına göre Kaynak Yöntem Onay Raporları' },
            { title: 'Kaynakçı Sertifikasyonu', desc: 'EN 9606 standardına uygun yetkinlik belgelendirmesi' },
            { title: 'Kaynak Koordinasyonu', desc: 'Dış kaynaklı Sorumlu Kaynak Koordinatörü (RWC) hizmeti' },
        ],
        specs: [
            { label: 'Standart', value: 'EN 15085' },
            { label: 'Sertifikasyon', value: 'EN 9606' },
            { label: 'Dokümantasyon', value: 'WPS/WPQR' },
            { label: 'Akreditasyon', value: 'Uluslararası' },
        ]
    },
    // 3. 13094 Danışmanlığı
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
    // 4. EN 15085 Demiryolu / ISO Belgelendirme
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
    // 5. Periyodik Muayene
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
    // 6. NDT (Aşağı taşındı)
    {
        id: 'ndt',
        icon: 'visibility',
        badge: 'NDT Hizmetleri',
        badgeIcon: 'science',
        title: 'Tahribatsız Muayene (NDT)',
        description: 'Malzeme bütünlüğünü bozmadan kusur tespiti yapan uluslararası standartlara uygun test hizmetleri sunuyoruz.',
        features: [
            { title: 'Ultrasonik Test (UT)', desc: 'Ses dalgaları ile malzeme içi kusur tespiti ve kalınlık ölçümü' },
            { title: 'Manyetik Parçacık Testi (MT)', desc: 'Ferro-manyetik malzemelerde yüzey kusurlarının tespiti' },
            { title: 'Sıvı Penetrant Testi (PT)', desc: 'Kapiler etki prensibi ile yüzey açık kusurlarının tespiti' },
            { title: 'Radyografik Test (RT)', desc: 'X-ışını ve gama ışını ile malzeme içi görüntüleme' },
        ],
        specs: [
            { label: 'Standart', value: 'ISO 9712' },
            { label: 'Personel Seviyesi', value: 'Level II & III' },
            { label: 'Uygulama Alanı', value: 'Endüstriyel' },
            { label: 'Akreditasyon', value: 'TÜRKAK' },
        ]
    },
    // 7. Gelişmiş NDT
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
    // 8. Tahribatlı Muayene (En son)
    {
        id: 'tahribatli',
        icon: 'science',
        badge: 'Laboratuvar',
        badgeIcon: 'biotech',
        title: 'Tahribatlı Muayene Hizmetleri',
        description: 'Malzeme mekanik özelliklerinin doğrulanması için kapsamlı laboratuvar test hizmetleri.',
        features: [
            { title: 'Çekme Testi', desc: 'Malzeme mukavemet ve uzama değerlerinin belirlenmesi' },
            { title: 'Darbe Testi', desc: 'Charpy ve Izod yöntemleriyle kırılganlık analizi' },
            { title: 'Sertlik Testi', desc: 'Brinell, Rockwell, Vickers sertlik ölçümleri' },
            { title: 'Metalografik İnceleme', desc: 'Mikroyapı analizi ve tane boyutu değerlendirmesi' },
        ],
        specs: [
            { label: 'Standart', value: 'EN ISO 148' },
            { label: 'Akreditasyon', value: 'ISO 17025' },
            { label: 'Raporlama', value: 'Detaylı' },
            { label: 'Süre', value: '3-5 İş Günü' },
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
                        <Button href="tel:+903320000000" variant="secondary" size="lg">
                            <span className="material-symbols-outlined">call</span>
                            Hemen Arayın
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
