import { useState } from 'react'
import { Badge, Button } from '../components/ui/Components'

const galleryItems = [
    // Kaynak ve İmalat
    { src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80', title: 'Endüstriyel Kaynak İşlemi', category: 'Kaynak Mühendisliği', aspect: 'aspect-[4/3]' },
    { src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80', title: 'Kaynaklı Yapı Üretimi', category: 'Kaynak Mühendisliği', aspect: 'aspect-[3/4]' },
    { src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80', title: 'Metal Kaynak Kalite Kontrolü', category: 'Kaynak Mühendisliği', aspect: 'aspect-video' },

    // ADR ve Tanklar
    { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', title: 'ADR Tankeri Muayenesi', category: 'ADR & Tanker', aspect: 'aspect-[4/3]' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', title: 'Tehlikeli Madde Taşıma Tankı', category: 'ADR & Tanker', aspect: 'aspect-[16/10]' },

    // Basınçlı Kaplar
    { src: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80', title: 'Basınçlı Kap Denetimi', category: 'Basınçlı Kaplar', aspect: 'aspect-[3/4]' },
    { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', title: 'Endüstriyel Kompresör Kontrolü', category: 'Basınçlı Kaplar', aspect: 'aspect-video' },

    // NDT Hizmetleri
    { src: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?w=800&q=80', title: 'Ultrasonik Test Uygulaması', category: 'NDT Hizmetleri', aspect: 'aspect-[4/3]' },
    { src: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80', title: 'Fabrika Kalite Kontrolü', category: 'NDT Hizmetleri', aspect: 'aspect-[16/10]' },

    // Demiryolu
    { src: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80', title: 'Demiryolu Araç Bakımı', category: 'Demiryolu', aspect: 'aspect-[4/3]' },
    { src: 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?w=800&q=80', title: 'Tren Vagonu Kaynak İmalatı', category: 'Demiryolu', aspect: 'aspect-video' },

    // Genel Endüstriyel
    { src: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80', title: 'Endüstriyel Tesis Denetimi', category: 'Periyodik Kontrol', aspect: 'aspect-[3/4]' },
]

const categories = ['Tümü', 'Kaynak Mühendisliği', 'ADR & Tanker', 'Basınçlı Kaplar', 'NDT Hizmetleri', 'Demiryolu']

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
                        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80"
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
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                        <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`flex h-9 items-center justify-center px-5 rounded-full transition-all ${activeCategory === cat
                                        ? 'bg-primary text-background-dark shadow-lg shadow-primary/20'
                                        : 'bg-surface-dark border border-[#333] text-gray-300 hover:text-white hover:border-primary/50'
                                        }`}
                                >
                                    <span className="text-sm font-medium">{cat}</span>
                                </button>
                            ))}
                        </div>
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
