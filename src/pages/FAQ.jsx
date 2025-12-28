import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Badge, Button } from '../components/ui/Components'

const categories = [
    { id: 'genel', name: 'Genel Bilgiler' },
    { id: 'kalite', name: 'Kalite Kontrol Hizmetleri' },
    { id: 'proje', name: 'Proje Yönetimi & Danışmanlık' },
    { id: 'teknik', name: 'Teknik Destek & Sertifikasyon' },
    { id: 'fiyat', name: 'Fiyatlandırma & Teklif' },
]

const faqItems = [
    // Genel Bilgiler
    { category: 'genel', question: 'Danışmanlık süreciniz nasıl işliyor?', answer: 'İlk adımda firmanızın ihtiyaçlarını belirlemek için detaylı bir Gap Analizi (Mevcut Durum Analizi) yapıyoruz. Ardından, firmanıza özel bir optimizasyon ve kalite kontrol yol haritası çıkarıyoruz. Uygulama aşamasında uzman mühendislerimiz yerinde denetimler gerçekleştirirken, süreç boyunca düzenli raporlama ve teknik destek sağlıyoruz.' },
    { category: 'genel', question: 'Hangi endüstri standartlarına göre denetim yapıyorsunuz?', answer: 'Başta ISO 9001 (Kalite Yönetim Sistemi), ISO 14001 (Çevre Yönetim Sistemi) ve ISO 45001 (İş Sağlığı ve Güvenliği) olmak üzere, EN 15085 (Demiryolu), ADR 2023 (Tehlikeli Madde Taşımacılığı) ve PED 2014/68/EU (Basınçlı Ekipmanlar) standartlarına uygun denetim ve danışmanlık hizmetleri sunuyoruz.' },
    { category: 'genel', question: 'SMS İnovasyon Mühendislik nerede hizmet veriyor?', answer: 'Merkezimiz Konya\'da bulunmaktadır. Türkiye genelinde tüm illere hizmet vermekteyiz. Ayrıca Avrupa ve Orta Doğu bölgesindeki yurtdışı projelerde de aktif rol alıyoruz.' },
    { category: 'genel', question: 'Proje teslim süreleriniz ortalama ne kadardır?', answer: 'Küçük ölçekli kalite kontrol projeleri genellikle 1-2 hafta içerisinde tamamlanırken, kapsamlı sistem kurulumu ve sertifikasyon danışmanlıkları 3 ila 6 ay arasında sürebilmektedir.' },
    { category: 'genel', question: 'Hangi sektörlere hizmet veriyorsunuz?', answer: 'Ağır sanayi, petrokimya, enerji, demiryolu, savunma sanayi, inşaat, otomotiv ve makine imalat sektörlerine hizmet vermekteyiz. Her sektöre özel mühendislik çözümleri sunuyoruz.' },

    // Kalite Kontrol Hizmetleri
    { category: 'kalite', question: 'NDT (Tahribatsız Muayene) nedir?', answer: 'NDT, malzeme veya bileşenlerin bütünlüğünü bozmadan kusur ve hataları tespit etmek için kullanılan test yöntemleridir. Ultrasonik Test (UT), Manyetik Parçacık Testi (MT), Sıvı Penetrant Testi (PT) ve Radyografik Test (RT) gibi yöntemler kullanıyoruz.' },
    { category: 'kalite', question: 'Gelişmiş NDT teknikleri nelerdir?', answer: 'Phased Array (PAUT), TOFD (Time of Flight Diffraction), Dijital Radyografi (DR) ve Girdap Akımı Testi (ET) gibi ileri teknoloji yöntemlerle kritik yapısal analizler yapıyoruz. Bu yöntemler daha hassas kusur tespiti ve boyutlandırma sağlar.' },
    { category: 'kalite', question: 'Tahribatlı muayene hizmetleri nelerdir?', answer: 'Çekme testi, darbe testi (Charpy, Izod), sertlik testleri (Brinell, Rockwell, Vickers), bükme testi ve metalografik inceleme gibi laboratuvar testleri sunuyoruz. Bu testlerle malzeme mekanik özelliklerini doğruluyoruz.' },
    { category: 'kalite', question: 'Periyodik muayene zorunlu mu?', answer: 'Evet, 6331 Sayılı İş Sağlığı ve Güvenliği Kanunu ve bağlı yönetmelikler kapsamında basınçlı kaplar, kaldırma ekipmanları, iş makineleri ve elektrik tesisatları için periyodik kontrol zorunludur. Kontrol periyotları ekipman türüne göre yıllık veya daha sık olabilir.' },
    { category: 'kalite', question: 'NDT personel sertifikasyonu yapıyor musunuz?', answer: 'Evet, ISO 9712 standardına uygun olarak NDT personeli Level I, II ve III seviyelerinde sertifikalandırma hizmetleri sunuyoruz. Ayrıca EN 9606 standardına göre kaynakçı sertifikasyonu da gerçekleştiriyoruz.' },
    { category: 'kalite', question: 'Kalibrasyon hizmetleriniz nelerdir?', answer: 'Akreditasyonlu kalibrasyon laboratuvarımızda kaynak makinaları, kumpas ve ölçü aletleri, manometreler (basınç ölçerler), debimetreler (akış ölçerler) ve diğer endüstriyel ölçüm cihazlarının kalibrasyonunu gerçekleştiriyoruz. TÜRKAK akreditasyonlu sertifikalar düzenliyoruz.' },
    { category: 'kalite', question: 'Denetim ve gözetim (Inspection) hizmetleri nedir?', answer: 'Siparişleriniz ve projeleriniz için özelleştirilmiş denetim ve gözetim çözümleri sunuyoruz. Ürüne özel kalite kontrol, firmaya özel gözetim programları, üretim süreçlerinin anlık takibi ve tedarikçi denetimleri bu hizmetler kapsamındadır.' },

    // Proje Yönetimi & Danışmanlık
    { category: 'proje', question: '13094 Danışmanlığı nedir?', answer: '13094, İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği kapsamında periyodik kontrol yapılması gereken iş ekipmanlarını düzenleyen tebliğdir. Basınçlı kaplar, kaldırma ekipmanları, tezgahlar ve elektriksel güvenlik testleri bu kapsama girer.' },
    { category: 'proje', question: 'WPS ve WPQR hazırlama hizmeti veriyor musunuz?', answer: 'Evet, EN 15609 standardına uygun Kaynak Prosedür Şartnameleri (WPS) ve EN 15614 standardına göre Kaynak Yöntem Onay Raporları (WPQR) hazırlıyoruz. Kaynaklı imalat süreçleriniz için eksiksiz dokümantasyon desteği sağlıyoruz.' },
    { category: 'proje', question: 'EN 15085 demiryolu sertifikasyonu nasıl alınır?', answer: 'EN 15085 demiryolu araçları kaynaklı imalat sertifikasyonu için gap analizi, dokümantasyon hazırlığı, personel eğitimi ve yetkilendirme, süreç denetimi ve belgelendirme kuruluşu başvurusu aşamalarından geçilir. Bu süreçte A\'dan Z\'ye danışmanlık hizmeti veriyoruz.' },
    { category: 'proje', question: 'Kaynak koordinatörü (RWC) hizmeti sunuyor musunuz?', answer: 'Evet, firmanız bünyesinde tam zamanlı kaynak koordinatörü bulunmuyorsa, dış kaynaklı Sorumlu Kaynak Koordinatörü (RWC) hizmeti sunuyoruz. EN 15085 ve ISO 3834 uyumluluğu için gerekli kalite yönetimini sağlıyoruz.' },
    { category: 'proje', question: 'Proje bazlı mı çalışıyorsunuz?', answer: 'Hem proje bazlı hem de yıllık sözleşmeli çalışma modellerimiz mevcuttur. İhtiyaçlarınıza göre esnek çözümler sunuyoruz. Düzenli denetim gerektiren tesisler için yıllık bakım anlaşmaları öneriyoruz.' },
    { category: 'proje', question: 'ADR Güvenlik Danışmanlığı hizmeti nedir?', answer: 'Tehlikeli madde taşımacılığı konusunda uzman kadromuzla kapsamlı danışmanlık hizmetleri sunuyoruz. ADR/RID uluslararası sözleşmelerine uygun taşımacılık danışmanlığı, nakliye firmalarına araç muayene takibi, dosya ve mevzuat yönetimi, petrol sektörüne özel ADR çözümleri bu kapsama girer. TMGD belgeli uzmanlarımız hizmetinizdedir.' },

    // Teknik Destek & Sertifikasyon
    { category: 'teknik', question: 'ADR tank muayeneleri nelerdir?', answer: 'ADR (Tehlikeli Madde Taşımacılığı) mevzuatı kapsamında taşıma tankları için yıllık periyodik kontrol, emniyet valfi testleri, hidrostatik testler ve sızdırmazlık kontrolleri yapıyoruz. ADR 2023 mevzuatına uygun uluslararası geçerli belgeler düzenliyoruz.' },
    { category: 'teknik', question: 'Basınçlı kap kontrolleri nasıl yapılır?', answer: 'Kazanlar, kompresörler, LPG tankları ve basınçlı sistemler için PED 2014/68/EU direktifine uygun hidrostatik test, görsel muayene, kalınlık ölçümü ve emniyet valfi kontrolleri yapıyoruz. Yasal zorunluluk kontrolleri sonrasında onaylı raporlar düzenliyoruz.' },
    { category: 'teknik', question: 'Hangi sertifikasyonlara sahipsiniz?', answer: 'ISO 9001:2015 (Kalite Yönetim), EN 1090-2 (Çelik Yapı), ISO 3834-2 (Kaynak Kalite), TS EN 15085 (Demiryolu), ADR Sertifikası ve TÜRKAK akreditasyonlarına sahibiz.' },
    { category: 'teknik', question: 'Eğitim hizmetleri veriyor musunuz?', answer: 'Evet, NDT teknikleri, kaynak teknolojileri, kalite kontrol sistemleri, iş sağlığı ve güvenliği konularında teorik ve uygulamalı eğitimler veriyoruz. Eğitimler firmanızda veya eğitim merkezimizde gerçekleştirilebilir.' },
    { category: 'teknik', question: '3. taraf gözetim hizmeti nedir?', answer: 'Bağımsız ve tarafsız bir kuruluş olarak imalat süreçlerinin standartlara uygunluğunu denetliyoruz. Müşteriniz veya ana yüklenici adına kalite kontrol, kaynak denetimi ve malzeme doğrulama hizmetleri sunuyoruz.' },
    { category: 'teknik', question: 'ADR Onaylı Tamirat ve Tadilat hizmeti nedir?', answer: 'Ulaştırma ve Altyapı Bakanlığı ile TSE Tehlikeli Madde Müdürlüğü onaylı merkezimizde ADR\'li araç ve araç üst yapı tamiratları gerçekleştiriyoruz. ADR\'li araç tamiratları, üst yapı onarımları, yönetmeliklere uygun modifikasyonlar ve periyodik bakım hizmetleri sunuyoruz.' },
    { category: 'teknik', question: 'Tank ve basınçlı kap imalatı yapıyor musunuz?', answer: 'Evet, ADR\'li tank/basınçlı kap treyler imalatı, ADR\'siz tank ve treyler üretimi, araç üstü tank sistemleri ve özel tasarım projeler gerçekleştiriyoruz. Standartlara uygun, güvenli ve dayanıklı tank sistemleri üretiyoruz.' },

    // Fiyatlandırma & Teklif
    { category: 'fiyat', question: 'Fiyatlandırma politikanız nedir?', answer: 'Fiyatlandırmamız projenin kapsamına, süresine ve talep edilen uzmanlık seviyesine göre değişiklik göstermektedir. Standart paketlerimiz olduğu gibi, tamamen projenize özel bütçelendirme de yapabilmekteyiz.' },
    { category: 'fiyat', question: 'Ücretsiz teklif alabilir miyim?', answer: 'Evet, tüm hizmetlerimiz için ücretsiz ve bağlayıcı olmayan teklif sunuyoruz. İletişim formunu doldurmanız veya bizi aramanız yeterli. Uzmanlarımız ihtiyaçlarınızı değerlendirerek en uygun çözümü önerecektir.' },
    { category: 'fiyat', question: 'Ödeme koşullarınız nelerdir?', answer: 'Proje başlangıcında %50 ön ödeme, proje tesliminde %50 bakiye şeklinde standart ödeme planımız bulunmaktadır. Büyük projeler için taksitli ödeme seçenekleri de sunuyoruz.' },
    { category: 'fiyat', question: 'Acil durumlarda hizmet veriyor musunuz?', answer: 'Evet, acil durumlarda hızlı müdahale ekibimiz devreye girmektedir. Acil muayene, arıza teşhisi ve kritik denetimler için 7/24 ulaşılabilirlik sağlıyoruz. Acil hizmetler için ek ücretlendirme uygulanabilir.' },
    { category: 'fiyat', question: 'Yıllık bakım anlaşması avantajları nelerdir?', answer: 'Yıllık anlaşma ile %15-25 arası indirim, öncelikli randevu, sabit fiyat garantisi, düzenli raporlama ve ücretsiz danışmanlık hizmetlerinden yararlanabilirsiniz. Büyük tesisler için özellikle avantajlıdır.' },
    { category: 'fiyat', question: 'Kalibrasyon hizmetleri için fiyat nasıl belirleniyor?', answer: 'Kalibrasyon fiyatlandırması cihaz türüne, sayısına ve ölçüm hassasiyetine göre değişmektedir. Periyodik kalibrasyon anlaşmaları ile %20\'ye varan indirimler sunuyoruz. Toplu cihaz kalibrasyonlarında özel fiyat avantajları mevcuttur.' },
]

export default function FAQ() {
    const [activeCategory, setActiveCategory] = useState('genel')
    const [openItem, setOpenItem] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')

    const filteredFaqs = faqItems.filter(item =>
        item.category === activeCategory &&
        (searchQuery === '' ||
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    return (
        <div className="animate-fade-in">
            {/* Hero */}
            <section className="relative w-full bg-surface-dark overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Industrial factory macro detail"
                        className="h-full w-full object-cover opacity-20"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu5yvYJwuejsvBgO8KAAvRdX2vSUO4_pz_GaMf-6m3KFhBXiWA9pcMTnEvLj-kiXahvskyFLKI8iP-MG2YxgqLv236olaK6OubBzyGEWP89O956bnilAbb4A5_fN796CDpLh3W_OV8e3SsKr-cVU38EwIPSu37n1C-HzaNOMni-6lntIRQ4aDEZLgZp6SnXdIOL13FVySjYgFuSFcFD9Lz5rIXKxDYYliICX7Z5hTqFHmxEEn6UE49QLq5xrMNw3xyPTvjLZIj_MY1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/90 to-background-dark"></div>
                </div>
                <div className="relative z-10 mx-auto flex w-full max-w-[960px] flex-col items-center justify-center px-6 py-20 text-center lg:py-28">
                    <h1 className="mb-4 text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
                        Nasıl Yardımcı <span className="text-gold-gradient">Olabiliriz?</span>
                    </h1>
                    <p className="mb-10 max-w-2xl text-lg text-gray-400">
                        Mühendislik çözümlerimiz, kalite kontrol süreçlerimiz ve sertifikasyon işlemlerimiz hakkında en sık karşılaşılan soruların yanıtlarını burada bulabilirsiniz.
                    </p>
                    {/* Search Bar */}
                    <div className="w-full max-w-[600px]">
                        <label className="relative flex w-full items-center">
                            <div className="absolute left-4 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">search</span>
                            </div>
                            <input
                                className="h-14 w-full rounded-xl border border-[#333] bg-surface-dark/80 pl-12 pr-36 text-base text-white placeholder-gray-500 shadow-xl focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
                                placeholder="Sorunuzu buraya yazın..."
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-6 py-12 lg:flex-row lg:px-10">
                {/* Sidebar */}
                <div className="w-full lg:w-1/4">
                    <div className="sticky top-28 flex flex-col gap-1 rounded-xl border border-[#333] bg-surface-dark p-2">
                        <div className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-500">Kategoriler</div>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => { setActiveCategory(cat.id); setOpenItem(0); }}
                                className={`group flex items-center justify-between rounded-lg px-4 py-3 text-left transition-all ${activeCategory === cat.id
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-gray-400 hover:bg-surface-light hover:text-white'
                                    }`}
                            >
                                <span className={`text-sm ${activeCategory === cat.id ? 'font-bold' : 'font-medium'}`}>{cat.name}</span>
                                {activeCategory === cat.id && (
                                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Contact Card */}
                    <div className="mt-6 rounded-xl border border-[#333] bg-gradient-to-br from-surface-dark to-black p-6">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                            <span className="material-symbols-outlined">headset_mic</span>
                        </div>
                        <h3 className="mb-1 text-base font-bold text-white">Yardıma mı ihtiyacınız var?</h3>
                        <p className="mb-4 text-sm text-gray-400">Ekibimiz sorularınızı yanıtlamak için hazır.</p>
                        <Link to="/iletisim" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                            Bize Ulaşın <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </Link>
                    </div>
                </div>

                {/* FAQ Accordions */}
                <div className="flex-1">
                    <div className="mb-8 border-b border-[#333] pb-4">
                        <h2 className="text-2xl font-bold text-white">{categories.find(c => c.id === activeCategory)?.name}</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        {filteredFaqs.map((item, index) => (
                            <details
                                key={index}
                                className="group rounded-xl border border-[#333] bg-surface-dark open:ring-1 open:ring-primary/30 transition-all duration-300"
                                open={openItem === index}
                                onClick={(e) => { e.preventDefault(); setOpenItem(openItem === index ? -1 : index); }}
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                                    <h3 className="flex items-center gap-3 text-base font-bold text-white group-hover:text-primary transition-colors">
                                        <span className={`flex h-2 w-2 rounded-full bg-primary transition-opacity ${openItem === index ? 'opacity-100' : 'opacity-0'}`}></span>
                                        {item.question}
                                    </h3>
                                    <div className={`flex h-8 w-8 items-center justify-center rounded-full border border-[#333] transition-all ${openItem === index ? 'bg-primary text-background-dark rotate-180' : 'bg-surface-light text-gray-400'}`}>
                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </summary>
                                {openItem === index && (
                                    <div className="px-6 pb-6 pt-0">
                                        <div className="h-px w-full bg-[#333]/50 mb-4"></div>
                                        <p className="text-text-gold leading-relaxed">{item.answer}</p>
                                    </div>
                                )}
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="w-full border-t border-[#333] bg-surface-light/30">
                <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row lg:px-10">
                    <div className="flex items-start gap-4">
                        <div className="hidden md:flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-background-dark">
                            <span className="material-symbols-outlined text-3xl">mark_email_unread</span>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-xl font-bold text-white">Aradığınız cevabı bulamadınız mı?</h3>
                            <p className="text-gray-400">Teknik ekibimiz size yardımcı olmaktan memnuniyet duyacaktır.</p>
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row">
                        <Button to="/iletisim" variant="secondary">Sizi Arayalım</Button>
                        <Button to="/iletisim">İletişime Geçin</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
