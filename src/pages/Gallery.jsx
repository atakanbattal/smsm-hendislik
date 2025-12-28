import { useState } from 'react'
import { Badge, Button } from '../components/ui/Components'

const galleryItems = [
    // Kaynak ve İmalat
    { src: '/images/gallery-kaynak-1.png', title: 'Endüstriyel Kaynak İşlemi', category: 'Kaynak Mühendisliği', aspect: 'aspect-[4/3]' },
    { src: '/images/gallery-kaynak-2.png', title: 'Kaynaklı Yapı Üretimi', category: 'Kaynak Mühendisliği', aspect: 'aspect-[3/4]' },
    { src: '/images/gallery-kaynak-3.png', title: 'Metal Kaynak Kalite Kontrolü', category: 'Kaynak Mühendisliği', aspect: 'aspect-video' },

    // ADR ve Tanklar
    { src: '/images/gallery-adr-1.png', title: 'ADR Tankeri Muayenesi', category: 'ADR & Tanker', aspect: 'aspect-[4/3]' },
    { src: '/images/gallery-adr-2.png', title: 'Tehlikeli Madde Taşıma Tankı', category: 'ADR & Tanker', aspect: 'aspect-[16/10]' },

    // Basınçlı Kaplar
    { src: '/images/gallery-basinc-1.png', title: 'Basınçlı Kap Denetimi', category: 'Basınçlı Kaplar', aspect: 'aspect-[3/4]' },
    { src: '/images/gallery-basinc-2.png', title: 'Endüstriyel Kompresör Kontrolü', category: 'Basınçlı Kaplar', aspect: 'aspect-video' },

    // NDT Hizmetleri
    { src: '/images/gallery-ndt-1.png', title: 'Ultrasonik Test Uygulaması', category: 'NDT Hizmetleri', aspect: 'aspect-[4/3]' },
    { src: '/images/gallery-ndt-2.png', title: 'Radyografik Test Uygulaması', category: 'NDT Hizmetleri', aspect: 'aspect-[16/10]' },

    // Demiryolu
    { src: '/images/gallery-demiryolu-1.png', title: 'Demiryolu Araç Bakımı', category: 'Demiryolu', aspect: 'aspect-[4/3]' },
    { src: '/images/gallery-demiryolu-2.png', title: 'Tren Vagonu Kaynak İmalatı', category: 'Demiryolu', aspect: 'aspect-video' },

    // Genel Endüstriyel
    { src: '/images/gallery-periyodik.png', title: 'Endüstriyel Tesis Denetimi', category: 'Periyodik Kontrol', aspect: 'aspect-[3/4]' },
]

const categories = [
    { id: 'Tümü', desc: 'Tüm proje ve hizmet fotoğraflarımız' },
    { id: 'Kaynak Mühendisliği', desc: 'WPS/WPQR, kaynakçı sertifikasyonu ve kaynaklı imalat' },
    { id: 'ADR & Tanker', desc: 'Tehlikeli madde tankları muayene ve tamirat işlemleri' },
    { id: 'Basınçlı Kaplar', desc: 'Kazanlar, kompresörler ve basınçlı sistemlerin kontrolü' },
    { id: 'NDT Hizmetleri', desc: 'Ultrasonik, radyografik ve diğer tahribatsız testler' },
    { id: 'Demiryolu', desc: 'EN 15085 kapsamında demiryolu araç imalat ve bakımı' },
]

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState('Tümü')
    const [selectedImage, setSelectedImage] = useState(null)

    const filteredItems = activeCategory === 'Tümü'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory)

    return (
        <div className="animate-fade-in">
            {/* Hero */}
            <section className="relative h-[400px] w-full flex items-center justify-center bg-background-dark overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/50 to-background-dark z-10"></div>
                    <img
                        alt="Industrial engineering facility background"
                        className="w-full h-full object-cover opacity-60"
                        src="/images/gallery-kaynak-1.png"
                    />
                </div>
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-10">
                    <Badge className="mb-4">Portfolyo</Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Projelerimiz ve Faaliyetlerimiz
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Kaynaklı imalat, ADR tank muayeneleri, basınçlı kap kontrolleri ve NDT hizmetlerimizden seçkin kareler.
                    </p>
                </div>
            </section>

            {/* Filter & Gallery */}
            <section className="py-12 bg-background-dark">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    {/* Filter Chips */}
                    <div className="flex flex-col items-center mb-10 gap-6">
                        <div className="flex gap-2 flex-wrap justify-center">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`flex h-9 items-center justify-center px-5 rounded-full transition-all ${activeCategory === cat.id
                                        ? 'bg-primary text-background-dark shadow-lg shadow-primary/20'
                                        : 'bg-surface-dark border border-[#333] text-gray-300 hover:text-white hover:border-primary/50'
                                        }`}
                                >
                                    <span className="text-sm font-medium">{cat.id}</span>
                                </button>
                            ))}
                        </div>
                        {/* Category Description */}
                        <p className="text-gray-500 text-sm text-center max-w-md">
                            {categories.find(c => c.id === activeCategory)?.desc}
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                        {filteredItems.map((item, index) => (
                            <div
                                key={index}
                                className="break-inside-avoid mb-6 group relative overflow-hidden rounded-xl bg-surface-dark shadow-xl border border-[#333] cursor-pointer"
                                onClick={() => setSelectedImage(item)}
                            >
                                <div className={`${item.aspect} overflow-hidden`}>
                                    <img
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        src={item.src}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                                    <h3 className="text-white text-lg font-bold leading-tight">{item.title}</h3>
                                    <button className="mt-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:text-background-dark transition-colors">
                                        <span className="material-symbols-outlined">visibility</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-primary"
                        onClick={() => setSelectedImage(null)}
                    >
                        <span className="material-symbols-outlined text-4xl">close</span>
                    </button>
                    <img
                        alt={selectedImage.title}
                        className="max-w-full max-h-[80vh] object-contain rounded-lg"
                        src={selectedImage.src}
                    />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                        <p className="text-primary text-sm uppercase tracking-wider">{selectedImage.category}</p>
                        <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
                    </div>
                </div>
            )}

            {/* CTA */}
            <section className="relative py-20 px-4 overflow-hidden bg-surface-dark border-t border-[#333]">
                <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
                    <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white rounded-full blur-[120px]"></div>
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="material-symbols-outlined text-6xl text-primary mb-4">engineering</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        Projelerinizde Uzman Çözümler
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        Kalite ve güvenlik standartlarınızı en üst seviyeye taşımak için deneyimli mühendis kadromuzla yanınızdayız.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button to="/iletisim" size="lg" className="shadow-xl shadow-primary/20">
                            <span>Teklif İste</span>
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Button>
                        <Button to="/iletisim" variant="secondary" size="lg">
                            Bizimle İletişime Geçin
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
