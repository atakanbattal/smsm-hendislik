import { Badge, Button, StatCard } from '../components/ui/Components'

const reviews = [
    { name: 'Ahmet Yılmaz', role: 'Proje Müdürü, Tekfen', rating: 5, text: 'SMS İnovasyon ile çalışmak projemizin kaderini değiştirdi. Karmaşık mühendislik sorunlarına getirdikleri pratik ve bilimsel çözümler sayesinde teslimat süremizi 2 ay öne çektik. Kesinlikle tavsiye ediyorum.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfaM7THVGXU6F-TxcwIzPiJGvD3HYzEPYsDhn2penPVogApunTdJl10gZInvTptWEIDKVgj7rGpw05LJGsxmIBvqPGocdmEhsvhI3KnztFF0B4y8LGjt-2oTlDCDt2KH58W6qb5I9jrgGMS2i-QdFlhPZpuZi2QNIF7AwZUTR4IklzR7iqx1O6zTp7EYB8Q1mkATYNMbpi3zCXd7QpccgYFZCXz06DAUUkmid_TNQQnB5hla2ahpfoqkbi_6S1lPT26RTHqIDKEi2C' },
    { name: 'Elif Demir', role: 'Kalite Direktörü, Rönesans', rating: 4.5, text: 'Kalite kontrol süreçlerinde gösterdikleri titizlik inanılmaz. Standartların ötesinde bir hizmet anlayışları var. Endüstriyel tesisimizin denetimlerinde hiçbir detayı atlamadılar.', image: '/images/profile-elif.png' },
    { name: 'Mehmet Kaya', role: 'Baş Mühendis, Enka', rating: 5, text: '15 yıllık meslek hayatımda bu kadar profesyonel bir ekiple az karşılaştım. Teknik raporlamaları ve saha uygulamaları kusursuz. Gelecek projelerimizde de tercihimiz SMS İnovasyon olacak.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy-XbIWvtwAbdaRHZIKdYhQm0PDp8RMWeBhLs5kLyCi8CQkniyxl_gufYskFh96FPdyOqn1gvuMmxpBeeSFWGoBDjosiHJkZWBKj6c53oRGGumsUF3Nwm4vFDm74j7mMZMFc_Q8iw5hdZLoaPjPLYpdO-U6aQJf3w8yyg5OmeM0MnOEBou4A5Zkmwl1-bFvm6DE1kmRYheuS06_xWjwwgF-vm0k3MrEj-j06jtFNxNxzlUjOYHdBDyzm0qPuHTqKTBHvZ-pNO5tKUP' },
    { name: 'Canan Yıldız', role: 'Operasyon Müdürü, Limak', rating: 5, text: 'Danışmanlık hizmetleri kapsamında aldığımız destek, maliyetlerimizi %15 oranında düşürmemizi sağladı. Sadece mühendislik değil, maliyet yönetimi konusunda da uzmanlar.', image: '/images/profile-canan.png' },
    { name: 'Burak Öztürk', role: 'Saha Şefi, Gama', rating: 5, text: 'Hızlı aksiyon alma yetenekleri ve kriz anındaki soğukkanlılıkları takdire şayan. Şantiye sürecindeki beklenmedik sorunları profesyonelce yönettiler.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5yj9BIrrIhMjvSUpQ-SAicigI-CVMkaiI_LMiSY7Nr6pD5oTEfwVABPELpPZ9LKZwMtlJZMqKc-YDl2Pdd5sOyX7QFkN4orVO0fqUMhyzl2lYg3EkwfsjFmDjGk555lpjliShj9Uqv_NHtIjw9OGerkgOPhU7sMNAe0KOvaecZGiQuiBDAj42hbuitjRXEUCugEF4lMUWtPZ2Ev8nFMRgwzkPgBmaGsmu6XSXALb9aM2qmKvrNcC3--WUaliGJ9SzwdSdw4T-6PuN' },
    { name: 'Selin Arslan', role: 'Teknik Mimar, Yapı Merkezi', rating: 4.5, text: 'Teknolojik altyapıları ve modern mühendislik yaklaşımları onları rakiplerinden ayırıyor. Dijital ikiz projelerimizde sundukları vizyon çok etkileyiciydi.', image: '/images/profile-selin.png' },
]

const partners = ['TEKFEN', 'ENKA', 'RÖNESANS', 'LİMAK', 'GAMA', 'YAPI MERKEZİ']

export default function References() {
    return (
        <div className="animate-fade-in">
            {/* Hero */}
            <section className="relative min-h-[400px] w-full flex items-center justify-center bg-background-dark overflow-hidden py-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/90 to-background-dark z-10"></div>
                    <div
                        className="h-full w-full bg-cover bg-center opacity-40"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrvLpMzVSzTms0AchS3Zl0H3N682E7xkqYkJ51OMRqlUNXC-80dJ2FPUd9kwKSYo5z1T4hfgbY9JYshln_MU0RY_5gOGjBq05udl1SDzhjQRYzcWkYB7tmQ4JAZI1wygC62cv5ibkCsGEByZrrnC0PjAFPzhZlWcumfztjveOnUyq0RlHEytCKSop5FbsNhLd4gz59BduidVR9m4bbLnsBTpcPBY3HHLOVlfXf2B3dTcueaaMQAezGPRJUIGzGvoQbsCTJrLoXOwQc")' }}
                    ></div>
                </div>
                <div className="relative z-20 text-center max-w-4xl px-4">
                    <Badge className="mb-4">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        Müşteri Deneyimleri
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Güven İnşa Ediyoruz,<br />Geleceği Tasarlıyoruz
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Mühendislik mükemmelliği ve güvene dayalı işbirliklerimizin başarı hikayelerini keşfedin.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-background-dark border-b border-[#333]">
                <div className="max-w-[960px] mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <StatCard icon="assignment_turned_in" value="250+" label="Tamamlanan Proje" />
                        <StatCard icon="sentiment_satisfied" value="%98" label="Memnuniyet" />
                        <StatCard icon="history" value="10 Yıl" label="Tecrübe" />
                        <StatCard icon="verified" value="20+" label="Akredite Sertifika" />
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="py-12 bg-background-dark border-b border-[#333]">
                <div className="max-w-[960px] mx-auto px-4">
                    <h2 className="text-white text-2xl font-bold text-center mb-8">Güvenen İş Ortaklarımız</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 opacity-70 hover:opacity-100 transition-opacity duration-500">
                        {partners.map((partner, index) => (
                            <div key={index} className="h-16 flex items-center justify-center bg-surface-dark rounded-lg border border-[#333]">
                                <span className="text-white font-bold text-lg">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="py-20 bg-background-dark">
                <div className="max-w-[960px] mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <div key={index} className="flex flex-col gap-4 rounded-xl p-8 bg-surface-dark border border-[#333] hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 relative group">
                                <span className="material-symbols-outlined text-6xl text-[#333] absolute top-4 right-4 opacity-50 group-hover:text-primary/10 transition-colors">format_quote</span>
                                <div className="flex items-center gap-1 text-primary">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="material-symbols-outlined text-lg">
                                            {i < Math.floor(review.rating) ? 'star' : (i < review.rating ? 'star_half' : 'star_outline')}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed z-10 relative">
                                    "{review.text}"
                                </p>
                                <div className="w-full h-px bg-[#333] my-2"></div>
                                <div className="flex items-center gap-4 mt-auto">
                                    <div
                                        className="w-12 h-12 rounded-full bg-cover border-2 border-[#333]"
                                        style={{ backgroundImage: `url("${review.image}")` }}
                                    ></div>
                                    <div>
                                        <p className="text-white font-bold text-sm">{review.name}</p>
                                        <p className="text-primary text-xs font-medium">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#1a170d] border-t border-[#333]">
                <div className="max-w-[960px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-lg">
                        <h3 className="text-white text-3xl font-bold leading-tight">Bir Sonraki Başarı Hikayesi Sizin Olsun</h3>
                        <p className="text-gray-400 text-base mt-2">Projelerinizi uzman mühendis kadromuzla hayata geçirmek için bizimle iletişime geçin.</p>
                    </div>
                    <div className="flex gap-4">
                        <Button to="/iletisim" size="lg" className="shadow-lg shadow-primary/20">
                            Hemen Başlayın
                        </Button>
                        <Button to="/iletisim" variant="secondary" size="lg">
                            Bize Ulaşın
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
