import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-[#0f0f0f] text-gray-400 py-12 border-t border-[#222]">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/20 text-primary">
                                <span className="material-symbols-outlined text-xl">engineering</span>
                            </div>
                            <h4 className="text-white font-bold tracking-tight">SMS İNOVASYON</h4>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Yüksek kaliteli mühendislik denetimi, NDT hizmetleri ve endüstriyel sertifikasyon danışmanlığı için güvenilir ortağınız.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">public</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">photo_camera</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">chat</span>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Hizmetler</h5>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/hizmetler" className="hover:text-primary transition-colors">Tahribatsız Muayene</Link></li>
                            <li><Link to="/hizmetler" className="hover:text-primary transition-colors">Periyodik Kontroller</Link></li>
                            <li><Link to="/hizmetler" className="hover:text-primary transition-colors">Kaynak Mühendisliği</Link></li>
                            <li><Link to="/hizmetler" className="hover:text-primary transition-colors">ADR Tank Hizmetleri</Link></li>
                            <li><Link to="/hizmetler" className="hover:text-primary transition-colors">13094 Danışmanlığı</Link></li>
                        </ul>
                    </div>

                    {/* Corporate */}
                    <div>
                        <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Kurumsal</h5>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/hakkimizda" className="hover:text-primary transition-colors">Hakkımızda</Link></li>
                            <li><Link to="/referanslar" className="hover:text-primary transition-colors">Referanslar</Link></li>
                            <li><Link to="/galeri" className="hover:text-primary transition-colors">Galeri</Link></li>
                            <li><Link to="/kariyer" className="hover:text-primary transition-colors">Kariyer</Link></li>
                            <li><Link to="/sss" className="hover:text-primary transition-colors">S.S.S.</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">İletişim</h5>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                                <span>Sille Mahallesi, Sanayi Caddesi<br />No: 42, Selçuklu / Konya</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-lg">call</span>
                                <a href="tel:+903320000000" className="hover:text-primary transition-colors">+90 332 000 00 00</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                                <a href="mailto:info@smsinovasyon.com" className="hover:text-primary transition-colors">info@smsinovasyon.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#222] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>© {new Date().getFullYear()} SMS İNOVASYON MÜHENDİSLİK. Tüm hakları saklıdır.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
                        <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
                        <a href="#" className="hover:text-white transition-colors">KVKK</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
