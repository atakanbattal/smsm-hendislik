import { useState } from 'react'
import { Badge, Button } from '../components/ui/Components'

// ADR Muayene Süreç Adımları
const adrProcessSteps = [
    { step: 1, title: 'Ön Başvuru & Evrak Kontrolü', desc: 'Tank ruhsatı, ADR belgesi ve önceki muayene raporlarının kontrolü', icon: 'description', duration: '1 Gün' },
    { step: 2, title: 'Fiziksel Muayene', desc: 'Dış ve iç görsel kontrol, kaynak dikişleri, bağlantı noktaları incelemesi', icon: 'search', duration: '1-2 Gün' },
    { step: 3, title: 'Test Aşaması', desc: 'Sızdırmazlık testi, hidrostatik test, valf kontrolleri', icon: 'science', duration: '1 Gün' },
    { step: 4, title: 'Raporlama & TSE Onayı', desc: 'Muayene raporunun hazırlanması ve TSE onay sürecinin tamamlanması', icon: 'verified', duration: '2-3 Gün' },
    { step: 5, title: 'Belge Teslimi & Takip', desc: 'Resmi belgelerin teslimi ve sonraki muayene tarihinin planlanması', icon: 'task_alt', duration: '1 Gün' },
]

// Çalıştığımız Standartlar ve Mevzuat - Kapsamlı Liste
const standardsData = {
    adr: [
        { code: 'ADR', name: 'Tehlikeli Madde Taşımacılığı', desc: 'Tehlikeli Maddelerin Karayoluyla Uluslararası Taşınması (ECE/TRANS/505)' },
        { code: 'RID', name: 'Demiryolu Taşımacılığı', desc: 'Tehlikeli maddelerin demiryolu ile taşınması' },
        { code: 'EN 12972', name: 'Periyodik Muayene', desc: 'Tehlikeli madde tankları periyodik muayene standardı' },
        { code: 'EN 13094', name: 'Tank Tasarım ve İmalat', desc: 'ADR tankları tasarım ve imalat gereksinimleri' },
        { code: 'EN 14025', name: 'Vakumlu İzolasyonlu Tank', desc: 'Vakumlu izolasyonlu tanklar için özel gereksinimler' },
        { code: 'EN 14432', name: 'Vana ve Aksesuarlar', desc: 'Tank vana ve aksesuarları tasarım standardı' },
        { code: 'EN 13175', name: 'LPG Tank Ekipmanları', desc: 'LPG tankları ekipman ve aksesuar gereksinimleri' },
        { code: 'EN 14595', name: 'Basınç Tahliye Cihazları', desc: 'Tank basınç tahliye ventilleri ve cihazları' },
        { code: 'EN 13317', name: 'Seviye Ölçüm Cihazları', desc: 'Tank seviye göstergeleri ve ölçüm sistemleri' },
        { code: 'EN 13314', name: 'Hidrostatik Basınç Testi', desc: 'Tank hidrostatik test prosedürleri ve gereksinimleri' },
    ],
    welding: [
        { code: 'ISO 3834-2', name: 'Kapsamlı Kalite Yönetimi', desc: 'Kaynak kalite yönetimi - Kapsamlı gereksinimler' },
        { code: 'ISO 3834-3', name: 'Standart Kalite Yönetimi', desc: 'Kaynak kalite yönetimi - Standart gereksinimler' },
        { code: 'EN 15085-2', name: 'Demiryolu Sertifikasyonu', desc: 'Demiryolu araçları kaynaklı imalat (CL1-CL4)' },
        { code: 'EN 1090-2', name: 'Çelik Yapı İmalatı', desc: 'Çelik yapıların imalat ve montaj gereksinimleri' },
        { code: 'EN ISO 15614-1', name: 'Çelik Prosedür Onayı', desc: 'Çelik kaynak prosedürü kalifikasyon testi (WPQR)' },
        { code: 'EN ISO 15614-2', name: 'Alüminyum Prosedür Onayı', desc: 'Alüminyum kaynak prosedürü kalifikasyon testi (WPQR)' },
        { code: 'EN ISO 15609-1', name: 'Ark Kaynağı Şartnamesi', desc: 'Ark kaynağı prosedür şartnamesi (WPS)' },
        { code: 'EN ISO 15609-2', name: 'Gaz Kaynağı Şartnamesi', desc: 'Gaz kaynağı prosedür şartnamesi (WPS)' },
        { code: 'EN ISO 9606-1', name: 'Çelik Kaynakçı Yeterliliği', desc: 'Çelik kaynakçı yeterlilik testi ve sertifikasyonu' },
        { code: 'EN ISO 9606-2', name: 'Alüminyum Kaynakçı Yeterliliği', desc: 'Alüminyum kaynakçı yeterlilik testi' },
        { code: 'EN ISO 14732', name: 'Operatör Yeterliliği', desc: 'Mekanize ve otomatik kaynak operatörü yeterliliği' },
        { code: 'EN ISO 14731', name: 'Kaynak Koordinasyonu', desc: 'Kaynak koordinatörü görev ve sorumlulukları (RWC/IWE)' },
        { code: 'EN ISO 5817', name: 'Kusur Kabul Seviyeleri', desc: 'Kaynak dikişi kusur kabul kriterleri (Seviye B, C, D)' },
        { code: 'EN ISO 6520', name: 'Kusur Sınıflandırması', desc: 'Kaynak kusurlarının tanımlanması ve sınıflandırılması' },
        { code: 'EN ISO 2553', name: 'Kaynak Sembolleri', desc: 'Teknik çizimlerde kaynak sembollerinin gösterimi' },
        { code: 'EN ISO 13916', name: 'Ön Isıtma Gereksinimleri', desc: 'Kaynak öncesi ön ısıtma sıcaklığı ölçümü' },
    ],
    ndt: [
        { code: 'ISO 9712', name: 'Personel Sertifikasyonu', desc: 'NDT personeli yeterlilik ve sertifikasyon gereksinimleri' },
        { code: 'ISO 17020', name: 'Muayene Kuruluşu Akreditasyonu', desc: 'Muayene kuruluşları için genel yeterlilik kriterleri' },
        { code: 'EN ISO 17638', name: 'Manyetik Parçacık Muayenesi', desc: 'Kaynak dikişlerinin manyetik parçacık yöntemiyle muayenesi' },
        { code: 'EN ISO 3452-1', name: 'Sıvı Penetrant Muayenesi', desc: 'Penetrant muayene genel prensipleri ve uygulama' },
        { code: 'EN ISO 17640', name: 'Ultrasonik Kaynak Muayenesi', desc: 'Kaynak bağlantılarının ultrasonik yöntemle muayenesi' },
        { code: 'EN ISO 17636-1', name: 'Film Radyografisi', desc: 'Kaynak dikişlerinin konvansiyonel film radyografisi' },
        { code: 'EN ISO 17636-2', name: 'Dijital Radyografi', desc: 'Kaynak dikişlerinin dijital dedektörlü radyografisi' },
        { code: 'EN ISO 17637', name: 'Görsel Muayene', desc: 'Kaynak dikişlerinin görsel muayene gereksinimleri' },
        { code: 'EN ISO 15549', name: 'Girdap Akımı Muayenesi', desc: 'Eddy Current yöntemiyle yüzey ve yüzeye yakın kusur tespiti' },
        { code: 'EN ISO 10863', name: 'TOFD Ultrasonik Muayene', desc: 'Kırınım zamanı yöntemiyle hassas kusur boyutlandırma' },
        { code: 'EN ISO 13588', name: 'Phased Array Ultrasonik', desc: 'Çok elemanlı prob ile gelişmiş ultrasonik görüntüleme' },
        { code: 'EN ISO 23277', name: 'Penetrant Kabul Kriterleri', desc: 'Penetrant muayene sonuçlarının değerlendirme kriterleri' },
        { code: 'EN ISO 23278', name: 'Manyetik Kabul Kriterleri', desc: 'Manyetik parçacık muayene sonuçlarının değerlendirmesi' },
    ],
    dt: [
        { code: 'ISO 17025', name: 'Laboratuvar Akreditasyonu', desc: 'Deney ve kalibrasyon laboratuvarları yetkinlik gereksinimleri' },
        { code: 'EN ISO 6892-1', name: 'Oda Sıcaklığı Çekme Testi', desc: 'Metalik malzemelerin oda sıcaklığında çekme deneyi' },
        { code: 'EN ISO 6892-2', name: 'Yüksek Sıcaklık Çekme Testi', desc: 'Metalik malzemelerin yüksek sıcaklıkta çekme deneyi' },
        { code: 'EN ISO 148-1', name: 'Charpy Darbe Testi', desc: 'Metalik malzemelerin Charpy V çentik darbe deneyi' },
        { code: 'EN ISO 6507-1', name: 'Vickers Sertlik Testi', desc: 'Metalik malzemelerin Vickers mikro ve makro sertlik ölçümü' },
        { code: 'EN ISO 6506-1', name: 'Brinell Sertlik Testi', desc: 'Metalik malzemelerin Brinell sertlik ölçümü' },
        { code: 'EN ISO 6508-1', name: 'Rockwell Sertlik Testi', desc: 'Metalik malzemelerin Rockwell sertlik ölçümü' },
        { code: 'EN ISO 5173', name: 'Kaynak Eğme Testi', desc: 'Kaynaklı birleştirmelerin yüz ve kök eğme deneyi' },
        { code: 'EN ISO 17639', name: 'Makro ve Mikro İnceleme', desc: 'Kaynak yapısının optik mikroskop ile metalografik incelemesi' },
        { code: 'EN ISO 9015-1', name: 'Kaynak Bölgesi Sertliği', desc: 'Kaynak ve ITAB bölgesi sertlik profili haritalama' },
        { code: 'EN ISO 4136', name: 'Alın Kaynak Çekme Testi', desc: 'Alın kaynaklı birleştirmelerin çapraz çekme deneyi' },
        { code: 'EN ISO 9017', name: 'Kaynak Kırma Testi', desc: 'Kaynak dikişinin fraktür (kırma) ile iç kusur kontrolü' },
    ],
    regulation: [
        { code: '6331', name: 'İş Sağlığı Güvenliği Kanunu', desc: 'Türkiye İş Sağlığı ve Güvenliği temel mevzuatı' },
        { code: '13094', name: 'Periyodik Kontrol Tebliği', desc: 'İş Ekipmanlarının Periyodik Kontrollerine Dair Tebliğ' },
        { code: '25567', name: 'İş Ekipmanları Yönetmeliği', desc: 'İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları' },
        { code: 'PED', name: 'Basınçlı Ekipmanlar Direktifi', desc: 'Avrupa Birliği 2014/68/EU Basınçlı Ekipmanlar Direktifi' },
        { code: 'SEVESO', name: 'Büyük Kaza Önleme', desc: 'Büyük endüstriyel kazaların önlenmesi direktifi (2012/18/EU)' },
        { code: 'ASME', name: 'Basınçlı Kap Tasarımı', desc: 'ASME Section VIII basınçlı kaplar tasarım ve imalat kodu' },
        { code: 'EN 13445', name: 'Ateşsiz Basınçlı Kaplar', desc: 'Ateşle ısıtılmayan basınçlı kaplar Avrupa standardı' },
        { code: 'EN 13480', name: 'Endüstriyel Boru Hatları', desc: 'Metalik endüstriyel boru hatları tasarım ve imalatı' },
        { code: 'API 510', name: 'Basınçlı Kap Muayenesi', desc: 'Servis içi basınçlı kapların muayene ve onarım kodu' },
        { code: 'API 570', name: 'Boru Hattı Muayenesi', desc: 'Servis içi boru hatlarının muayene ve onarım kodu' },
        { code: 'TÜRKAK', name: 'Ulusal Akreditasyon', desc: 'Türk Akreditasyon Kurumu yetkilendirme gereksinimleri' },
    ],
}

// Detaylı hizmet verisi - ADR & Tehlikeli Madde Kategorisi
const adrServices = [
    // 1. ADR Yetkili Muayene Merkezi
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
    // 2. Tamirat ve Tadilat Merkezi
    {
        id: 'tamirat',
        icon: 'build',
        badge: 'Tamirat & Tadilat',
        badgeIcon: 'construction',
        title: 'ADR Onaylı Tamirat & Tadilat Merkezi',
        description: 'Ulaştırma ve Altyapı Bakanlığı ile TSE Tehlikeli Madde Müdürlüğü onaylı merkezimizde, ADR\'li araç ve araç üst yapı tamiratları güncel yönetmeliklere uygun şekilde gerçekleştirilmektedir. Eski tankların ADR\'ye uygun hale getirilmesi (retrofit) projelerinde de uzmanız.',
        features: [
            { title: 'ADR\'li Araç Tamiratları', desc: 'Tehlikeli madde taşıma araçları için uzman onarım' },
            { title: 'Tank Revizyon & Modernizasyon', desc: 'Eski tankların ADR\'ye uygun hale getirilmesi' },
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
    // 3. Tehlikeli Madde Güvenlik Danışmanlığı
    {
        id: 'guvenlik-danismanligi',
        icon: 'shield',
        badge: 'Güvenlik Danışmanlığı',
        badgeIcon: 'security',
        title: 'ADR Güvenlik Danışmanlık Hizmetleri',
        description: 'Uzman kadromuzla tehlikeli madde taşımacılığı konusunda kapsamlı danışmanlık hizmetleri sunuyoruz. Muayene tarihlerinizi takip ediyor, hatırlatmalar yapıyor ve tüm evrak süreçlerinizi yönetiyoruz.',
        features: [
            { title: 'ADR/RID Danışmanlığı', desc: 'Uluslararası sözleşmelere uygun taşımacılık danışmanlığı' },
            { title: 'Muayene Takip & Hatırlatma', desc: 'Periyodik muayene tarihlerinin takibi ve otomatik hatırlatma' },
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
    // 4. Tank ve Basınçlı Kap İmalatı
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
]

// Endüstriyel & Sanayi Hizmetleri Kategorisi
const industrialServices = [
    // 5. Kaynak Mühendisliği
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
    // 6. 13094 Danışmanlığı - Mevzuat vurgusu güçlendirildi
    {
        id: '13094',
        icon: 'gavel',
        badge: 'Yasal Zorunluluk',
        badgeIcon: 'balance',
        title: '13094 Periyodik Kontrol Danışmanlığı',
        description: '6331 Sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında, İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği gereği zorunlu periyodik kontrolleri gerçekleştiriyoruz. Kontrollerin yapılmaması durumunda idari para cezası ve iş kazası sorumluluğu doğar.',
        features: [
            { title: 'Basınçlı Kaplar', desc: 'Kazanlar, kompresörler, LPG tankları, otoklav cihazları' },
            { title: 'Kaldırma-İletme Ekipmanları', desc: 'Vinçler, forkliftler, asansörler, yük asansörleri' },
            { title: 'Tezgahlar ve Makineler', desc: 'CNC tezgahlar, presler, kesme makineleri' },
            { title: 'Elektriksel Güvenlik', desc: 'Topraklama testleri, izolasyon ölçümleri, paratoner kontrolleri' },
        ],
        specs: [
            { label: 'Yasal Dayanak', value: '6331 Sayılı Kanun' },
            { label: 'Tebliğ No', value: '13094' },
            { label: 'Yaptırım', value: 'İdari Para Cezası' },
            { label: 'Akreditasyon', value: 'TÜRKAK' },
        ],
        warning: 'Periyodik kontrolün yapılmaması halinde 6331 Sayılı Kanun kapsamında idari para cezası uygulanır ve olası iş kazalarında işveren sorumlu tutulur.'
    },
    // 7. EN 15085 Demiryolu
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
    // 8. Periyodik Muayene - Mevzuat vurgusu güçlendirildi
    {
        id: 'periyodik',
        icon: 'calendar_month',
        badge: 'Periyodik Kontrol',
        badgeIcon: 'schedule',
        title: 'Periyodik Muayene Hizmetleri',
        description: '6331 Sayılı İSG Kanunu ve ilgili yönetmelikler kapsamında, endüstriyel ekipmanların güvenli çalışması için zorunlu periyodik kontrol ve raporlama hizmetleri. Yerinde muayene için mobil ekibimiz tüm Türkiye\'de hizmet vermektedir.',
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
            { label: 'Hizmet', value: 'Yerinde Muayene' },
        ],
        badge2: 'Mobil Ekip'
    },
    // 9. Kalite Kontrol ve Belgelendirme - Kapsamlı NDT/DT detayları
    {
        id: 'kalite-kontrol',
        icon: 'verified',
        badge: 'Kalite Kontrol',
        badgeIcon: 'workspace_premium',
        title: 'Kalite Kontrol ve Belgelendirme Hizmetleri',
        description: 'Ulusal ve uluslararası normlar ile standartlar kapsamında kapsamlı muayene ve belgelendirme hizmetleri sunuyoruz.',
        features: [
            { title: 'Tahribatsız Muayene (NDT)', desc: 'VT (Görsel), MT (Manyetik), PT (Penetrant), UT (Ultrasonik), RT (Radyografik), ET (Girdap Akımı)' },
            { title: 'Tahribatlı Muayene (DT)', desc: 'Çekme, Charpy darbe, Vickers/Brinell sertlik, eğme, makro/mikro inceleme' },
            { title: 'Ürün Belgelendirme', desc: 'Ürünlerin standartlara uygunluk belgelendirilmesi' },
            { title: 'Personel/Firma Belgelendirme', desc: 'ISO ve kalite yönetim sistemleri sertifikasyonu' },
        ],
        specs: [
            { label: 'NDT Standart', value: 'ISO 9712' },
            { label: 'DT Lab Akreditasyon', value: 'ISO 17025' },
            { label: 'Personel', value: 'Level II & III' },
            { label: 'Akreditasyon', value: 'TÜRKAK' },
        ],
        usageAreas: ['Tank Kaynakları', 'Basınçlı Kaplar', 'Çelik Konstrüksiyon', 'Demiryolu', 'İmalat Sonrası Kontrol']
    },
    // 10. Denetim ve Gözetim Hizmetleri
    {
        id: 'denetim',
        icon: 'policy',
        badge: 'Inspection',
        badgeIcon: 'verified_user',
        title: 'Özel Denetim ve Gözetim Hizmetleri',
        description: 'Siparişleriniz ve projeleriniz için özelleştirilmiş denetim ve gözetim çözümleri sunuyoruz. Saha ekiplerimiz yerinde denetim için tüm Türkiye\'de hizmet vermektedir.',
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
        ],
        badge2: 'Saha Ekibi'
    },
    // 11. Kalibrasyon Hizmetleri
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
    // 12. Gelişmiş NDT - Kullanım alanları eklendi
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
        ],
        usageAreas: ['Tank Kaynakları', 'Boru Hatları', 'Basınçlı Kaplar', 'Demiryolu Aksam', 'Uçak Parçaları']
    },
]

// ADR Süreç Akışı Bileşeni
function ADRProcessFlow() {
    return (
        <section className="py-20 bg-[#1a1a1a] border-y border-[#333]">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Badge className="mb-4">
                        <span className="material-symbols-outlined text-sm">route</span>
                        Süreç Akışı
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        ADR Muayenesi Nasıl İlerler?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Tankınız bize geldiğinde, şeffaf ve sistematik bir süreçle muayenesini gerçekleştiriyoruz.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Desktop Timeline Line */}
                    <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {adrProcessSteps.map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center text-center group">
                                {/* Step Number */}
                                <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-background-dark font-bold text-xl shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                                    {step.step}
                                </div>

                                {/* Content */}
                                <div className="mt-6 p-4 bg-surface-dark rounded-xl border border-[#333] group-hover:border-primary/50 transition-colors w-full">
                                    <span className="material-symbols-outlined text-primary text-2xl mb-2">{step.icon}</span>
                                    <h4 className="text-white font-bold mb-2">{step.title}</h4>
                                    <p className="text-gray-400 text-sm mb-3">{step.desc}</p>
                                    <div className="inline-flex items-center gap-1 text-primary text-xs font-semibold bg-primary/10 px-3 py-1 rounded-full">
                                        <span className="material-symbols-outlined text-sm">schedule</span>
                                        {step.duration}
                                    </div>
                                </div>

                                {/* Connector Arrow (Mobile) */}
                                {index < adrProcessSteps.length - 1 && (
                                    <div className="lg:hidden mt-4">
                                        <span className="material-symbols-outlined text-primary text-2xl">arrow_downward</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-300 mb-4">
                        Ortalama süre: <span className="text-primary font-bold">5-7 iş günü</span>
                    </p>
                    <Button to="/iletisim" size="lg">
                        <span>Randevu Alın</span>
                        <span className="material-symbols-outlined">calendar_month</span>
                    </Button>
                </div>
            </div>
        </section>
    )
}

// Standartlar Bölümü Bileşeni
function StandardsSection() {
    const [activeTab, setActiveTab] = useState('adr')

    const tabs = [
        { id: 'adr', label: 'ADR & Tank', icon: 'local_shipping' },
        { id: 'welding', label: 'Kaynak', icon: 'precision_manufacturing' },
        { id: 'ndt', label: 'NDT', icon: 'visibility' },
        { id: 'dt', label: 'DT', icon: 'science' },
        { id: 'regulation', label: 'Mevzuat', icon: 'gavel' },
    ]

    return (
        <section className="py-20 bg-surface-dark border-b border-[#333]">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Badge className="mb-4">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        Akreditasyon
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Çalıştığımız Standartlar & Mevzuat
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Tüm hizmetlerimiz ulusal ve uluslararası standartlara uygun olarak gerçekleştirilmektedir.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all ${activeTab === tab.id
                                ? 'bg-primary text-background-dark shadow-lg shadow-primary/20'
                                : 'bg-background-dark border border-[#333] text-gray-300 hover:text-white hover:border-primary/50'
                                }`}
                        >
                            <span className="material-symbols-outlined text-lg">{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Standards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {standardsData[activeTab].map((standard, index) => (
                        <div
                            key={index}
                            className="p-5 bg-background-dark rounded-xl border border-[#333] hover:border-primary/50 transition-colors group"
                        >
                            <div className="text-primary font-bold text-2xl mb-1 group-hover:scale-110 transition-transform inline-block">
                                {standard.code}
                            </div>
                            <div className="text-white font-semibold text-sm mb-2">{standard.name}</div>
                            <p className="text-gray-500 text-xs">{standard.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Kategori Tab Bileşeni
function ServiceCategoryTabs({ activeCategory, setActiveCategory }) {
    return (
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button
                onClick={() => setActiveCategory('adr')}
                className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all ${activeCategory === 'adr'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-surface-dark border border-[#333] text-gray-300 hover:text-white hover:border-orange-500/50'
                    }`}
            >
                <span className="material-symbols-outlined text-2xl">local_shipping</span>
                <div className="text-left">
                    <div>ADR & Tehlikeli Madde</div>
                    <div className="text-xs font-normal opacity-80">Muayene • Tamirat • Danışmanlık</div>
                </div>
            </button>
            <button
                onClick={() => setActiveCategory('industrial')}
                className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all ${activeCategory === 'industrial'
                    ? 'bg-gradient-to-r from-primary to-yellow-500 text-background-dark shadow-lg shadow-primary/30'
                    : 'bg-surface-dark border border-[#333] text-gray-300 hover:text-white hover:border-primary/50'
                    }`}
            >
                <span className="material-symbols-outlined text-2xl">factory</span>
                <div className="text-left">
                    <div>Endüstriyel & Sanayi</div>
                    <div className="text-xs font-normal opacity-80">Periyodik • NDT • Belgelendirme</div>
                </div>
            </button>
        </div>
    )
}

// Hizmet Detay Kartı Bileşeni
function ServiceDetailCard({ service, reverse = false }) {
    return (
        <section className={`py-16 ${reverse ? 'bg-background-dark' : 'bg-surface-dark'} border-b border-[#333]`}>
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={reverse ? 'lg:order-2' : ''}>
                        <div className="flex items-center gap-2 mb-4">
                            <Badge>
                                <span className="material-symbols-outlined text-sm">{service.badgeIcon}</span>
                                {service.badge}
                            </Badge>
                            {service.badge2 && (
                                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                    <span className="material-symbols-outlined text-sm">directions_car</span>
                                    {service.badge2}
                                </Badge>
                            )}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {service.title}
                        </h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            {service.description}
                        </p>

                        {/* Warning Box for 13094 */}
                        {service.warning && (
                            <div className="mb-6 p-4 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-start gap-3">
                                <span className="material-symbols-outlined text-orange-400 mt-0.5">warning</span>
                                <p className="text-orange-300 text-sm">{service.warning}</p>
                            </div>
                        )}

                        {/* Usage Areas for NDT */}
                        {service.usageAreas && (
                            <div className="mb-6">
                                <p className="text-gray-400 text-sm mb-2 font-semibold">Kullanım Alanları:</p>
                                <div className="flex flex-wrap gap-2">
                                    {service.usageAreas.map((area, idx) => (
                                        <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

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
    const [activeCategory, setActiveCategory] = useState('adr')

    const currentServices = activeCategory === 'adr' ? adrServices : industrialServices

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

            {/* Standards Section */}
            <StandardsSection />

            {/* Category Tabs */}
            <section className="py-12 bg-background-dark">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Hizmet Kategorisi Seçin</h2>
                        <p className="text-gray-400">İhtiyacınıza uygun hizmet grubunu seçerek detaylara ulaşın.</p>
                    </div>
                    <ServiceCategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                </div>
            </section>

            {/* ADR Process Flow - Only show for ADR category */}
            {activeCategory === 'adr' && <ADRProcessFlow />}

            {/* Services with Detailed Cards */}
            {currentServices.map((service, index) => (
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
