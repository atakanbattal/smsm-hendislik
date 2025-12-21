import { useState } from 'react'
import { Badge, Button } from '../components/ui/Components'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', subject: '', message: '', privacy: false
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call - will be replaced with Supabase
        await new Promise(resolve => setTimeout(resolve, 1000))

        console.log('Form data:', formData)
        setSubmitStatus('success')
        setIsSubmitting(false)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', privacy: false })
    }

    return (
        <div className="animate-fade-in">
            {/* Hero */}
            <section
                className="relative flex flex-col items-center justify-center py-20 px-4 sm:px-10 bg-cover bg-center bg-no-repeat min-h-[320px]"
                style={{ backgroundImage: 'linear-gradient(rgba(34, 30, 17, 0.85) 0%, rgba(34, 30, 17, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcD-OGlwrPgbXf1Xe8gkM_ULtj2PjQ6NhERPXDZryPImnHXGb9eaaowMU4k7MeInlNqwzfwqAwm949Kdj3pzk3EeeQeKsfoBahBjMzT-ukz-ssJiVOFAi4rfsc8F-Joox-UDqjIzegMJgOFFn2eOaz10CgqT-_m-ud_20rSELXwdyRL2tDdFEUvnu4sIR2iXFp_u56tTyvAGNdwBlIT5D2dqTd5slCaC9EQhO2p32zxp2_BoBUydfd2fHxIxRlUJny2hYmgVd5M7xE")' }}
            >
                <div className="max-w-[960px] text-center space-y-4">
                    <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                        İletişime Geçin
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
                        Mühendislik çözümleri ve kalite kontrol süreçleriniz için profesyonel destek alın. Sorularınız için ekibimiz hazır.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-10 py-12 sm:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    {/* Left Column: Contact Info */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-white">Bize Ulaşın</h2>
                            <p className="text-gray-400">Projeleriniz hakkında detaylı bilgi almak veya iş birliği yapmak için aşağıdaki kanallardan bize ulaşabilirsiniz.</p>
                        </div>
                        <div className="flex flex-col gap-6">
                            {/* Phone */}
                            <div className="flex gap-4 items-start p-4 rounded-xl border border-[#333] bg-surface-dark shadow-sm">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                                    <span className="material-symbols-outlined text-[24px]">call</span>
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white mb-1">Telefon</h3>
                                    <p className="text-sm text-gray-400 mb-2">Hafta içi 09:00 - 18:00</p>
                                    <a className="text-base font-semibold text-primary hover:underline" href="tel:+905538860606">+90 553 886 06 06</a>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="flex gap-4 items-start p-4 rounded-xl border border-[#333] bg-surface-dark shadow-sm">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                                    <span className="material-symbols-outlined text-[24px]">mail</span>
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white mb-1">E-posta</h3>
                                    <p className="text-sm text-gray-400 mb-2">Her zaman bize yazabilirsiniz.</p>
                                    <a className="text-base font-semibold text-primary hover:underline" href="mailto:info@smsmuhendislik.com">info@smsmuhendislik.com</a>
                                </div>
                            </div>
                            {/* Address */}
                            <div className="flex gap-4 items-start p-4 rounded-xl border border-[#333] bg-surface-dark shadow-sm">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                                    <span className="material-symbols-outlined text-[24px]">location_on</span>
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white mb-1">Merkez Ofis</h3>
                                    <p className="text-sm text-gray-400">
                                        Fevzi Çakmak Mh. 10669. Sok.<br />
                                        No:7A, Karatay / Konya
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Working Hours */}
                        <div className="mt-4 p-6 rounded-xl bg-[#2a261a] border border-primary/20">
                            <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined">schedule</span>
                                Çalışma Saatleri
                            </h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between border-b border-primary/10 pb-2">
                                    <span className="text-white">Pazartesi - Cuma</span>
                                    <span className="text-gray-300">09:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between border-b border-primary/10 pb-2">
                                    <span className="text-white">Cumartesi</span>
                                    <span className="text-gray-300">09:00 - 13:00</span>
                                </div>
                                <div className="flex justify-between pt-1">
                                    <span className="text-white">Pazar</span>
                                    <span className="text-primary font-medium">Kapalı</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-surface-dark border border-[#333] rounded-2xl p-6 sm:p-10 shadow-lg">
                            <h2 className="text-2xl font-bold mb-6 text-white">Mesaj Gönderin</h2>

                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 flex items-center gap-3">
                                    <span className="material-symbols-outlined">check_circle</span>
                                    Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                                </div>
                            )}

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300" htmlFor="name">Ad Soyad</label>
                                        <input
                                            className="w-full h-12 rounded-lg border border-[#333] bg-[#1e1b12] text-white px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-600"
                                            id="name"
                                            name="name"
                                            placeholder="Mehmet Yılmaz"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300" htmlFor="email">E-posta Adresi</label>
                                        <input
                                            className="w-full h-12 rounded-lg border border-[#333] bg-[#1e1b12] text-white px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-600"
                                            id="email"
                                            name="email"
                                            placeholder="ornek@sirket.com"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300" htmlFor="phone">Telefon</label>
                                        <input
                                            className="w-full h-12 rounded-lg border border-[#333] bg-[#1e1b12] text-white px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-600"
                                            id="phone"
                                            name="phone"
                                            placeholder="+90 5XX XXX XX XX"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300" htmlFor="subject">Konu</label>
                                        <select
                                            className="w-full h-12 rounded-lg border border-[#333] bg-[#1e1b12] text-white px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option disabled value="">Seçiniz</option>
                                            <option value="quote">Fiyat Teklifi</option>
                                            <option value="support">Teknik Destek</option>
                                            <option value="consulting">Danışmanlık</option>
                                            <option value="13094">13094 Danışmanlığı</option>
                                            <option value="other">Diğer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300" htmlFor="message">Mesajınız</label>
                                    <textarea
                                        className="w-full rounded-lg border border-[#333] bg-[#1e1b12] text-white p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-600 resize-none"
                                        id="message"
                                        name="message"
                                        placeholder="Projeniz hakkında detaylar..."
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input
                                        className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary bg-[#1e1b12] border-[#333] cursor-pointer"
                                        id="privacy"
                                        name="privacy"
                                        type="checkbox"
                                        checked={formData.privacy}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label className="text-sm text-gray-400 cursor-pointer select-none" htmlFor="privacy">
                                        <a className="text-primary hover:underline" href="#">KVKK Aydınlatma Metni</a>'ni okudum ve kabul ediyorum.
                                    </label>
                                </div>
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full sm:w-auto"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                            Gönderiliyor...
                                        </>
                                    ) : (
                                        <>
                                            <span>Mesajı Gönder</span>
                                            <span className="material-symbols-outlined text-sm font-bold">send</span>
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full h-[450px] bg-surface-dark relative overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50562.04789234567!2d32.41!3d37.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08e5d8f9abcd%3A0x123456789abcdef!2sSel%C3%A7uklu%2C%20Konya!5e0!3m2!1str!2str!4v1703178000000!5m2!1str!2str"
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SMS İnovasyon Konya Selçuklu Konum"
                ></iframe>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-10">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-xl border-4 border-background-dark animate-bounce">
                        <span className="material-symbols-outlined text-background-dark text-[28px]">domain</span>
                    </div>
                    <div className="mt-2 px-3 py-1 bg-background-dark text-white text-xs font-bold rounded shadow-lg whitespace-nowrap">
                        SMS İNOVASYON - KONYA
                    </div>
                </div>
            </section>
        </div>
    )
}
